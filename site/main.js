const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const form = document.querySelector('#enquiry-form');
const result = document.querySelector('#form-result');
const copyButton = document.querySelector('#copy-message');
let enquiryText = '';

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

if (form && result && copyButton) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    enquiryText = [
      'Enquiry for FRANCDEL DECO',
      `Name: ${data.get('name')}`,
      `Email or phone: ${data.get('email')}`,
      `Interest: ${data.get('interest')}`,
      `Message: ${data.get('message')}`
    ].join('\n');
    result.hidden = false;
    result.textContent = 'Your enquiry is ready. The business email has not been provided, so this page cannot send it yet. Copy the text below and use it once FRANCDEL DECO shares its preferred contact details.\n\n' + enquiryText;
    copyButton.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  copyButton.addEventListener('click', async () => {
    if (!enquiryText) return;
    try {
      await navigator.clipboard.writeText(enquiryText);
      copyButton.textContent = 'Enquiry copied';
    } catch {
      copyButton.textContent = 'Select and copy the enquiry text above';
    }
  });
}
