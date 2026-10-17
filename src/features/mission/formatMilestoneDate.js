// Formats a milestone date in the given language,
// e.g. formatMilestoneDate(1974, 12, 'en') → "December 1974"
export function formatMilestoneDate(year, month, locale) {
  const date = new Date(year, month - 1)
  if (locale === 'km') {
    const fmt = (opts) => new Intl.DateTimeFormat('km-u-nu-khmr', opts).format(date)
    return `ខែ${fmt({ month: 'long' })} ឆ្នាំ ${fmt({ year: 'numeric' })}`
  }
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date)
}
