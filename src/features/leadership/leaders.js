// Leadership page people.
// To add a person:
//   1. Add { id, name, photo } to a team below. Put the photo in public/leadership/ (or leave photo empty for a placeholder).
//   2. Add `leadership.roles.<id>` text to ./locales/en.js, km.js and zh.js.
//   3. Optional: add `leadership.bios.<id>` (a list of paragraphs) for their profile page.
// Names are not translated; roles and bios are.
export const teams = [
  {
    id: 'executive',
    members: [
      { id: 'e1', name: 'Full Name', photo: '/leadership/ai.webp' },
      { id: 'e2', name: 'Full Name', photo: '/leadership/ai2.jpg' },
      { id: 'e3', name: 'Full Name', photo: '/leadership/ai3.jpg' },
      { id: 'e4', name: 'Full Name', photo: '/leadership/ai4.jpg' },
      { id: 'e5', name: 'Full Name', photo: '/leadership/ai5.jpg' },
      { id: 'e6', name: 'Full Name', photo: '/leadership/ai6.jpg' },
      { id: 'e7', name: 'Full Name', photo: '/leadership/ai7.jpg' },
      { id: 'e8', name: 'Full Name', photo: '/leadership/ai 8.jpg' },
    ],
  },
  {
    id: 'board',
    members: [
      { id: 'b1', name: 'Full Name', photo: '/leadership/ai9.jpg' },
      { id: 'b2', name: 'Full Name', photo: '/leadership/ai10.jpg' },
      { id: 'b3', name: 'Full Name', photo: '/leadership/ai11.jpg' },
      { id: 'b4', name: 'Full Name', photo: '/leadership/ai12.jpg' },
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
