# FRANCDEL DECO website

A standalone, responsive static website project built around the supplied FRANCDEL DECO logo. It is separate from Dorcset Construction.

## Files

- `site/` — canonical page markup, responsive styles, JavaScript interactions, route manifest, and local assets used by the Manus preview.
- Repository-root `index.html`, `styles.css`, `main.js`, `manus-routes.json`, and `assets/` — synchronized static-site copy for Vercel’s default repository-root deployment.
- `app.config.ts` — Manus project branding metadata.
- `TODO.md` — approved outcomes and remaining business inputs.

The page is plain HTML, CSS, and JavaScript. It needs no package installation, framework runtime, database, or backend. When editing the site, keep the repository-root static files synchronized with `site/` so both the Manus preview and Vercel serve the same page.

## Update before public launch

Replace bracketed copy in the page with FRANCDEL DECO’s confirmed business description, product categories, services, story, FAQ answers, email, phone, address, service area, and opening hours. The collection labels and process text are examples, not confirmed business details. Do not add product prices or availability until supplied.

The enquiry form validates its fields and prepares a message in the browser. Since no email or phone number was supplied, it does not send the enquiry yet. Add and approve the business’s contact destination before connecting the form to email or WhatsApp. No form data is saved by this static site.

The supplied logo and generated interior images are included in `assets/` and `site/assets/` so the Vercel copy does not depend on Manus-only storage URLs. Replace the generated interior visuals with approved product or showroom photography when available, and update the descriptive metadata when the final public brand copy is approved.
