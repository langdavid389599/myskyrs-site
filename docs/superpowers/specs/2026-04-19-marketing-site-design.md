# Marketing Site Design

## Goal

Create a three-page English marketing website for a mobile app studio that can be deployed as a static site on GitHub and Vercel. The site must reference the structure of the provided examples without copying their visual style, layout rhythm, or wording.

## Constraints

- Keep the site structure to three public pages:
  - `index.html`
  - `privacy.html`
  - `support.html`
- Use placeholder brand content for now.
- Write all visible content in English.
- Favor a brighter, more playful "mobile app studio" look rather than a heavy corporate look.
- Keep the output static so deployment on Vercel is simple.

## Positioning

- Brand type: independent mobile app studio
- Product focus: utility apps and casual mobile experiences
- Audience:
  - end users looking for support
  - platform reviewers checking privacy and support links
  - potential business partners

## Visual Direction

- Brighter palette with blue as the base color and a warm accent color.
- Rounded cards, layered gradients, and app-inspired panels.
- Clean layout with readable spacing and lighter copy blocks.
- Gentle reveal and hover motion only.

## Placeholder Brand

- Brand name: `BrightSide Apps`
- Tagline: `We build simple utility apps and playful mobile experiences for everyday users.`
- Support email: `support@brightside-apps.com`
- Business email: `business@brightside-apps.com`

## Page Design

### Home

Purpose: present the studio in a friendly, product-led way and route visitors to privacy and support pages.

Sections:

1. Hero with tagline, CTA buttons, and app-studio framing
2. Studio focus cards for utility apps, casual games, and user support
3. Reasons to trust the studio
4. Support and privacy shortcut band
5. Footer with cross-links

### Privacy Policy

Purpose: provide a readable, reviewer-friendly policy page for apps and website visitors.

Sections:

1. Policy heading with effective date
2. Side navigation or quick links
3. Clear sections for data collection, data usage, ads and analytics, children, user rights, and contact
4. Footer with support links

### Support

Purpose: act as a support hub rather than a plain contact list.

Sections:

1. Support hero with a direct email CTA
2. Contact cards for support and business
3. "What to include" guidance
4. FAQ block
5. Link back to privacy policy

## Technical Approach

- Build a static site with shared CSS and a small JS file for navigation highlighting and subtle reveal effects.
- Keep assets local and lightweight.
- Add automated checks that parse the generated HTML files and confirm:
  - required pages exist
  - page titles are present
  - navigation links cover the three required pages
  - footer and support/privacy links are present

## Non-Goals

- No backend
- No CMS
- No contact form submission handling
- No cloning of the reference sites' wording or exact layouts
