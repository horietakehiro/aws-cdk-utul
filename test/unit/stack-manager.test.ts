import { v4 as uuidv4 } from "uuid"
import {NodeHttpHandler} from "@smithy/node-http-handler"
import { HttpsProxyAgent } from "hpagent"
import { 
  CfnOutput,
  RemovalPolicy,
  Stack,
  aws_s3 as s3,
} from "aws-cdk-lib"

import {
  StackManager
} from "../../lib/stack-manager"
import { CloudFormationClient, DeleteStackCommand, DescribeStacksCommand, StackStatus } from "@aws-sdk/client-cloudformation"

const TIMEOUT = 10 * 60 * 1000

const buildRequestHandler = ():NodeHttpHandler => {
    const httpProxyEnvVar = process.env.http_proxy
    const proxyAgent = httpProxyEnvVar ? new HttpsProxyAgent({proxy: httpProxyEnvVar}) : undefined
    return new NodeHttpHandler({
        httpAgent: proxyAgent,
        httpsAgent: proxyAgent,
    })
}
const client = new CloudFormationClient({
  requestHandler: buildRequestHandler()
})

const uniqueStackName = () => `test-stack-${uuidv4()}`
const removalBucket = (stack:Stack, id:string) => {
  const b = new s3.Bucket(stack, id, {})
  b.applyRemovalPolicy(RemovalPolicy.DESTROY)
  return b
}

describe("StackManager", () => {
  test("deployStack create a new stack if not created yet", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")
    
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})

    const describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    const stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    await client.send(new DeleteStackCommand({StackName: stack.stackName}))

  }, TIMEOUT)

  test("deployStack can customize parameters", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")
    
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({
      Tags: [{Key: "hoge", Value: "fuga"}]
    }, 45)

    const describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    const stacks = describeStacksResponse.Stacks ?? []
    const tags = stacks[0].Tags ?? []
    expect(tags[0].Key).toBe("hoge")
    expect(tags[0].Value).toBe("fuga")

    await client.send(new DeleteStackCommand({StackName: stack.stackName}))

  }, TIMEOUT)

  test("deployStack raise error before deployment when maxWaitTimeSeconds is not greater than 30", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")
    
    const stackManager = new StackManager(stack, client)
    expect(stackManager.deployStack({}, 30)).rejects.toThrow("maxWaitTimeInSeconds must be greater than 30")

  }, TIMEOUT)

  test("deployStack update a stack if created already", async () => {
    const stackName = uniqueStackName()
    let stack = new Stack(undefined, stackName)
    removalBucket(stack, "bucket1")

    let stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    let describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    let stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    stack = new Stack(undefined, stackName)
    removalBucket(stack, "bucket2")
    stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.UPDATE_COMPLETE)

    await client.send(new DeleteStackCommand({StackName: stack.stackName}))

  }, TIMEOUT)

  test("deployStack does not raise error if no update to be applied to the stack", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")    
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    let describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    let stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    await stackManager.deployStack({})
    describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    await client.send(new DeleteStackCommand({StackName: stack.stackName}))
  }, TIMEOUT)

 test("destroyStack delete stack asyncronoucely with default config", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")    
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    let describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    let stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    const start = Date.now()
    await stackManager.destroyStack({})
    const end = Date.now()

    expect(end - start).toBeLessThan(3 * 1000)
 }, TIMEOUT)
 test("destroyStack delete stack syncronoucely", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")    
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    let describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    let stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    const start = Date.now()
    await stackManager.destroyStack({}, true)
    const end = Date.now()

    expect(end - start).toBeGreaterThan(5 * 1000)
 }, TIMEOUT)

 test("getOutput get output value of stack", async () => {
    const stack = new Stack(undefined, uniqueStackName())
    removalBucket(stack, "bucket")    
    new CfnOutput(stack, "Output1", {value: "value1"})
    new CfnOutput(stack, "Output2", {value: "value2"})
    const stackManager = new StackManager(stack, client)
    await stackManager.deployStack({})
    let describeStacksResponse = await client.send(new DescribeStacksCommand({StackName: stack.stackName}))
    let stacks = describeStacksResponse.Stacks ?? []
    expect(stacks[0].StackStatus).toBe(StackStatus.CREATE_COMPLETE)

    expect(await stackManager.getStackOutput("Output1")).toBe("value1")
    expect(await stackManager.getStackOutput("Output2")).toBe("value2")

    await stackManager.destroyStack({}, true)
 }, TIMEOUT)
})