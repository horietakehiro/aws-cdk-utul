import { main } from "./generate-cfn-ts-codes";

/**
 * source: https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html
 * 
 * **currently, using only schemas at us-east-1 region**
 */
const urlByRegions = {
  // "us-east-2": "https://schema.cloudformation.us-east-2.amazonaws.com/CloudformationSchema.zip",
  "us-east-1": "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip",
  // "us-west-1": "https://schema.cloudformation.us-west-1.amazonaws.com/CloudformationSchema.zip",
  // "us-west-2": "https://schema.cloudformation.us-west-2.amazonaws.com/CloudformationSchema.zip",
  // "af-south-1": "https://schema.cloudformation.af-south-1.amazonaws.com/CloudformationSchema.zip",
  // "ap-east-1": "https://schema.cloudformation.ap-east-1.amazonaws.com/CloudformationSchema.zip",
  // "ap-south-2": "https://schema.cloudformation.ap-south-2.amazonaws.com/CloudformationSchema.zip",
  // "ap-southeast-3": "https://schema.cloudformation.ap-southeast-3.amazonaws.com/CloudformationSchema.zip",
  // "ap-southeast-4": "https://schema.cloudformation.ap-southeast-4.amazonaws.com/CloudformationSchema.zip",
  // "ap-south-1": "https://schema.cloudformation.ap-south-1.amazonaws.com/CloudformationSchema.zip",
  // "ap-northeast-3": "https://schema.cloudformation.ap-northeast-3.amazonaws.com/CloudformationSchema.zip",
  // "ap-northeast-2": "https://schema.cloudformation.ap-northeast-2.amazonaws.com/CloudformationSchema.zip",
  // "ap-southeast-1": "https://schema.cloudformation.ap-southeast-1.amazonaws.com/CloudformationSchema.zip",
  // "ap-southeast-2": "https://schema.cloudformation.ap-southeast-2.amazonaws.com/CloudformationSchema.zip",
  // "ap-northeast-1": "https://schema.cloudformation.ap-northeast0.amazonaws.com/CloudformationSchema.zip",
  // "ca-central-1": "https://schema.cloudformation.ca-central-1.amazonaws.com/CloudformationSchema.zip",
  // "ca-west-1": "https://schema.cloudformation.ca-west-1.amazonaws.com/CloudformationSchema.zip",
  // "cn-north-1": "https://schema.cloudformation.cn-north-1.amazonaws.com.cn/CloudformationSchema.zip",
  // "cn-northwest-1": "https://schema.cloudformation.cn-northwest-1.amazonaws.com.cn/CloudformationSchema.zip",
  // "eu-central-1": "https://schema.cloudformation.eu-central-1.amazonaws.com/CloudformationSchema.zip",
  // "eu-west-1": "https://schema.cloudformation.eu-west-1.amazonaws.com/CloudformationSchema.zip",
  // "eu-west-2": "https://schema.cloudformation.eu-west-2.amazonaws.com/CloudformationSchema.zip",
  // "eu-south-1": "https://schema.cloudformation.eu-south-1.amazonaws.com/CloudformationSchema.zip",
  // "eu-west-3": "https://schema.cloudformation.eu-west-3.amazonaws.com/CloudformationSchema.zip",
  // "eu-south-2": "https://schema.cloudformation.eu-south-2.amazonaws.com/CloudformationSchema.zip",
  // "eu-north-1": "https://schema.cloudformation.eu-north-1.amazonaws.com/CloudformationSchema.zip",
  // "eu-central-2": "https://schema.cloudformation.eu-central-2.amazonaws.com/CloudformationSchema.zip",
  // "il-central-1": "https://schema.cloudformation.il-central-1.amazonaws.com/CloudformationSchema.zip",
  // "me-south-1": "https://schema.cloudformation.me-south-1.amazonaws.com/CloudformationSchema.zip",
  // "me-central-1":  "https://schema.cloudformation.me-central-1.amazonaws.com/CloudformationSchema.zip",
  // "sa-east-1": "https://schema.cloudformation.sa-east-1.amazonaws.com/CloudformationSchema.zip",
  // "us-gov-east-1" : "https://schema.cloudformation.us-gov-east-1.amazonaws.com/CloudformationSchema.zip",
  // "us-gov-west-1": "https://schema.cloudformation.us-gov-west-1.amazonaws.com/CloudformationSchema.zip",
}
main("us-east-1", "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip")