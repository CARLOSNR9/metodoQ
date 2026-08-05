const fs = require('fs');
const lines = fs.readFileSync('C:/Users/CARLO/.gemini/antigravity-ide/brain/9bfa2923-f044-4d09-96fa-0d83adfadb05/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');
const userLines = lines.filter(l => l.includes('"type":"USER_INPUT"'));
const last = JSON.parse(userLines[userLines.length - 1]).content;
console.log(last.slice(-2000));
