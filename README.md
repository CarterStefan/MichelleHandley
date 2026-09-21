# Michelle Handley | Wedding Singer & Vocal Coach

A static marketing site in plain HTML and CSS. There is no build step, no framework, no npm and no JavaScript. Upload the folder and it works.

## What's in the folder

```
index.html        Home: intro, video, two paths, testimonials
weddings.html     Offer, listen, repertoire, packages, FAQ, enquiry form
lessons.html      Who it suits, formats, prices, first lesson, FAQ, enquiry form
about.html        Story, credentials, photos
contact.html      General enquiry form, email, Instagram
thank-you.html    Where the forms redirect after sending (noindex)
404.html          Not-found page (noindex)
privacy.html      Privacy policy
css/
  base.css        Design tokens, fonts, reset, typography, utilities
  components.css  Layout, header/nav, footer, buttons, media, FAQ, forms, etc.
  pages.css       Small layouts used by a single page
fonts/            Fraunces and Instrument Sans (variable woff2, OFL licensed)
images/
  placeholders/   Labelled placeholder SVGs at each size used in srcset
  icons/          favicon.svg, apple-touch-icon.png, icon-192/512.png
  og-image.jpg    1200 × 630 social sharing image
audio/            Drop MP3 samples for the weddings page here
favicon.ico, site.webmanifest, robots.txt, sitemap.xml
_headers          Security and caching headers (Netlify and Cloudflare Pages)
PLACEHOLDERS.md   Every placeholder, by file and line
```

## Previewing locally

Links and assets use root paths (`/css/base.css`), so open the site through a local server rather than double-clicking the HTML files:

```sh
cd path/to/Michelle_Handley
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

### Netlify (simplest)
1. Go to https://app.netlify.com/drop.
2. Drag the whole `Michelle_Handley` folder onto the page.
3. In **Domain management**, add the custom domain and follow the DNS steps.

`404.html` and `_headers` are picked up automatically.

### Cloudflare Pages
1. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Upload assets**.
2. Name the project, upload the folder and deploy.
3. Add the custom domain under **Custom domains**.

Cloudflare Pages serves pretty URLs, so `/weddings.html` redirects to `/weddings`. Everything still works. For the tidiest SEO on Cloudflare, find and replace `.html"` in the canonical and `og:url` tags and in `sitemap.xml` with the extensionless form.

### GitHub Pages
1. Create a repository and push the folder's contents to the `main` branch.
2. Open **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`.
3. Add the custom domain in the same screen. This is required: the root-relative paths only work when the site is served from the domain root, not from `username.github.io/repo-name/`.

GitHub Pages ignores `_headers`, so the security and cache headers won't apply there.

## Going live: the essentials

1. **Domain.** Find and replace `https://michellehandley.example` across the whole project with the real domain (e.g. `https://www.michellehandley.co.uk`). This covers canonical URLs, social tags, structured data, form redirects, `sitemap.xml` and `robots.txt`.
2. **Forms.** Create a free access key at https://web3forms.com using Michelle's email address. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `weddings.html`, `lessons.html` and `contact.html`. Send a test from each form and check it lands (and check the spam folder).
3. **Placeholders.** Work through `PLACEHOLDERS.md`. When you're done, searching the project for `PLACEHOLDER` should only find that file.

### How the forms work
Each form posts straight to Web3Forms, which emails the submission to Michelle and then redirects the visitor to `thank-you.html` using the hidden `redirect` field. The hidden `botcheck` checkbox is a honeypot: people never see it, and Web3Forms discards submissions from bots that tick it. Validation is native HTML (`required`, `type="email"`, `type="tel"` with a `pattern`, `type="date"`).

Formspree was not used because its free plan doesn't support redirecting to your own thank-you page.

## Swapping in real photos

Each image slot is a `<picture>` with `srcset`, `sizes` and fixed `width`/`height`, pointing at labelled placeholders in `images/placeholders/`. The filename and label give the aspect ratio and the widths needed:

| Ratio | Widths to export | Used for |
|---|---|---|
| 4:5 portrait | 480, 800, 1200 | Hero portraits, path panels, wedding moments |
| 3:2 landscape | 640, 1024, 1600 | Page heroes, candid shots |
| 1:1 square | 400, 800 | Home "Hello" section |

Export each photo at those widths as AVIF, WebP and JPG, save them in `images/`, and replace the `<img>` with this pattern (keep the existing `sizes`, `width`, `height`, `loading` and `fetchpriority` values):

```html
<picture>
  <source type="image/avif" srcset="/images/path-weddings-480.avif 480w, /images/path-weddings-800.avif 800w, /images/path-weddings-1200.avif 1200w" sizes="(min-width: 74rem) 35rem, (min-width: 48rem) 45vw, calc(100vw - 2rem)">
  <source type="image/webp" srcset="/images/path-weddings-480.webp 480w, /images/path-weddings-800.webp 800w, /images/path-weddings-1200.webp 1200w" sizes="(min-width: 74rem) 35rem, (min-width: 48rem) 45vw, calc(100vw - 2rem)">
  <img src="/images/path-weddings-800.jpg"
       srcset="/images/path-weddings-480.jpg 480w, /images/path-weddings-800.jpg 800w, /images/path-weddings-1200.jpg 1200w"
       sizes="(min-width: 74rem) 35rem, (min-width: 48rem) 45vw, calc(100vw - 2rem)"
       width="800" height="1000"
       alt="Describe what is actually in the photo"
       loading="lazy" decoding="async">
</picture>
```

Free tools such as https://squoosh.app handle the resizing and conversion. Aim for under about 200 KB per image at 1200 px. Update each `alt` text to describe the real photo.

Also consider replacing `images/og-image.jpg` (the preview shown when the site is shared) with a 1200 × 630 photo of Michelle, and `favicon.svg` and the icon PNGs with a final logo mark.

## Video and audio

- **YouTube:** replace `VIDEO_ID` in `index.html` and `weddings.html` with the ID from the video URL (the part after `v=`). Embeds use `youtube-nocookie.com` and `loading="lazy"`.
- **Vimeo instead:** swap the `src` for `https://player.vimeo.com/video/VIDEO_ID?dnt=1`. The `_headers` CSP already allows it.
- **Audio:** add three MP3s to `/audio` (names are listed in `audio/README.txt`) and update the song titles on `weddings.html`.

## Changing the brand

All colours, fonts, spacing, radii and shadows are CSS custom properties at the top of `css/base.css`. The dark theme only reassigns the colour tokens. To change fonts, replace the woff2 files in `/fonts`, update the three `@font-face` rules and the preload link in each page's `<head>`, and re-measure the fallback `size-adjust` values if you want the swap to stay shift-free.

## Editing the shared header and footer

With no build step, the header, footer and `<head>` are repeated in every page, and the markup is identical apart from:

- the `<title>`, description, canonical and social tags in `<head>`
- `aria-current="page"` on the current page's nav link
- the structured data block, which only appears on the home page

To change a nav link or footer detail, use your editor's find and replace across all `.html` files, so the pages stay identical.

## Accessibility and performance notes

- One `h1` per page, logical heading order, landmarks, skip link, visible `:focus-visible` rings.
- The mobile menu is CSS only: a real checkbox (focusable, Space toggles it) controls the panel. Closed menu links are `display: none`, so they're out of the tab order.
- FAQs use native `<details>`/`<summary>`.
- All colour pairs meet WCAG AA in both light and dark themes (most meet AAA).
- `prefers-reduced-motion` and `prefers-color-scheme` are respected.
- Lighthouse (mobile, local server) scored 98 to 100 for performance, 100 for accessibility and SEO, and 96 to 100 for best practices. The only best-practices flags come from inside the YouTube iframe. Thank-you and 404 score lower on SEO only because they are deliberately `noindex`.

## Pre-launch checklist

**Content**
- [ ] Every item in `PLACEHOLDERS.md` replaced; searching for `PLACEHOLDER` finds only that file
- [ ] Michelle has read every page and is happy with the voice and facts
- [ ] Repertoire list, set lengths and lesson lengths confirmed
- [ ] Testimonials are real, and each person has agreed to be quoted
- [ ] Privacy policy completed and checked against local rules

**Photos**
- [ ] All 12 photo slots replaced at the right ratios and widths (AVIF/WebP/JPG)
- [ ] Every `alt` text rewritten to describe the real photo
- [ ] `og-image.jpg`, favicon and app icons updated

**Video and audio**
- [ ] YouTube (or Vimeo) IDs in place and playing on a phone
- [ ] MP3 samples added and playable

**Prices and terms**
- [ ] Wedding package prices, deposit, balance terms, travel distance and rate
- [ ] Lesson prices and cancellation notice
- [ ] FAQ answers match the booking terms

**Form endpoint**
- [ ] Web3Forms access key added to all three forms
- [ ] Test submission from each form arrives, and the redirect lands on thank-you.html
- [ ] Web3Forms notification emails are not going to spam

**Domain**
- [ ] `https://michellehandley.example` replaced everywhere
- [ ] Custom domain connected, HTTPS active, `www` and bare domain both resolve
- [ ] `sitemap.xml` submitted in Google Search Console
- [ ] Google Business Profile created and linked to the site

**Analytics**
- [ ] Decide whether to add analytics. A cookieless option (e.g. Plausible, Fathom or Cloudflare Web Analytics) avoids a cookie banner.
- [ ] If added: update the privacy policy and allow the script's domain in the `_headers` Content-Security-Policy

**Final checks**
- [ ] Lighthouse run on the live URL
- [ ] Tested on a real iPhone and Android phone, including opening links from Instagram
- [ ] Instagram bio links to the site
