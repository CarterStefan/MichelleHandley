# Michelle Handley brand rules for the website

These rules come from Michelle's identity board (October 2026). Follow them for all design work on the site. Values live in `css/brand.css`; don't hard-code colours, fonts or radii anywhere else.

The business name is **Michelle Handley**. Her line is **Singing teacher**.

## Logo

All logo files are in `images/brand/`. They are filled outlines with no fonts, cropped tight to the artwork, so always give them `width` and `height` attributes.

| File | Size at 300 tall | Use |
|---|---|---|
| `michelle-handley-logo-horizontal-gold.svg` | 1255 × 300 | Header on velvet, from 768px wide |
| `michelle-handley-mark-gold.svg` | 165 × 300 | Header on phones |
| `michelle-handley-logo-stacked-gold.svg` | 421 × 396 | Footer and other title moments on velvet |
| `...-green.svg` versions | same | The same uses on ivory |
| `...-ivory.svg` versions | same | One colour, on stage green or where gold is too weak |

- Minimum sizes, on screen and in print. Below these, use the mark alone.

  | Logo | On screen | In print |
  |---|---|---|
  | Mark alone | 48px tall | 15 mm tall |
  | Horizontal | 60px tall | 15 mm tall |
  | Stacked | 220px tall | 50 mm tall |

- Clear space: half the mark's width on every side.
- Gold on dark, green on light. Never gold on ivory, never on a busy photo, never with effects, outlines, stretching or rotation, and never retype the name in a font.

Header logo, switching from the mark on phones to the horizontal logo from 768px:

```html
<a class="site-logo" href="./">
  <picture>
    <source media="(min-width: 768px)" srcset="images/brand/michelle-handley-logo-horizontal-gold.svg" width="268" height="64">
    <img src="images/brand/michelle-handley-mark-gold.svg" width="31" height="56" alt="Michelle Handley, singing teacher">
  </picture>
</a>
```

The horizontal logo was redrawn in October 2026 so the name and line fill the capsule's straight sides, which makes it wider than the first version (1013 × 300) and its line readable at header size (about 11px at 64px tall). The header's padding keeps clear space: 15px around the mark, 18px around the horizontal logo.

Footer logo: `michelle-handley-logo-stacked-gold.svg` with `width="255" height="240"`. The site's footer shows it larger, at the full content width (the stacked logo on phones, the horizontal logo from 768px), with clear space that grows with it.

## Colour

| Token | Hex | Role |
|---|---|---|
| `--mh-velvet` | #0F4A35 | Royal green. Main background (hero, header, footer, call-to-action bands); text on ivory |
| `--mh-stage` | #0B3727 | A deeper shade of velvet; panels and cards on dark |
| `--mh-gold` | #E2C08A | The spotlight: logo, one solid button, one line device |
| `--mh-ivory` | #F7F1E6 | Reading sections; text on velvet |
| `--mh-brass` | #7E5F27 | Gold for small text and lines on ivory |
| `--mh-mist` | #CBC3B1 | Secondary text and outlines on dark |
| `--mh-moss` | #4A5A50 | Secondary text on ivory |
| `--mh-line` | #E3D9C8 | Hairlines on ivory |

Velvet was a near-black green (#10241A) on the first identity board, with stage at #1C3326. In October 2026 it became royal green, so the brand reads as green rather than black, and stage became a deeper shade of it so text on panels still passes. Royal green is about as bright as velvet can go: any lighter and gold or mist text on it falls below 4.5 : 1. The favicons, share image and green logo files were recoloured to match; the identity board still shows the old green.

Rough share of any page: velvet 50%, ivory 25%, stage 12%, gold 10%, brass 3%.

On each screen, gold details appear in three places at most: the logo, one solid button, and one line device (the stave or the rings).

Since November 2026, gold can also be a **block**: one full-width section per page at most, on the surface `.mh-on-gold`. Its text is velvet, its solid button is `.mh-btn--velvet`, and it never holds a gold detail itself. Beside a hero, it rises out of the stave's last line. A block of gold counts as this page's spotlight, so a home page can run a little over the 10% share below.

Text pairings (WCAG contrast):

| Text on background | Ratio |
|---|---|
| Ivory on velvet | 9.1 : 1 |
| Gold on velvet | 5.9 : 1 |
| Mist on velvet | 5.8 : 1 |
| Ivory on stage | 11.7 : 1 |
| Gold on stage | 7.6 : 1 |
| Velvet on gold | 5.9 : 1 |
| Velvet on ivory | 9.1 : 1 |
| Moss on ivory | 6.5 : 1 |
| Brass on ivory | 5.3 : 1 |

Gold on ivory is 1.5 : 1. Use it for shapes only, never text. Don't use any pairing that isn't in this table.

## Type

| Style | Font | Size (phone to desktop) | Line height |
|---|---|---|---|
| Poster | Marcellus 400 | 48 to 128px (`--mh-text-5xl`) | 1 |
| Feature | Marcellus 400 | 44 to 96px (`--mh-text-4xl`) | 1 |
| Display | Marcellus 400 | 40 to 64px (`--mh-size-display`) | 1.06 |
| Heading 1 | Marcellus 400 | 32 to 44px | 1.18 |
| Heading 2 | Marcellus 400 | 24 to 30px | 1.18 |
| Heading 3 | Marcellus 400 | 20 to 24px | 1.18 |
| Body | Jost 400 | 17 to 18px | 1.55 |
| Small | Jost 400 | 15px | 1.5 |
| Buttons | Jost 500 | 17px | 1 |
| Labels | Jost 500, caps, +12% tracking | 14px | 1.2 |

- Poster and Feature were added in November 2026, so a headline can fill a block. They live in `css/tokens.css`, above the kit's scale. Use them in the hero and for one other moment per page. Other section headlines use Display, so the big moments stand out. Footer links are Small.
- Headlines are sentence case. Marcellus has one weight: never bold it (`font-synthesis: none`) and never set it in capitals.
- Labels are short (three words at most) and used sparingly.
- Keep body text to about 66 characters a line (`--mh-measure`).

## Shapes

- **Corners are square or fully round, nothing in between.** Cards and panels are square. Buttons, tags and photo frames are fully round. No other radii, and no shadows.
- **Capsule** (`.mh-capsule`): portraits, 5 : 9, the mark's own proportion.
- **Arch** (`.mh-arch`): wider photos. Round top, square base.
- **Rings** (`.mh-rings`): three gold lines around a capsule, for one feature moment per page, such as the home page portrait. Set the section's surface class so the gaps match its background.
- **Stave**: four lines rising left to right, gold on velvet or brass on ivory. Full width, cut flush at the section's edges, once per page at most, decorative only:

```html
<picture class="mh-stave" aria-hidden="true">
  <source media="(min-width: 768px)" srcset="images/brand/stave-wide-gold.svg" width="1440" height="81">
  <img src="images/brand/stave-narrow-gold.svg" width="600" height="81" alt="">
</picture>
```

## Components

- **Surfaces**: give every section one of `.mh-on-dark` (velvet), `.mh-on-stage`, `.mh-on-light` (ivory) or `.mh-on-gold`. These set text colour, focus colour and ring background. Two neighbouring sections never share a surface: the block of colour is the divider, not a hairline. `.mh-on-gold` is defined in `css/base.css` and `css/tokens.css`, because `css/brand.css` stays as the kit supplied it.
- **Buttons** (`.mh-btn`): pills, at least 48px tall, Jost 500. One solid button per screen: `.mh-btn--gold` on dark, `.mh-btn--velvet` on light and gold. Everything else is an outline pill: `.mh-btn--outline-on-dark` or `.mh-btn--outline-on-light`. The header's "Book a lesson" button is an outline pill, so the page's main button stays the only solid one.
- **Tags** (`.mh-tag`): small pills. Stage with gold text on dark, `#E7DDCB` with velvet text on light.
- **Icons**: plain line icons, beside contact details and social links only. Gold on velvet (5.9 : 1) in the footer, where they count as one set alongside the logo. Never on tiles.
- **Focus**: 2px outline, 3px offset, gold on dark and velvet on light (set by the surface classes).
- **Image placeholders**: `#255846` (`--mh-photo-dark`) with a mist label on dark (4.7 : 1), `#E7DDCB` with a moss label on light, at the final aspect ratio.

## Head tags

```html
<link rel="icon" href="favicon.ico" sizes="any">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#0F4A35">
<link rel="preload" href="fonts/jost-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/Marcellus-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="css/brand.css">
<meta property="og:image" content="https://YOUR-DOMAIN/images/brand/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Michelle Handley, singing teacher">
<meta name="twitter:card" content="summary_large_image">
```

## Never

Gradients, drop shadows, glows, blur or glass effects. Colours outside the palette. Rounded-rectangle cards. Icon tiles. Music clip art (clefs, notes, keyboards). Gold text on ivory. More than one stave per page.
