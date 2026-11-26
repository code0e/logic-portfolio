export function publicAssetPath(path: string): string {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
    .replace(/^\/?/, "/");
}
