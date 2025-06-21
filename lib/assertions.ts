import { Template, Match, Matcher } from "aws-cdk-lib/assertions";
import {
  Condition,
  InputResource,
  Mapping,
  OutputResource,
  InputParamter,
  OutputParameter,
  ReturnValue,
  InputOutput,
  OutputOutput,
  InputResourceWithoutType,
  IAMPolicyDocument,
  AlsoMatcher,
  TypedMatcher,
} from "./typed-resource";

/**
 * almost same class as `Template` class at "aws-cdk-lib/assertions", but you can use this with proper type definitions
 */
export class TypedTemplate {
  template: Template;
  private constructor(template: Template) {
    this.template = template;
  }

  private get<T>(type: string, def: any, array: T[]): T {
    if (array.length === 0) {
      throw Error(`${type} not found with definition : ${JSON.stringify(def)}`);
    }
    if (array.length > 1) {
      throw Error(
        `multiple ${type} found with definition : ${JSON.stringify(def)}`
      );
    }
    return array[0];
  }

  /**
   * same function as `Template.fromStack` but returns `TypedTemplate`
   * @param args
   * @returns
   */
  static fromStack(
    ...args: Parameters<typeof Template.fromStack>
  ): TypedTemplate {
    return new TypedTemplate(Template.fromStack(...args));
  }
  /**
   * same function as `Template.fromJSON` but returns `TypedTemplate`
   * @param args
   * @returns
   */
  static fromJSON(
    ...args: Parameters<typeof Template.fromJSON>
  ): TypedTemplate {
    return new TypedTemplate(Template.fromJSON(...args));
  }
  /**
   * same function as `Template.fromString` but returns `TypedTemplate`
   * @param args
   * @returns
   */
  static fromString(
    ...args: Parameters<typeof Template.fromString>
  ): TypedTemplate {
    return new TypedTemplate(Template.fromString(...args));
  }

  /**
   * same function as `Template.resourceCountIs`
   *
   * use this method like below:
   *
   * ```js
   * template.resourceCountIs(AWS_EC2_SUBNET, 3)
   * ```
   * @param type
   * @param count
   */
  resourceCountIs<T>(
    type: (resource?: InputResourceWithoutType<T>) => InputResource<T>,
    count: number
  ): void {
    this.template.resourceCountIs(type().Type, count);
  }
  /**
   * same function as `Template.resourcePropertiesCountIs`
   * @param r
   * @param count
   */
  resourcePropertiesCountIs<T>(r: InputResource<T>, count: number): void {
    this.template.resourcePropertiesCountIs(r.Type, r.Properties, count);
  }
  /**
   * same function as `Template.hasResourceProperties`
   * @param r
   */
  hasResourceProperties<T>(r: InputResource<T>): void {
    this.template.hasResourceProperties(r.Type, r.Properties);
  }
  /**
   * same function as `Template.hasResource`
   * @param r
   */
  hasResource<T>(r: InputResource<T>): void {
    this.template.hasResource(r.Type, r);
  }
  /**
   * same function as `Template.findResources`
   * @param r
   * @returns
   */
  findResources<T>(r: InputResource<T>): ReturnValue<OutputResource<T>>[] {
    const resources = this.template.findResources(r.Type, r) as {
      [id in string]: OutputResource<T>;
    };
    return Object.entries(resources).map(([id, resource]) => {
      return { id: id, def: resource };
    });
  }
  /**
   * same function as `Template.allResources`
   * @param r
   */
  allResources<T>(r: InputResource<T>): void {
    this.template.allResources(r.Type, r);
  }
  /**
   * same function as `Template.allResourceProperties`
   * @param r
   */
  allResourcesProperties<T>(r: InputResource<T>): void {
    this.template.allResourcesProperties(r.Type, r.Properties);
  }
  /**
   * same function as `Template.hasParameter`
   * @param logicalId
   * @param props
   */
  hasParameter(logicalId: string, props: InputParamter): void {
    this.template.hasParameter(logicalId, props);
  }
  /**
   * same function as `Template.findParameters`
   * @param logicalId
   * @param props
   * @returns
   */
  findParameters(
    logicalId: string,
    props?: InputParamter
  ): ReturnValue<OutputParameter>[] {
    const parameters = this.template.findParameters(logicalId, props);
    return Object.entries(parameters).map(([id, parameter]) => {
      return { id: id, def: parameter as OutputParameter };
    });
  }

  /**
   * same function as `Template.hasOutput`
   * @param logicalId
   * @param props
   */
  hasOutput(logicalId: string, props: InputOutput): void {
    this.template.hasOutput(logicalId, props);
  }
  /**
   * same function as `Template.findOutputs`
   * @param logicalId
   * @param props
   * @returns
   */
  findOutputs(
    logicalId: string,
    props?: InputOutput
  ): ReturnValue<OutputOutput>[] {
    const outputs = this.template.findOutputs(logicalId, props);
    return Object.entries(outputs).map(([id, output]) => {
      return { id: id, def: output as OutputOutput };
    });
  }
  /**
   * same function as `Template.hasMapping`
   * @param logicalId
   * @param props
   */
  hasMapping(logicalId: string, props: any): void {
    this.template.hasMapping(logicalId, props);
  }
  /**
   * same function as `Template.findMappings`
   * @param logicalId
   * @param props
   * @returns
   */
  findMappings(logicalId: string, props?: any): ReturnValue<Mapping>[] {
    const mappings = this.template.findMappings(logicalId, props);
    return Object.entries(mappings).map(([id, mapping]) => {
      return { id: id, def: mapping };
    });
  }
  /**
   * same function as `Template.hasCondition`
   * @param logicalId
   * @param props
   */
  hasCondition(logicalId: string, props: any): void {
    this.template.hasCondition(logicalId, props);
  }
  /**
   * same function as `Template.findConditions`
   * @param logicalId
   * @param props
   * @returns
   */
  findConditions(logicalId: string, props?: any): ReturnValue<Condition>[] {
    const conditions = this.template.findConditions(logicalId, props);
    return Object.entries(conditions).map(([id, condition]) => {
      return { id: id, def: condition };
    });
  }

  /**
   * return a single resource for specified type and definition.
   *
   * - if no resource matched with the specified type and definition, raise Error.
   * - if multiple resources matched, raise Error
   * @param args
   * @returns
   */
  getResource<T>(
    ...args: Parameters<typeof this.findResources<T>>
  ): ReturnType<typeof this.findResources<T>> extends (infer U)[] ? U : never {
    return this.get("resource", args[0], this.findResources(args[0]));
  }
}

export interface JoinProps {
  /**
   * @default ""
   */
  delimiter?: string;
  arrayWith: any[];
}
/**
 * provides some syntax sugars for `Match` class at `aws-cdk-lib/assertions`
 */
export class ExtraMatch {
  /**
   * same function as `Match.objectEquals({ Ref: logicalId })`
   * @param logicalId
   * @returns
   */
  static ref(logicalId: string): Matcher {
    return Match.objectEquals({ Ref: logicalId });
  }
  /**
   * same function as `Match.objectEquals({"Fn::GetAtt": [logicalId, attribute]})`
   * @param logicalId
   * @param attribute
   * @returns
   */
  static getAtt(logicalId: string, attribute: string): Matcher {
    return Match.objectEquals({ "Fn::GetAtt": [logicalId, attribute] });
  }
  /**
   * same function as `Match.objectEquals({"Fn::GetAtt": [logicalId, "Arn"]})`
   * @param logicalId
   * @returns
   */
  static getAttArn(logicalId: string): Matcher {
    return this.getAtt(logicalId, "Arn");
  }
  /**
   * same function as below:
   * 
   * ```js
   * Match.objectLike({
   *  "Fn::Join": [props.delimiter ?? "", Match.arrayWith(props.arrayWith)],
    });
   * ```
   * @param props 
   * @returns 
   */
  static joinLike(props: JoinProps): Matcher {
    return Match.objectLike({
      "Fn::Join": [props.delimiter ?? "", Match.arrayWith(props.arrayWith)],
    });
  }

  /**
   You can define Matcher for IAM Policy Document with type hints.
   ```js
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
   ```
   * @param doc 
   * @returns 
   */
  static iamPolicyLike(doc: AlsoMatcher<IAMPolicyDocument>): Matcher {
    return Match.objectLike(doc);
  }
  /**
   Same method as `Match.arrayWith` but provides type hints and validate type match 
   ```js
    // this is a right code
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
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayWith<string[]>([
            "hoge", "fuga"
          ]),
        },
      })
    );
   ```
   * @param pattern 
   * @returns 
   */
  static arrayWith<T extends any[]>(pattern: AlsoMatcher<T>): TypedMatcher<T> {
    return Match.arrayWith(pattern) as unknown as TypedMatcher<T>;
  }
  /**
   * Same method as `Match.arrayEquals` but provides type hints and validate type match 
   ```js
    // this is a right code
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
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayEquals<Tag[]>([
            {
              Key: "key1",
              Value: "val1",
            },
            {
              Key: 100,
              Value: 200,
            },
          ]),
        },
      })
    );
   ```
   * @param pattern 
   * @returns 
   */
  static arrayEquals<T extends any[]>(
    pattern: AlsoMatcher<T>
  ): TypedMatcher<T> {
    return Match.arrayEquals(pattern);
  }
  /**
   * Same method as `Match.objectLike` but provides type hints and validate type match 
   ```js
   // this is a right code
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
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          BlockDeviceMappings: [
            {
              DeviceName: "test",
              Ebs: ExtraMatch.objectLike<Ebs>({
                VolumeSize: "10",
              }),
            },
          ],
        },
      })
    );
   * @param pattern 
   * @returns 
   */
  static objectLike<T extends { [key: string]: any }>(
    pattern: AlsoMatcher<T>
  ): TypedMatcher<T> {
    return Match.objectLike(pattern);
  }
  /**
   * Same method as `Match.objectEquals` but provides type hints and validate type match 
   ```js
   // this is a right code
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          // You can nest TypedMatcher(use TypedMatcher inside TypedMatcher)
          Tags: ExtraMatch.arrayWith<Tag[]>([
            ExtraMatch.objectEquals<Tag>({
              Key: "key1",
              Value: "val1",
            }),
          ]),
        },
      })
    );
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_EIP({
        Properties: {
          Tags: ExtraMatch.arrayWith<Tag[]>([
            ExtraMatch.objectEquals<Tag>({
              Key: "key1",
              Value: 100,
            }),
          ]),
        },
      })
    );
   * @param pattern 
   * @returns 
   */
  static objectEquals<T extends { [key: string]: any }>(
    pattern: AlsoMatcher<T>
  ): TypedMatcher<T> {
    return Match.objectEquals(pattern);
  }
  /**
   * Same method as `Match.not` but provides type hints and validate type match 
   ```js
    // this is a right code
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          ImageId: ExtraMatch.not("ami-12345"),
        },
      })
    );
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          ImageId: ExtraMatch.not(100),
        },
      })
    );
   ```
   * Same method as `Match.not` but provides type hints and validate type match 
   * @param pattern 
   * @returns 
   */
  // TODO: why this expression `T extends never ? never : T` is required but this is required
  static not<T>(pattern: AlsoMatcher<T extends never ? never : T>): TypedMatcher<T> {
    return Match.not(pattern);
  }
  /**
   * Same method as `Match.exact` but provides type hints and validate type match 
   ```js
    // this is a right code
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          InstanceType: ExtraMatch.exact("t2.micro"),
        },
      })
    );
    // this is a wrong code(type mismatch will be detected and ts-error will be raised)
    template.hasResource(
      AWS_EC2_INSTANCE({
        Properties: {
          InstanceType: ExtraMatch.exact(false),
        },
      })
    );
   ```
   * @param pattern 
   * @returns 
   */
  static exact<T>(pattern: AlsoMatcher<T extends never ? never : T>): TypedMatcher<T> {
    return Match.exact(pattern);
  }
}
