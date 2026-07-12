// Generates the 1200x630 Open Graph social-preview card at public/og.png from a
// full-resolution home-page screenshot (scripts/og-source.png). Center cover-crop
// to the 1.91:1 ratio social platforms expect, anchored to the top so the nav +
// name/hero stay in frame.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, 'og-source.png')
const out = join(__dirname, '..', 'public', 'og.png')

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'top' })
  .png()
  .toFile(out)

console.log('Wrote', out)
