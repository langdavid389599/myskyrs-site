# NullSix Studio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the current static studio site into a new NullSix Studio website with distinct branding, expanded content, and a sibling local copy.

**Architecture:** Keep the existing seven-page static HTML structure and shared JS, but replace the shared CSS theme and rewrite all page content to support a new industrial-editorial visual language. Preserve the current lightweight test harness and use it to lock in the new brand and page expectations.

**Tech Stack:** Static HTML, shared CSS, shared vanilla JS, Node test runner

---

### Task 1: Lock the new brand in tests

**Files:**
- Modify: `C:\Users\64998\Pictures\website\tests\site.test.mjs`

- [ ] Step 1: Replace MySkyrs-specific assertions with NullSix Studio assertions
- [ ] Step 2: Run `cmd /c npm test` and confirm failure

### Task 2: Rebuild the visual system

**Files:**
- Modify: `C:\Users\64998\Pictures\website\assets\css\styles.css`

- [ ] Step 1: Replace the glossy blue card system with a paper-and-ink editorial system
- [ ] Step 2: Add layout primitives that support masthead, bulletin cards, grid rails, and policy layouts
- [ ] Step 3: Preserve nav active states and reveal animations

### Task 3: Rewrite the shared page content

**Files:**
- Modify:
  - `C:\Users\64998\Pictures\website\index.html`
  - `C:\Users\64998\Pictures\website\about.html`
  - `C:\Users\64998\Pictures\website\services.html`
  - `C:\Users\64998\Pictures\website\portfolio.html`
  - `C:\Users\64998\Pictures\website\contact.html`
  - `C:\Users\64998\Pictures\website\privacy.html`
  - `C:\Users\64998\Pictures\website\support.html`

- [ ] Step 1: Rewrite brand, headlines, and metadata
- [ ] Step 2: Keep all core navigation and shared assets intact
- [ ] Step 3: Ensure support and privacy remain public-facing and complete

### Task 4: Verify and package

**Files:**
- Create/refresh: `C:\Users\64998\Pictures\nullsixstudio\...`

- [ ] Step 1: Run `cmd /c npm test` and confirm all tests pass
- [ ] Step 2: Copy the finished site into the sibling `nullsixstudio` directory
- [ ] Step 3: Review git diff and commit
- [ ] Step 4: Push to `origin main`
