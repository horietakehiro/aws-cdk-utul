#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {
  aws_codebuild as codebuild,
  aws_ssm as ssm,
  aws_codecommit as codecommit,
  aws_codepipeline as codepipeline,
  aws_codepipeline_actions as pipelineActions,
  aws_logs as logs, 
  aws_iam as iam,
  aws_codestarnotifications as codestarnotification,
  aws_sns as sns
} from "aws-cdk-lib"
import { Construct } from 'constructs';
const app = new cdk.App();
new cdk.Stack(app, "Stack")

/**
 * order of cicd is...
 * - 1st CodeBuild Project:
 *   - build, unit testing, functional testing, publish package
 * - 2nd CodeBuild Project:
 *   - e2e test(installing aws-cdk-utul package from npm, and run cdk unit testing, and deploy cdk)
 *   - if e2e test fails, unpublish package from npm
 */
export class CICDStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const e2eTestRepository = codecommit.Repository.fromRepositoryName(this, "E2ETestRepository", "aws-cdk-utul-e2e-test")
    const primarySourceAction = new pipelineActions.CodeStarConnectionsSourceAction({
      actionName: "PrimarySource",
      connectionArn: "arn:aws:codestar-connections:ap-northeast-1:382098889955:connection/26404591-2de4-4d56-acd0-93232fcdfb27",
      repo: "aws-cdk-utul",
      owner: "horietakehiro",
      output: codepipeline.Artifact.artifact("PrimarySourceArtifact"),
      branch: "main",
      runOrder: 1,
      triggerOnPush: true,
      variablesNamespace: "PrimarySourceVariables",
    })
    const logGroup = new logs.LogGroup(this, "LogGroup", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      retention: logs.RetentionDays.ONE_WEEK,
    })
    const buildProject = new codebuild.PipelineProject(this, "BuildProject", {
      buildSpec: codebuild.BuildSpec.fromSourceFilename("buildspec.yaml"),
      environment: {
        buildImage: codebuild.LinuxBuildImage.AMAZON_LINUX_2_5,
        computeType: codebuild.ComputeType.SMALL,
        // write in buildspec file
        environmentVariables: {},
        },
      logging: {
        cloudWatch: {
          enabled: true,
          logGroup: logGroup
        }
      }
    })
    buildProject.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "ssm:GetParameters",
        "kms:Decrypt"
      ],
      resources: ["*"]
    }))
    const e2eProject = new codebuild.PipelineProject(this, "E2EProject", {
      buildSpec: codebuild.BuildSpec.fromSourceFilename("buildspec.yaml"),
      environment: {
        buildImage: codebuild.LinuxBuildImage.AMAZON_LINUX_2_5,
        computeType: codebuild.ComputeType.SMALL,
        environmentVariables: {
          PACKAGE_NAME: {
            value: "#{BuildVariables.PACKAGE_NAME}",
            type: codebuild.BuildEnvironmentVariableType.PLAINTEXT,
          }
        },
        },
      logging: {
        cloudWatch: {
          enabled: true,
          logGroup: logGroup
        }
      }
    })
    e2eProject.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "ssm:GetParameters",
        "kms:Decrypt"
      ],
      resources: ["*"]
    }))    

    const pipeline = new codepipeline.Pipeline(this, "Pipeline", {
      pipelineType: codepipeline.PipelineType.V2,
      restartExecutionOnUpdate: false,
      triggers: [
       {
        providerType: codepipeline.ProviderType.CODE_STAR_SOURCE_CONNECTION,
        gitConfiguration: {
          sourceAction: primarySourceAction,
          pushFilter: [
            {
              tagsIncludes: ["^v.*"]
            }
          ]
        }
       } 
      ],
      stages: [
       {
        stageName: "Source",
        actions: [
          primarySourceAction,
          new pipelineActions.CodeCommitSourceAction({
            actionName: "SecondarySource",
            output: codepipeline.Artifact.artifact("SecondarySourceArtifact"),
            repository: e2eTestRepository,
            branch: "main",
            runOrder: 1,
            variablesNamespace: "SecondarySourceVariables",
          })
        ],
       },
       {
        stageName: "Build",
        actions: [
          new pipelineActions.CodeBuildAction({
            actionName: "Build",
            input: codepipeline.Artifact.artifact("PrimarySourceArtifact"),
            project: buildProject,
            runOrder: 1,
            type: pipelineActions.CodeBuildActionType.BUILD,
            outputs: [
             codepipeline.Artifact.artifact("BuildArtifact") 
            ],
            variablesNamespace: "BuildVariables"
          }),
        ],
       },
       {
        stageName: "E2E",
        actions: [
          new pipelineActions.CodeBuildAction({
            actionName: "E2E",
            input: codepipeline.Artifact.artifact("SecondarySourceArtifact"),
            project: e2eProject,
            type: pipelineActions.CodeBuildActionType.TEST,
            variablesNamespace: "E2EVariables",
            environmentVariables: {
              PACKAGE_NAME: {
                value: "#{BuildVariables.PACKAGE_NAME}",
                type: codebuild.BuildEnvironmentVariableType.PLAINTEXT
              }
            }
          })
        ]
       }
      ]
    })
    const topic = new sns.Topic(this, "Topic", {
      fifo: false,
    })
    topic.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.ServicePrincipal("codestar-notifications.amazonaws.com")],
      actions: ["SNS:Publish"],
      resources: [topic.topicArn]
    }))
    const notificationRule = new codestarnotification.NotificationRule(this, "Notify", {
      events: [
        "codepipeline-pipeline-pipeline-execution-failed",
        "codepipeline-pipeline-pipeline-execution-succeeded"
      ],
      source: pipeline,
      enabled: true,
      detailType: codestarnotification.DetailType.BASIC,
    })
    notificationRule.addTarget(topic)


  }

  
}

new CICDStack(app, "CICDStack")
app.synth()