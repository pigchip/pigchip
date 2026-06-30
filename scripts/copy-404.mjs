import { copyFileSync } from 'node:fs'

// GitHub Pages serves 404.html for unknown paths. Mirroring index.html lets
// deep links (e.g. /aguzmancruz/about) load the SPA, which then reads the URL
// to show the right slide.
copyFileSync('dist/index.html', 'dist/404.html')
console.log('postbuild: copied dist/index.html -> dist/404.html (SPA deep-link fallback)')
