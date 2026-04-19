# Marketing Site Design

## Goal

Upgrade the current lightweight three-page site into a fuller English-language studio website for `myskyrs.com`. The new site should present the business as an iOS-focused development studio that builds utility apps and iOS games, understands IAA advertising monetization, and still preserves the support and privacy pages required for public trust and platform review.

## Core Business Positioning

- Studio type: iOS product and development studio
- Primary capabilities:
  - iOS application development
  - iOS game development
  - IAA advertising monetization integration and optimization
- Website goals:
  - look complete and credible to clients
  - communicate service scope clearly to potential partners
  - preserve public-facing privacy and support pages
  - feel richer than a "minimum viable compliance site"

## Constraints

- Keep the site fully static for simple GitHub and Vercel deployment.
- Write all public-facing content in English.
- Keep the brighter, modern studio visual language instead of copying the darker reference sites.
- Expand the site into a complete studio structure without cloning the reference site's wording or exact section order.
- Preserve email-related DNS safety assumptions by not depending on domain provider changes inside the site itself.

## Live Brand Inputs

- Domain: `myskyrs.com`
- Support email: `support@myskyrs.com`
- Business email: `bussiness@myskyrs.com`
- Major client email: `langdavid389599@myskyrs.com`

## Visual Direction

- Tone: polished iOS studio, brighter and more product-led than a generic software company site
- Palette: blue-led base, warm accent highlights, bright backgrounds, layered surfaces
- Layout language:
  - more navigation depth
  - more content density
  - more varied sections
  - stronger page hierarchy
- Components:
  - hero panels
  - service cards
  - metrics/stat blocks
  - product track sections
  - contact/support cards
  - richer footer navigation
- Motion: restrained reveal transitions and hover states only

## Recommended Site Structure

The site should be expanded from three public pages to seven:

- `index.html`
- `about.html`
- `services.html`
- `portfolio.html`
- `contact.html`
- `privacy.html`
- `support.html`

## Information Architecture

### Home

Purpose: act as the primary brand and conversion page.

Sections:

1. Hero introducing the studio as an iOS apps and games team
2. Studio snapshot with business positioning and quick metrics
3. Core services overview
4. Product tracks:
   - utility apps
   - iOS games
5. IAA monetization section
6. Why work with us / delivery principles
7. Support and compliance shortcut area
8. Rich footer with full navigation

### About

Purpose: explain who the studio is and how it works.

Sections:

1. Studio intro
2. Development philosophy
3. Platform focus on iOS
4. Product and monetization mindset
5. Collaboration model

### Services

Purpose: explain offerings in detail for potential clients or partners.

Sections:

1. iOS app development
2. iOS game development
3. IAA ad monetization integration
4. Product optimization and iteration
5. Publishing, maintenance, and support

### Portfolio

Purpose: make the site feel like a real studio site even when detailed public case studies are limited.

Sections:

1. Product categories
2. Example solution tracks
3. Utility app capabilities
4. Game design and retention direction
5. Monetization-ready product framing

The page should avoid fake store claims while still showing concrete capability areas.

### Contact

Purpose: be the primary business-facing contact page.

Sections:

1. Contact hero
2. Support email card
3. Business email card
4. Major client contact card
5. Guidance on what to include in inquiries
6. CTA links to support and privacy pages

### Privacy Policy

Purpose: remain a clear, reviewer-friendly policy page.

Sections:

1. Effective date
2. Information collected
3. How information is used
4. Ads and analytics
5. Children and age guidance
6. Rights and requests
7. Contact details

### Support

Purpose: remain the technical/user support hub.

Sections:

1. Support hero
2. Direct support pathways
3. What to include in support requests
4. FAQ
5. Links to privacy and contact pages

## Content Strategy

- Speak like an overseas-facing studio rather than a local placeholder business page.
- Emphasize iOS specialization, product thinking, and monetization understanding.
- Explicitly mention IAA in a commercial but professional way.
- Make the site feel substantial through section variety, not empty filler text.
- Avoid pretending to be a huge company; instead present as a focused, capable studio.

## Differences From the Current Site

The current site is functional but narrow:

- only three pages
- minimal navigation depth
- limited business storytelling
- support and privacy are present, but broader company context is thin

The upgrade should solve that by:

- adding true secondary pages
- building a fuller top navigation
- introducing more business-facing content
- separating support and contact roles
- making the home page feel like a complete studio landing page

## Technical Approach

- Continue using static HTML, CSS, and lightweight vanilla JavaScript.
- Reuse the existing bright visual system where possible, but refactor it into a richer multi-page system.
- Expand automated checks so the new pages are covered.
- Keep the codebase simple enough for direct GitHub + Vercel deployment without a custom build pipeline.

## File-Level Direction

- Keep shared presentation logic in `assets/css/styles.css`
- Keep lightweight UI behavior in `assets/js/site.js`
- Add new top-level HTML files for:
  - `about.html`
  - `services.html`
  - `portfolio.html`
  - `contact.html`
- Update navigation and footer across all pages
- Expand tests in `tests/site.test.mjs`

## Non-Goals

- No backend or dashboard
- No CMS
- No fake testimonials, fake awards, or fake download claims
- No copying the structure or copy from `rwzf-bj.com`
- No domain-level DNS automation from code
