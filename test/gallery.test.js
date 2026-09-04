import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGlobal } from './helpers/loadGlobalScript.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gallerySections = loadGlobal(path.join(rootDir, 'js/gallery.js'), 'gallerySections');

describe('gallery.js data', () => {
  it('exports a non-empty array of sections, each with a season name and photos', () => {
    expect(Array.isArray(gallerySections)).toBe(true);
    expect(gallerySections.length).toBeGreaterThan(0);
    for (const section of gallerySections) {
      expect(section.season, JSON.stringify(section).slice(0, 60)).toBeTruthy();
      expect(Array.isArray(section.photos)).toBe(true);
      expect(section.photos.length).toBeGreaterThan(0);
    }
  });

  it('gives every photo the src/alt fields renderGallery() and the lightbox rely on', () => {
    for (const section of gallerySections) {
      for (const photo of section.photos) {
        expect(photo.src, `photo in "${section.season}"`).toBeTruthy();
        expect(photo.alt, `photo "${photo.src}" has no alt text`).toBeTruthy();
      }
    }
  });

  it('only references image files that actually exist in images/', () => {
    const missing = [];
    for (const section of gallerySections) {
      for (const photo of section.photos) {
        const decoded = decodeURIComponent(photo.src);
        if (!existsSync(path.join(rootDir, decoded))) missing.push(`${section.season}: ${photo.src}`);
      }
    }
    expect(missing, `broken image reference(s) in js/gallery.js:\n${missing.join('\n')}`).toEqual([]);
  });

  it('has no exact duplicate photo within the same season', () => {
    const duplicates = [];
    for (const section of gallerySections) {
      const seen = new Set();
      for (const photo of section.photos) {
        if (seen.has(photo.src)) duplicates.push(`${section.season}: ${photo.src}`);
        seen.add(photo.src);
      }
    }
    expect(duplicates, `duplicate photo(s) in js/gallery.js:\n${duplicates.join('\n')}`).toEqual([]);
  });
});
