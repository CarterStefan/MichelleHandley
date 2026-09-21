# Placeholders

Every piece of temporary content on the site is marked two ways:

- a visible highlighted token in the page, e.g. `[PLACEHOLDER: price]`
- an HTML comment next to it, e.g. `<!-- PLACEHOLDER: ceremony package price -->`

Search the project for `PLACEHOLDER` to find them all. This list is generated from those
comments, so line numbers are exact as of the last build. **171 entries in total.**

Before launch, the search above should only find this file.

## Quick reference: what Michelle needs to supply

| Item | Where it appears |
|---|---|
| Town or city and wider service area | Footer (all pages), home, lessons, weddings, contact, privacy, structured data |
| Email address | Footer, contact, weddings form intro, thank-you, privacy, structured data |
| Instagram handle and URL | Footer, contact, thank-you, structured data |
| Live domain | `<head>` of every page, form redirects, sitemap.xml, robots.txt, structured data |
| Web3Forms access key | The three enquiry forms (weddings, lessons, contact) |
| Wedding and lesson prices, deposit, travel and cancellation terms | weddings.html, lessons.html |
| 12 photos (see images/placeholders for sizes) and a final favicon | All pages |
| YouTube video IDs and three MP3 samples | index.html, weddings.html, /audio |
| Real testimonials, with permission | index.html |
| Story, credentials, exam boards, safeguarding check, personal details | about.html, lessons.html |
| Privacy details: providers, retention periods, regulator, date | privacy.html |

Also review every image `alt` attribute once real photos are in, so each one describes the actual photo.

## Domain (13)

| File | Line | Placeholder |
|---|---|---|
| 404.html | 9 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| about.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| contact.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| contact.html | 122 | domain. Must be the absolute URL of the thank-you page |
| index.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| lessons.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| lessons.html | 305 | domain. Must be the absolute URL of the thank-you page |
| privacy.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| robots.txt | 1 | domain. Update the sitemap URL when the site goes live |
| sitemap.xml | 2 | domain. Replace https://michellehandley.example with the live domain |
| thank-you.html | 9 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| weddings.html | 8 | domain. Replace every "https://michellehandley.example" in the project with the live domain |
| weddings.html | 423 | domain. Must be the absolute URL of the thank-you page |

## Form endpoint (6)

| File | Line | Placeholder |
|---|---|---|
| contact.html | 116 | form endpoint. Web3Forms posts to this URL; add your access key below |
| contact.html | 118 | Web3Forms access key (free at web3forms.com) |
| lessons.html | 299 | form endpoint. Web3Forms posts to this URL; add your access key below |
| lessons.html | 301 | Web3Forms access key (free at web3forms.com) |
| weddings.html | 417 | form endpoint. Web3Forms posts to this URL; add your access key below |
| weddings.html | 419 | Web3Forms access key (free at web3forms.com) |

## Business details (78)

| File | Line | Placeholder |
|---|---|---|
| 404.html | 99 | location |
| 404.html | 99 | service area |
| 404.html | 115 | email. Update the mailto address and the visible text |
| 404.html | 116 | email |
| 404.html | 117 | Instagram handle. Update the URL and the visible text |
| 404.html | 118 | @handle |
| about.html | 211 | location |
| about.html | 211 | service area |
| about.html | 227 | email. Update the mailto address and the visible text |
| about.html | 228 | email |
| about.html | 229 | Instagram handle. Update the URL and the visible text |
| about.html | 230 | @handle |
| contact.html | 80 | response time |
| contact.html | 92 | email. Update the mailto address and the visible text |
| contact.html | 93 | email |
| contact.html | 97 | Instagram handle. Update the URL and the visible text |
| contact.html | 98 | @handle |
| contact.html | 102 | location |
| contact.html | 179 | location |
| contact.html | 179 | service area |
| contact.html | 195 | email. Update the mailto address and the visible text |
| contact.html | 196 | email |
| contact.html | 197 | Instagram handle. Update the URL and the visible text |
| contact.html | 198 | @handle |
| index.html | 55 | Instagram URL in structured data |
| index.html | 69 | town or city |
| index.html | 70 | country code, e.g. GB |
| index.html | 72 | service area |
| index.html | 73 | price range |
| index.html | 74 | Instagram URL in structured data |
| index.html | 122 | location |
| index.html | 189 | location |
| index.html | 293 | response time |
| index.html | 312 | location |
| index.html | 312 | service area |
| index.html | 328 | email. Update the mailto address and the visible text |
| index.html | 329 | email |
| index.html | 330 | Instagram handle. Update the URL and the visible text |
| index.html | 331 | @handle |
| lessons.html | 157 | location |
| lessons.html | 295 | response time |
| lessons.html | 386 | location |
| lessons.html | 386 | service area |
| lessons.html | 402 | email. Update the mailto address and the visible text |
| lessons.html | 403 | email |
| lessons.html | 404 | Instagram handle. Update the URL and the visible text |
| lessons.html | 405 | @handle |
| privacy.html | 89 | location |
| privacy.html | 89 | email |
| privacy.html | 89 | email |
| privacy.html | 108 | email provider |
| privacy.html | 138 | location |
| privacy.html | 138 | service area |
| privacy.html | 154 | email. Update the mailto address and the visible text |
| privacy.html | 155 | email |
| privacy.html | 156 | Instagram handle. Update the URL and the visible text |
| privacy.html | 157 | @handle |
| thank-you.html | 79 | response time |
| thank-you.html | 80 | email |
| thank-you.html | 80 | email |
| thank-you.html | 80 | Instagram handle |
| thank-you.html | 98 | location |
| thank-you.html | 98 | service area |
| thank-you.html | 114 | email. Update the mailto address and the visible text |
| thank-you.html | 115 | email |
| thank-you.html | 116 | Instagram handle. Update the URL and the visible text |
| thank-you.html | 117 | @handle |
| weddings.html | 300 | location |
| weddings.html | 376 | location |
| weddings.html | 413 | response time |
| weddings.html | 414 | email |
| weddings.html | 414 | email |
| weddings.html | 509 | location |
| weddings.html | 509 | service area |
| weddings.html | 525 | email. Update the mailto address and the visible text |
| weddings.html | 526 | email |
| weddings.html | 527 | Instagram handle. Update the URL and the visible text |
| weddings.html | 528 | @handle |

## Prices and terms (14)

| File | Line | Placeholder |
|---|---|---|
| lessons.html | 182 | first lesson price |
| lessons.html | 189 | single lesson price |
| lessons.html | 196 | block of six price |
| lessons.html | 200 | cancellation notice |
| weddings.html | 300 | included travel distance |
| weddings.html | 314 | ceremony package price |
| weddings.html | 326 | ceremony and drinks package price |
| weddings.html | 338 | whole day package price |
| weddings.html | 370 | extra song price |
| weddings.html | 370 | notice needed for new songs |
| weddings.html | 376 | included travel distance |
| weddings.html | 376 | travel rate |
| weddings.html | 394 | deposit amount |
| weddings.html | 394 | balance due |

## Photos and graphics (14)

| File | Line | Placeholder |
|---|---|---|
| about.html | 90 | photo, portrait of Michelle (4:5) |
| about.html | 160 | photo, Michelle behind the scenes (3:2) |
| about.html | 169 | caption |
| images/icons/favicon.svg | 2 | favicon. Temporary monogram; replace with the final logo mark |
| index.html | 133 | photo, hero portrait of Michelle (4:5). See README, "Swapping in real photos" |
| index.html | 158 | photo, Michelle singing at a wedding (4:5) |
| index.html | 177 | photo, Michelle teaching a student at the piano (4:5) |
| index.html | 267 | photo, relaxed portrait of Michelle (1:1) |
| lessons.html | 90 | photo, a lesson in the studio (3:2) |
| lessons.html | 138 | photo, online lesson set-up (4:5) |
| weddings.html | 90 | photo, Michelle performing at a ceremony (3:2) |
| weddings.html | 126 | photo, ceremony performance (4:5) |
| weddings.html | 151 | photo, drinks reception set (4:5) |
| weddings.html | 176 | photo, first dance with Michelle singing (4:5) |

## Video and audio (4)

| File | Line | Placeholder |
|---|---|---|
| index.html | 200 | YouTube video ID. Replace VIDEO_ID with the ID of the showreel |
| index.html | 212 | video description |
| weddings.html | 202 | YouTube video ID. Replace VIDEO_ID with a ceremony video |
| weddings.html | 212 | audio samples. Add MP3 files to /audio and update the src and titles |

## Testimonials (10)

| File | Line | Placeholder |
|---|---|---|
| about.html | 137 | notable venues, shows or bands |
| about.html | 141 | number of weddings, notable venues |
| index.html | 229 | testimonial. Replace with a real review and permission to use it |
| index.html | 233 | couple names |
| index.html | 234 | venue |
| index.html | 239 | testimonial. Replace with a real review and permission to use it |
| index.html | 243 | couple names |
| index.html | 244 | venue |
| index.html | 249 | testimonial. Replace with a real review and permission to use it |
| index.html | 253 | student name |

## Michelle's story and credentials (25)

| File | Line | Placeholder |
|---|---|---|
| about.html | 108 | Michelle's story. Replace the paragraphs below with her own words |
| about.html | 109 | Michelle’s story, in her own words |
| about.html | 111 | where Michelle trained |
| about.html | 111 | years |
| about.html | 111 | performance background |
| about.html | 112 | number of weddings |
| about.html | 125 | credentials. Replace each item with Michelle's real qualifications and experience |
| about.html | 129 | qualification and institution |
| about.html | 133 | teaching qualification or years teaching |
| about.html | 145 | background check, e.g. enhanced DBS |
| about.html | 149 | public liability insurance and PAT-tested equipment |
| about.html | 175 | personal details. Swap in Michelle's own |
| about.html | 180 | hobby |
| index.html | 280 | years performing |
| lessons.html | 119 | youngest teen age |
| lessons.html | 127 | exam boards |
| lessons.html | 153 | confirm lesson lengths |
| lessons.html | 157 | studio description |
| lessons.html | 252 | minimum student age |
| lessons.html | 270 | exam boards |
| lessons.html | 276 | confirm safeguarding check (e.g. DBS) |
| weddings.html | 109 | confirm set lengths and inclusions |
| weddings.html | 246 | confirm repertoire list |
| weddings.html | 388 | confirm musician partners |
| weddings.html | 400 | confirm cover arrangement |

## Privacy policy (7)

| File | Line | Placeholder |
|---|---|---|
| privacy.html | 80 | policy date |
| privacy.html | 84 | privacy policy. This is a starting template, not legal advice |
| privacy.html | 110 | hosting provider |
| privacy.html | 114 | analytics. If you add analytics, name the tool here and explain what it collects |
| privacy.html | 117 | retention period for enquiries |
| privacy.html | 117 | retention period for bookings |
| privacy.html | 121 | regulator, e.g. the ICO in the UK (ico.org.uk) |
