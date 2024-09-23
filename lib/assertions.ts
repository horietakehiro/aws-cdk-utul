import { Template, Match, Matcher } from "aws-cdk-lib/assertions";
import { Condition, InputResource, Mapping, OutputResource, InputParamter, OutputParameter, ReturnValue, InputOutput, OutputOutput } from "./typed-resource";

/**
 * Some kind of a proxy for Template class of "aws-cdk-lib/assertions"
 */
export class TypedTemplate {
  template: Template;
  constructor(template: Template) {
    this.template = template;
  }

  resourceCountIs<T>(r: InputResource<T>, count: number): void {
    this.template.resourceCountIs(r.Type, count);
  }
  resourcePropertiesCountIs<T>(r: InputResource<T>, count: number): void {
    this.template.resourcePropertiesCountIs(r.Type, r.Properties, count);
  }
  hasResourceProperties<T>(r: InputResource<T>): void {
    this.template.hasResourceProperties(r.Type, r.Properties);
  }

  hasResource<T>(r: InputResource<T>): void {
    this.template.hasResource(r.Type, r);
  }
  findResources<T>(r: InputResource<T>): ReturnValue<OutputResource<T>>[] {
    const resources = this.template.findResources(r.Type, r) as {
      [id in string]: OutputResource<T>;
    };
    return Object.entries(resources).map(([id, resource]) => {
      return {id: id, def: resource}
    })
  }
  allResources<T>(r: InputResource<T>): void {
    this.template.allResources(r.Type, r);
  }
  allResourcesProperties<T>(r: InputResource<T>): void {
    this.template.allResourcesProperties(r.Type, r.Properties);
  }

  hasParameter(logicalId: string, props: InputParamter): void {
    this.template.hasParameter(logicalId, props);
  }
  findParameters(logicalId: string, props?: InputParamter): ReturnValue<OutputParameter>[] {
    const parameters = this.template.findParameters(logicalId, props);
    return Object.entries(parameters).map(([id, parameter]) => {
      return {id: id, def: parameter as OutputParameter}
    })
  }
  hasOutput(logicalId: string, props: InputOutput): void {
    this.template.hasOutput(logicalId, props);
  }
  findOutputs(logicalId: string, props?: InputOutput): ReturnValue<OutputOutput>[] {
    const outputs = this.template.findOutputs(logicalId, props);
    return Object.entries(outputs).map(([id, output]) => {
      return {id: id, def: output as OutputOutput}
    })
  }
  hasMapping(logicalId: string, props: any): void {
    this.template.hasMapping(logicalId, props);
  }
  findMappings(logicalId: string, props?: any): ReturnValue<Mapping>[] {
    const mappings = this.template.findMappings(logicalId, props);
    return Object.entries(mappings).map(([id, mapping]) => {
      return {id: id, def: mapping}
    })
  }

  hasCondition(logicalId: string, props: any): void {
    this.template.hasCondition(logicalId, props);
  }
  findConditions(logicalId: string, props?: any): ReturnValue<Condition>[] {
    const conditions = this.template.findConditions(logicalId, props);
    return Object.entries(conditions).map(([id, condition]) => {
      return {id: id, def: condition}
    })
  }
}

export class ExtraMatch extends Match {
  static ref(logicalId: string): Matcher {
    return Match.objectEquals({ Ref: logicalId });
  }
  static getAtt(logicalId: string, attribute: string): Matcher {
    return Match.objectEquals({
      "Fn::GetAtt": [logicalId, attribute],
    });
  }
  static getAttArn(logicalId: string): Matcher {
    return this.getAtt(logicalId, "Arn");
  }
}
