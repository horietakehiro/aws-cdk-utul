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
export class ExtraMatch extends Match {
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

  // /**
  //  * returns Match instance that matches regional resource ARN like : `arn:aws:logs:ap-northeast-1:123456789012:log-group:/log-group-name:log-stream:log-stream-name`
  //  * @param elems
  //  * @returns
  //  */
  // static regionalArnLike(elems: AlsoMatcher<ArnElements>): Matcher {
  //   return Match.objectEquals({
  //     "Fn::Join": Match.arrayWith([
  //       "",
  //       Match.arrayWith([
  //         "arn:",
  //         elems.partition ?? { Ref: "AWS::Partition" },
  //         Match.stringLikeRegexp(`:${elems.service ?? "*"}:`),
  //         elems.region ?? { Ref: "AWS::Region" },
  //         elems.account ?? { Ref: "AWS::AccountId" },
  //         ...(elems.rest instanceof Matcher
  //           ? [elems.rest]
  //           : (elems.rest ?? [])),
  //       ]),
  //     ]),
  //   });
  // }

  // /**
  //  * returns Match instance that matches global resource ARN like : `arn:aws:iam::123456789012:role/role-name`
  //  * @param elems
  //  * @returns
  //  */
  // static globalArn(
  //   elems: Omit<ArnElements, "region">,
  //   delimiter: string = ""
  // ): Matcher {
  //   return Match.objectEquals({
  //     "Fn::Join": Match.arrayEquals([
  //       delimiter,
  //       Match.arrayWith([
  //         "arn:",
  //         elems.partition ?? { Ref: "AWS::Partition" },
  //         Match.stringLikeRegexp(`:${elems.service ?? "*"}::`),
  //         elems.account ?? { Ref: "AWS::AccountId" },
  //         ...(elems.rest instanceof Matcher
  //           ? [elems.rest]
  //           : (elems.rest ?? [])),
  //       ]),
  //     ]),
  //   });
  // }

  static iamPolicyLike(doc: AlsoMatcher<IAMPolicyDocument>): Matcher {
    return Match.objectLike(doc);
  }
}
