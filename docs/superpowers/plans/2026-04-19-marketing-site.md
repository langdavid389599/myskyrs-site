# Marketing Site Implementation Plan

> Superseded by `docs/superpowers/plans/2026-04-19-studio-site-expansion.md` after the site scope expanded from a three-page marketing site to a seven-page studio website.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static three-page English marketing site for a placeholder mobile app studio, with shared styling, lightweight interactions, and automated checks suitable for GitHub + Vercel deployment.

**Architecture:** Use plain HTML files for each public page, a shared stylesheet for the visual system, and one small client-side script for page polish. Add a Node-based verification script that reads the generated HTML files and validates the required marketing, privacy, and support structure.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js

---

## File Structure

- Create: `index.html`
- Create: `privacy.html`
- Create: `support.html`
- Create: `assets/css/styles.css`
- Create: `assets/js/site.js`
- Create: `tests/site.test.mjs`
- Create: `package.json`
- Create: `.gitignore`

### Task 1: Create the verification harness

**Files:**
- Create: `package.json`
- Create: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = ["index.html", "privacy.html", "support.html"];

for (const page of pages) {
  test(`${page} exists`, () => {
    assert.equal(fs.existsSync(path.join(root, page)), true);
  });
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because the page files do not exist yet.

- [ ] **Step 3: Expand the checks for titles and shared links**

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = ["index.html", "privacy.html", "support.html"];

function read(page) {
  return fs.readFileSync(path.join(root, page), "utf8");
}

for (const page of pages) {
  test(`${page} exists`, () => {
    assert.equal(fs.existsSync(path.join(root, page)), true);
  });
}

test("all pages include a title tag", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /<title>.+<\/title>/i);
  }
});

test("all pages include links to privacy and support", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /href="privacy\.html"/i);
    assert.match(html, /href="support\.html"/i);
  }
});
```

- [ ] **Step 4: Run test to verify it still fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because the HTML pages still do not exist.

- [ ] **Step 5: Add the package script**

```json
{
  "name": "brightside-apps-site",
  "private": true,
  "scripts": {
    "test": "node --test tests/site.test.mjs"
  }
}
```

### Task 2: Implement the shared visual system

**Files:**
- Create: `assets/css/styles.css`
- Create: `assets/js/site.js`

- [ ] **Step 1: Write the failing test for shared asset references**

```javascript
test("all pages include the shared CSS and JS assets", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /assets\/css\/styles\.css/i);
    assert.match(html, /assets\/js\/site\.js/i);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because the HTML pages do not reference the shared assets yet.

- [ ] **Step 3: Add the stylesheet and script**

```css
:root {
  --bg: #f4f8ff;
  --surface: rgba(255, 255, 255, 0.82);
  --text: #16304d;
  --primary: #2c6df8;
  --accent: #ff8f4e;
}
```

```javascript
document.documentElement.classList.add("js-ready");
```

- [ ] **Step 4: Run test to verify the asset files are in place after page implementation**

Run: `node --test tests/site.test.mjs`
Expected: still FAIL until the HTML pages are implemented in the next tasks.

### Task 3: Build the homepage

**Files:**
- Create: `index.html`
- Modify: `assets/css/styles.css`
- Modify: `assets/js/site.js`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for homepage content**

```javascript
test("homepage includes brand and calls to action", () => {
  const html = read("index.html");
  assert.match(html, /BrightSide Apps/i);
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Support/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because `index.html` does not exist yet.

- [ ] **Step 3: Build the homepage structure**

```html
<header>...</header>
<main>
  <section class="hero">...</section>
  <section class="studio-focus">...</section>
  <section class="trust-grid">...</section>
</main>
<footer>...</footer>
```

- [ ] **Step 4: Run test to verify the homepage checks pass**

Run: `node --test tests/site.test.mjs`
Expected: homepage-specific checks PASS while other page checks may still fail.

### Task 4: Build the privacy page

**Files:**
- Create: `privacy.html`
- Modify: `assets/css/styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for privacy page content**

```javascript
test("privacy page includes policy sections", () => {
  const html = read("privacy.html");
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Information We Collect/i);
  assert.match(html, /Your Rights/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because `privacy.html` does not exist yet.

- [ ] **Step 3: Build the privacy page**

```html
<main class="policy-layout">
  <aside>...</aside>
  <article>...</article>
</main>
```

- [ ] **Step 4: Run test to verify the privacy checks pass**

Run: `node --test tests/site.test.mjs`
Expected: privacy-specific checks PASS while support-page checks may still fail.

### Task 5: Build the support page

**Files:**
- Create: `support.html`
- Modify: `assets/css/styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for support page content**

```javascript
test("support page includes support guidance and contact details", () => {
  const html = read("support.html");
  assert.match(html, /support@brightside-apps\.com/i);
  assert.match(html, /business@brightside-apps\.com/i);
  assert.match(html, /Frequently Asked Questions/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because `support.html` does not exist yet.

- [ ] **Step 3: Build the support hub**

```html
<main>
  <section class="support-hero">...</section>
  <section class="contact-grid">...</section>
  <section class="faq-list">...</section>
</main>
```

- [ ] **Step 4: Run test to verify the support checks pass**

Run: `node --test tests/site.test.mjs`
Expected: PASS for the support-page checks.

### Task 6: Final project cleanup and verification

**Files:**
- Create: `.gitignore`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Add final structural checks**

```javascript
test("homepage navigation links to all three pages", () => {
  const html = read("index.html");
  assert.match(html, /href="index\.html"|href="\/"/i);
  assert.match(html, /href="privacy\.html"/i);
  assert.match(html, /href="support\.html"/i);
});
```

- [ ] **Step 2: Run the full test suite**

Run: `node --test tests/site.test.mjs`
Expected: PASS with all tests green.

- [ ] **Step 3: Add ignore rules**

```gitignore
node_modules/
.superpowers/
```

- [ ] **Step 4: Verify final file tree**

Run: `Get-ChildItem -Recurse`
Expected: shows the three HTML pages, shared assets, tests, and docs.
