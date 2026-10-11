# Portfolio

Static site, no build step. Open `index.html` or run `python3 -m http.server 8000`.

## Structure

```
index.html            page skeleton: header, section order, footer
data/                 all content (edit these to update the site)
  profile.js          name, summary, highlight box, email, phone, social links
  experience.js       jobs (also feed the "Life so far..." timeline)
  projects.js         projects and their tags
  skills.js           skills table rows
  education.js        degrees (also feed the timeline)
  achievements.js     certifications and awards
assets/
  css/tokens.css      colours, fonts, sizes (design tokens)
  css/base.css        reset, headings, text, links
  css/layout.css      header, content area, footer
  css/components.css  highlight box, timeline, entries, tags, skills table
  js/helpers.js       DOM helpers
  js/sections.js      one render function per section
  js/main.js          fills each <div data-render="..."> in index.html
  images/             put images here
```

## Common changes

- **New job / project / cert:** copy an existing `{ ... }` block in the matching `data/` file and edit it.
- **Reorder sections:** move the `<section>` blocks in `index.html`.
- **New section type:**
  1. Create `data/<name>.js` and add a `<script>` tag for it in `index.html` next to the others.
  2. Add a `<name>(data)` function to `assets/js/sections.js` and include it in the `return { ... }` list.
  3. Add `<section id="<name>"><h2>Title</h2><div data-render="<name>"></div></section>` to `index.html`.
- **Change colours or fonts:** edit `assets/css/tokens.css`.
