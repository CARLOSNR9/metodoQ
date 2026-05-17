import fs from "fs";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node fix-div-close.mjs <file>");
  process.exit(1);
}

const wrong = ["<", "/motion.div>"].join("");
const right = ["<", "/div>"].join("");
const lines = fs.readFileSync(file, "utf8").split("\n");
const stack = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (/^\s*<motion\.div[\s>]/.test(line)) stack.push("motion");
  else if (/^\s*<div[\s>]/.test(line)) stack.push("plain");
  else if (line.includes(wrong)) {
    const t = stack.pop();
    if (t === "plain") line = line.replaceAll(wrong, right);
  }
  lines[i] = line;
}

fs.writeFileSync(file, lines.join("\n"));
console.log("ok", file, wrong, "->", right);
