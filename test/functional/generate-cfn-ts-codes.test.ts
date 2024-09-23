import * as path from "path"
import * as fs from "fs"
import { main } from "../../scripts/generate-cfn-ts-codes/generate-cfn-ts-codes"
beforeEach(() => {})

const tsDir = path.join(__dirname, "..", "..", "src", "types", "cfn-resource-types")
const tsFile = path.join(__dirname, "..", "..", "src", "types", "cfn-resource-types.ts")
const url = "https://public-artifact-bucket-382098889955-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/test-files/test-cfn-json-schemas.zip"
const region = "test-region"

describe("generate-cfn-ts-codes", () => {
  beforeAll(() => {
    fs.rmSync(tsDir, {force: true, recursive: true})
    fs.rmSync(tsFile, {force: true})
  })
  test("successfully generate ts files for all reosurce types", async () => {
    await main(region, url)

    expect(fs.readdirSync(tsDir).length).toBe(2)
    expect(fs.readFileSync(tsFile).toString().split("\n").length).toBe(7)

  }, 1000 * 60 * 5) // wailt 5min
})