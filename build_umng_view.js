const fs = require('fs');

let text = fs.readFileSync('src/components/dashboard/ucc-convocatorias-view.tsx', 'utf-8');
text = text.replace(/Ucc/g, 'Umng').replace(/UCC/g, 'UMNG').replace(/ucc-/g, 'umng-');

// Also update the description text: "100 preguntas, 3 horas" -> "100 preguntas, 2 horas"
text = text.replace('100 preguntas, 3 horas', '100 preguntas, 2 horas');

fs.writeFileSync('src/components/dashboard/umng-convocatorias-view.tsx', text, 'utf-8');
console.log('done view');
