import fs from 'fs';
import path from 'path';
const distPath = path.join(process.cwd(), 'dist');
function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) scanDirectory(fullPath);
    else if (['.map', '.log', '.bak'].includes(path.extname(file)) || ['.env', '.git', 'package.json'].includes(file)) {
      console.error(`🚨 SECURITY FAILURE: ${fullPath}`);
      process.exit(1);
    }
  }
}
scanDirectory(distPath);
console.log('✅ Build output is clean.');
