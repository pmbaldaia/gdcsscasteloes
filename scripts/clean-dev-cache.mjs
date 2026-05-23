import { rmSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const viteCache = resolve(root, "node_modules/.cache/vite");

if (existsSync(viteCache)) {
  rmSync(viteCache, { recursive: true, force: true });
  console.log("✓ Cache Vite removida");
}
