import { App } from "aws-cdk-lib";
import { TestStack, TestStackProps } from "./test-stack";
import { ExtraMatch, TypedTemplate } from "../../lib/assertions";
import { Match, Template } from "aws-cdk-lib/assertions";
import {
  AWS_EC2_VPC,
  AWS_EC2_SUBNET,
  AWS_EC2_INSTANCE,
  AWS_EC2_EIP,
  AWS_IAM_ROLE,
} from "./../../lib/types/cfn-resource-types";

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
    expect(() => template.getResource(r)).toThrow(
      `not found : ${JSON.stringify(r)}`
    );
  });
  test("getResource - hit 2 resources with strict true(default) - fail", () => {
    const r = AWS_EC2_SUBNET();
    expect(() => template.getResource(r)).toThrow(
      `multiple found : ${JSON.stringify(r)}` 
    );
  });
  test("getResource - hit 2 resources with strict false - success", () => {
    const resounce = template.getResource(AWS_EC2_SUBNET(), false);
    expect(resounce.id).toContain("Subnet");
  });

  template._get(template.findResources(AWS_EC2_EIP()), )
  // test("getParameter", () => {
  //   fail()
  // })
  // test("getOutput", () => {
  //   fail()
  // })
  // test("getMapping", () => {
  //   fail()
  // })
  // test("getCondition", () => {
  //   fail()
  // })
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
});
