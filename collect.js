const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.go')) {
      results.push(full);
    }
  });
  return results;
}

const root = __dirname;
const goFiles = walk(root);
const parsed = goFiles.map((fp, idx) => {
  const rel = path.relative(root, fp).replace(/\\/g, '/');
  const content = fs.readFileSync(fp, 'utf-8');
  const parts = rel.split('/');
  const folder = parts.length > 1 ? parts[0] : '';
  const filename = parts[parts.length - 1];
  return {
    id: idx + 1,
    folder,
    filename,
    relativePath: rel,
    code: content,
  };
});

fs.writeFileSync(path.join(root, 'programs-data.json'), JSON.stringify(parsed, null, 2));
console.log('Successfully saved', parsed.length, 'programs to programs-data.json');
