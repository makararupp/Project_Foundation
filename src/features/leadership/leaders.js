// Leadership page people.
// To add a person:
//   1. Add { id, name, photo } to a team below. Put the photo in public/images/ (or leave photo empty for a placeholder).
//   2. Add `leadership.roles.<id>` text to ./locales/en.js, km.js and zh.js.
//   3. Optional: add `leadership.bios.<id>` (a list of paragraphs) for their profile page.
// Names are not translated; roles and bios are.
export const teams = [
  {
    id: 'executive',
    members: [
      { id: 'e1', name: 'Full Name', photo: '' },
      { id: 'e2', name: 'Full Name', photo: '' },
      { id: 'e3', name: 'Full Name', photo: '' },
      { id: 'e4', name: 'Full Name', photo: '' },
      { id: 'e5', name: 'Full Name', photo: '' },
      { id: 'e6', name: 'Full Name', photo: '' },
      { id: 'e7', name: 'Full Name', photo: '' },
      { id: 'e8', name: 'Full Name', photo: '' },
    ],
  },
  {
    id: 'board',
    members: [
      { id: 'b1', name: 'Full Name', photo: '' },
      { id: 'b2', name: 'Full Name', photo: '' },
      { id: 'b3', name: 'Full Name', photo: '' },
      { id: 'b4', name: 'Full Name', photo: '' },
    ],
  },
]

export function findLeader(id) {
  for (const team of teams) {
    const person = team.members.find((m) => m.id === id)
    if (person) return person
  }
  return null
}
