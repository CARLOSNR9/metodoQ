const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = "C:\\Users\\CARLO\\.gemini\\antigravity-ide\\brain\\e99ec606-e376-48a2-bbac-cdeb8c9bbd94\\media__1787293717996.pdf";

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    console.log("Extracted text length:", data.text.length);
    console.log("Snippet:", data.text.substring(0, 500));
}).catch(err => {
    console.error("PDF parsing failed:", err);
});
