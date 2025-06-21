import {
  App,
  aws_s3 as s3,
  aws_iam as iam,
  Stack,
  CfnOutput,
} from "aws-cdk-lib";
import { TestStack, TestStackProps } from "./test-stack";
import { ExtraMatch, TypedTemplate } from "../../lib/assertions";
import { Match } from "aws-cdk-lib/assertions";
import {
  AWS_EC2_VPC,
  AWS_EC2_SUBNET,
  AWS_EC2_INSTANCE,
  AWS_EC2_EIP,
  AWS_IAM_ROLE,
  AWS_IAM_MANAGEDPOLICY,
  AWS_S3_BUCKET,
} from "./../../lib/types/cfn-resource-types";
import { AlsoMatcher, IAMPolicyDocument, Tag } from "../../lib/typed-resource";
import {
  BlockDeviceMapping,
  Ebs,
  ElasticGpuSpecification,
  LaunchTemplateSpecification,
} from "../../lib/types/cfn-resource-types/aws-ec2-instance";
const app = new App();
const stackProps: TestStackProps = { cidr: "10.0.0.0/16" };
const stack = new TestStack(app, "TestStack", stackProps);
const template = TypedTemplate.fromStack(stack);
describe("TypedTemplate", () => {
  test.skip("fromStack - obviously passed", () => {});
  test("resourceCountIs", () => {
    // template.resourceCountIs(AWS_EC2_SUBNET(), 2);
    template.resourceCountIs(AWS_EC2_SUBNET, 2);
  });
  test("resourcePropertiesCountIs", () => {
    template.resourcePropertiesCountIs(
      AWS_EC2_VPC({ Properties: { CidrBlock: stackProps.cidr } }),
      1
    );
  });
  test("hasResourceProperties", () => {
    template.hasResourceProperties(
      AWS_EC2_INSTANCE({
        Properties: {
          InstanceType: "t2.micro",
        },
      })
    );
  });
  test("hasResource", () => {
    template.hasResource(AWS_EC2_INSTANCE({}));
  });

  test("findResources", () => {
    const subnets = template.findResources(AWS_EC2_SUBNET({}));
    expect(subnets.length).toBe(2);
  });
  test("allResources", () => {
    template.allResources(
      AWS_EC2_SUBNET({
        Properties: {
          MapPublicIpOnLaunch: true,
        },
      })
    );
  });
  test("allResourcesProperties", () => {
    template.allResourcesProperties(
      AWS_EC2_SUBNET({
        Properties: {
          MapPublicIpOnLaunch: true,
        },
      })
    );
  });
  test("hasParameter", () => {
    template.hasParameter("*", {
      Type: "AWS::EC2::SecurityGroup::Id",
    });
  });
  test("findParameters", () => {
    const parameters = template.findParameters("*", {
      Type: "AWS::EC2::SecurityGroup::Id",
    });
    expect(parameters.length).toBe(1);
    expect(parameters[0].def.Description).toBe("security group id");
  });
  test("hasOutput", () => {
    template.hasOutput("*", {});
  });
  test("findOutputs", () => {
    const outputs = template.findOutputs("*", {
      Description: "role arn",
    });
    expect(outputs.length).toBe(1);
  });
  test("hasMapping", () => {
    template.hasMapping("*", {});
  });
  test("findMappings", () => {
    const mappings = template.findMappings("*", {});
    expect(mappings.length).toBe(1);
  });
  test("hasCondition", () => {
    template.hasCondition("*", {});
  });
  test("findConditions", () => {
    const conditions = template.findConditions("*", {});
    expect(conditions.length).toBe(1);
  });

  test("getResource - hit 1 resource - successs", () => {
    const { id, def } = template.getResource(
      AWS_EC2_VPC({
        Properties: {
          CidrBlock: stackProps.cidr,
        },
      })
    );
    expect(id).toContain("VPC");
    expect(def.Properties?.CidrBlock).toBe(stackProps.cidr);
  });
  test("getResource - hit 0 resource - fail", () => {
    const r = AWS_EC2_VPC({
      Properties: {
        CidrBlock: "0.0.0.0/0",
      },
    });
    r;
    expect(() => template.getResource(r)).toThrow(
      `resource not found with definition : ${JSON.stringify(r)}`
    );
  });
  test("getResource - hit 2 resources with strict true(default) - fail", () => {
    const r = AWS_EC2_SUBNET();
    expect(() => template.getResource(r)).toThrow(
      `multiple resource found with definition : ${JSON.stringify(r)}`
    );
  });
});

describe("ExtraMatch", () => {
  test("ref", () => {
    const subnets = template.findResources(AWS_EC2_SUBNET({}));
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          SubnetId: ExtraMatch.ref(subnets[0].id),
        },
      })
    );
  });
  test("getAtt", () => {
    const eip = template.findResources(AWS_EC2_EIP({}));
    const outputs = template.findOutputs("*", {
      Value: ExtraMatch.getAtt(eip[0].id, "PublicIp"),
    });
    expect(outputs.length).toBe(1);
  });
  test("getAttArn", () => {
    const roles = template.findResources(
      AWS_IAM_ROLE({ Properties: { Description: "role" } })
    );
    template.hasOutput("*", {
      Value: ExtraMatch.getAttArn(roles[0].id),
    });
  });
  test("arrayWith", () => {
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayWith<Tag[]>([
            {
              Key: "key2",
              Value: "val2",
            },
          ]),
        },
      })
    );
  });
  test("arrayEquals", () => {
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayEquals<Tag[]>([
            {
              Key: "key1",
              Value: "val1",
            },
            {
              Key: "key2",
              Value: "val2",
            },
          ]),
        },
      })
    );
  });
  test("objectEquals", () => {
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayWith<Tag[]>([
            ExtraMatch.objectEquals<Tag>({
              Key: "key1",
              Value: "val1",
            }),
          ]),
        },
      })
    );
  });
  test("objectLike", () => {
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          BlockDeviceMappings: [
            {
              DeviceName: "test",
              Ebs: ExtraMatch.objectLike<Ebs>({
                VolumeSize: 10,
              }),
            },
          ],
        },
      })
    );
  });
  test("exact", () => {
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          InstanceType: ExtraMatch.exact("t2.micro"),
        },
      })
    );
  });
  test("not", () => {
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          ImageId: ExtraMatch.not("ami-12345"),
        },
      })
    );
  });

  test("joinLike", () => {
    const stack = new Stack();
    const bucket = new s3.Bucket(stack, "Bucket");
    new CfnOutput(stack, "BucketArn", {
      value: bucket.arnForObjects("*"),
    });
    const template = TypedTemplate.fromStack(stack);
    const { id } = template.getResource(AWS_S3_BUCKET());
    template.hasOutput("BucketArn", {
      Value: ExtraMatch.joinLike({
        delimiter: "",
        arrayWith: [ExtraMatch.getAttArn(id), "/*"],
      }),
    });
  });

  test("iamPolicyLike - policy", () => {
    const stack = new Stack();
    const bucket = new s3.Bucket(stack, "Bucket");
    new iam.ManagedPolicy(stack, "Policy", {
      statements: [
        new iam.PolicyStatement({
          sid: "test",
          effect: iam.Effect.ALLOW,
          actions: ["s3:*"],
          resources: [bucket.bucketArn],
          conditions: {
            NotIpAddress: {
              "aws:SourceIp": ["10.0.0.0/16"],
            },
          },
        }),
      ],
    });
    const template = TypedTemplate.fromStack(stack);

    const documents: AlsoMatcher<IAMPolicyDocument>[] = [
      {
        Statement: [
          {
            Sid: "test",
            Action: "s3:*",
            Resource: ExtraMatch.getAttArn(
              stack.getLogicalId(bucket.node.defaultChild as s3.CfnBucket)
            ),
            Condition: Match.objectLike({
              NotIpAddress: {
                "aws:SourceIp": Match.arrayEquals([
                  Match.stringLikeRegexp("/16"),
                ]),
              },
            }),
          },
        ],
      },
      {
        Statement: [
          {
            Sid: "test",
          },
        ],
      },
    ];
    documents.forEach((doc) => {
      template.hasResource(
        AWS_IAM_MANAGEDPOLICY({
          Properties: {
            PolicyDocument: ExtraMatch.iamPolicyLike(doc),
          },
        })
      );
    });
  });
  test("iamPolicyLike - NotPolicy", () => {
    const stack = new Stack();
    const bucket = new s3.Bucket(stack, "Bucket");
    new iam.ManagedPolicy(stack, "Policy", {
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          notActions: ["s3:GetObject", "s3:PutObject"],
          notResources: [bucket.bucketArn, bucket.arnForObjects("*")],
        }),
      ],
    });
    const template = TypedTemplate.fromStack(stack);
    const { id } = template.getResource(AWS_S3_BUCKET());

    const documents: AlsoMatcher<IAMPolicyDocument>[] = [
      {
        Statement: [
          {
            NotAction: ["s3:GetObject", "s3:PutObject"],
            NotResource: Match.arrayWith([
              ExtraMatch.getAttArn(id),
              ExtraMatch.joinLike({
                arrayWith: [ExtraMatch.getAttArn(id), "/*"],
              }),
            ]),
          },
        ],
      },
    ];
    documents.forEach((doc) => {
      template.hasResource(
        AWS_IAM_MANAGEDPOLICY({
          Properties: {
            PolicyDocument: ExtraMatch.iamPolicyLike(doc),
          },
        })
      );
    });
  });
  test("iamPolicyLike - Principal", () => {
    const stack = new Stack();
    new iam.Role(stack, "Role", {
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
    });
    const template = TypedTemplate.fromStack(stack);

    template.hasResource(
      AWS_IAM_ROLE({
        Properties: {
          AssumeRolePolicyDocument: ExtraMatch.iamPolicyLike({
            Statement: [
              {
                Principal: { Service: "ec2.amazonaws.com" },
              },
            ],
          }),
        },
      })
    );
  });
  test("complex pattern(something like monkey test)", () => {
    const resources = template.findResources(
      AWS_EC2_INSTANCE({
        Condition: "condition",
        CreationPolicy: Match.objectEquals({}),
        DeletionPolicy: ExtraMatch.exact("Delete"),
        // @ts-expect-error
        UpdateReplacePolicy: "",
        // @ts-expect-error
        DependsOn: ExtraMatch.objectEquals({}),
        Properties: {
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1,
          },
          BlockDeviceMappings: ExtraMatch.arrayWith<BlockDeviceMapping[]>([
            {
              DeviceName: Match.stringLikeRegexp("device"),
              NoDevice: {},
              Ebs: {
                DeleteOnTermination: ExtraMatch.not(false),
                Iops: ExtraMatch.exact(100),
              },
            },
            {
              Ebs: {
                VolumeSize: Match.absent(),
              },
            },
            ExtraMatch.objectEquals<BlockDeviceMapping>({}),
            // @ts-expect-error
            ExtraMatch.objectEquals<Ebs>({}),
          ]),
          EbsOptimized: true,
          ElasticGpuSpecifications: [
            {
              Type: "",
            },
            ExtraMatch.objectLike<ElasticGpuSpecification>({}),
          ],
          HibernationOptions: {
            Configured: false,
          },
          // @ts-expect-error
          invalidValue: {},

          LaunchTemplate: ExtraMatch.objectEquals<LaunchTemplateSpecification>({
            LaunchTemplateId: "",
          }),
        },
      }),
    );

    expect(resources.length).toBe(0)
    resources.forEach(({def}) => {
      def.Properties?.BlockDeviceMappings?.forEach((bdm) => {
        bdm.Ebs?.DeleteOnTermination === false
        // @ts-expect-error
        bdm.Ebs?.Iops === "iops"
      })
    })
  });
});
