const { spawnSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");
const result = spawnSync("node", ["scripts/generate-hematologia-banco.mjs"], {
  cwd: root,
  encoding: "utf8",
});

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);
process.exit(result.status ?? 1);
