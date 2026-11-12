# Michelle Handley | Singing lessons in Stafford

The website for Michelle Handley's singing lessons, in her October 2026 visual identity (velvet green, gold and ivory). It's plain HTML and CSS with one small script and no build step: upload the folder and it works.

## What's in the folder

```
index.html        Home: hero, who lessons are for, how lessons work, meet Michelle, testimonial, enquiry form
lessons.html      Who lessons suit, in person or online, prices, first lesson, questions, enquiry form
about.html        Michelle's story, training and experience, a few things about her
contact.html      Contact details and a general message form
privacy.html      Privacy notice (a template to check before launch)
thank-you.html    Where the forms land after sending (noindex)
404.html          Not-found page (noindex)
css/
  brand.css       The brand kit's fonts, colours, type sizes and patterns (buttons, frames, rings, stave). Unchanged
  tokens.css      The site's names for those values, plus spacing and layout
  base.css        Reset, element styles, sections, motion
  components.css  Header, hero, stacked cards, panels, details, timelines, prices, testimonial, questions, forms, notes, footer
js/
  site.js         The phone menu button, and form error messages (deferred; the site works without it)
  motion.js       The compact header and the gentle reveals as you scroll (deferred; the site works without it)
fonts/            Jost 400/500 (woff2) and Marcellus (the original ttf), with their OFL licences
images/
  brand/          Logos (stacked, horizontal and mark, in gold, green and ivory), the stave bands, og-image.png
  placeholders/   Stand-ins until Michelle's photos arrive
  home-portrait-*   The stage photo in the home page's hero
  about-portrait-*  The stage photo in the about page's hero, also in the home page's row of six
  stage-twirl-*, stage-reach-*  Stage photos on home, lessons and about
  performing/     Original stage photos (not used by any page)
docs/brand/       The original brief and the previous brand's summary (its photo and voice notes still apply)
brand/            Working files kept on this machine only (gitignored), such as photo-shot-list.md
_directions/      The November 2026 home page directions, including the "Refined" prototype (gitignored)
favicon.ico, favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
robots.txt, sitemap.xml
.nojekyll         Tells GitHub Pages to serve the files as they are
_headers          Security and cache headers for Netlify or Cloudflare Pages (GitHub Pages ignores it)
BRAND.md          The brand rules: every design decision follows them
PLACEHOLDERS.md   Every placeholder, by file and line
PHOTOGRAPHY.md    The photos the site needs, for Michelle and her photographer
```

## Previewing locally

Links and assets use relative paths (`css/base.css`), so the site works from a subfolder or a domain's root. Preview it through a local server rather than double-clicking the HTML files, so links to the home page behave as they will when live:

```sh
cd path/to/Michelle_Handley
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

### GitHub Pages
1. Push the folder's contents to the `main` branch of a repository.
2. Open **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The site then works at `username.github.io/repo-name/`. Add a custom domain on the same screen when there is one.

GitHub Pages serves `404.html` for missing pages. It keeps its styling one level down, but not at a nested wrong URL such as `/repo-name/a/b`, because its paths are relative. It ignores `_headers`, so the security and cache headers there don't apply. The `docs/` folder and the `.md` files are published too; `robots.txt` asks search engines to skip `docs/`. The `brand/` and `_directions/` folders are gitignored, so they never reach the repository or the site.

### Netlify or Cloudflare Pages
Drag the folder onto https://app.netlify.com/drop, or upload it in **Workers & Pages → Create → Pages → Upload assets**. Both read `_headers`.

## Going live: the essentials

1. **Domain.** Find and replace `https://michellehandley.example` across the whole project with the real domain. This covers canonical URLs, social tags, structured data, form redirects, `sitemap.xml` and `robots.txt`.
2. **Forms.** Create a free access key at https://web3forms.com using Michelle's email address. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`, `lessons.html` and `contact.html`. Send a test from each form and check it arrives (and check the spam folder).
3. **Placeholders.** Work through `PLACEHOLDERS.md`. When you're done, searching for `PLACEHOLDER`, and for `[` followed by a capital letter, should only find that file.

### How the forms work
Each form posts to Web3Forms, which emails the message to Michelle. The hidden `botcheck` checkbox is a honeypot: people never see it, and Web3Forms discards anything that ticks it.

- **Without JavaScript**, the browser checks the required fields, the form posts, and Web3Forms redirects to `thank-you.html` using the hidden `redirect` field.
- **With JavaScript**, `js/site.js` checks the fields itself and shows each problem in words under the field (linked with `aria-invalid` and `aria-describedby`), then moves focus to the first one. It sends the form in the background, goes to `thank-you.html` if it worked, and shows a message with Michelle's email address if it didn't.

The wording of each error lives in the HTML, in the `data-missing` and `data-invalid` attributes of the `<p class="field__error">` after each required field.

## Swapping in real photos

Each photo slot points at a stand-in from `images/placeholders/`, with a small note naming the shot. `PHOTOGRAPHY.md` lists the shape and widths for each one. Export the photo at those widths as AVIF, WebP and JPG, save them in `images/`, and replace the `<img>` with this pattern. This one is for a hero portrait, a 5:9 capsule; keep the slot's `loading` or `fetchpriority`, and set `width` and `height` to the largest file's size:

```html
<picture>
  <source type="image/avif" srcset="images/home-hero-480.avif 480w, images/home-hero-800.avif 800w" sizes="(min-width: 58em) 22.5rem, (min-width: 48em) 17rem, 16.5rem">
  <source type="image/webp" srcset="images/home-hero-480.webp 480w, images/home-hero-800.webp 800w" sizes="(min-width: 58em) 22.5rem, (min-width: 48em) 17rem, 16.5rem">
  <img src="images/home-hero-800.jpg"
       srcset="images/home-hero-480.jpg 480w, images/home-hero-800.jpg 800w"
       sizes="(min-width: 58em) 22.5rem, (min-width: 48em) 17rem, 16.5rem"
       width="800" height="1440"
       alt="Describe what is actually in the photo"
       fetchpriority="high" decoding="async">
</picture>
```

Then delete the `<p class="photo-note">` beside it. The frames (`.mh-capsule` and `.mh-arch`) crop whatever goes in them to fill, so a photo in another shape still works but loses its edges. The hero portraits are like that: wider photos in 5:9 capsules, so their `sizes` ask for a wider file to allow for the crop. Their originals were also smaller than the standard widths, so they list only the widths the originals could supply. Never upscale a photo to fill the table. Free tools such as https://squoosh.app handle the resizing and conversion; aim for under about 200 KB per image at 1200 px.

## The brand

The brand rules are in `BRAND.md`, and every design decision follows them. In short:

- Every brand value comes from `css/brand.css`, the brand kit's file, unchanged. `css/tokens.css` gives the site's own names to those values. Change a brand value in brand.css and it changes everywhere.
- Fonts: Marcellus for headlines, Jost for everything else. Nothing else.
- Colour: velvet green does most of the work, ivory is for reading, and gold is the spotlight: the logo, one solid button and the stave per screen, plus one full-width block per page. Neighbouring sections always change colour. Only the text pairings in BRAND.md's table.
- Layout and type: every section has the same padding and opens with a centred headline, then its content, often in a square panel of a second colour. The hero headline is up to 64 px and section headlines up to 44 px.
- Corners are square or fully round. Portraits sit in capsules, wider photos in arches, and the stave runs along the bottom of each page's hero.

The fonts are self-hosted, so pages don't contact Google. To change a font, replace its file in `/fonts`, update the `@font-face` rules at the top of `css/brand.css`, and update the preload links in each page's `<head>`.

The original brief is `docs/brand/WEBSITE-BRIEF.md`. The previous identity's summary sits beside it, kept for its photo shot list and voice notes.

## Editing the shared header and footer

There's no build step, so the header, footer and `<head>` are repeated in every page. They're identical apart from:

- the `<title>`, description, canonical and social tags in `<head>`
- `noindex` on thank-you and 404, which also have no canonical
- `aria-current="page"` on the current page's nav link
- the structured data block, which only the home page has

To change a nav link or footer detail, find and replace across all `.html` files so the pages stay identical.

## Accessibility and performance

- One `h1` per page, headings in order, landmarks, a skip link, and the brand's focus ring (2 px, gold on dark sections and velvet on light ones) on everything you can tab to.
- The Menu button appears only when JavaScript can run. Without it, the nav links simply show.
- Questions use native `<details>`/`<summary>`.
- Every text colour sits on a background BRAND.md lists as a passing pair.
- `prefers-reduced-motion` turns off the button transitions and smooth scrolling.
- On 9 November 2026, after moving to colour blocks, the shared two-column layout and the new footer: Lighthouse (mobile, local server) scored 98 to 99 for performance and 100 for accessibility, best practices and SEO on home, lessons, about, contact and privacy, with no layout shift. A script checked every page at 320, 390, 768, 928, 1024 and 1440 px for sideways overflow and broken images, and at 1440 px for text contrast. All passed.
- On 28 October 2026, after the move to the new identity: Lighthouse (mobile, local server) scored 99 to 100 for performance and 100 for accessibility, best practices and SEO, with no layout shift. Thank-you and 404 score lower on SEO only because they're deliberately `noindex`. html-validate (standard rules) found no errors. A script checked every page at 375, 768 and 1280 px: each text colour against BRAND.md's pairings, and each keyboard focus stop for its 2 px ring. All passed. (The W3C validator and axe-core runs of 16 October were before the new identity.)

## Pre-launch checklist

**Content**
- [ ] Every item in `PLACEHOLDERS.md` replaced
- [ ] Michelle has read every page and is happy with the wording and facts
- [ ] Testimonials are real, and each person has agreed to be quoted
- [ ] Privacy notice checked against ICO guidance and finished

**Photos**
- [ ] Photo slots filled, following `PHOTOGRAPHY.md`
- [ ] Every `alt` text describes the real photo, and the shot notes are deleted

**Forms**
- [ ] Web3Forms access key in all three forms
- [ ] A test from each form arrives, and lands on `thank-you.html`
- [ ] Web3Forms emails aren't going to spam

**Domain**
- [ ] `https://michellehandley.example` replaced everywhere
- [ ] Custom domain connected, HTTPS on, `www` and bare domain both working
- [ ] `sitemap.xml` submitted in Google Search Console
- [ ] Google Business Profile created and linked to the site

**Analytics**
- [ ] None today. If any are added, update the privacy notice, and the `_headers` Content-Security-Policy if the host reads it

**Final checks**
- [ ] Lighthouse run on the live URL
- [ ] Tested on a real iPhone and Android phone, including opening links from Instagram
- [ ] Instagram bio links to the site
