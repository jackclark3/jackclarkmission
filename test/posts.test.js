import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGlobal } from './helpers/loadGlobalScript.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const posts = loadGlobal(path.join(rootDir, 'js/posts.js'), 'posts');

// Every local image referenced from a post's HTML `content` string, e.g.
// <img src="images/Photo%20Gallery/.../foo.webp" ...>
function localImageRefs(html) {
  const refs = [];
  const re = /src="(images\/[^"]+)"/g;
  let match;
  while ((match = re.exec(html))) refs.push(match[1]);
  return refs;
}

describe('posts.js data', () => {
  it('exports a non-empty array of posts', () => {
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  it('gives every post the fields renderPosts()/renderBlogList() rely on', () => {
    for (const post of posts) {
      for (const field of ['id', 'date', 'dateISO', 'title', 'excerpt', 'content']) {
        expect(post[field], `post missing "${field}": ${JSON.stringify(post).slice(0, 80)}`).toBeTruthy();
      }
    }
  });

  it('has a unique id per post (ids are used as DOM ids and anchor targets)', () => {
    const ids = posts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every post a valid ISO date (YYYY-MM-DD) in dateISO', () => {
    for (const post of posts) {
      expect(post.dateISO, `post ${post.id}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(new Date(post.dateISO).getTime()), `post ${post.id} has an invalid date`).toBe(false);
    }
  });

  it('is sorted most-recent-first by dateISO (the README tells editors to paste new posts at the top)', () => {
    const dates = posts.map((p) => p.dateISO);
    const sorted = [...dates].sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    expect(dates).toEqual(sorted);
  });

  it('only references local images that actually exist in images/', () => {
    const missing = [];
    for (const post of posts) {
      for (const ref of localImageRefs(post.content)) {
        const decoded = decodeURIComponent(ref);
        if (!existsSync(path.join(rootDir, decoded))) missing.push(`${post.id}: ${ref}`);
      }
    }
    expect(missing, `broken image reference(s) in js/posts.js:\n${missing.join('\n')}`).toEqual([]);
  });
});
