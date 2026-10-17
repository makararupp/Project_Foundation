// Milestone stories on the Mission page, shown in this order.
//
// To add a milestone:
//   1. Add an entry here with a new `id` (e.g. 'm8'), `year` and `month` (1–12).
//   2. Add `mission.milestones.<id>` text to ./locales/en.js, km.js and zh.js.
//      Required: `subtitle`, `p1`. Optional: `p2`, `caption`, `p3`, `callout`, `p4`.
//   3. Optional images go in /public/images: `portrait` (small, left) and `image` (wide, right).
export const milestones = [
  {
    id: 'm1', year: 1974, month: 12,
    portrait: '/images/paul-and-me.png', portraitAlt: 'Paul Allen and Bill Gates',
    image: '/images/altair-popular-electronics.png', imageAlt: 'Popular Electronics Altair 8800',
  },
  { id: 'm2', year: 1975, month: 1 },
  { id: 'm3', year: 1975, month: 2 },
  { id: 'm4', year: 1975, month: 3 },
  { id: 'm5', year: 1975, month: 4 },
  { id: 'm6', year: 1975, month: 5 },
  { id: 'm7', year: 1975, month: 6 },
]
