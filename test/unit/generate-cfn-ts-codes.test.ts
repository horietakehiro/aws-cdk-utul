import * as path from "path"
import * as fs from "fs"
import { DirectoryStructure, download, extractZip, JSON2TSConvertor, ResourceFileGenerator, skipEmpty } from "../../scripts/generate-cfn-ts-codes/generate-cfn-ts-codes"

const tmpDir = path.join(__dirname, "tmp")
beforeEach(() => {
  // refresh directory
  fs.rmSync(tmpDir, {force: true, recursive: true})
  fs.mkdirSync(tmpDir)
})

describe("download function", () => {
  test("download fiile and save it in local directory", async () => {
    const url = "https://public-artifact-bucket-382098889955-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/test-files/test-cfn-json-schemas.zip"
    const localFilepath = path.join(tmpDir, "test.zip")
    // make sure there is no files in tmp directory
    expect(fs.existsSync(localFilepath)).toBe(false)

    await download(url, localFilepath)
    expect(fs.existsSync(localFilepath)).toBe(true)
  })
})

describe("extract function", () => {
  const zipFilepath = path.join(__dirname, "test-cfn-json-schemas.zip")
  const extractDir = path.join(tmpDir, "extract")
  beforeEach(() => {
    fs.rmSync(extractDir, {force: true, recursive: true})
    fs.mkdirSync(extractDir)
  })
  test("extract zip file into a sub directory", async () => {
    // make sure there is no files in extract directory
    expect(fs.readdirSync(extractDir).length).toBe(0)

    await extractZip(zipFilepath, extractDir)
    expect(fs.readdirSync(extractDir).length).toBe(2)
    
  })
})

describe("DirectoryStructure class", () => {
  const jsonDir = path.join(tmpDir, "json")
  const tsDir = path.join(tmpDir, "ts")
  const resourceFile = path.join(tmpDir, "resource.ts")
  test("refresh directory", () => {
    const ds = new  DirectoryStructure(jsonDir, tsDir, resourceFile)
    
    const testJsonFile = path.join(ds.jsonDir, "test.json")
    const testTSFile = path.join(ds.jsonDir, "test.ts")
    fs.mkdirSync(ds.jsonDir, {recursive: true})
    fs.mkdirSync(ds.tsDir, {recursive: true})
    fs.writeFileSync(testJsonFile, "")
    fs.writeFileSync(testTSFile, "")

    ds.refresh()
    expect(fs.existsSync(testJsonFile)).toBe(false)
    expect(fs.existsSync(testTSFile)).toBe(false)
    expect(fs.existsSync(ds.jsonDir)).toBe(true)
    expect(fs.existsSync(ds.tsDir)).toBe(true)
    expect(fs.existsSync(ds.resourceFile)).toBe(true)
  })

  test("list files in a directory", () => {
    const ds = new  DirectoryStructure(jsonDir, tsDir, resourceFile)
    ds.refresh()
    fs.writeFileSync(path.join(ds.jsonDir, "1.json"), "")
    fs.writeFileSync(path.join(ds.jsonDir, "2.json"), "")
    fs.writeFileSync(path.join(ds.jsonDir, "3.json"), "")

    const files = ds.listAbsPaths(ds.jsonDir)
    expect(files.length).toBe(3)
    files.forEach((f) => {
      expect(f.startsWith(ds.jsonDir)).toBe(true)
    })
  })

  test("create ts filepath from json filepath", () => {
    const ds = new DirectoryStructure(jsonDir, tsDir, resourceFile)
    const jsonFile = path.join(ds.jsonDir, "test.json")
    const tsFile = ds.fromJSONFile2TSFile(jsonFile, ds.tsDir)
    expect(path.join(ds.tsDir, "test.ts")).toBe(tsFile)
  })
})

describe("JSON2TSConvertor class", () => {
  const jsonFile = path.join(__dirname, "test-cfn-json-schemas", "aws-ec2-vpc.json")
  const tsFile = path.join(tmpDir, "aws-ec2-vpc.ts")
  test("convert json to ts", async () => {
    expect(fs.existsSync(tsFile)).toBe(false)
    const convertor = new JSON2TSConvertor([])
    await convertor.convert(jsonFile, tsFile)

    expect(fs.existsSync(tsFile)).toBe(true)
    expect(fs.readFileSync(tsFile).toString().includes("export interface _AWS_EC2_VPC")).toBe(true)
  })
  test("skip saving file if skip policies are met", async () => {
    expect(fs.existsSync(tsFile)).toBe(false)
    const convertor = new JSON2TSConvertor([
      (tsCode:string) => {return true}
    ])
    await convertor.convert(jsonFile, tsFile)
    expect(fs.existsSync(tsFile)).toBe(false)
  })

  test("skipEmpty return true if string is empty", () => {
    expect(skipEmpty("")).toBe(true)
    expect(skipEmpty("\n")).toBe(true)
  })
})

describe("ResourceFileGenerator class", () => {
  const resourceFile = path.join(tmpDir, "resource.ts")
  const tsFiles = fs.readdirSync(
    path.join(__dirname, "test-cfn-ts-schemas")
  ).map(f => path.join(__dirname, "test-cfn-ts-schemas", f))
  const jsonDir = path.join(__dirname, "test-cfn-json-schemas")

  test("re-create resorucc file and write header statements when initializing", () => {
    expect(fs.existsSync(resourceFile)).toBe(false)
    fs.writeFileSync(resourceFile, "exist")
    new ResourceFileGenerator(resourceFile)
    expect(fs.readFileSync(resourceFile).toString().startsWith("import ")).toBe(true)    
  })
  test("append import statements into resource file", () => {
    const generator = new ResourceFileGenerator(resourceFile)
    generator.appendImportStatements(tsFiles)
    expect(fs.readFileSync(resourceFile).toString().includes(
      'import { _AWS_EC2_INSTANCE } from "./cfn-resource-types/aws-ec2-instance";'
    )).toBe(true)
    expect(fs.readFileSync(resourceFile).toString().includes(
      'import { _AWS_EC2_VPC } from "./cfn-resource-types/aws-ec2-vpc";'
    )).toBe(true)
  })

  test("append resource type statement into resource file", () => {
    const generator = new ResourceFileGenerator(resourceFile)
    generator.appendResourceTypeStatements(tsFiles, jsonDir)
    expect(fs.readFileSync(resourceFile).toString().includes(
      'export const AWS_EC2_INSTANCE:RESOURCE<_AWS_EC2_INSTANCE> = (resource) => {return {Type: "AWS::EC2::Instance", ...resource}}'
    )).toBe(true)
    expect(fs.readFileSync(resourceFile).toString().includes(
      'export const AWS_EC2_VPC:RESOURCE<_AWS_EC2_VPC> = (resource) => {return {Type: "AWS::EC2::VPC", ...resource}}'
    )).toBe(true)    
  })
})