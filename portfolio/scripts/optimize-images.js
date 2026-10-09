import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
async function processImages() {
  const outputBase = 'public/optimized';
  if (!fs.existsSync(outputBase)) fs.mkdirSync(outputBase, { recursive: true });
  for (const dir of ['src/assets/images/detailing', 'src/assets/images/projects']) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
      await sharp(path.join(dir, file))
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 }).withMetadata(false)
        .toFile(path.join(outputBase, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')));
    }
  }
}
processImages();
