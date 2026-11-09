# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing site for Michelle Handley, a singer and singing teacher in Stafford, UK. Its job is enquiries for singing lessons (pop and musical theatre, in person and online) from nervous adult beginners, parents of children and teens, and exam or audition students. Wedding singing will come later under the same name; there is no weddings page today.

It is plain HTML and CSS with **no build step, no framework and no npm**. The only JavaScript is `js/site.js`, loaded with `defer` on every page, for the phone menu and form enhancement. Keep it that way: no inline scripts or handlers (the CSP in `_headers` blocks them), and the site must still work with JavaScript off. It deploys to GitHub Pages (see README.md); `.nojekyll` makes Pages serve the files as they are.

The brief this build came from is `docs/brand/WEBSITE-BRIEF.md`. Its design rules are out of date: see below.

## Brand

**All design work follows [BRAND.md](BRAND.md).** Read it before any visual change. In short:
- Brand values live in `css/brand.css`, an unchanged copy of the brand kit's file. Change brand values there only (or replace the whole file if a new kit arrives). Never hard-code colours, fonts, sizes, spacing or radii anywhere else.
- Fonts: Marcellus 400 for headlines (never bold, never capitals) and Jost 400/500 for everything else. Nothing else.
- Colours: velvet (main background), stage (panels on dark), gold (the spotlight), ivory (reading sections), plus brass, mist, moss and line. Use only the text pairings in BRAND.md's table. Gold details appear at most three times per screen: the logo, one solid button, and one line device (the stave or the rings). Gold can also fill one full-width block per page.
- Every section carries a surface class, `.mh-on-dark`, `.mh-on-stage`, `.mh-on-light` or `.mh-on-gold`, which sets its text, focus and ring colours. Neighbouring sections never share a surface: blocks of colour divide the page, not hairlines.
- Headlines are graphic: `.type-poster` (48 to 128 px) for the shortest hero headlines and `.type-feature` (44 to 96 px) for section headlines. Vary each section's layout (posters, big-type rows, staggered photos) rather than repeating label, headline and content.
- Corners are square or fully round, nothing in between. No shadows, gradients, glows, icon tiles or music clip art.
- Logo: the SVGs in `images/brand/`, never retyped, always with `width` and `height`. The mark is at least 48 px tall; clear space is half the mark's width.
- Devices: the stave (once per page, along the bottom of every hero), capsule-framed portraits, arch-framed wider photos, the rings once (home "Meet Michelle"), pill buttons.
- No stock photos of children.
- Don't invent facts: prices, times, qualifications and testimonials stay as [CAPITALS] placeholders until Michelle supplies them.
- WCAG 2.2 AA, mobile first, one breakpoint at 48em (768 px, where the header logo switches from the mark to the horizontal logo).

`docs/brand/brand/MH-brand-summary.md` is the previous identity ("Green Room"). Only its business, photo and voice sections still apply.

## Commands

There is nothing to build, lint or test. To preview:

```sh
python -m http.server 8000   # then open http://localhost:8000
```

A server is required: every link and asset uses a root path (`/css/base.css`, `/lessons.html`), so opening files via `file://` breaks styling. The root paths also keep `404.html` working at any URL.

To run Lighthouse (all indexed pages score 99 to 100 on mobile), point it at the running server. On this Windows machine it uses Edge:

```sh
CHROME_PATH="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" npx -y lighthouse@12 http://127.0.0.1:8000/lessons.html --chrome-flags="--headless=new" --view
```

Thank-you and 404 score low on SEO because they are deliberately `noindex`. In Git Bash, prefix commands that take a `/path` argument with `MSYS_NO_PATHCONV=1`, or the shell rewrites it into a Windows path.

## Architecture

### Shared shell is duplicated, not templated
Every page repeats the same `<head>` boilerplate, skip link, `<header class="site-header mh-on-dark">` and `<footer class="site-footer mh-on-dark">`. The header and footer must stay **byte-identical across all 7 pages**, apart from `aria-current="page"` on the current page's nav link (none on home, privacy, thank-you and 404, since home has no nav link of its own). Per-page differences in `<head>` are limited to title, description, canonical, `og:*`/`twitter:*` text, `noindex` on thank-you and 404 (which also have no canonical), and the LocalBusiness JSON-LD, which only index.html has. Make shell changes with a find and replace across every `.html` file, then compare the header and footer between pages to confirm they still match.

The `<head>` follows BRAND.md's head tags (favicons at the site root, manifest, theme colour, share image) and preloads all three font files (Jost 400 and 500, Marcellus), since all three paint the first screen. Leaving out a first-screen weight's preload once brought back a 0.09 layout shift on short pages, where the footer is in view as fonts swap.

### Phone menu
The DOM order in the header is logo, Menu `<button aria-controls="site-nav">`, `<nav id="site-nav">`, then the header's "Book a first lesson" button. `js/site.js` toggles `aria-expanded` on the button (and closes on Escape or after a link, including the header's booking button, is chosen). On phones the booking button sits under the links, so the open menu always offers a way to book. CSS hides the nav and that button only inside `@media (scripting: enabled) and (width < 48em)`, via `.site-header__menu[aria-expanded="false"] + .site-nav` and `~ .site-header__cta`, so with JavaScript off (or in a browser without the `scripting` query) the links and booking button stay visible and the Menu button stays hidden. Keep the Menu button immediately before the nav for that selector.

From 48em the nav sits inline. The header's "Book a first lesson" button is an outline pill (so the page's main button stays the only solid one) and is hidden from 48em until 58em, because logo, nav and button need 888 px (55.5em) to share one line (measured with the 268 px logo); a longer nav label or a bigger logo would need that breakpoint moved; that is the one extra breakpoint, and every page has its own hero button anyway.

### CSS (four files, loaded in this order on every page)
- `css/brand.css`: the brand kit's file, **unchanged**. `@font-face` rules for Jost and Marcellus, the brand tokens (`--mh-velvet`, `--mh-size-*`, `--mh-radius-none|round`, `--mh-measure` and so on), the surface classes with the focus ring, and the patterns: `.mh-btn` (`--gold`, `--velvet`, `--outline-on-dark`, `--outline-on-light`), `.mh-tag`, `.mh-label`, `.mh-capsule`, `.mh-arch`, `.mh-rings` and `.mh-stave`.
- `css/tokens.css`: the site's role names, each pointing at a brand token (`--mh-color-bg: var(--mh-velvet)`, `--mh-text-lg: var(--mh-size-h3)`), then the site's spacing and layout values. Roles that change with the surface (`--mh-color-text-muted`, `--mh-color-label`, `--mh-rule`, `--mh-field-border`, `--mh-error`) are set per surface class. **Never reuse a name brand.css defines**: tokens.css loads later, so it would quietly override the brand value.
- `css/base.css`: reset, element styles (Marcellus headlines, `font-synthesis: none`), the skip link, then layout: `.container`, `.section`, the `.mh-on-gold` surface, the type classes (`.type-poster`, `.type-feature`, `.type-display`), `.section__head` (with `--wide` for a Feature headline), `.split`, and the label colour.
- `css/components.css`: lays out and extends the brand patterns, then styles the rest: `.btn-row`, `.text-link`, header and nav, `.hero` (with `.hero__stave`), the frames' `.photo-note`, `.posters`/`.poster`, `.how__top`, `.meet`, `.story`, `.formats`, `.facts`, `.big-steps`, `.price-list`, `.testimonial`, `.faq`, the enquiry form (`.enquiry__inner`, `.form`, `.field`, `.choice`, `.check`, `.field__error`, `.form__status`), `.contact-list`, `.prose`, `.bullets`, `.list-lines`, footer, then the `min-width: 48em`, `768px` (switches with the `<picture>` sources) and `58em` queries last. The hero stacks its text and portrait, and the posters and staggered photos stay simple, until 58em: a Poster headline, three posters and the 12-column photo layouts all need that width.

Conventions that aren't obvious from a single file:
- Class names are light BEM (`block__element--modifier`). Brand patterns keep their `mh-` names; use them rather than restyling a site class to look like one.
- Only token values outside brand.css. Allowed raw values: `0`, 1 to 3 px borders and underlines, percentages, `aspect-ratio`, unitless line heights, layout widths in `rem` (grid minimums, panel max widths), the logo image sizes, and `calc()` built from tokens (44 px touch targets are `calc(var(--mh-space-6) + var(--mh-space-3))`). Check with `grep -nE "#[0-9a-fA-F]{3,8}\b|rgba?\(" css/*.css`, which should only find brand.css.
- Inline SVG icons use `stroke="currentColor"`/`fill="currentColor"` and take their colour from CSS, never hex in the markup.
- No inline `style` attributes: the CSP (`style-src 'self'`) blocks them.
- `p` has `max-width: var(--mh-measure)` globally; the placeholder notes opt out.
- Colour comes from the surface, not the element: headings, links and body text inherit it, so a component should rarely set `color` itself. Stage allows only ivory and gold text, so its muted text and labels are ivory. Gold allows only velvet text. A poster on gold carries its own surface class.
- The palette has no red. Form errors are brass (5.3:1 on ivory) and always come with an icon and words.
- Brand order everywhere: label, headline, body, then one action. The label is optional and used sparingly (BRAND.md): add one only when it says something the headline doesn't, such as a place, an audience or a status, never to repeat the headline ("Prices" above "Lesson prices"). Labels are `.mh-label` (on `p`, `dt`, footer `h2` and the testimonial `figcaption`). Links to the same destination use the same words: "Book a first lesson" for `/#contact`, "See prices" for `/lessons.html#prices`, "More about me" for `/about.html`, "Get in touch" for `/contact.html`.
- One solid button per screen: `.mh-btn--gold` on dark, `.mh-btn--velvet` on light and gold. Other actions are outline pills or a `.text-link`; in a hero they are always outline pills.
- The lessons page's anchors (`#adults`, `#young-singers`, `#exams`, `#online`, `#prices`, `#faq`, `#first-lesson`, `#enquire`) are linked from the home cards, header, footer and thank-you page. Don't rename them. Its "Who lessons are for" cards match the home cards and the footer: Adults, Children and teens, Exams and auditions.

### Placeholder system
Most real content doesn't exist yet. Every unknown is a visible `[CAPITALS]` token with an HTML comment immediately before it:

```html
<!-- PLACEHOLDER: lesson price -->[PRICE] for <!-- PLACEHOLDER: lesson length -->[LESSON LENGTH]
```

Hidden placeholders (domain, form key, photos, JSON-LD strings, `robots.txt`, `sitemap.xml`) carry a `PLACEHOLDER` comment or string only. `PLACEHOLDERS.md` lists every one by file and line; **update it by hand** whenever you add, remove or move a placeholder, or edit a page in a way that shifts its line numbers. When you replace a placeholder, remove both the comment and the token (and, for a photo, the `.photo-note` paragraph). Never fill a placeholder with an invented fact. The launch goal is that searches for `PLACEHOLDER` and for `[` followed by a capital letter find only PLACEHOLDERS.md.

The live domain is also a placeholder: `https://michellehandley.example` appears in canonicals, social tags, JSON-LD, form `redirect` fields, `sitemap.xml` and `robots.txt`, and going live is one find and replace.

### Forms
The enquiry form on index.html (`#contact`) and lessons.html (`#enquire`) uses the reference fields plus one: name, email, phone (optional), who the lessons are for (Me or My child, radios in a `fieldset` with neither preselected), where (select), when suits you (optional, so Michelle can reply with times), message (its hint asks for any exam or audition and a child's age) and a required consent box. Above the form, the intro says when Michelle replies and that under-18s are booked by a parent or guardian. contact.html has a general message form with a topic select. All three POST to Web3Forms (`https://api.web3forms.com/submit`) with the hidden fields `access_key` (placeholder `YOUR_WEB3FORMS_ACCESS_KEY`), `subject`, `from_name`, an absolute `redirect` to `/thank-you.html`, and a `botcheck` honeypot hidden with `.form__honeypot`. Formspree was rejected because its free plan can't redirect to a custom thank-you page. Forms only sit on `.mh-on-light` sections, which is where the field colours are defined.

Without JS, validation is native HTML and the form posts and redirects. With JS, `site.js` sets `noValidate`, shows the `<p class="field__error" id="[field id]-error" hidden>` after each required field (wording in its `data-missing` and `data-invalid` attributes), sets `aria-invalid` and adds the error to `aria-describedby`, and focuses the first error. It then sends with `fetch` and goes to the redirect's path on success, or unhides and focuses `.form__status` on failure. Every required field needs that error paragraph, or the script will throw.

### Images
- Each photo slot has explicit `width`/`height`; `fetchpriority="high"` on the hero image only, `loading="lazy"` below the fold.
- Portraits of Michelle go in `.mh-capsule` (5:9, fully round); wider photos go in `.mh-arch` (round top, square base) at their own ratio. The rings go on one capsule per page at most.
- Placeholders are transparent SVGs at the final ratio (`images/placeholders/scene-4x5.svg`, `scene-3x2.svg`, and `portrait-5x9.svg`, currently unused), so the frame's own placeholder colour from brand.css shows through. Each has a `.photo-note` naming the shot from the brand's shot list. `PHOTOGRAPHY.md` lists what each slot needs, for Michelle and her photographer.
- The hero portraits and staggered photos are real stage photos, cropped by their frames: `images/home-portrait-400/496` (7:8, from `performing/5.png`), `images/about-portrait-480/688` (4:5, from `performing/3.png`), `images/stage-twirl-400/595` (from `performing/1.png`) and `images/stage-reach-480/884` (from `performing/4.png`), each as AVIF, WebP and JPG. README.md has the `<picture>` pattern for adding more. Never upscale an original to fill the standard widths.
- Logos are the SVG files in `images/brand/` (outlined paths, so no font dependency). The header uses BRAND.md's `<picture>` snippet: the gold mark at 31 × 56 on phones, the horizontal gold logo at 268 × 64 from 768 px. The horizontal logo was redrawn in October 2026 so the name and line fill the capsule's straight sides (1255 × 300, wider than the kit's first 1013 × 300). The header's padding is set to keep their clear space. The footer is big on purpose: a sign-off line at hero-headline size ("Every voice starts somewhere.", the home headline), the link columns in Marcellus, then the logo at the full content width (a `<picture>`: the stacked gold logo, up to 28rem, on phones; the horizontal gold logo from 768 px). The logo's margins are shares of the width (19.6% stacked, 6.6% horizontal; recalculate them if a logo file's proportions change), so its clear space grows with it. The stave is a `<picture>` too: the narrow file below 768 px, the wide one above.
- The hero's velvet ends along the stave's last line. Where an ivory or gold section follows, `.hero__stave::before` fills the stave below the middle of that line with that colour, through `clip-path` polygons traced from the two stave SVGs (switched at `min-width: 768px`, in px to match the `<picture>`). **If the stave files change, retrace those polygons.** A hero portrait overlaps the stave by a share of the width (10% narrow, 3.15% wide) so it stands on the last line.
- Favicons, the manifest and the icons live at the site root; the share image is `images/brand/og-image.png`.

### Deployment headers
`_headers` applies security and cache headers on Netlify and Cloudflare Pages; GitHub Pages ignores it. Its Content-Security-Policy allows only self, plus Web3Forms for `connect-src` and `form-action`. **Adding any third-party script, font, embed or form endpoint requires updating that CSP**, and the privacy notice too if it collects data (e.g. analytics). There are no analytics or cookies today.

## Copy and voice

- British English ("enquiry", "favourite", `lang="en-GB"`) in Michelle's voice: like a friend who happens to be a pro. Short sentences, plain words, written as "I", encouraging, never gushing.
- Headlines in sentence case, about eight words at most.
- Page titles use a pipe separator: `Page | Michelle Handley`. The home title is "Singing lessons in Stafford | Michelle Handley".
- Keep the supplied copy from the brief and brand summary. Don't invent prices, qualifications, exam boards, years of experience, testimonials or reviews.
