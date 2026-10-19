import Head from 'next/head';
import { useEffect } from 'react';

const pageMarkup = "<a class=\"skip-link\" href=\"#main\">Skip to content</a>\n  <header class=\"site-header\">\n    <div class=\"header-inner shell\">\n      <a class=\"brand\" href=\"#home\" aria-label=\"FRANCDEL DECO home\">\n        <img src=\"/assets/francdel-deco.jpg\" alt=\"FRANCDEL DECO logo\">\n      </a>\n      <button class=\"menu-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"site-nav\" aria-label=\"Open navigation\"><span></span><span></span></button>\n      <nav id=\"site-nav\" class=\"site-nav\" aria-label=\"Main navigation\">\n        <a href=\"#collections\">Collections</a>\n        <a href=\"#services\">Styling</a>\n        <a href=\"#story\">Our story</a>\n        <a href=\"#faq\">FAQs</a>\n        <a class=\"nav-cta\" href=\"#contact\">Enquire <span aria-hidden=\"true\">↗</span></a>\n      </nav>\n    </div>\n  </header>\n\n  <main id=\"main\">\n    <section class=\"hero\" id=\"home\" aria-labelledby=\"hero-title\">\n      <img class=\"hero-photo\" src=\"/assets/hero-living-room.webp\" alt=\"Considered living room with warm ivory textiles, dark wood and subtle champagne-gold details\">\n      <div class=\"hero-wash\"></div>\n      <div class=\"hero-content shell\">\n        <p class=\"eyebrow light\"><span class=\"eyebrow-line\"></span> FRANCDEL DECO · HOME, CONSIDERED</p>\n        <h1 id=\"hero-title\">Make room for<br><em>what feels like you.</em></h1>\n        <p class=\"hero-lede\">[Add a short introduction to FRANCDEL DECO and the products or services you offer.]</p>\n        <div class=\"hero-actions\">\n          <a class=\"button button-gold\" href=\"#collections\">Explore the collection <span aria-hidden=\"true\">↗</span></a>\n          <a class=\"text-link text-link-light\" href=\"#contact\">Start an enquiry <span aria-hidden=\"true\">→</span></a>\n        </div>\n        <div class=\"hero-caption\"><span>01</span><i></i><span>DETAILS THAT MAKE A SPACE YOURS</span></div>\n      </div>\n      <div class=\"hero-side-note\" aria-hidden=\"true\">A MORE PERSONAL HOME · FRANCDEL DECO</div>\n    </section>\n\n    <section class=\"intro section-pad\" aria-labelledby=\"intro-title\">\n      <div class=\"intro-mark\" aria-hidden=\"true\">F<span>D</span></div>\n      <div class=\"intro-copy\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> A NOTE FROM FRANCDEL</p>\n        <h2 id=\"intro-title\">A home is more than<br>the things <em>inside it.</em></h2>\n        <p class=\"body-copy\">[Add two or three sentences about what FRANCDEL DECO offers, who it is for, and the feeling you want people to find at home.]</p>\n        <a class=\"under-link\" href=\"#story\">A little more about us <span aria-hidden=\"true\">↗</span></a>\n      </div>\n      <p class=\"intro-index\">01 <span>—</span> THE FRANCDEL POINT OF VIEW</p>\n    </section>\n\n    <section class=\"collections section-pad\" id=\"collections\" aria-labelledby=\"collections-title\">\n      <div class=\"section-heading shell\">\n        <div><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> THE COLLECTIONS</p><h2 id=\"collections-title\">Rooms to come<br><em>back to.</em></h2></div>\n        <p class=\"section-aside\">[Replace these collection names and descriptions with the ranges FRANCDEL DECO actually offers.]</p>\n      </div>\n      <div class=\"collection-grid shell\">\n        <article class=\"collection-card collection-large\">\n          <div class=\"collection-photo\"><img src=\"/assets/collection-dining.webp\" alt=\"Warmly styled dining vignette with a dark wood table, linen and ceramic details\" loading=\"lazy\"><span class=\"photo-number\">01 / 03</span></div>\n          <div class=\"collection-info\"><span class=\"collection-label\">COLLECTION 01</span><h3>Living, layered.</h3><p>[Add a short description for this collection.]</p><a href=\"#contact\" aria-label=\"Enquire about Living, layered\">Explore this collection <span aria-hidden=\"true\">↗</span></a></div>\n        </article>\n        <article class=\"collection-card collection-compact\">\n          <div class=\"collection-art art-dining\" aria-hidden=\"true\"><span class=\"art-orbit orbit-one\"></span><span class=\"art-orbit orbit-two\"></span><span class=\"art-sun\"></span><span class=\"art-letter\">F</span><span class=\"art-word\">DÉCOR · OBJECTS · FORM</span></div>\n          <div class=\"collection-info\"><span class=\"collection-label\">COLLECTION 02</span><h3>Gather &amp; dine.</h3><p>[Add a short description for this collection.]</p><a href=\"#contact\" aria-label=\"Enquire about Gather and dine\">Explore this collection <span aria-hidden=\"true\">↗</span></a></div>\n        </article>\n        <article class=\"collection-card collection-compact\">\n          <div class=\"collection-art art-bedroom\" aria-hidden=\"true\"><span class=\"bed-shape bed-head\"></span><span class=\"bed-shape bed-base\"></span><span class=\"bed-shape bed-throw\"></span><span class=\"bed-label\">REST / RESET / RENEW</span></div>\n          <div class=\"collection-info\"><span class=\"collection-label\">COLLECTION 03</span><h3>Rest, reimagined.</h3><p>[Add a short description for this collection.]</p><a href=\"#contact\" aria-label=\"Enquire about Rest reimagined\">Explore this collection <span aria-hidden=\"true\">↗</span></a></div>\n        </article>\n      </div>\n      <p class=\"section-footnote shell\">Collection names and artwork are placeholders until FRANCDEL DECO confirms its catalogue.</p>\n    </section>\n\n    <section class=\"services section-pad\" id=\"services\" aria-labelledby=\"services-title\">\n      <div class=\"services-top shell\"><div><p class=\"eyebrow light\"><span class=\"eyebrow-line\"></span> THOUGHTFUL BY DESIGN</p><h2 id=\"services-title\">A little guidance<br>can change <em>everything.</em></h2></div><p>[Add the styling and décor services FRANCDEL DECO provides. The descriptions below are prompts, not confirmed service claims.]</p></div>\n      <div class=\"service-list shell\">\n        <article class=\"service-item\"><span class=\"service-no\">01</span><div><h3>Styling consultation</h3><p>[Describe the consultation format, what is included, and how a customer can book.]</p></div><a href=\"#contact\" aria-label=\"Enquire about styling consultation\">↗</a></article>\n        <article class=\"service-item\"><span class=\"service-no\">02</span><div><h3>Room refresh</h3><p>[Describe any room refresh or styling service you offer, if applicable.]</p></div><a href=\"#contact\" aria-label=\"Enquire about a room refresh\">↗</a></article>\n        <article class=\"service-item\"><span class=\"service-no\">03</span><div><h3>Finding the finishing touch</h3><p>[Describe how customers can explore décor pieces or ask for help choosing.]</p></div><a href=\"#contact\" aria-label=\"Ask about décor pieces\">↗</a></article>\n      </div>\n      <div class=\"services-stamp\" aria-hidden=\"true\">FRANCDEL<br><span>DECO</span></div>\n    </section>\n\n    <section class=\"process section-pad\" aria-labelledby=\"process-title\">\n      <div class=\"process-heading shell\"><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> HOW IT COULD WORK</p><h2 id=\"process-title\">From first thought<br>to <em>finished room.</em></h2><p class=\"process-note\">[Confirm the customer journey and replace these editable example steps.]</p></div>\n      <div class=\"process-steps shell\">\n        <article><span>01</span><i></i><h3>Share your space</h3><p>Tell us what you are looking for and what matters to you.</p></article>\n        <article><span>02</span><i></i><h3>Find your direction</h3><p>Explore the options and choose the details that feel right.</p></article>\n        <article><span>03</span><i></i><h3>Make it yours</h3><p>Bring your chosen pieces and finishing details together.</p></article>\n      </div>\n    </section>\n\n  <section class=\"story section-pad\" id=\"story\" aria-labelledby=\"story-title\">\n      <div class=\"story-art\" role=\"img\" aria-label=\"Abstract FRANCDEL DECO composition in ivory, black and champagne gold\"><span class=\"story-art-line story-line-one\"></span><span class=\"story-art-line story-line-two\"></span><span class=\"story-art-disc\"></span><span class=\"story-art-monogram\">F<span>D</span></span><span class=\"story-art-caption\">FORM · TEXTURE · FEELING</span></div>\n      <div class=\"story-copy\"><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> OUR STORY</p><h2 id=\"story-title\">The details are<br>where <em>it begins.</em></h2><p>[Add FRANCDEL DECO’s story in your own words. Share the idea behind the name, the point of view, and what makes your approach to décor distinct. No history or achievements have been assumed here.]</p><a class=\"under-link\" href=\"#contact\">Tell us about your space <span aria-hidden=\"true\">↗</span></a><span class=\"story-signature\">F<span>D</span></span></div>\n    </section>\n\n    <section class=\"faq section-pad\" id=\"faq\" aria-labelledby=\"faq-title\">\n      <div class=\"faq-layout shell\"><div class=\"faq-intro\"><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> A FEW FIRST QUESTIONS</p><h2 id=\"faq-title\">Good to<br><em>know.</em></h2><p>[Replace these sample questions with the answers your customers need most.]</p></div>\n        <div class=\"faq-list\">\n          <details><summary>What kind of décor does FRANCDEL DECO offer?<span>+</span></summary><p>[Add the product categories and styles you carry.]</p></details>\n          <details><summary>Can I get help styling a room?<span>+</span></summary><p>[Confirm whether styling support is available and describe how it works.]</p></details>\n          <details><summary>How do I ask about an item?<span>+</span></summary><p>Use the enquiry form below to prepare a message about the collection or item you have in mind. It will not be delivered until FRANCDEL DECO adds a business email or other contact destination.</p></details>\n          <details><summary>Where is FRANCDEL DECO located?<span>+</span></summary><p>[Add the showroom or service-area details, if applicable.]</p></details>\n          <details><summary>How long does an order or styling project take?<span>+</span></summary><p>[Add confirmed lead times or explain how customers can ask about timing.]</p></details>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"contact section-pad\" id=\"contact\" aria-labelledby=\"contact-title\">\n      <div class=\"contact-layout shell\"><div class=\"contact-copy\"><p class=\"eyebrow light\"><span class=\"eyebrow-line\"></span> LET’S MAKE A START</p><h2 id=\"contact-title\">What are you<br><em>imagining?</em></h2><p>Share a little about your space or the details you are looking for. We’ll help you make the next step clear.</p><div class=\"contact-details\"><div><span>EMAIL</span><b>[Add business email]</b></div><div><span>PHONE / WHATSAPP</span><b>[Add contact number]</b></div><div><span>VISIT</span><b>[Add showroom address or service area]</b></div><div><span>HOURS</span><b>[Add opening hours]</b></div></div></div>\n        <form class=\"enquiry-form\" id=\"enquiry-form\" novalidate>\n          <p class=\"form-kicker\">A NOTE TO FRANCDEL DECO</p><h3>Tell us what you have in mind.</h3>\n          <label for=\"name\">Your name</label><input id=\"name\" name=\"name\" autocomplete=\"name\" required placeholder=\"Name\">\n          <label for=\"email\">Your email or phone</label><input id=\"email\" name=\"email\" autocomplete=\"email\" required placeholder=\"How should we reach you?\">\n          <label for=\"interest\">I’m interested in</label><select id=\"interest\" name=\"interest\"><option value=\"A décor collection\">A décor collection</option><option value=\"Styling support\">Styling support</option><option value=\"Something else\">Something else</option></select>\n          <label for=\"message\">Your message</label><textarea id=\"message\" name=\"message\" rows=\"4\" required placeholder=\"Tell us about your space or what you are looking for.\"></textarea>\n          <button class=\"button button-dark form-button\" type=\"submit\">Prepare my enquiry <span aria-hidden=\"true\">↗</span></button>\n          <p class=\"form-note\">Your message is prepared in this browser. It will not be sent until FRANCDEL DECO’s contact email is added.</p>\n          <div class=\"form-result\" id=\"form-result\" role=\"status\" aria-live=\"polite\" hidden></div>\n          <button class=\"copy-button\" id=\"copy-message\" type=\"button\" hidden>Copy enquiry text</button>\n        </form>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"footer\">\n    <div class=\"footer-top shell\"><a class=\"footer-logo\" href=\"#home\"><img src=\"/assets/francdel-deco.jpg\" alt=\"FRANCDEL DECO logo\"></a><p>Thoughtful details.<br><em>A more personal home.</em></p><a class=\"footer-back\" href=\"#home\">Back to top ↑</a></div>\n    <div class=\"footer-bottom shell\"><span>© <span id=\"year\"></span> FRANCDEL DECO</span><span>Brand and contact details to be confirmed.</span><span>Designed with intention.</span></div>\n  </footer>\n";

export default function Home() {
  useEffect(() => {
    const navToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#site-nav');
    const form = document.querySelector('#enquiry-form');
    const result = document.querySelector('#form-result');
    const copyButton = document.querySelector('#copy-message');
    let enquiryText = '';

    const closeNavigation = () => {
      if (!navToggle || !nav) return;
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    };

    navToggle?.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav?.classList.toggle('is-open', !expanded);
    });
    nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

    const year = document.querySelector('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    const submit = (event) => {
      event.preventDefault();
      if (!form || !result || !copyButton || !form.reportValidity()) return;
      const data = new FormData(form);
      enquiryText = [
        'Enquiry for FRANCDEL DECO',
        `Name: ${data.get('name')}`,
        `Email or phone: ${data.get('email')}`,
        `Interest: ${data.get('interest')}`,
        `Message: ${data.get('message')}`,
      ].join('\n');
      result.hidden = false;
      result.textContent = 'Your enquiry is ready. The business email has not been provided, so this page cannot send it yet. Copy the text below and use it once FRANCDEL DECO shares its preferred contact details.\n\n' + enquiryText;
      copyButton.hidden = false;
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    form?.addEventListener('submit', submit);
    copyButton?.addEventListener('click', async () => {
      if (!enquiryText) return;
      try {
        await navigator.clipboard.writeText(enquiryText);
        copyButton.textContent = 'Enquiry copied';
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(result);
        selection.removeAllRanges();
        selection.addRange(range);
        copyButton.textContent = 'Select the highlighted text and copy';
      }
    });

    return () => {
      navToggle?.replaceWith(navToggle.cloneNode(true));
      form?.removeEventListener('submit', submit);
    };
  }, []);

  return (
    <>
      <Head>
        <title>FRANCDEL DECO — Thoughtful details for your home</title>
        <meta name="description" content="FRANCDEL DECO — thoughtful details for spaces that feel like you." />
        <meta name="theme-color" content="#f4f0e8" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FRANCDEL DECO" />
        <meta property="og:title" content="FRANCDEL DECO — Thoughtful details for your home" />
        <meta property="og:description" content="Thoughtful details for spaces that feel like you." />
        <meta property="og:image" content="/assets/hero-living-room.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/assets/francdel-deco.jpg" type="image/jpeg" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
    </>
  );
}
