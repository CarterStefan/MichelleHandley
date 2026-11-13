# Photos for the website

This is for Michelle and anyone taking photos for her. The full photo guidance is in section 7 of the brand summary (`docs/brand/brand/MH-brand-summary.md`), with the 12-shot list for a first shoot of about an hour. This page lists which of those shots the website needs, and where they go. A fuller brief for each slot (minimum pixel sizes, light, mood, and two optional video loops) is in `brand/photo-shot-list.md`, which is kept on this machine and not published.

## What the website needs

| Where | Shot (from the brand list) | Shape | Export widths |
|---|---|---|---|
| Home, top of the page | Filled with a stage photo of her singing, toned to the brand's greens and golds and shown without a frame, so she stands in the green hero card. It's shown up to 591 px wide. A replacement needs the same toning, a background of exactly #0F4A35 (velvet), and clear space around her on every side but the bottom, where her hands can touch the edge. | About 7:8, no frame | 600, 900, 1200, 1600 |
| Home, the band of twelve under "Meet Michelle" | Twelve capsules in three sizes, in a band that runs off both edges of the screen: three large, three medium and six small. The three large ones are filled with stage photos. The medium ones need shots 1 (a portrait by a window), 5 (teaching an adult, from behind) and 3 (singing, mid-phrase). The small ones need shots 4 (showing a warm-up), 9 (details), 7 (the lesson room), 8 (the online set-up), 6 (with a young student, from behind, with consent) and 10 (performing, from the audience). The photos at the two ends lose a little of one side to the edge of the screen, more on a tablet, so keep her in the middle of those. | Tall, 5:9 (capsule) | Large: 480, 900. Medium: 400, 600. Small: 200, 400 |
| Lessons, top of the page | Already filled with a stage photo. Swap in a teaching or everyday portrait if you prefer. | Tall, 5:9 (capsule) | 480, 800 |
| Lessons, "In person or online" | 8. The online set-up: laptop, headphones, lyric sheet | Upright, 4:5 (arch) | 480, 800, 1200 |
| About, "A few things about me" | 9. Details: the music stand, pencilled breath marks, a mug of tea | Landscape, 3:2 (arch) | 640, 1024, 1600 |
| About, top of the page | Already filled with a stage photo, cropped to the capsule. Swap in shot 1 or 10 if you prefer. | Tall, 5:9 (capsule) | 480, 800 |
| About, the row of six under "My story" | Two are filled with stage photos. The other four need shots 3 (singing, mid-phrase), 4 (showing a warm-up), 5 (teaching an adult, from behind) and 10 (performing, from the audience). | Tall, 5:9 (capsule) | 400, 600 |
| Thank-you page | Filled with the stage photo from the lessons page. Anything joyful works here. | Tall, 5:9 (capsule) | 480, 800 |

Each empty slot on the site shows a small label with its shot number ("Shot 8") so it's clear what belongs there.

Portraits of Michelle sit in the capsule, the tall pill shape of her logo's mark (5:9, so a 480 px wide export is 864 px tall). It rounds off the top and the bottom, so leave space above her head and below her shoulders, and keep her in the middle third of the frame: the sides are what a capsule crops first. Wider photos sit in the arch, which rounds off only the top, like a doorway.

## How they should look

- Window light, warm and natural. No blue light, beauty filters or heavy presets.
- A deep green wall or curtain, plants, or a plain light wall behind her.
- Solid clothes in green, blush, mustard or white.
- Use the 1× or 2× lens at eye level, and take each shot both upright and sideways.

## Children and consent

- No child's face anywhere without a parent's written consent for that exact use.
- By default, show students from behind, as hands on a lyric sheet, as a silhouette, or in a wide shot where no one can be recognised.
- Never name a child together with their school.

Anyone else who can be recognised needs to have agreed to appear on the website too. Before launch, check Michelle has permission from the photographers or productions to use the stage photos.

## Swapping a photo in

README.md has the step-by-step: export each photo at the widths above as AVIF, WebP and JPG, and save them in `images/`. Then replace the placeholder `<img>` with the `<picture>` pattern, delete the note that names the shot, and write `alt` text that describes the real photo.
