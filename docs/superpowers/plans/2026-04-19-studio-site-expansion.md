# Studio Site Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the existing three-page static marketing site into a fuller seven-page iOS studio website for `myskyrs.com`.

**Architecture:** Keep the project as a static HTML/CSS/JS site, but introduce a richer cross-site navigation, additional top-level pages, and more detailed content around iOS apps, iOS games, and IAA monetization. Strengthen the shared visual system and the HTML verification suite so the larger site stays coherent and deployable on Vercel without custom build steps.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js test runner, Git

---

## File Structure

- Create: `about.html`
- Create: `services.html`
- Create: `portfolio.html`
- Create: `contact.html`
- Modify: `index.html`
- Modify: `privacy.html`
- Modify: `support.html`
- Modify: `assets/css/styles.css`
- Modify: `assets/js/site.js`
- Modify: `tests/site.test.mjs`
- Modify: `docs/superpowers/plans/2026-04-19-marketing-site.md`

### Task 1: Expand the verification suite for the new site map

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```javascript
const pages = [
  "index.html",
  "about.html",
  "services.html",
  "portfolio.html",
  "contact.html",
  "privacy.html",
  "support.html",
];
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cmd /c npm test`
Expected: FAIL because `about.html`, `services.html`, `portfolio.html`, and `contact.html` do not exist yet.

- [ ] **Step 3: Add richer assertions**

```javascript
test("primary pages link to the full navigation", () => {
  const html = read("index.html");
  assert.match(html, /href="about\.html"/i);
  assert.match(html, /href="services\.html"/i);
  assert.match(html, /href="portfolio\.html"/i);
  assert.match(html, /href="contact\.html"/i);
});

test("contact page exposes all three email routes", () => {
  const html = read("contact.html");
  assert.match(html, /support@myskyrs\.com/i);
  assert.match(html, /bussiness@myskyrs\.com/i);
  assert.match(html, /langdavid389599@myskyrs\.com/i);
});

test("services and portfolio pages mention iOS and IAA", () => {
  assert.match(read("services.html"), /iOS app development/i);
  assert.match(read("services.html"), /IAA/i);
  assert.match(read("portfolio.html"), /iOS games/i);
  assert.match(read("portfolio.html"), /monetization/i);
});
```

- [ ] **Step 4: Run test to verify it still fails for the expected reason**

Run: `cmd /c npm test`
Expected: FAIL because the new pages and content do not exist yet.

### Task 2: Upgrade the global visual system and navigation

**Files:**
- Modify: `assets/css/styles.css`
- Modify: `assets/js/site.js`
- Modify: `index.html`
- Modify: `privacy.html`
- Modify: `support.html`

- [ ] **Step 1: Write the failing test for shared navigation references**

```javascript
test("key pages include the expanded studio navigation", () => {
  for (const page of ["index.html", "privacy.html", "support.html"]) {
    const html = read(page);
    assert.match(html, /href="about\.html"/i);
    assert.match(html, /href="services\.html"/i);
    assert.match(html, /href="portfolio\.html"/i);
    assert.match(html, /href="contact\.html"/i);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cmd /c npm test`
Expected: FAIL because the current navigation only includes Home, Privacy Policy, and Support.

- [ ] **Step 3: Implement the shared navigation and richer visual primitives**

```html
<nav class="site-nav" aria-label="Primary navigation">
  <a href="index.html" data-nav="home">Home</a>
  <a href="about.html" data-nav="about">About</a>
  <a href="services.html" data-nav="services">Services</a>
  <a href="portfolio.html" data-nav="portfolio">Portfolio</a>
  <a href="contact.html" data-nav="contact">Contact</a>
  <a href="privacy.html" data-nav="privacy">Privacy</a>
  <a href="support.html" data-nav="support">Support</a>
</nav>
```

```javascript
const page = document.body.dataset.page;
document
  .querySelectorAll("[data-nav]")
  .forEach((link) => link.classList.toggle("is-active", link.dataset.nav === page));
```

- [ ] **Step 4: Run test to verify the navigation assertions pass**

Run: `cmd /c npm test`
Expected: navigation assertions PASS while new-page existence assertions still fail.

### Task 3: Rebuild the homepage as a fuller studio landing page

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for richer homepage content**

```javascript
test("homepage presents the studio as an iOS and IAA-focused business", () => {
  const html = read("index.html");
  assert.match(html, /iOS app development/i);
  assert.match(html, /iOS games/i);
  assert.match(html, /IAA monetization/i);
  assert.match(html, /Services/i);
  assert.match(html, /Portfolio/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cmd /c npm test`
Expected: FAIL because the homepage does not yet contain the expanded studio positioning.

- [ ] **Step 3: Implement the expanded homepage sections**

```html
<section class="hero">...</section>
<section class="section metrics">...</section>
<section class="section">...</section>
<section class="section section-alt">...</section>
<section class="section">...</section>
```

- [ ] **Step 4: Run test to verify the homepage checks pass**

Run: `cmd /c npm test`
Expected: homepage positioning checks PASS.

### Task 4: Add the new studio pages

**Files:**
- Create: `about.html`
- Create: `services.html`
- Create: `portfolio.html`
- Create: `contact.html`
- Modify: `assets/css/styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for the new pages**

```javascript
test("about page explains the studio philosophy", () => {
  const html = read("about.html");
  assert.match(html, /About MySkyrs Studio/i);
  assert.match(html, /iOS-focused/i);
});

test("services page lists the studio service lines", () => {
  const html = read("services.html");
  assert.match(html, /iOS app development/i);
  assert.match(html, /iOS game development/i);
  assert.match(html, /IAA advertising monetization/i);
});

test("portfolio page presents capability tracks", () => {
  const html = read("portfolio.html");
  assert.match(html, /Product Tracks/i);
  assert.match(html, /Utility Apps/i);
  assert.match(html, /iOS Games/i);
});

test("contact page routes support, business, and major client messages", () => {
  const html = read("contact.html");
  assert.match(html, /support@myskyrs\.com/i);
  assert.match(html, /bussiness@myskyrs\.com/i);
  assert.match(html, /langdavid389599@myskyrs\.com/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cmd /c npm test`
Expected: FAIL because these pages do not exist yet.

- [ ] **Step 3: Implement the new pages**

```html
<body data-page="about">...</body>
<body data-page="services">...</body>
<body data-page="portfolio">...</body>
<body data-page="contact">...</body>
```

- [ ] **Step 4: Run test to verify the new-page checks pass**

Run: `cmd /c npm test`
Expected: PASS for the new page assertions while remaining policy/support checks stay green.

### Task 5: Reframe privacy and support around the fuller site

**Files:**
- Modify: `privacy.html`
- Modify: `support.html`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test for cross-links**

```javascript
test("privacy and support pages link back into the broader studio site", () => {
  const privacy = read("privacy.html");
  const support = read("support.html");
  assert.match(privacy, /href="contact\.html"/i);
  assert.match(support, /href="contact\.html"/i);
  assert.match(support, /href="services\.html"/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cmd /c npm test`
Expected: FAIL because the current privacy and support pages do not yet include the broader cross-links.

- [ ] **Step 3: Update privacy and support to match the studio-wide information architecture**

```html
<a href="contact.html">Contact</a>
<a href="services.html">Services</a>
```

- [ ] **Step 4: Run test to verify the cross-link assertions pass**

Run: `cmd /c npm test`
Expected: PASS for privacy/support cross-link checks.

### Task 6: Final verification and deploy-ready cleanup

**Files:**
- Modify: `docs/superpowers/plans/2026-04-19-marketing-site.md`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Update the original lightweight plan note**

```markdown
> Superseded by `docs/superpowers/plans/2026-04-19-studio-site-expansion.md` after the site scope expanded from 3 pages to 7 pages.
```

- [ ] **Step 2: Run the full verification suite**

Run: `cmd /c npm test`
Expected: PASS with all assertions green.

- [ ] **Step 3: Review the changed file set**

Run: `git status --short`
Expected: shows the new HTML pages and shared asset/test updates only.
