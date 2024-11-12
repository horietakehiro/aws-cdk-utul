import * as fs from "fs"
import * as fetch from "node-fetch"
import * as decompress from "decompress"
import { HttpsProxyAgent } from "https-proxy-agent"
import {
  compile,
  DEFAULT_OPTIONS,
  Options,
} from "json-schema-to-typescript"
import * as path from "path"


export const download = async (url:string, filepath:string) => {
  console.log(`download file from ${url} to ${filepath}`)
  let agent: undefined | HttpsProxyAgent<""> = undefined
  const proxy_url = process.env.https_proxy
  if (proxy_url !== undefined) {
    console.log(`use proxy ${proxy_url}`)
    agent = new HttpsProxyAgent(proxy_url)
  }
  const response = await fetch(url, {
    agent: agent
  })
  if (!(response.ok) || response.body === null) {
    throw Error(`file download failed from ${url} to ${filepath}`)
  }
  const writer = fs.createWriteStream(filepath)
  const s = await response.body.pipe(writer)
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

export const extractZip = async (zipfile: string, destDir: string) => {
  console.log(`extract zip file ${zipfile} into ${destDir}`)
  fs.mkdirSync(destDir, {recursive: true})
  await decompress(zipfile, destDir) 
}

export const skipEmpty = (tsCode:string) => {
  return tsCode.length <= 1
}

export class JSON2TSConvertor {
  option:Options
  skipPolicies: ((tsCode:string) => boolean)[]
  constructor(skipPolicies: ((tsCode:string) => boolean)[]) {
    this.skipPolicies = skipPolicies 
    this.option = {
      ...DEFAULT_OPTIONS,
      format: false, 
      ignoreMinAndMaxItems: true,
      maxItems: -1,
      bannerComment: ""
    }
  }
  /**
   * 
   * @param jsonFile src file
   * @param tsFile dest file
   */
  async convert(jsonFile: string, tsFile:string) {
    const json = JSON.parse(fs.readFileSync(jsonFile).toString())
    const resourceType = this.resourceTypeString(jsonFile)
    // definitions in handlers will cause erros, so make them empty. 
    const tsCode = await compile({...json, handlers: {}}, resourceType, this.option)
    // if generated tsCode meet at least one skip policy, skip saving it as .ts file.  
    if (this.skipPolicies.map(skipPolicy => skipPolicy(tsCode)).some(b => b)) {
      console.log(`converting from ${jsonFile} to ${tsFile} is skipped`)
      return
    }
    fs.writeFileSync(tsFile, tsCode)
  }

  /**
   * generate string like `_AWS_EC2_INSTANCE` from `some/path/aws-ec2-instance.json`
   * @param jsonFile 
   * @returns 
   */
  resourceTypeString(jsonFile:string): string {
    return "_" + path.basename(jsonFile, ".json").replace(/-/g, "_").toUpperCase()
  }
}

enum ReplaceString {
  KEBAB_RESOURCE_TYPE = "__KEBAB_RESOURCE_TYPE__",
  UPPER_RESOURCE_TYPE = "__UPPER_RESOURCE_TYPE__",
  NATIVE_RESOURCE_TYPE = "__NATIVE_RESOURCE_TYPE__"
}
export class ResourceFileGenerator {
  replaceString = ReplaceString
  headerStatement: string = [
    'import { InputResource, InputResourceWithoutType, OutputResource } from "./../typed-resource";',
    'export type RESOURCE<T> = (resource?: InputResourceWithoutType<T>) => InputResource<T>;',
    ""
  ].join("\n")
  importStatement:string = 'import { ___UPPER_RESOURCE_TYPE__ } from "./cfn-resource-types/__KEBAB_RESOURCE_TYPE__";'
  resourceTypeStatement:string = 'export const __UPPER_RESOURCE_TYPE__:RESOURCE<___UPPER_RESOURCE_TYPE__> = (resource) => {return {Type: "__NATIVE_RESOURCE_TYPE__", ...resource}}'
  encoding: BufferEncoding = "utf-8"
  resourceFile:string

  /**
   * 
   * @param resourceFile will be `src/types/cfn-resource-types.ts`
   */
  constructor(resourceFile:string) {
    this.resourceFile = resourceFile
    // re-create resource file
    fs.rmSync(this.resourceFile, {force: true})
    // write header strings
    fs.writeFileSync(this.resourceFile, this.headerStatement, {encoding: this.encoding})
  }

  /**
   * append import statement into resourecFile
   * @param tsFiles will be like `src/types/cfn-resource-types/aws-ec2-instance.ts`
   */
  appendImportStatements(tsFiles:string[]) {
    const importStatements = tsFiles.map((tsFile) => {
      // like `aws-ec2-instance`
      const kebabResourceType = path.basename(tsFile, ".ts")
      // like `AWS_EC2_INSTANCE`
      const upperResourceType = kebabResourceType.replace(/-/g, "_").toUpperCase()
      // create import statement
      return this.resourceFile, this.importStatement.replace(
        new RegExp(this.replaceString.KEBAB_RESOURCE_TYPE, "g"), kebabResourceType,
      ).replace(
        new RegExp(this.replaceString.UPPER_RESOURCE_TYPE, "g"), upperResourceType
      )}
    ).join("\n") + "\n"
    fs.appendFileSync(this.resourceFile, importStatements, {encoding: this.encoding})
  }

  /**
   * 
   * @param tsFiles will be like `src/types/cfn-resource-types/aws-ec2-instance.ts`
   * @param jsonDir will be like `cfn-json-schemas`
   */
  appendResourceTypeStatements(tsFiles:string[], jsonDir:string) {
    const resourceTypeStatements = tsFiles.map((tsFile, i) => {
      const body = fs.readFileSync(tsFile).toString()
      if (body.length === 1) {
        console.warn(`skip for empty tsFile ${tsFile}`)
        return
      }
      const kebabResourceType = path.basename(tsFile, ".ts")
      const upperResourceType = kebabResourceType.replace(/-/g, "_").toUpperCase()
      // will be like `AWS::EC2::Instance`
      const jsonFile = path.join(jsonDir, `${kebabResourceType}.json`)
      const nativeResourceType:string | undefined = JSON.parse(fs.readFileSync(jsonFile).toString(this.encoding)).typeName
      if (nativeResourceType === undefined) {throw Error(`failed to get native resource type for resource type ${kebabResourceType} from ${jsonFile}`)}
      
      // create resource type statement
      return this.resourceTypeStatement.replace(
        new RegExp(this.replaceString.UPPER_RESOURCE_TYPE, "g"), upperResourceType,
      ).replace(
        new RegExp(this.replaceString.NATIVE_RESOURCE_TYPE, "g"), nativeResourceType
      )
    }).join("\n") + "\n"

    fs.appendFileSync(this.resourceFile, resourceTypeStatements, {encoding: this.encoding})

  }
}

export class DirectoryStructure {
  jsonDir: string 
  tsDir: string
  resourceFile: string
  
  constructor(jsonDir:string, tsDir:string, resourceFile:string) {
    this.jsonDir = jsonDir
    this.tsDir = tsDir
    this.resourceFile = resourceFile
    console.log(`json dir : ${this.jsonDir}`)
    console.log(`ts dir : ${this.tsDir}`)
  }
  refresh() {
    [this.jsonDir, this.tsDir].forEach((dir) => {
      fs.rmSync(dir, {force: true, recursive: true})
      fs.mkdirSync(dir, {recursive: true})
      console.log(`re-created ${dir}`)
    })
    fs.rmSync(this.resourceFile , {force: true})
    fs.writeFileSync(this.resourceFile, "")
    console.log(`re-created ${this.resourceFile}`)
  }

  listAbsPaths(dir:string, ):string[] {
    const files = fs.readdirSync(dir, ).map(f => path.join(dir, f))
    console.log(`hit ${files.length} files at ${dir}`)
    return files
  }

  fromJSONFile2TSFile(jsonFile:string, tsDir:string):string {
    return path.join(tsDir, path.basename(jsonFile).replace(".json", ".ts"))
  }
}


export const main = async (region:string, url:string) => {
  try {
    const ds = new DirectoryStructure(
      path.join(__dirname, "..", "..", "cfn-json-schemas"),
      path.join(__dirname, "..", "..", "lib", "types", "cfn-resource-types"),
      path.join(__dirname, "..", "..", "lib", "types", "cfn-resource-types.ts")
    )
    ds.refresh()

    const zipFilepath = path.join(ds.jsonDir, `${region}.zip`)
    const jsonDirpath = path.join(ds.jsonDir, region)
    // download and extract cfn json schemas
    await download(url, zipFilepath)
    await extractZip(zipFilepath, jsonDirpath)

    const jsonFiles = ds.listAbsPaths(jsonDirpath)
    const converter = new JSON2TSConvertor([skipEmpty])
    await Promise.all(jsonFiles.map(async(jsonFile) => {
      try {
        const tsFile = ds.fromJSONFile2TSFile(jsonFile, ds.tsDir)
        await converter.convert(jsonFile, tsFile)
      } catch (e) {
        console.warn(`failed to convert ${jsonFile}`)
        console.warn(e)
      } 
    }))

    const tsFiles = ds.listAbsPaths(ds.tsDir)
    const generator = new ResourceFileGenerator(ds.resourceFile)
    generator.appendImportStatements(tsFiles)
    generator.appendResourceTypeStatements(tsFiles, jsonDirpath)

  } catch (e) {
    console.error(e)
    throw e
  } 


}
