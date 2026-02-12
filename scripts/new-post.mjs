import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
}

const rawName = process.argv.slice(2).join(" ").trim();

if (!rawName) {
  console.error("用法: yarn new <NEW_FILE>");
  process.exit(1);
}

const baseName = rawName.replace(/\.md$/i, "");
const now = new Date();
const year = String(now.getFullYear());
const targetDir = resolve(process.cwd(), "src/content/blog", year);
const targetFile = resolve(targetDir, `${baseName}.md`);

if (existsSync(targetFile)) {
  console.error(`文件已存在: ${targetFile}`);
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });

const content = `---
title: ${baseName}
date: ${formatDate(now)}
permalink: ${baseName}
tags: []
categories: []
draft: true
heroImage:
---

`;

writeFileSync(targetFile, content, "utf8");
console.log(`已创建: ${targetFile}`);
