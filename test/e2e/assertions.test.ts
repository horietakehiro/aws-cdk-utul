import { App } from "aws-cdk-lib"
import { TestStack, TestStackProps } from "./test-stack"
import { ExtraMatch, TypedTemplate } from "../../lib/assertions"
import { Match, Template } from "aws-cdk-lib/assertions"
import { AWS_EC2_VPC, AWS_EC2_SUBNET, AWS_EC2_INSTANCE, AWS_EC2_EIP, AWS_IAM_ROLE } from "./../../lib/types/cfn-resource-types"

const app = new App()
const stackProps:TestStackProps = {cidr: "10.0.0.0/16"}
const stack = new TestStack(app, "TestStack", stackProps)
const template = new TypedTemplate(Template.fromStack(stack))
describe("TypedTemplate", () => {
  test("resourceCountIs", () => {
    template.resourceCountIs(AWS_EC2_SUBNET({}), 2)
  })
  test("resourcePropertiesCountIs", () => {
    template.resourcePropertiesCountIs(AWS_EC2_VPC({Properties: {CidrBlock: stackProps.cidr}}), 1)
  })
  test("hasResourceProperties", () => {
    template.hasResourceProperties(
      AWS_EC2_INSTANCE({Properties: {
        InstanceType: "t2.micro"
      }})
    )
  })
  test("hasResource", () => {
    template.hasResource(AWS_EC2_INSTANCE({}))
  })

  test("findResources", () => {
    const subnets = template.findResources(AWS_EC2_SUBNET({}))
    expect(subnets.length).toBe(2)
  })
  test("allResources", () => {
    template.allResources(AWS_EC2_SUBNET({Properties: {
      MapPublicIpOnLaunch: true,
    }}))
  })
  test("allResourcesProperties", () => {
    template.allResourcesProperties(AWS_EC2_SUBNET({Properties: {
      MapPublicIpOnLaunch: true
    }}))
  })
  test("hasParameter", () => {
    template.hasParameter("*", {
      Type: "AWS::EC2::SecurityGroup::Id"
    })
  })
  test("findParameters", () => {
    const parameters = template.findParameters("*", {
      Type: "AWS::EC2::SecurityGroup::Id"
    })
    expect(parameters.length).toBe(1)
    expect(parameters[0].def.Description).toBe("security group id")
  })
  test("hasOutput", () => {
    template.hasOutput("*", {})
  })
  test("findOutputs", () => {
    const outputs = template.findOutputs("*", {
      Description: "role arn"
    })
    expect(outputs.length).toBe(1)
  })
  test("hasMapping", () => {
    template.hasMapping("*", {})
  })
  test("findMappings", () => {
    const mappings = template.findMappings("*", {})
    expect(mappings.length).toBe(1)
  })
  test("hasCondition", () => {
    template.hasCondition("*", {})
  })
  test("findConditions", () => {
    const conditions = template.findConditions("*", {})
    expect(conditions.length).toBe(1)
  })
})

describe("ExtraMatch", () => {
  test("ref", () => {
    const subnets = template.findResources(AWS_EC2_SUBNET({}))
    template.hasResource(AWS_EC2_INSTANCE({Properties: {
      SubnetId: ExtraMatch.ref(subnets[0].id)
    }}))
  })
  test("getAtt", () => {
    const eip = template.findResources(AWS_EC2_EIP({}))
    const outputs = template.findOutputs("*", {
        Value: ExtraMatch.getAtt(eip[0].id, "PublicIp")
    })
    expect(outputs.length).toBe(1)
  })
  test("getAttArn", () => {
    const roles = template.findResources(AWS_IAM_ROLE({Properties: {Description: "role"}}))
    template.hasOutput("*", {
      Value: ExtraMatch.getAttArn(roles[0].id)
    })
  })
})