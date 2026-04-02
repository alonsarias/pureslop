#!/usr/bin/env node

import { readFileSync, copyFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
  Usage: npx pureslop [options]

  Copies PURESLOP.md into your project root.

  Options:
    --force    Overwrite existing PURESLOP.md
    --version  Show version number
    --help     Show this message
`);
  process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
  const pkg = JSON.parse(
    readFileSync(join(__dirname, "..", "package.json"), "utf8"),
  );
  console.log(pkg.version);
  process.exit(0);
}

const src = join(__dirname, "..", "PURESLOP.md");
const dest = join(process.cwd(), "PURESLOP.md");
const force = args.includes("--force") || args.includes("-f");

if (existsSync(dest) && !force) {
  console.error("PURESLOP.md already exists. Use --force to overwrite.");
  process.exit(1);
}

copyFileSync(src, dest);
console.log(
  "PURESLOP.md copied. Your agent will now produce pure, unadulterated slop.",
);
