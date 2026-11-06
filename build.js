const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const workerDir = path.join(distDir, '_worker.js');

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(workerDir, { recursive: true });

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// 1. Static asset
fs.writeFileSync(path.join(distDir, 'index.html'), html);

// 2. Cloudflare Worker fallback
const workerCode = `export default {
  async fetch(request, env) {
    return new Response(${JSON.stringify(html)}, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};
`;

fs.writeFileSync(path.join(workerDir, 'index.js'), workerCode);
console.log('Build complete: dist/index.html & dist/_worker.js created.');
