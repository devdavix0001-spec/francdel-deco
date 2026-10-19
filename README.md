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

Replace the generated interior visuals in the `<img>` references after FRANCDEL DECO supplies approved product or showroom photography. The logo is stored using the project’s managed asset URL. Update the descriptive metadata in `site/index.html` when the final public brand copy is approved.
