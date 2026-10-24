// Financial documents listed on the Financials page, newest year first.
// To add a PDF: put it in public/reports/ and set its href, e.g. '/reports/2025-annual-report.pdf'.
// Each document has either:
//   type  – a standard title from `financials.docs` in ./locales (audited, tax, annual), translated, or
//   title – its own title, shown as written in every language.
// A document with href: '' shows as "coming soon" with no link.
export const years = [
  {
    year: 2025,
    documents: [
      { type: 'audited', href: '' },
      { type: 'tax', href: '' },
      { type: 'annual', href: '' },
      { title: 'Homeall Share Value', href: '/pdf/homeall _share valued.pdf' },
      { title: 'Homeall List of 1000 Hard Skills', href: '/pdf/Homeall_List 1000 Hard Skills.pdf' },
      { title: 'Homeall Skills Terms – HOMEALL Library', href: '/pdf/homeall_ skills terms_HOMEALL Library.pdf' },
      { title: 'Chha Chha Khmer, Siem Reap', href: '/pdf/Chha Chha Khmer, Siem Reap PDF.pdf' },
    ],
  },
  {
    year: 2024,
    documents: [
      { type: 'audited', href: '' },
      { type: 'tax', href: '' },
      { type: 'annual', href: '' },
    ],
  },
]
