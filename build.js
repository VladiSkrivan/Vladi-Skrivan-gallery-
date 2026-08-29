const fs = require('fs');
const path = require('path');

// Read individual painting files from data/paintings/
const paintingsDir = 'data/paintings';
const paintings = fs.readdirSync(paintingsDir)
  .filter(f => f.endsWith('.json'))
  .sort()
  .map(f => JSON.parse(fs.readFileSync(path.join(paintingsDir, f), 'utf8')));

// Read individual print files from data/prints/
const printsDir = 'data/prints';
const prints = fs.readdirSync(printsDir)
  .filter(f => f.endsWith('.json'))
  .sort()
  .map(f => JSON.parse(fs.readFileSync(path.join(printsDir, f), 'utf8')));

const content = `var paintings = ${JSON.stringify(paintings, null, 2)};\n\nvar prints = ${JSON.stringify(prints, null, 2)};\n`;
fs.writeFileSync('paintings.js', content);

console.log(`Built paintings.js: ${paintings.length} paintings, ${prints.length} prints`);
