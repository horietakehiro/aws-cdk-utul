import { Matcher } from "aws-cdk-lib/assertions";
import { BlockDeviceMapping } from "./types/cfn-resource-types/aws-autoscaling-launchconfiguration";

type Primitives =
  | string
  | number
  | boolean
  | undefined
  | null
  | symbol
  | bigint
  | string[]
  | number[]
  | boolean[]
  | bigint[];

export type TypedMatcher<T> = Matcher | T;

/**
 * make `T` asignable 'TypedMatcher' recirsively
 */
export type AlsoMatcher<T> = {
  [p in keyof T]?: T[p] extends Primitives
    ? T[p] | TypedMatcher<T[p]>
    : AlsoMatcher<T[p]> | TypedMatcher<T[p]>;
};
/**
 * make `T` asignable arbitrary json objects
 */
export type AlsoAny<T> = {
  [p in keyof T]: T[p] extends Primitives
    ? T[p] | { [key in string]: any }
    : AlsoAny<T[p]>;
};

/**
 * CloudFormation Resource based on the definition at https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-product-attribute-reference.html
 */
interface BaseResource {
  CreationPolicy?: any;
  DeletionPolicy?: "Delete" | "Retain" | "RetainExceptOnCreate" | "Snapshot";
  DependsOn?: string | string[];
  Metadata?: any;
  UpdatePolicy?: any;
  UpdateReplacePolicy?: "Delete" | "Retain" | "Snapshot";
  Condition?: string;
}

export interface InputResource<T> extends AlsoMatcher<BaseResource> {
  Properties?: AlsoMatcher<T>;
  Type: string;
}
export interface InputResourceWithoutType<T>
  extends Omit<InputResource<T>, "Type"> {}
export interface OutputResource<T> extends AlsoAny<BaseResource> {
  Properties?: AlsoAny<T>;
  Type: string;
}

/**
 * interface of return value of TypedTemplate's methods
 */
export interface ReturnValue<T> {
  /**
   * logical id of cloudformation resources, parameters, outputs...
   */
  id: string;
  /**
   * definition of cloudformation resources, parameters, outputs...
   */
  def: T;
}

/**
 * interface of cloudformation template output
 */
interface Output {
  Description?: any;
  Value: any;
  Export?: {
    Name: any;
  };
}
export interface InputOutput extends AlsoMatcher<Output> {}
export interface OutputOutput extends AlsoAny<Output> {}
/**
 * interface of cloudformation template parameter
 */
interface Parameter {
  AllowedPattern?: string;
  AllowedValues?: any[];
  ConstraintDescription?: string;
  Default?: any;
  Description?: string;
  MaxLength?: number;
  MaxValue?: number;
  MinLength?: number;
  MinValue?: number;
  NoEcho?: boolean;
  Type: string;
}
export interface InputParamter extends AlsoMatcher<Parameter> {}
export interface OutputParameter extends AlsoAny<Parameter> {}

export type Condition = {
  [key in string]: {
    [key in string]: any;
  };
};
export type Mapping = {
  [key in string]: {
    [key in string]: any;
  };
};

export interface IAMPolicyDocument {
  Version?: string;
  Id?: string;
  Statement?: IAMPolicyStatement[];
}

export type IAMPolicyPrincipal =
  | "*"
  | {
      [entry in "AWS" | "Federated" | "Service" | "CanonicalUser"]?:
        | string
        | string[];
    };

export interface IAMPolicyStatement {
  Sid?: string;
  Effect?: "Allow" | "Effect";
  Principal?: IAMPolicyPrincipal;
  NotPrincipal?: IAMPolicyPrincipal;
  NotAction?: string | string[];
  Action?: string | string[];
  Resource?: string | string[];
  NotResource?: string | string[];
  Condition?: { [key: string]: any };
}

/**
 * Tag type that can be commonly used across almost all cfn resource types
 */
export interface Tag {
  Key: string;
  Value?: string;
}