// Story photos, in the same order as `stories.items` in src/locales/*.js.
// The story text (cats, title, text, and optional body paragraphs) lives in the locale files.
// To add a story: add it to `stories.items` in en.js, km.js and zh.js, then add its photo here.
export const storyImages = [
  '/images/hero.jpg',
  '/images/farmer.jpg',
  '/images/young.jpg',
  '/images/summer.jpg',
  '/images/map.jpg',
]

// Photo for the story at position i (falls back to the first photo)
export const storyImage = (i) => storyImages[i] || storyImages[0]

// Stories are addressed by their number, starting at 1: /stories/1, /stories/2…
export const storyPath = (i) => `/stories/${i + 1}`
