import fs from "fs";

const p = "src/components/demo/demo-view.tsx";
let s = fs.readFileSync(p, "utf8");

const bad = `                            : formatTime(totalSeconds)}
                       </motion.div>
                    )}
                 </motion.div>`;

const good = `                            : formatTime(totalSeconds)}
                       </div>
                    )}
                 </div>`;

if (!s.includes(bad)) {
  console.error("pattern not found");
  process.exit(1);
}

s = s.replace(bad, good);
fs.writeFileSync(p, s);
console.log("fixed");
