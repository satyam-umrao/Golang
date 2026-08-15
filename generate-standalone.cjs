const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Find JS and CSS in dist/assets
const assets = fs.readdirSync(path.join(distDir, 'assets'));
const jsFile = assets.find(f => f.endsWith('.js'));
const cssFile = assets.find(f => f.endsWith('.css'));

if (cssFile) {
  const cssContent = fs.readFileSync(path.join(distDir, 'assets', cssFile), 'utf8');
  html = html.replace(/<link rel="stylesheet"[^>]*>/, `<style>\n${cssContent}\n</style>`);
}

if (jsFile) {
  const jsContent = fs.readFileSync(path.join(distDir, 'assets', jsFile), 'utf8');
  html = html.replace(/<script type="module"[^>]*><\/script>/, `<script type="module">\n${jsContent}\n</script>`);
}

fs.writeFileSync(path.join(__dirname, 'golang-docs.html'), html);
console.log('Successfully generated self-contained standalone golang-docs.html (size: ' + Math.round(html.length / 1024) + ' KB)');
