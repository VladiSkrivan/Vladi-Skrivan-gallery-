const fs = require('fs');

const paintings = JSON.parse(fs.readFileSync('data/paintings.json', 'utf8'));
const prints = JSON.parse(fs.readFileSync('data/prints.json', 'utf8'));

const content = `var paintings = ${JSON.stringify(paintings, null, 2)};\n\nvar prints = ${JSON.stringify(prints, null, 2)};\n`;
fs.writeFileSync('paintings.js', content);

console.log(`Built paintings.js: ${paintings.length} paintings, ${prints.length} prints`);
