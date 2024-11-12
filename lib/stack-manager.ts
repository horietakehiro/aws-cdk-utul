// import {
//   CloudFormationClient,
//   CloudFormationServiceException,
//   CreateStackCommand,
//   CreateStackCommandInput,
//   DeleteStackCommand,
//   DeleteStackCommandInput,
//   DescribeStacksCommand,
//   UpdateStackCommand,
//   UpdateStackCommandInput,
//   waitUntilStackCreateComplete,
//   waitUntilStackDeleteComplete,
//   waitUntilStackUpdateComplete,
//   Stack as cfnStack,
// } from "@aws-sdk/client-cloudformation";
// import { Stack as cdkStack } from "aws-cdk-lib";
// import { Template } from "aws-cdk-lib/assertions";

// type DeployStackInput = Omit<
//   CreateStackCommandInput | UpdateStackCommandInput,
//   "StackName"
// >;
// type DestroyStackInput = Omit<DeleteStackCommandInput, "StackName">;

// /**
//  * Stack Manager makes it easier and more efficient that you deploy(and destroy) stacks with short-term-lifecycle duraing tests.
//  */
// export class StackManager {
//   readonly stack: cdkStack;
//   readonly client: CloudFormationClient;

//   /**
//    *
//    * @param stack stack to be managed
//    * @param client cloudformation sdk client to use
//    */
//   constructor(stack: cdkStack, client: CloudFormationClient) {
//     this.stack = stack;
//     this.client = client;
//   }

//   /**
//    * get specific output value from the stack
//    * @param outputKey logical id of Output that you want to get
//    * @returns
//    */
//   async getStackOutput(outputKey: string): Promise<string> {
//     console.debug(`get outputs from stack ${this.stack.stackName}`);
//     const describeStacksResponse = await this.client.send(
//       new DescribeStacksCommand({
//         StackName: this.stack.stackName,
//       })
//     );
//     const stacks = describeStacksResponse.Stacks ?? [];
//     if (stacks.length === 0) {
//       throw Error(
//         `failed to get output value with key ${outputKey} from stack ${this.stack}`
//       );
//     }
//     const outputs = stacks[0].Outputs ?? [];
//     console.debug(
//       `outputs of stack ${this.stack.stackName} are : ${JSON.stringify(outputs)}`
//     );
//     const output = outputs.filter((o) => o.OutputKey === outputKey);
//     if (output.length === 0 || output[0].OutputValue === undefined) {
//       throw Error(
//         `failed to get output value with key ${outputKey} from stack ${this.stack}`
//       );
//     }
//     return output[0].OutputValue;
//   }

//   /**
//    * Deploy the specified stack.
//    *
//    * If the specified stack has not been created yet, create new one. If already created, update it.
//    *
//    * This method waits until stack deployment gets completed.
//    * @param deployStackInput
//    * @param maxWaitTimeInSeconds the default values is `60 * 60 = 1hour`. Allowed minimum value is `31 seconds`
//    */
//   async deployStack(
//     deployStackInput: DeployStackInput,
//     maxWaitTimeInSeconds?: number
//   ) {
//     if (maxWaitTimeInSeconds === undefined) {
//       console.debug("set 1hour as maxWaitTimeInSeconds default value");
//       maxWaitTimeInSeconds = 60 * 60;
//     }
//     if (maxWaitTimeInSeconds <= 30) {
//       throw  Error("maxWaitTimeInSeconds must be greater than 30")
//     }
//     console.debug(`check if stack ${this.stack.stackName} exists`);
//     let existStacks: cfnStack[] = [];
//     try {
//       const describeStaacksResponse = await this.client.send(
//         new DescribeStacksCommand({
//           StackName: this.stack.stackName,
//         })
//       );
//       existStacks = describeStaacksResponse.Stacks ?? [];
//     } catch (error) {
//       if (
//         !(
//           error instanceof CloudFormationServiceException &&
//           error.message.includes("does not exist")
//         )
//       ) {
//         throw error;
//       }
//     }
//     if (existStacks.length === 0) {
//       console.debug(`stack ${this.stack.stackName} does not exist, create new`);
//       await this.client.send(
//         new CreateStackCommand({
//           ...deployStackInput,
//           StackName: this.stack.stackName,
//           TemplateBody: JSON.stringify(Template.fromStack(this.stack)),
//         })
//       );
//       console.debug(
//         `wait until deploying of stack ${this.stack.stackName} completes`
//       );
//       await waitUntilStackCreateComplete(
//         { client: this.client, maxWaitTime: maxWaitTimeInSeconds },
//         { StackName: this.stack.stackName }
//       );
//     } else {
//       try {
//         console.debug(`stack ${this.stack.stackName} exists, update it`);
//         await this.client.send(
//           new UpdateStackCommand({
//             ...deployStackInput,
//             StackName: this.stack.stackName,
//             TemplateBody: JSON.stringify(Template.fromStack(this.stack)),
//           })
//         );
//         console.debug(
//           `wait until deploying of stack ${this.stack.stackName} completes`
//         );
//         await waitUntilStackUpdateComplete(
//           { client: this.client, maxWaitTime: maxWaitTimeInSeconds },
//           { StackName: this.stack.stackName }
//         );
//       } catch (error) {
//         if (
//           error instanceof CloudFormationServiceException &&
//           error.message === "No updates are to be performed."
//         ) {
//           console.debug("no updates are to be performed");
//         } else {
//           throw error;
//         }
//       }
//     }
//   }
//   /**
//    * Destroy the stack
//    * @param destroyStackInput
//    * @param wait If `true`, this method waits until stack deletion complete. The default value is 'false'
//    * @param maxWaitTimeInSeconds the default value is `60 * 60 = 1hour`. Allowed minimum value is `31 seconds`. This param will be used only when parameter `wait` is set to 'true'
//    */
//   async destroyStack(
//     destroyStackInput: DestroyStackInput,
//     wait?: boolean,
//     maxWaitTimeInSeconds?: number
//   ): Promise<void> {
//     console.debug(`destroy stack ${this.stack.stackName}`);
//     await this.client.send(
//       new DeleteStackCommand({
//         StackName: this.stack.stackName,
//         ...destroyStackInput,
//       })
//     );
//     if (!wait || wait === undefined) {
//       console.debug("return asynchronously");
//       return;
//     }

//     console.debug("wait until stack deletion complets");
//     if (maxWaitTimeInSeconds === undefined) {
//       maxWaitTimeInSeconds = 60 * 60;
//     }
//     if (maxWaitTimeInSeconds <= 30) {
//       throw  Error("maxWaitTimeInSeconds must be greater than 30")
//     }
//     await waitUntilStackDeleteComplete(
//       { client: this.client, maxWaitTime: maxWaitTimeInSeconds },
//       { StackName: this.stack.stackName }
//     );
//     return;
//   }
// }
