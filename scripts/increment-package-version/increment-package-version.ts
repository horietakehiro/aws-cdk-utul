import * as fs from "fs";

interface PackageInfo {
  version: string;
}
export const loadPackageInfo = (filepath: string): PackageInfo => {
  console.log(`load package info from ${filepath}`);
  const packageInfo = JSON.parse(fs.readFileSync(filepath).toString());
  console.log(`current version : ${packageInfo.version}`);
  return packageInfo;
};
export class SemanticVersion {
  major: number;
  minor: number;
  patch: number;

  private constructor(versionString: string) {
    const elems = versionString.split(".");
    if (elems.length !== 3) {
      throw Error(`Invalid format for semantic version : ${versionString}`);
    }

    this.major = Number(elems[0]);
    this.minor = Number(elems[1]);
    this.patch = Number(elems[2]);

    if (isNaN(this.major) || isNaN(this.minor) || isNaN(this.patch)) {
      throw Error(`Invalid format for semantic version : ${versionString}`);
    }
  }

  static fromString(versionString: string): SemanticVersion {
    return new SemanticVersion(versionString);
  }
}
export const incrementPatchVersion = (
  semanticVersionString: string
): string => {
  const semanticVersion = SemanticVersion.fromString(semanticVersionString);
  const newVersion = `${semanticVersion.major}.${semanticVersion.minor}.${semanticVersion.patch + 1}`;
  console.log(`incremented new version : ${newVersion}`);
  return newVersion;
};
export const savePackageInfo = (filepath: string, packageInfo: PackageInfo) => {
  console.log(`save package info to ${filepath}`);
  fs.writeFileSync(filepath, JSON.stringify(packageInfo, null, 2));
};
export const main = async (packageFilepath: string) => {
  const packageInfo = loadPackageInfo(packageFilepath);

  const newVersion = incrementPatchVersion(packageInfo.version);

  savePackageInfo(packageFilepath, { ...packageInfo, version: newVersion });
};
