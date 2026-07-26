const fs = require('fs');
const jsx = fs.readFileSync('src/Components/Routes/Main/Home.jsx', 'utf8');
const css = fs.readFileSync('src/Components/Routes/Main/Home.css', 'utf8');

// Find all classes in Home.jsx
const jsxClasses = new Set();
const matches = jsx.matchAll(/className=["']([^"']+)["']/g);
for (const match of matches) {
  const classes = match[1].split(/\s+/);
  classes.forEach(c => jsxClasses.add(c));
}

// Find all classes defined in Home.css
const cssClasses = new Set();
const cssMatches = css.matchAll(/\.([a-zA-Z0-9_-]+)/g);
for (const match of cssMatches) {
  cssClasses.add(match[1]);
}

const unused = [...cssClasses].filter(c => !jsxClasses.has(c));
console.log('Unused classes in Home.css:');
console.log(unused.join(', '));
