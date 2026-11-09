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
| 186 | `[DAYS AND TIMES]` | Days and times lessons are available |
| 190 | `[PRICE]` for `[LESSON LENGTH]` | Lesson price and length |
| 242 | `[ONE OR TWO LINES ABOUT YOUR PERFORMING AND TEACHING.]` | Michelle's own words |
| 251–254 | The bracketed quote and `[NAME]` | A real testimonial, with permission |
| 267 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 270–271 | `[PHONE]`, `[EMAIL]` | Enquiry intro; make them `tel:` and `mailto:` links |
| 277 | | Web3Forms access key (replace `YOUR_WEB3FORMS_ACCESS_KEY`) |
| 281 | | Domain, in the form's redirect to the thank-you page |
| 339 | `[EMAIL]` | In the "didn't send" message |
| 374–375, 382, 384 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### lessons.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 119 | `[AGE]` | Youngest age taught, in the "Children and teens" poster |
| 123 | `[EXAM BOARDS]` | Exam boards |
| 134 | `[LESSON LENGTH]`, `[DAYS AND TIMES]` | Lesson length or lengths; days and times lessons are available |
| 136–138 | Placeholder image and the note "Online set-up" | Photo of the online set-up (4:5 arch, shot 8) |
| 144 | `[STUDIO DESCRIPTION]`, `[AREA OF STAFFORD]`, `[WHERE TO PARK, …]` | Where in-person lessons happen and which part of Stafford (not the full address); parking, step-free access and where parents can wait, or delete that last token |
| 148 | `[WHAT YOU SEND AFTER EACH LESSON, …]` | Anything sent after online lessons, or delete |
| 159 | `[ONE LINE ABOUT YOUR PRICES, …]` | A line about pricing |
| 168 | `[PRICE]` for `[LESSON LENGTH]` | First lesson |
| 175 | `[PRICE]` for `[LESSON LENGTH]` | Single lessons |
| 179–183 | `[BLOCK BOOKING, IF YOU OFFER ONE]`, `[HOW MANY LESSONS, AND ANY DISCOUNT]`, `[PRICE]` | A block booking, or delete the row |
| 186 | `[NUMBER]`, `[WHAT HAPPENS WITH LATER CANCELLATIONS]` | Cancellation notice and terms |
| 195–198 | The bracketed quote, `[NAME]`, `[WHO THEY ARE, …]` | A real testimonial (a different one from the home page) |
| 250 | `[AGE]` | Youngest age taught |
| 268 | `[HOW AND WHEN TO PAY]` | How and when students pay |
| 274 | `[EXAM BOARDS]` | Exam boards |
| 280 | `[YOUR SAFEGUARDING CHECK, …]` | Safeguarding answer. Only say yes once it's confirmed |
| 292 | `[WHETHER THERE ARE STUDENT CONCERTS OR SHOWCASES, …]` | Whether there are concerts or showcases, and whether taking part is up to the student |
| 308 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 311–312 | `[PHONE]`, `[EMAIL]` | Enquiry intro |
| 318, 322 | | Web3Forms access key; domain in the redirect |
| 380 | `[EMAIL]` | In the "didn't send" message |
| 415–416, 423, 425 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### about.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 115–116 | `[YOUR STORY, IN YOUR OWN WORDS: HOW YOU STARTED SINGING]` | Michelle's story |
| 117 | `[TRAINING]`, `[NUMBER]`, `[VENUES, SHOWS OR BANDS]` | Training, years performing, where |
| 118–119 | `[A PERFORMING MOMENT THAT STAYED WITH YOU]` | A moment from performing |
| 120–121 | `[WHY YOU TEACH, IN YOUR OWN WORDS]` | Why she teaches, in her own words |
| 153–177 | Six credentials, from `[QUALIFICATION AND WHERE YOU TRAINED]` to `[PUBLIC LIABILITY INSURANCE]` | Real qualifications and experience; delete any that don't apply |
| 190–192 | Placeholder image and the note "Details: music stand, a mug of tea" | Detail photo (3:2 arch, shot 9) |
| 196–201 | Three personal details and `[HOBBY]` | In Michelle's own words |
| 250–251, 258, 260 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### contact.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 79 | `[RESPONSE TIME]` | Usual response time |
| 95, 99, 103 | `[EMAIL]`, `[PHONE]`, `[@HANDLE]` | Contact details on the gold block; make them links |
| 125, 129 | | Web3Forms access key; domain in the redirect |
| 174 | `[EMAIL]` | In the "didn't send" message |
| 209–210, 217, 219 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### privacy.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 81 | `[DATE]` | Date the notice was last updated |
| 91–96 | `[PRIVACY NOTICE TO COME: …]` | Check the whole template against ICO guidance, then delete this line |
| 99 | `[EMAIL]` | Contact for privacy questions |
| 118 | `[EMAIL PROVIDER]` | Email provider |
| 119 | `[HOSTING PROVIDER]` | Hosting provider (probably GitHub Pages) |
| 123 | `[UPDATE THIS IF ANALYTICS ARE ADDED]` | Only if analytics are added |
| 126 | `[PERIOD]` twice | How long enquiries and booking records are kept |
| 165–166, 173, 175 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### thank-you.html and 404.html

| File | Line | Visible token | What's needed |
|---|---|---|---|
| thank-you.html | 76 | `[RESPONSE TIME]` | Usual response time |
| thank-you.html | 77 | `[EMAIL]`, Instagram link | Email address and Instagram URL |
| thank-you.html | 118–119, 126, 128 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |
| 404.html | 120–121, 128, 130 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### Other files

| File | Line | What's needed |
|---|---|---|
| sitemap.xml | 2 | Domain in every `<loc>` |
| robots.txt | 1 | Domain in the sitemap URL |
