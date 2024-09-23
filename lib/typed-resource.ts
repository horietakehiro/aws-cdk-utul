import { Match, Matcher } from "aws-cdk-lib/assertions";
import { _AWS_EC2_INSTANCE } from "../test/unit/test-cfn-ts-schemas/aws-ec2-instance";

/**
 * make properties of `T` asignable Matcher and other arbitrary json objects
 */
type AlsoMatchable<T> = {
  [p in keyof T]?: T[p] | Matcher | {[key in string]: any}
}
/**
 * make properties of `T` asignable arbitrary json objects
 */
type AlsoAny<T> = {
  [p in keyof T]: T[p] | {[key in string]: any}
}

/**
 * CloudFormation Resource based on the definition at https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-product-attribute-reference.html
 */
interface BaseResource {
  CreationPolicy?: any
  DeletionPolicy?: "Delete" | "Retain" | "RetainExceptOnCreate" | "Snapshot"
  DependsOn?: string | string[]
  Metadata?: any
  UpdatePolicy?: any
  UpdateReplacePolicy?: "Delete" | "Retain" | "Snapshot"
  Condition?: string
}

export interface InputResource<T> extends AlsoMatchable<BaseResource> {Properties?: AlsoMatchable<T>, Type: string}
export interface InputResourceWithoutType<T> extends Omit<InputResource<T>, "Type"> {}
export interface OutputResource<T> extends AlsoAny<BaseResource> {
  Properties?: AlsoAny<T>
  Type: string
}

/**
 * interface of return value of TypedTemplate's methods
 */
export interface ReturnValue<T> {
  /**
   * logical id of cloudformation resources, parameters, outputs...
   */
  id: string
  /**
   * definition of cloudformation resources, parameters, outputs...
   */
  def: T
}

/**
 * interface of cloudformation template output
 */
interface Output {
  Description?: any
  Value: any
  Export?: {
    Name: any
  }
}
export interface InputOutput extends AlsoMatchable<Output> {}
export interface OutputOutput extends AlsoAny<Output> {}
/**
 * interface of cloudformation template parameter
 */
interface Parameter {
  AllowedPattern?: string 
  AllowedValues?: any[]
  ConstraintDescription?: string
  Default?: any
  Description?: string
  MaxLength?: number
  MaxValue?: number
  MinLength?: number
  MinValue?: number
  NoEcho?: boolean
  Type: string
}
export interface InputParamter extends AlsoMatchable<Parameter> {}
export interface OutputParameter extends AlsoAny<Parameter> {}

export type Condition = {
  [key in string]: {
    [key in string]: any
  }
}
export type Mapping = {
  [key in string]: {
    [key in string]: any
  }
}