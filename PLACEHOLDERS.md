# Placeholders

Every unknown fact on the site is marked two ways:

- a visible token in `[CAPITALS]` in the page, e.g. `[PRICE]`
- an HTML comment just before it, e.g. `<!-- PLACEHOLDER: lesson price -->`

Hidden ones (the domain, the form key, photos, structured data, `robots.txt`, `sitemap.xml`) have the comment or a `PLACEHOLDER` string only.

To find them all, search the project for `PLACEHOLDER` (comments) and for `[` followed by a capital letter (visible tokens). Before launch, both searches should find only this file. Line numbers are correct as of 9 November 2026; keep them up to date by hand when you edit a page.

When you replace a placeholder, delete both the comment and the bracketed token. For a photo, also delete the caption `<p class="photo-note">` that names the shot.

## What Michelle needs to supply

| Item | Where it appears |
|---|---|
| Phone number | Footer (every page), home and lessons enquiry intros, contact details, structured data |
| Email address | Footer (every page), enquiry intros, form "didn't send" messages, contact details, thank-you, privacy |
| Instagram and Facebook links, Instagram handle | Footer (every page), contact details, thank-you, structured data |
| Live domain | `<head>` of every indexed page, form redirects, `sitemap.xml`, `robots.txt`, structured data |
| Web3Forms access key | The enquiry forms on home, lessons and contact |
| Prices, lesson lengths, days and times | Home "How lessons work", lessons prices and "In person or online" |
| Cancellation notice and terms, and whether there's a block booking | Lessons prices |
| How and when students pay | Lessons questions |
| Where in-person lessons happen: the studio, which part of Stafford, and parking, step-free access and where parents can wait | Lessons "In person or online" |
| Ages taught and exam boards | Lessons cards and questions |
| Safeguarding check (e.g. enhanced DBS) and whether parents can sit in | Lessons questions, about credentials |
| Whether there are student concerts or showcases, and whether taking part is optional | Lessons questions |
| One or two lines about her performing and teaching | Home "Meet Michelle" |
| Her story, training, experience, why she teaches, insurance and a few personal details | About |
| Real testimonials, with permission and how to credit them (about 15 to 25 words, as they're set large) | Home, lessons |
| Usual response time | Home and lessons enquiry intros, contact, thank-you |
| Photos (see PHOTOGRAPHY.md) | Lessons "In person or online", about "A few things about me" |
| Privacy notice details: email and hosting providers, retention periods, date | Privacy |

## By page

### index.html (home)

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain: replace every `https://michellehandley.example` in the project |
| 56 | `[PHONE]` in the structured data | Phone number |
| 66–67 | `PLACEHOLDER-HANDLE`, `PLACEHOLDER-PAGE` in the structured data | Instagram and Facebook URLs |
| 185 | `[DAYS AND TIMES]` | Days and times lessons are available |
| 189 | `[PRICE]` for `[LESSON LENGTH]` | Lesson price and length |
| 240 | `[ONE OR TWO LINES ABOUT YOUR PERFORMING AND TEACHING.]` | Michelle's own words |
| 249–252 | The bracketed quote and `[NAME]` | A real testimonial, with permission |
| 267 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 270–271 | `[PHONE]`, `[EMAIL]` | Enquiry intro; make them `tel:` and `mailto:` links |
| 276 | | Web3Forms access key (replace `YOUR_WEB3FORMS_ACCESS_KEY`) |
| 280 | | Domain, in the form's redirect to the thank-you page |
| 338 | `[EMAIL]` | In the "didn't send" message |
| 369–370 | `[PHONE]`, `[EMAIL]` | Footer |
| 377, 379 | | Footer Instagram and Facebook URLs |

### lessons.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 119 | `[AGE]` | Youngest age taught, in the "Children and teens" poster |
| 123 | `[EXAM BOARDS]` | Exam boards |
| 134 | `[LESSON LENGTH]`, `[DAYS AND TIMES]` | Lesson length or lengths; days and times lessons are available |
| 139–141 | Placeholder image and the note "Online set-up" | Photo of the online set-up (4:5 arch, shot 8) |
| 146 | `[STUDIO DESCRIPTION]`, `[AREA OF STAFFORD]`, `[WHERE TO PARK, …]` | Where in-person lessons happen and which part of Stafford (not the full address); parking, step-free access and where parents can wait, or delete that last token |
| 150 | `[WHAT YOU SEND AFTER EACH LESSON, …]` | Anything sent after online lessons, or delete |
| 161 | `[ONE LINE ABOUT YOUR PRICES, …]` | A line about pricing |
| 170 | `[PRICE]` for `[LESSON LENGTH]` | First lesson |
| 177 | `[PRICE]` for `[LESSON LENGTH]` | Single lessons |
| 181–185 | `[BLOCK BOOKING, IF YOU OFFER ONE]`, `[HOW MANY LESSONS, AND ANY DISCOUNT]`, `[PRICE]` | A block booking, or delete the row |
| 189 | `[NUMBER]`, `[WHAT HAPPENS WITH LATER CANCELLATIONS]` | Cancellation notice and terms |
| 197–200 | The bracketed quote, `[NAME]`, `[WHO THEY ARE, …]` | A real testimonial (a different one from the home page) |
| 252 | `[AGE]` | Youngest age taught |
| 270 | `[HOW AND WHEN TO PAY]` | How and when students pay |
| 276 | `[EXAM BOARDS]` | Exam boards |
| 282 | `[YOUR SAFEGUARDING CHECK, …]` | Safeguarding answer. Only say yes once it's confirmed |
| 294 | `[WHETHER THERE ARE STUDENT CONCERTS OR SHOWCASES, …]` | Whether there are concerts or showcases, and whether taking part is up to the student |
| 311 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 314–315 | `[PHONE]`, `[EMAIL]` | Enquiry intro |
| 320, 324 | | Web3Forms access key; domain in the redirect |
| 382 | `[EMAIL]` | In the "didn't send" message |
| 413–414, 421, 423 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### about.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 133–134 | `[YOUR STORY, IN YOUR OWN WORDS: HOW YOU STARTED SINGING]` | Michelle's story |
| 135 | `[TRAINING]`, `[NUMBER]`, `[VENUES, SHOWS OR BANDS]` | Training, years performing, where |
| 136–137 | `[A PERFORMING MOMENT THAT STAYED WITH YOU]` | A moment from performing |
| 138–139 | `[WHY YOU TEACH, IN YOUR OWN WORDS]` | Why she teaches, in her own words |
| 151–175 | Six credentials, from `[QUALIFICATION AND WHERE YOU TRAINED]` to `[PUBLIC LIABILITY INSURANCE]` | Real qualifications and experience; delete any that don't apply |
| 190–192 | Placeholder image and the note "Details: music stand, a mug of tea" | Detail photo (3:2 arch, shot 9) |
| 196–201 | Three personal details and `[HOBBY]` | In Michelle's own words |
| 245–246, 253, 255 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### contact.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 79 | `[RESPONSE TIME]` | Usual response time |
| 95, 99, 103 | `[EMAIL]`, `[PHONE]`, `[@HANDLE]` | Contact details on the gold block; make them links |
| 124, 128 | | Web3Forms access key; domain in the redirect |
| 173 | `[EMAIL]` | In the "didn't send" message |
| 203–204, 211, 213 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### privacy.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 81 | `[DATE]` | Date the notice was last updated |
| 91–95 | `[PRIVACY NOTICE TO COME: …]` | Check the whole template against ICO guidance, then delete this line |
| 98 | `[EMAIL]` | Contact for privacy questions |
| 117 | `[EMAIL PROVIDER]` | Email provider |
| 118 | `[HOSTING PROVIDER]` | Hosting provider (probably GitHub Pages) |
| 122 | `[UPDATE THIS IF ANALYTICS ARE ADDED]` | Only if analytics are added |
| 125 | `[PERIOD]` twice | How long enquiries and booking records are kept |
| 159–160, 167, 169 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### thank-you.html and 404.html

| File | Line | Visible token | What's needed |
|---|---|---|---|
| thank-you.html | 76 | `[RESPONSE TIME]` | Usual response time |
| thank-you.html | 77 | `[EMAIL]`, Instagram link | Email address and Instagram URL |
| thank-you.html | 114–115, 122, 124 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |
| 404.html | 116–117, 124, 126 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### Other files

| File | Line | What's needed |
|---|---|---|
| sitemap.xml | 2 | Domain in every `<loc>` |
| robots.txt | 1 | Domain in the sitemap URL |
