import fs from "fs";

const target = "div";
const wrong = "motion.div";

for (const file of process.argv.slice(2)) {
  let s = fs.readFileSync(file, "utf8");
  const n = (s.match(/motion\.div/g) || []).length;
  s = s.split(wrong).join(target);
  fs.writeFileSync(file, s);
  console.log(file, n);
}
