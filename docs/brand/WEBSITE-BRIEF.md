# Website brief: Michelle Handley, singing lessons in Stafford

> **History (October 2026).** This is the brief the site was first built from, under the Green Room identity. The site has since moved to Michelle's new identity: its design rules (section 7) and the CLAUDE.md block (section 11) are replaced by `BRAND.md` at the repo root. The old hand-off files listed in section 4 (the PDF, CSS, reference pages, logos and icons) have been removed; only this brief and the brand summary remain. The goals, audience, scope and content still describe the site.

> **For Stefan (the human):**
> 1. Copy this whole folder into the repo, for example as `docs/brand/`.
> 2. Start Claude Code in the repo and send:
>
> *"Read docs/brand/WEBSITE-BRIEF.md and every file it lists. Explore the repo, then give me your plan and questions before changing anything."*

---

## 1. What we're doing

We are rebuilding the look and front-end structure of Michelle Handley's website on her new brand identity, called **Green Room**.

**About Michelle:** she is a singer and singing teacher in Stafford, UK. She teaches pop and musical theatre, in person and online.

**What's already done:** the identity is finished and approved for build. It covers the logo, colours, type, graphic devices and components, and this folder contains everything needed to implement it.

**The site's tech:** the site is plain HTML and CSS. Every design value (colour, font, size, spacing, radius, shadow) lives in CSS custom properties in `tokens.css`, and everything else references those tokens.

Your job is to:

1. apply the identity across the whole site
2. structure the home page as described in section 6
3. build the shared components to match the reference
4. leave every unknown fact as a clearly marked placeholder

## 2. Why

**Who the site is for:**
- nervous adult beginners
- parents booking lessons for children and teens
- students preparing for exams and auditions

Within a few seconds on a phone they need to feel welcome and safe. They also need to see who lessons are for, where and when they happen, what they cost, and how to book.

**How people arrive:**
- Instagram
- local Google search ("singing lessons Stafford")
- flyers and noticeboard posters

The site has to load fast on phones, be findable locally, and look exactly like the flyers and posts. That consistency is what makes a small business feel trustworthy.

**Why tokens matter:** Michelle and Stefan will keep changing content. Tokens keep every page consistent, and make a future change (for example the wedding pages) a matter of editing values rather than hunting through CSS.

**Accessibility (WCAG 2.2 AA) is a requirement, not a nice-to-have.** The audience includes parents, older beginners and people on small screens in bright light.

## 3. Outcome

When you're finished, all of the following is true:

- Every page uses `tokens.css` and the Green Room components.
- The home page follows the section order below.
- The site is mobile-first, accessible and fast.
- Placeholders are clearly marked.
- All checks in section 9 pass.
- You've written a short report (section 10) with screenshots at 390 px and 1280 px wide.

## 4. Files in this hand-off

Paths are suggestions; fit them into the repo's existing structure and keep them consistent.

| File | What it is | Use it for |
|---|---|---|
| `brand/MH-brand-summary.md` | The brand rules in plain text: logo, colour, type, devices, voice, photography | **Read first.** The rules you must follow. |
| `brand/MH-brand-guidelines.pdf` | The visual guidelines, 10 pages | Pages 1 (cheat sheet), 5 (colour), 6 (type) and 8 (devices) matter most for the web. |
| `css/tokens.css` | The single source of truth for every value | Load first on every page. **Don't change existing values.** Add new tokens only if truly needed, in the same naming style, and list them in your report. |
| `css/components.css` | Reference CSS for the header, hero, buttons, cards, testimonial, enquiry form and footer | Mobile first, one breakpoint at `48em`. Adopt it, and extend it in the same style. |
| `reference/components.html` | The markup for those components | Copy the markup patterns. The grey `.spec` bands are only labels: don't ship them. |
| `reference/components-1280.png` and `reference/components-390.png` | Full-page screenshots of the components at desktop and phone width | The visual target. |
| `assets/logo/*.svg` | Logo lockups | Header: `MH-logo-horizontal-nameonly-colour.svg`. Footer: `MH-logo-stacked-reversed.svg`. Others for later use. |
| `assets/icons/` | `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Favicons and the web app manifest. |
| `assets/og-image.png` | 1200 × 630 social sharing image | Open Graph and Twitter cards. |

## 5. How to work

1. **Explore the repo.** List the pages, the current CSS and JS, any build step, the hosting or deploy config, and how the enquiry form is (or isn't) handled today.
2. **Read** `brand/MH-brand-summary.md` and `css/tokens.css`. Open `reference/components.html` and both reference PNGs.
3. **Plan.** Write a short plan covering:
   - the page list
   - what you'll replace, move or delete
   - the file structure
   - your questions (at least: which form handler, and whether there's analytics)

   **Wait for my OK** before deleting pages or content, or changing URLs.
4. **Build in small commits:**
   1. tokens, base styles, fonts, favicons and meta
   2. header, mobile menu and footer
   3. the home page
   4. the remaining pages
   5. the enquiry form
   6. polish and checks
5. **Check** everything in section 9, then report as in section 10.

## 6. Scope

### In scope

**Site-wide:**
- `tokens.css`, base styles and fonts
- a skip link
- the header (logo, nav, "Book a first lesson" button), with a mobile menu below 48em
- the footer
- favicons, the web app manifest and `theme-color`
- meta tags and Open Graph tags
- LocalBusiness structured data

**Home page sections, in this order:**

1. **Header.**
2. **Hero:**
   - A green section with the m-arch edge (`--mh-arch-yellow`) across the top of the content.
   - Label: "Singing lessons in Stafford and online".
   - `h1`: "Every voice starts somewhere."
   - Lead text from the reference.
   - Primary button "Book a first lesson" linking to `#contact`, and a secondary on-dark button "How lessons work".
   - A portrait in the arch frame (`--mh-radius-arch`), sitting on the bottom edge of the green section.
   - Until Michelle's photo arrives, use the placeholder from the reference.
3. **Who lessons are for:** a pink section with three white cards, using the copy in the reference.
   - Adults: "Starting out"
   - Children and teens: "Confidence first"
   - Exams and auditions: "Ready on the day"
4. **How lessons work:** a white section with three facts, built from existing patterns (cards or a three-column list):
   - **Where:** "In person in Stafford, or online"
   - **When:** `[DAYS AND TIMES]`
   - **Cost:** `[PRICE]` for `[LESSON LENGTH]`

   Optionally, add "Your first lesson" as three steps: *We chat. Gentle warm-ups. A song you choose.*
5. **Meet Michelle:**
   - an arch-framed photo placeholder
   - the label "Meet Michelle", then the heading "Hi, I'm Michelle."
   - the body copy: "I'm a singer and singing teacher in Stafford. [ONE OR TWO LINES ABOUT YOUR PERFORMING AND TEACHING.]"
6. **Testimonial:** the green panel from the reference, with the placeholder quote until real quotes arrive.
7. **Enquiry:** "Ready when you are." plus the form, with `id="contact"`.
8. **Footer.**

**Other pages** (for example lessons, about, prices, contact):
- restyle them with the same components
- keep their content
- fix heading order

**Enquiry form:**
- Use the fields from the reference:
  - name (required)
  - email (required)
  - phone (optional)
  - who the lessons are for (radio buttons)
  - where (select)
  - message
  - consent checkbox (required)
- Accessible validation.
- A hidden honeypot field against spam.
- A link to the privacy notice.
- Success and error states.
- Wire it to the existing handler if there is one. Otherwise ask me which service to use. Don't pick one yourself.

### Out of scope for now

- Wedding pages. They'll come later and use the weddings variant in section 10 of the brand summary.
- Online booking, payments, a CMS or a blog.
- Changes to analytics or cookies. If analytics already exists, tell me what you find.

## 7. Design rules (non-negotiable)

1. **Tokens only.**
   - Component CSS must not contain raw colours, font names, font sizes, spacing or radii.
   - Allowed exceptions: `0`, 1–2 px borders, percentages, `aspect-ratio`, and `calc()` that combines tokens.
2. **Fonts.**
   - Only Josefin Sans 600 and 700, and Lato 400, 700 and 400 italic.
   - Load them from Google Fonts with `preconnect` and `display=swap`.
   - No other fonts, and no icon fonts.
3. **Colour pairs.**
   - Only the allowed text and background pairs in section 4 of the brand summary.
   - Pink or yellow are never used as text on white, and white is never used as text on pink or yellow.
   - Yellow is only for the primary action, the m-arch edge and the mic's glow. That means one primary (yellow) button per screen.
4. **Logo.**
   - Always the SVG files, never retyped.
   - Header: horizontal name-only, at least 180 px wide (188 × 52 in the reference).
   - Footer: stacked reversed, at least 280 px wide.
   - Keep clear space of one arch of the M.
   - No recolouring, effects or distortion.
5. **Devices.**
   - The m-arch edge once per page, in the hero.
   - The arch frame for portraits.
   - Pill-shaped buttons.
   - The green hero above a pink section echoes the print "green-room split".
6. **Layout.**
   - Mobile first.
   - Content width from `--mh-container` (70 rem), gutters from `--mh-gutter`, section spacing from `--mh-section`.
   - One breakpoint at `48em`. Add another only if a layout genuinely breaks, and use `em`.
7. **Imagery.**
   - No stock photos, and especially no photos of children.
   - Keep placeholders until Michelle's photos arrive.
   - No music clichés: treble clefs, floating notes, piano-key borders, or extra microphone shapes beyond the logo.
   - No gradients, glows, glassmorphism or gradient text.
   - No cream or beige backgrounds.
8. **Copy.**
   - Keep the supplied copy.
   - Don't invent prices, qualifications, exam boards, years of experience, testimonials or reviews.
   - Unknowns stay as `[CAPITALS]` placeholders.

## 8. Technical requirements

- **HTML:**
  - semantic landmarks (`header`, `nav`, `main`, `footer`)
  - one `h1` per page, with no skipped heading levels
  - `button` for actions and `a` for navigation
- **CSS:**
  - Order the stylesheet tokens, then base, layout, components, utilities.
  - Use the reference's light BEM-style class names.
  - No `!important`, no frameworks, no float layouts.
  - Remove the `.spec` label styles in production.
- **JavaScript:**
  - Only for the mobile menu toggle, plus optional form enhancement.
  - Put it in its own deferred file, with no inline handlers.
  - The menu button updates `aria-expanded` and `aria-controls`.
  - **Without JavaScript the nav must still be visible and usable.**
- **Images:**
  - `width` and `height` attributes, so images don't cause layout shift.
  - Meaningful `alt` text, or `alt=""` for decorative images.
  - `loading="lazy"` below the fold, and `fetchpriority="high"` on the hero image only.
  - SVG for logos, and WebP or AVIF for photos when they arrive.
- **Performance:**
  - No layout shift from fonts or images.
  - Minimal CSS and JS, with no unused rules carried over from the reference.
- **SEO and local search:**
  - A unique `<title>` and meta description on every page. The home page title is "Singing lessons in Stafford | Michelle Handley".
  - Canonical URL.
  - Open Graph and Twitter card tags using `og-image.png`.
  - `LocalBusiness` JSON-LD with name, description, URL, `areaServed` "Stafford" and placeholder telephone and `sameAs` links.
  - `sitemap.xml` and `robots.txt`, if they're missing.
- **Icons:**
  - `favicon.ico` and `favicon.svg`.
  - `apple-touch-icon.png` at 180 px.
  - `site.webmanifest` with `icon-192.png` and `icon-512.png`, and `theme_color` `#1F4D3F`.
- **Accessibility (WCAG 2.2 AA):**
  - a skip link
  - the focus ring from `--mh-shadow-focus`, visible on white, pink and green
  - touch targets of at least 44 × 44 px
  - real `label`s, and `fieldset`/`legend` for the radio group
  - errors shown in text and linked with `aria-invalid` and `aria-describedby`, never by colour alone
  - `prefers-reduced-motion` respected
- **Privacy:**
  - The form posts with `POST` and puts no personal data in URLs.
  - The consent text matches the reference.
  - The privacy notice page can be a placeholder page marked `[PRIVACY NOTICE TO COME]`.

## 9. Acceptance criteria

Each item says how to check it.

1. **Tokens first.** `tokens.css` is the first stylesheet on every page.
   - `grep -nE "#[0-9a-fA-F]{3,8}\b|rgba?\(" css/*.css` finds colours only in `tokens.css`.
   - No `font-family` is set outside `tokens.css` except through `var(--mh-font-*)`.
2. **Matches the reference.** At 390 px and 1280 px wide, the header, hero, buttons, cards, testimonial, form and footer match `reference/components-390.png` and `reference/components-1280.png` in colour, font, size, spacing and corner radius. Include screenshots in the report.
3. **Responsive.**
   - No horizontal scrolling at 320, 390, 768, 1024, 1280 or 1440 px.
   - Below 48em the nav collapses behind a Menu button that works with the keyboard and updates `aria-expanded`.
   - With JavaScript off, the nav links are visible.
4. **Accessible.**
   - axe-core (or pa11y) reports 0 violations on every page.
   - Lighthouse Accessibility scores at least 95 on mobile.
   - Tabbing reaches every interactive element in a sensible order, with a visible focus ring on white, pink and green.
5. **Contrast.**
   - Every text and background pair is on the allowed list.
   - No pink or yellow text on white, and no white text on pink or yellow.
6. **Performance.** Lighthouse on mobile, against a local build:
   - Performance at least 90.
   - Best Practices at least 95.
   - SEO at least 95.
   - CLS below 0.1.
7. **Valid HTML.** The W3C Nu validator reports no errors.
8. **Logo.**
   - Only the SVG files are used, at or above minimum size.
   - The header logo link reads "Michelle Handley, singing lessons, home".
9. **Meta and icons.**
   - Every page has a unique title and description, a canonical URL and the OG image.
   - The full favicon set and the manifest are in place.
   - The JSON-LD passes the Schema.org validator, with placeholders marked.
10. **Form.**
    - Required fields and consent are enforced, with accessible text messages.
    - The honeypot is present.
    - Submission goes to the agreed handler. If there isn't one yet, it's clearly stubbed and the stub is explained in the report.
11. **No invented content.**
    - Every unknown appears as a `[CAPITALS]` placeholder.
    - The report lists them all.
12. **Nothing banned.** None of the banned fonts, effects or clichés from section 7 appear anywhere.
13. **No regressions.**
    - Existing URLs still work, or redirect.
    - A link checker finds no broken internal links.

## 10. Report back with

- a summary of what changed, the new file tree, and how to run and preview the site locally
- screenshots of every page at 390 px and 1280 px
- results of the checks: axe, Lighthouse, the HTML validator and the link checker
- every placeholder still to fill, and any open questions (form handler, analytics, hosting)
- any tokens you added, with a reason for each

## 11. Add this to the repo's `CLAUDE.md`

So that future sessions keep to the brand, add this block:

```md
## Brand: Michelle Handley · Green Room
- All design values come from css/tokens.css (CSS custom properties). Never hard-code colours, fonts, sizes, spacing or radii in component CSS.
- Fonts: Josefin Sans 600/700 (display, labels in caps at 0.24em) and Lato 400/700 (body). Nothing else.
- Colours: green #1F4D3F (main), pink #F2B8C0 (soft sections, text on green), yellow #F4C04E (primary button, the m-arch edge, the mic glow), ink #18241F (text), white.
- Never pink or yellow text on white; never white text on pink or yellow. One yellow button per screen.
- Logo: use the SVGs in assets/logo, never retype; header ≥ 180 px wide, footer stacked ≥ 280 px.
- Devices: m-arch edge (once, in the hero), arch-framed portraits, pill buttons.
- No stock photos of children; no clefs, notes, piano keys, gradients, glows or glassy boxes.
- Don't invent facts: prices, times, qualifications and testimonials stay as [CAPITALS] placeholders until Michelle supplies them.
- WCAG 2.2 AA, mobile first, one breakpoint at 48em. Full rules: docs/brand/MH-brand-summary.md
```
