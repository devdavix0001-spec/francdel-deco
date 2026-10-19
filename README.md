# FRANCDEL DECO website

A standalone, responsive static website project built around the supplied FRANCDEL DECO logo. It is separate from Dorcset Construction.

## Files

- `site/index.html` — all page sections, copy placeholders, metadata, and enquiry form markup.
- `site/styles.css` — responsive layout, type, palette, and visual treatments.
- `site/main.js` — mobile navigation and enquiry-draft behavior.
- `site/manus-routes.json` — Webdev route manifest.
- `TODO.md` — approved outcomes and remaining business inputs.

## Update before public launch

Replace bracketed copy in `site/index.html` with FRANCDEL DECO’s confirmed business description, product categories, services, story, FAQ answers, email, phone, address, service area, and opening hours. The collection labels and process text are examples, not confirmed business details. Do not add product prices or availability until supplied.

The enquiry form validates its fields and prepares a message in the browser. Since no email or phone number was supplied, it does not send the enquiry yet. Add and approve the business’s contact destination before connecting the form to email or WhatsApp. No form data is saved by this static site.

The supplied logo is included at `site/assets/francdel-deco.jpg`. Generated interior artwork is served from this project’s managed storage using stable `/manus-storage/...` paths, so it works in the Manus website preview. If hosting this repository outside Manus, replace those image paths with local or host-specific asset URLs. Replace the generated interior visuals with approved product or showroom photography when available, and update the descriptive metadata in `site/index.html` when the final public brand copy is approved.
