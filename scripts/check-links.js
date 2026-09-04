#!/usr/bin/env node
// ============================================
// BUILD / VERIFY: static link & asset check
// ============================================
// This is a static site with no bundler — "build" here means verifying the
// site is internally consistent before it goes to Netlify:
//   - every internal <a href="..."> points to a real file, and if it has a
//     `#fragment`, that id actually exists on the target page
//   - every local <img src="...">/<script src="..."> points to a real file
//   - every image path referenced from js/gallery.js and js/posts.js
//     (which are hand-edited data files, not validated by the browser)
//     points to a real file in images/
// Exits with a non-zero code if anything is broken, so it can gate a deploy.

import { readFileSync, existsSync } from 'node:fs';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

function isExternal(ref) {
  return /^(https?:)?\/\//.test(ref) || /^(mailto|tel|javascript):/.test(ref);
}

function idsInHtml(html) {
  const ids = new Set();
  const re = /\sid="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) ids.add(m[1]);
  return ids;
}

async function checkHtmlFiles() {
  const htmlFiles = [];
  for await (const entry of glob('*.html', { cwd: rootDir })) htmlFiles.push(entry);

  const htmlByFile = new Map();
  const idsByFile = new Map();
  for (const file of htmlFiles) {
    const raw = readFileSync(path.join(rootDir, file), 'utf8');
    // Blank out inline <script> bodies (keeping the tags) before scanning for
    // href/src attributes — some pages build HTML strings inside JS template
    // literals (e.g. '<img src="' + cover + '">'), which would otherwise be
    // misread as real markup by the regexes below.
    const html = raw.replace(/(<script\b[^>]*>)[\s\S]*?(<\/script>)/g, '$1$2');
    htmlByFile.set(file, html);
    idsByFile.set(file, idsInHtml(html));
  }

  for (const [file, html] of htmlByFile) {
    // <a href="...">
    for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
      const href = m[1];
      if (!href || isExternal(href) || href === '#') continue;

      const [target, fragment] = href.split('#');
      const targetFile = target === '' ? file : target;

      if (target !== '' && !existsSync(path.join(rootDir, targetFile))) {
        errors.push(`${file}: href="${href}" -> "${targetFile}" does not exist`);
        continue;
      }
      if (fragment) {
        const ids = target === '' ? idsByFile.get(file) : idsByFile.get(targetFile);
        if (ids && !ids.has(fragment)) {
          errors.push(`${file}: href="${href}" -> #${fragment} not found in ${targetFile}`);
        }
      }
    }

    // <img src="...">, <script src="...">, <link href="...">
    for (const m of html.matchAll(/<(?:img|script)\s[^>]*src="([^"]+)"/g)) {
      const src = m[1];
      if (!src || isExternal(src) || src === '') continue;
      const decoded = decodeURIComponent(src);
      if (!existsSync(path.join(rootDir, decoded))) {
        errors.push(`${file}: src="${src}" does not exist`);
      }
    }
  }
}

function checkJsImageRefs() {
  const files = ['js/gallery.js', 'js/posts.js'];
  const re = /src=[\\]?["']?(images\/[^"'\\]+\.(?:webp|jpg|jpeg|png|gif|svg))/g;
  for (const rel of files) {
    const full = path.join(rootDir, rel);
    if (!existsSync(full)) continue;
    const code = readFileSync(full, 'utf8');
    let m;
    while ((m = re.exec(code))) {
      const decoded = decodeURIComponent(m[1]);
      if (!existsSync(path.join(rootDir, decoded))) {
        errors.push(`${rel}: references missing image "${m[1]}"`);
      }
    }
  }
}

await checkHtmlFiles();
checkJsImageRefs();

const uniqueErrors = [...new Set(errors)];

if (uniqueErrors.length) {
  console.error(`\n✖ ${uniqueErrors.length} broken reference(s) found:\n`);
  for (const e of uniqueErrors) console.error(`  - ${e}`);
  console.error('');
  process.exit(1);
} else {
  console.log('✓ All internal links, anchors, and image references resolve.');
}
