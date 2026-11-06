const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
const workerDir = path.join(dist, '_worker.js');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(workerDir, { recursive: true });

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// 1. Static asset
fs.writeFileSync(path.join(dist, 'index.html'), html);

// 2. Cloudflare Worker fallback
const worker = `export default {
  async fetch(req) {
    return new Response(${JSON.stringify(html)}, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};
`;
fs.writeFileSync(path.join(workerDir, 'index.js'), worker);

console.log('Build completed successfully.');
