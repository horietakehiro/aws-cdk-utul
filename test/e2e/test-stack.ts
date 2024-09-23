import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_logs as logs,
} from 'aws-cdk-lib';

export interface TestStackProps extends cdk.StackProps{
  cidr: string
}
export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TestStackProps) {
    super(scope, id, props);

    new cdk.CfnParameter(this, "SGID", {
      type: "AWS::EC2::SecurityGroup::Id",
      description: "security group id"
    })

    new cdk.CfnMapping(this, "Map", {
      mapping: {
        "map": {
          "key": "value"
        }
      }
    })
    new cdk.CfnCondition(this, "Condition", {
      expression: cdk.Fn.conditionEquals("", "")
    })

    const vpc = new ec2.Vpc(this, "VPC", {
      maxAzs: 2,
      ipAddresses: ec2.IpAddresses.cidr(props.cidr),
      subnetConfiguration: [
        {subnetType: ec2.SubnetType.PUBLIC, name: "Public", mapPublicIpOnLaunch: true}
      ],
    })
    const instance = new ec2.Instance(this, "Instance", {
      vpc: vpc, vpcSubnets: {subnetType: ec2.SubnetType.PUBLIC},
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    })
    const eip = new ec2.CfnEIP(this, "EIP", {})

    const role = new iam.Role(this, "Role", {
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
      description: "role",
    })

    const log = new logs.CfnLogGroup(this, "LogGroup", {})
    
    new cdk.CfnOutput(this, "RoleArn", {
      value: role.roleArn,
      description: "role arn"
    })

    new cdk.CfnOutput(this, "PublicIP", {
      value: eip.attrPublicIp,
      description: "eip"
    })
  }
}
