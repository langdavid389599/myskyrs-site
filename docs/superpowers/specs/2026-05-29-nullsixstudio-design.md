# NullSix Studio Design

## Goal

Rebuild the current `myskyrs-site` repository into a new studio website for **NullSix Studio**, focused on software development and IAA monetization, while also keeping a local copy in a sibling directory named `nullsixstudio`.

## Brand Direction

- Brand: `NullSix Studio`
- Public emails:
  - `support@nullsixstudio.com`
  - `bussiness@nullsixstudio.com`
  - `vip@nullsixstudio.com`
- Positioning: software development studio with an emphasis on mobile software, operational release discipline, and IAA monetization systems

## Visual Direction

The new site should move away from the existing polished startup-card style and from the reference site's corporate landing-page feel. The replacement visual language should feel like an **industrial field manual**:

- warm paper background instead of glossy blue gradients
- charcoal ink text with rust-orange and muted olive accents
- large editorial headlines
- ruled dividers, status chips, and bulletin-style panels
- denser information groupings and more asymmetric layout moments

This should make the site feel materially different from the existing sibling studio sites.

## Information Architecture

Keep the existing multi-page public structure because the repository and tests already rely on it:

- `index.html`
- `about.html`
- `services.html`
- `portfolio.html`
- `contact.html`
- `privacy.html`
- `support.html`

## Content Strategy

- Homepage should introduce NullSix Studio as a software development studio, not specifically as an iOS-only team
- Services should emphasize mobile software development, production systems, release support, and IAA monetization planning
- Portfolio should present product categories and business signals rather than invented case studies
- Contact and support pages must clearly route support, business, and VIP communication
- Privacy should remain visibly more complete than a placeholder policy and include standard sections like data retention, international transfers, third-party services, security, and user rights

## Implementation Notes

- Reuse the current static-site structure and shared JS
- Replace the shared CSS theme completely
- Rewrite page copy to reflect the new studio brand consistently
- Update tests first, then implement to satisfy them
- After implementation, copy the finished site to `C:\Users\64998\Pictures\nullsixstudio`

## Assumptions

- The Git remote remains `https://github.com/langdavid389599/myskyrs-site.git`
- The repository is being repurposed for the new public brand even though the repository name is still `myskyrs-site`
- The sibling `nullsixstudio` directory is a local organizational copy, while publishing still happens from the current repository
