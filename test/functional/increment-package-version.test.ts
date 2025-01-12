import {
  incrementPatchVersion,
  loadPackageInfo,
  savePackageInfo,
  SemanticVersion,
} from "../../scripts/increment-package-version/increment-package-version";
import * as path from "path";

describe("loadPackageInfo", () => {
  const filepath = path.join(__dirname, "test-package.json");

  test("read package info and get package version", () => {
    const packageInfo = loadPackageInfo(filepath);
    expect(packageInfo.version).toBe("1.0.0");
  });
});

describe("SemanticVersion", () => {
  test("valid format", () => {
    const semanticVersion = SemanticVersion.fromString("1.10.100");
    expect(semanticVersion.major).toBe(1);
    expect(semanticVersion.minor).toBe(10);
    expect(semanticVersion.patch).toBe(100);
  });

  const invalidVersions = ["string", "1", "1.0", "1.string"];
  invalidVersions.forEach((invalidVersion) => {
    test(`invalid version : ${invalidVersion}`, () => {
      expect(() => SemanticVersion.fromString(invalidVersion)).toThrow(
        `Invalid format for semantic version : ${invalidVersion}`
      );
    });
  });

});

describe("incrementPatchVersion", () => {
  test("return incremented version string", () => {
    expect(incrementPatchVersion("1.0.0")).toBe("1.0.1");
  });
});

describe("savePackageInfo", () => {
  const filepath = path.join(__dirname, "new-package.json")
  test("save package info", () => {
    savePackageInfo(filepath, {version: "1.0.1"})
  })
})
