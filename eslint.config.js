import js from '@eslint/js';
import globals from 'globals';

// These are plain <script> files loaded directly by the HTML pages (no
// bundler, no modules), so they share one global scope in the browser.
// `gallerySections` is declared in js/gallery.js and read by js/main.js.
export default [
  js.configs.recommended,
  {
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Most top-level functions here (openLightbox, toggleStory, toggleSeason, ...)
      // are only called from inline onclick="" handlers in the HTML, which ESLint
      // can't see — so "unused function" is expected noise. Still flag unused
      // local variables/params, which are real mistakes.
      'no-unused-vars': ['warn', { vars: 'local', argsIgnorePattern: '^_' }],
    },
  },
  {
    // main.js reads `gallerySections`, which is declared as a global (non-module)
    // const in gallery.js — both are loaded as classic <script> tags on the same
    // page, so they share one global scope in the browser.
    files: ['js/main.js'],
    languageOptions: {
      globals: {
        gallerySections: 'readonly',
      },
    },
  },
];
