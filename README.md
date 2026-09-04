# Jack Clark Mission Website
## A Purpose Driven Life

---

## QUICK START — Deploy in 5 minutes

1. Go to **netlify.com** and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag and drop this entire folder onto the page
4. Your site is live! Netlify gives you a free URL like `jack-clark.netlify.app`
5. To use a custom domain (e.g. `jackclark.org`), buy one at namecheap.com (~$12/yr) and follow Netlify's "Custom Domain" instructions

---

## HOW TO ADD A BLOG POST

Open `js/posts.js` in any text editor (Notepad, TextEdit, VS Code).

At the TOP of the `posts` array, paste a new object like this:

```js
{
  id: "post-4",                          // unique ID, increment each time
  date: "April 2025",                    // displayed date
  dateISO: "2025-04-01",
  title: "Your post title here",
  excerpt: "A short 1-2 sentence preview that shows on the homepage.",
  content: `
    <p>Your full post content goes here. You can write as much as you want.</p>
    <p>Add more paragraphs like this.</p>
    <p>Prayer requests:</p>
    <ul>
      <li>Prayer point one</li>
      <li>Prayer point two</li>
    </ul>
  `
},
```

Then save the file and re-upload the folder to Netlify (drag and drop again).
The new post will automatically appear on the homepage and blog page.

---

## HOW TO ADD PHOTOS

1. Copy your image files into the `images/` folder
   - Recommended: resize photos to ~1200px wide before uploading (keeps the site fast)
   - Good free tool: squoosh.app

2. Open `js/gallery.js` in a text editor

3. Replace the placeholder entries with your real photos:

```js
const galleryPhotos = [
  { src: "images/your-photo.jpg", alt: "Description of photo", wide: true, tall: true },
  { src: "images/team.jpg", alt: "The ministry team" },
  { src: "images/community.jpg", alt: "Community outreach" },
  // add more...
];
```

Tips:
- Use `wide: true` to make a photo span 2 columns (good for landscape shots)
- Use `tall: true` to make a photo span 2 rows (good for portrait shots)
- The first photo looks best as `wide: true, tall: true`

---

## HOW TO ADD YOUR PHOTO (About section)

1. Put your photo in the `images/` folder (name it something like `jack.jpg`)
2. Open `index.html`
3. Find this comment block:
   ```html
   <!-- PHOTO: Replace the div below with: <img src="images/jack.jpg" alt="Jack Clark" class="about-photo" /> -->
   ```
4. Delete the entire `<div class="about-photo-placeholder">...</div>` block below it
5. Paste in: `<img src="images/jack.jpg" alt="Jack Clark" class="about-photo" />`

---

## HOW TO EDIT YOUR STORY & MISSION

Open `index.html` and find the sections marked with `[bracket placeholders]`.
Replace each bracketed section with your real content.

The sections are clearly labeled in the HTML with comments like:
- `<!-- ABOUT -->`
- `<!-- MISSION -->`

---

## FILE STRUCTURE

```
jack-clark-mission/
├── index.html          ← Main landing page
├── blog.html           ← Full blog / updates page
├── css/
│   └── style.css       ← All styling (you shouldn't need to edit this)
├── js/
│   ├── posts.js        ← ADD BLOG POSTS HERE
│   ├── gallery.js      ← ADD PHOTOS HERE
│   └── main.js         ← Site functionality (don't edit)
└── images/             ← PUT YOUR PHOTOS HERE
    └── (your photos)
```

---

## COST SUMMARY

| Item | Cost |
|---|---|
| Netlify hosting | FREE |
| Custom domain (optional) | ~$12/year |
| **Total** | **$0–12/year** |

---

## BEFORE YOU DEPLOY (checking your edits)

Since blog posts and gallery photos are added by hand-editing `js/posts.js` and
`js/gallery.js`, it's easy to introduce a typo — a mistyped image filename, a
duplicate photo, a broken link — that won't show up until it's live. This repo
has a few commands (Node.js required) that catch that before you upload:

```
npm install     # one-time setup
npm run lint    # checks JS/CSS/HTML for mistakes
npm test        # checks posts.js/gallery.js: unique ids, valid dates,
                # every referenced photo actually exists, no duplicates
npm run build   # checks every internal link/anchor and image path
                # across the whole site actually resolves
npm run verify  # runs all three
```

If `npm run verify` passes, it's safe to re-upload the folder to Netlify.

This repo also has a git pre-push hook that runs `npm run verify`
automatically and blocks `git push` if it fails. It's already enabled in this
clone; after cloning fresh elsewhere, enable it once with:

```
git config core.hooksPath .githooks
```

---

## QUESTIONS?

Email: jack30clark@gmail.com
Donation page: https://www.freedomhouseinternational.org/jack-clark
