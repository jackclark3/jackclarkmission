import { readFileSync } from 'node:fs';
import vm from 'node:vm';

/**
 * js/gallery.js and js/posts.js are plain <script> files: they declare data
 * (`gallerySections`, `posts`) as top-level consts and then call a
 * `render...()` function that touches the DOM. There's no module system to
 * import from, so to test the data in Node we run the file in a sandbox
 * with a `document` stub whose `getElementById` returns null — every
 * render function in these files starts with `if (!container) return;`,
 * so rendering becomes a no-op and only the data declarations matter.
 *
 * This intentionally does NOT modify the source files (they stay exactly
 * what the browser loads) and does NOT re-implement their logic — it just
 * executes the real file and reads back the global it defines.
 */
export function loadGlobal(filePath, globalName) {
  const code = readFileSync(filePath, 'utf8');
  const sandbox = {
    document: {
      getElementById: () => null,
      querySelectorAll: () => [],
    },
    console,
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: filePath });
  // Top-level `const`/`let` in a vm context become bindings in that
  // context's shared lexical scope, not own properties of the sandbox
  // object — so read the value back by evaluating the identifier in the
  // same context, rather than via `sandbox[globalName]`.
  return vm.runInContext(globalName, sandbox, { filename: filePath });
}
