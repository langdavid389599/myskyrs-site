import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = [
  "index.html",
  "about.html",
  "services.html",
  "portfolio.html",
  "contact.html",
  "privacy.html",
  "support.html",
];

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
  assert.match(html, /MySkyrs Studio/i);
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Support/i);
});

test("key pages include the expanded studio navigation", () => {
  for (const page of ["index.html", "privacy.html", "support.html"]) {
    const html = read(page);
    assert.match(html, /href="about\.html"/i);
    assert.match(html, /href="services\.html"/i);
    assert.match(html, /href="portfolio\.html"/i);
    assert.match(html, /href="contact\.html"/i);
  }
});

test("homepage presents the studio as an iOS and IAA-focused business", () => {
  const html = read("index.html");
  assert.match(html, /iOS app development/i);
  assert.match(html, /iOS games/i);
  assert.match(html, /IAA monetization/i);
  assert.match(html, /Services/i);
  assert.match(html, /Portfolio/i);
});

test("privacy page includes policy sections", () => {
  const html = read("privacy.html");
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Information We Collect/i);
  assert.match(html, /Your Rights/i);
  assert.match(html, /Data Retention/i);
  assert.match(html, /International Transfers/i);
  assert.match(html, /Device Permissions/i);
  assert.match(html, /Third-Party Services/i);
});

test("privacy and support pages link back into the broader studio site", () => {
  const privacy = read("privacy.html");
  const support = read("support.html");
  assert.match(privacy, /href="contact\.html"/i);
  assert.match(support, /href="contact\.html"/i);
  assert.match(support, /href="services\.html"/i);
});

test("support page includes support guidance and contact details", () => {
  const html = read("support.html");
  assert.match(html, /support@myskyrs\.com/i);
  assert.match(html, /bussiness@myskyrs\.com/i);
  assert.match(html, /langdavid389599@myskyrs\.com/i);
  assert.match(html, /Frequently Asked Questions/i);
});

test("homepage navigation links to all core pages", () => {
  const html = read("index.html");
  assert.match(html, /href="index\.html"|href="\/"/i);
  assert.match(html, /href="about\.html"/i);
  assert.match(html, /href="services\.html"/i);
  assert.match(html, /href="portfolio\.html"/i);
  assert.match(html, /href="contact\.html"/i);
  assert.match(html, /href="privacy\.html"/i);
  assert.match(html, /href="support\.html"/i);
});

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
  assert.match(html, /monetization/i);
});

test("contact page routes support, business, and major client messages", () => {
  const html = read("contact.html");
  assert.match(html, /support@myskyrs\.com/i);
  assert.match(html, /bussiness@myskyrs\.com/i);
  assert.match(html, /langdavid389599@myskyrs\.com/i);
});
