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

test("all pages include the shared CSS and JS assets", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /assets\/css\/styles\.css/i);
    assert.match(html, /assets\/js\/site\.js/i);
  }
});

test("homepage includes brand and calls to action", () => {
  const html = read("index.html");
  assert.match(html, /BrightSide Apps/i);
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Support/i);
});

test("privacy page includes policy sections", () => {
  const html = read("privacy.html");
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Information We Collect/i);
  assert.match(html, /Your Rights/i);
});

test("support page includes support guidance and contact details", () => {
  const html = read("support.html");
  assert.match(html, /support@myskyrs\.com/i);
  assert.match(html, /bussiness@myskyrs\.com/i);
  assert.match(html, /langdavid389599@myskyrs\.com/i);
  assert.match(html, /Frequently Asked Questions/i);
});

test("homepage navigation links to all three pages", () => {
  const html = read("index.html");
  assert.match(html, /href="index\.html"|href="\/"/i);
  assert.match(html, /href="privacy\.html"/i);
  assert.match(html, /href="support\.html"/i);
});
