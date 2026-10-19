# Static site delivery

This project is a static HTML/CSS/JavaScript website with no database or backend. The Manus preview serves `site/` on port 3000. For Vercel, the matching `index.html`, CSS, JavaScript, route manifest, and assets are mirrored at the repository root so a plain static deployment can serve `/` directly without a framework build or package installation.

Keep the root copy synchronized with `site/` whenever the page changes. The Vercel project should use the repository root and an automatic static deployment; no server or database is required. The enquiry form currently prepares a copyable browser draft and does not deliver messages until a business contact destination is supplied.
