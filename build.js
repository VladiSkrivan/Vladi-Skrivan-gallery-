const fs = require('fs');

const paintingsData = JSON.parse(fs.readFileSync('data/paintings.json', 'utf8'));
const printsData = JSON.parse(fs.readFileSync('data/prints.json', 'utf8'));

// Support both flat array and {paintings:[...]} wrapper (Sveltia CMS uses wrapper)
const paintings = Array.isArray(paintingsData) ? paintingsData : (paintingsData.paintings || []);
const prints    = Array.isArray(printsData)    ? printsData    : (printsData.prints    || []);

const content = `var paintings = ${JSON.stringify(paintings, null, 2)};\n\nvar prints = ${JSON.stringify(prints, null, 2)};\n`;
fs.writeFileSync('paintings.js', content);

console.log(`Built paintings.js: ${paintings.length} paintings, ${prints.length} prints`);
