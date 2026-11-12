# Placeholders

Every unknown fact on the site is marked two ways:

- a visible token in `[CAPITALS]` in the page, e.g. `[PRICE]`
- an HTML comment just before it, e.g. `<!-- PLACEHOLDER: lesson price -->`

Hidden ones (the domain, the form key, photos, structured data, `robots.txt`, `sitemap.xml`) have the comment or a `PLACEHOLDER` string only.

To find them all, search the project for `PLACEHOLDER` (comments) and for `[` followed by a capital letter (visible tokens). Before launch, both searches should find only this file. Line numbers are correct as of 12 November 2026; keep them up to date by hand when you edit a page.

When you replace a placeholder, delete both the comment and the bracketed token. For a photo, also delete the label `<p class="photo-note">` that names the shot. The shot numbers match `PHOTOGRAPHY.md` and the brand summary's shot list.

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
| Real testimonials, with permission and how to credit them (about 15 to 25 words) | Home, lessons |
| Usual response time | Home and lessons enquiry intros, contact, thank-you |
| Photos (see PHOTOGRAPHY.md) | Home and about (the row of capsules), lessons "In person or online", about "A few things about me" |
| Privacy notice details: email and hosting providers, retention periods, date | Privacy |

## By page

### index.html (home)

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain: replace every `https://michellehandley.example` in the project |
| 57 | `[PHONE]` in the structured data | Phone number |
| 67–68 | `PLACEHOLDER-HANDLE`, `PLACEHOLDER-PAGE` in the structured data | Instagram and Facebook URLs |
| 182 | `[DAYS AND TIMES]` | Days and times lessons are available |
| 186 | `[PRICE]` for `[LESSON LENGTH]` | Lesson price and length |
| 210 | `[ONE OR TWO LINES ABOUT YOUR PERFORMING AND TEACHING.]` | Michelle's own words |
| 215–217, 227–229, 239–241 | Three placeholder capsules and their labels, in the row under "Meet Michelle" | Photos: shots 4, 5 and 10 (5:9 capsule) |
| 257–260 | The bracketed quote and `[NAME]` | A real testimonial, with permission |
| 275 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 278–279 | `[PHONE]`, `[EMAIL]` | Enquiry intro; make them `tel:` and `mailto:` links |
| 283 | | Web3Forms access key (replace `YOUR_WEB3FORMS_ACCESS_KEY`) |
| 287 | | Domain, in the form's redirect to the thank-you page |
| 317 | `[EMAIL]` | In the "didn't send" message |
| 352–353, 360, 362 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### lessons.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 120 | `[AGE]` | Youngest age taught, on the "Children and teens" card |
| 127 | `[EXAM BOARDS]` | Exam boards |
| 139 | `[LESSON LENGTH]`, `[DAYS AND TIMES]` | Lesson length or lengths; days and times lessons are available |
| 145 | `[STUDIO DESCRIPTION]`, `[AREA OF STAFFORD]`, `[WHERE TO PARK, …]` | Where in-person lessons happen and which part of Stafford (not the full address); parking, step-free access and where parents can wait, or delete that last token |
| 149 | `[WHAT YOU SEND AFTER EACH LESSON, …]` | Anything sent after online lessons, or delete |
| 154–156 | Placeholder image and the label "Shot 8" | Photo of the online set-up (4:5 arch, shot 8) |
| 168 | `[ONE LINE ABOUT YOUR PRICES, …]` | A line about pricing |
| 175 | `[PRICE]` for `[LESSON LENGTH]` | First lesson |
| 180 | `[PRICE]` for `[LESSON LENGTH]` | Single lessons |
| 183–186 | `[BLOCK BOOKING, IF YOU OFFER ONE]`, `[HOW MANY LESSONS, AND ANY DISCOUNT]`, `[PRICE]` | A block booking, or delete the row |
| 190 | `[NUMBER]`, `[WHAT HAPPENS WITH LATER CANCELLATIONS]` | Cancellation notice and terms |
| 200–203 | The bracketed quote, `[NAME]`, `[WHO THEY ARE, …]` | A real testimonial (a different one from the home page) |
| 253 | `[AGE]` | Youngest age taught |
| 271 | `[HOW AND WHEN TO PAY]` | How and when students pay |
| 277 | `[EXAM BOARDS]` | Exam boards |
| 283 | `[YOUR SAFEGUARDING CHECK, …]` | Safeguarding answer. Only say yes once it's confirmed |
| 295 | `[WHETHER THERE ARE STUDENT CONCERTS OR SHOWCASES, …]` | Whether there are concerts or showcases, and whether taking part is up to the student |
| 312 | `[RESPONSE TIME]` | Usual response time, in the enquiry intro |
| 315–316 | `[PHONE]`, `[EMAIL]` | Enquiry intro |
| 320, 324 | | Web3Forms access key; domain in the redirect |
| 354 | `[EMAIL]` | In the "didn't send" message |
| 389–390, 397, 399 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### about.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 106–107 | `[YOUR STORY, IN YOUR OWN WORDS: HOW YOU STARTED SINGING]` | Michelle's story |
| 108 | `[TRAINING]`, `[NUMBER]`, `[VENUES, SHOWS OR BANDS]` | Training, years performing, where |
| 109–110 | `[A PERFORMING MOMENT THAT STAYED WITH YOU]` | A moment from performing |
| 111–112 | `[WHY YOU TEACH, IN YOUR OWN WORDS]` | Why she teaches, in her own words |
| 116–118, 128–130, 140–142, 145–147 | Four placeholder capsules and their labels, in the row under "My story" | Photos: shots 4, 5, 10 and 3 (5:9 capsule) |
| 160–184 | Five credentials, from `[QUALIFICATION AND WHERE YOU TRAINED]` to `[PUBLIC LIABILITY INSURANCE]` (Performing is filled in) | Real qualifications and experience; delete any that don't apply |
| 198–203 | Three personal details and `[HOBBY]` | In Michelle's own words |
| 207–209 | Placeholder image and the label "Shot 9" | Detail photo (3:2 arch, shot 9) |
| 257–258, 265, 267 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### contact.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 79 | `[RESPONSE TIME]` | Usual response time |
| 95, 99, 103 | `[EMAIL]`, `[PHONE]`, `[@HANDLE]` | Contact details on the gold block; make them links |
| 126, 130 | | Web3Forms access key; domain in the redirect |
| 160 | `[EMAIL]` | In the "didn't send" message |
| 195–196, 203, 205 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### privacy.html

| Line | Visible token | What's needed |
|---|---|---|
| 8 | | Domain |
| 81 | `[DATE]` | Date the notice was last updated |
| 90–95 | `[PRIVACY NOTICE TO COME: …]` | Check the whole template against ICO guidance, then delete this line |
| 100 | `[EMAIL]` | Contact for privacy questions |
| 129 | `[EMAIL PROVIDER]` | Email provider |
| 130 | `[HOSTING PROVIDER]` | Hosting provider (probably GitHub Pages) |
| 138 | `[UPDATE THIS IF ANALYTICS ARE ADDED]` | Only if analytics are added |
| 145 | `[PERIOD]` twice | How long enquiries and booking records are kept |
| 193–194, 201, 203 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### thank-you.html and 404.html

| File | Line | Visible token | What's needed |
|---|---|---|---|
| thank-you.html | 77 | `[RESPONSE TIME]` | Usual response time |
| thank-you.html | 78 | `[EMAIL]`, Instagram link | Email address and Instagram URL |
| thank-you.html | 125–126, 133, 135 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |
| 404.html | 121–122, 129, 131 | `[PHONE]`, `[EMAIL]` | Footer, Instagram and Facebook URLs |

### Other files

| File | Line | What's needed |
|---|---|---|
| sitemap.xml | 2 | Domain in every `<loc>` |
| robots.txt | 1 | Domain in the sitemap URL |
