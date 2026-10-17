// Milestone stories on the Mission page, shown in this order.
//
// To add a milestone:
//   1. Add an entry here with a new `id` (e.g. 'm8'), `year` and `month` (1–12).
//   2. Add `mission.milestones.<id>` text to ./locales/en.js, km.js and zh.js.
//      Required: `subtitle`, `p1`. Optional: `p2`, `caption`, `p3`, `callout`, `p4`.
//   3. Optional images go in /public/images: `portrait` (small, left) and `image` (wide, right).
//   4. Optional `layout: 'column'`: date/title on top, then one text column with `image`
//      inline (under p2, with `caption`) and the `callout` box at the end. `portrait` is not used.
//   5. Optional `layout: 'pair'`: date/title on top, one text column, then two images side by side.
//      Set `images: [{ src, alt }, { src, alt }]` here and `caption1`, `caption2` in the locales.
//   6. Optional `layout: 'photo'`: date/title on top, then a narrow centered column with
//      `image` first (with `caption`) and the text below it. Leave out `image` for text only.
export const milestones = [
  {
    id: 'm1', year: 1974, month: 12,
    portrait: '/images/paul-and-me.png', portraitAlt: 'Paul Allen and Bill Gates',
    image: '/images/altair-popular-electronics.png', imageAlt: 'Popular Electronics Altair 8800',
  },
  {
    id: 'm2', year: 1975, month: 1,
    portrait: '/images/investment.jpg', portraitAlt: 'Business partners shaking hands',
    image: '/images/Homeall.jpg', imageAlt: 'Homeall Product Center storefront',
  },
  {
    id: 'm3', year: 2000, month: 2,
    image: '/images/DSKU.jpg', imageAlt: 'DSKU logo',
  },
  {
    id: 'm4', year: 2001, month: 8, layout: 'pair',
    images: [
      { src: '/images/visit1.jpg', alt: 'Foundation visit' },
      { src: '/images/visit2.jpg', alt: 'Foundation visit' },
    ],
  },
  {
    id: 'm5', year: 2002, month: 10, layout: 'photo',
    image: '/images/Steve job and me.png', imageAlt: 'Steve Jobs and Bill Gates',
  },
  { id: 'm6', year: 2003, month: 1, layout: 'photo' },
  { id: 'm7', year: 2010, month: 2 },
  { id: 'm7', year: 2010, month: 2 },
  { id: 'm7', year: 2010, month: 2 },

]
