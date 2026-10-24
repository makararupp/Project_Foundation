// All page text lives here. Edit this file to change content.
export const siteName = 'SOTHEARITH Foundation'

export const nav = [
  { label: 'Visit', href: '#visit' },
  { label: 'Mission', href: '#mission' },
  { label: 'Stories', href: '#stories' },
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#footer' },
  { label: 'English', href: '#English' },
   
]

export const heroWords = ['A campus', 'A museum', 'Art', 'Sports', 'Events']

export const visit = [
  { title: 'The campus', text: 'Gardens, trails, and open lawns where visitors gather, rest, and take in the neighborhood.', link: 'Visit the campus' },
  { title: 'The museum', text: 'Hands-on exhibits and rare objects tell the stories of people who shaped the community.', link: 'Explore exhibits' },
]

export const experience = [
  { title: 'Programs and events', text: 'Art, sports, food, and civics programs where people of all ages can gather and create.', link: 'Learn more' },
  { title: 'Volunteer with us', text: 'Lend your time to tours, garden care, and community days that keep the campus running.', link: 'Learn more' },
  { title: 'Become a member', text: 'Give monthly to support young leaders, local solutions, and a more welcoming future.', link: 'Explore membership' },
]

export const stories = [
  { cats: ['Programs', 'Education'], title: 'Teachers gather to plan a new year of after-school clubs', text: 'Educators from twelve schools shared ideas, swapped lesson plans, and set goals for the months ahead.' },
  { cats: ['Leaders'], title: 'A former nurse turns a corner lot into a shared kitchen', text: 'How one neighbor built a space where families cook, learn, and trade recipes.' },
  { cats: ['Sustainability'], title: 'Young organizers push their city to plant ten thousand trees', text: 'A student-led campaign won funding and a clear timeline from city hall.' },
  { cats: ['Programs', 'Youth'], title: 'Summer fellows document what neighbors want from local government', text: 'Forty fellows recorded interviews across the city and shared the results at a public forum.' },
  { cats: ['Stories'], title: 'Mapping a summer of service across sixty-one cities', text: 'One hundred students, one summer, and a map of what they built.' },
]

export const programs = [
  { name: 'Youth mentorship alliance', tag: 'Ages 12–24' },
  { name: 'Girls education network', tag: 'Global' },
  { name: 'Community leaders program', tag: 'Cohort' },
  { name: 'Scholars program', tag: 'Graduate' },
  { name: 'Travel scholarship', tag: 'High school' },
  { name: 'Speaker series', tag: 'Public' },
  { name: 'Youth jobs corps', tag: 'Paid' },
  { name: 'Alumni network', tag: 'Members' },
]

export const footer = {
  address: ['100 Example Avenue', 'Sample City, ST 00000'],
  phone: '098 788 789',
  phoneHref: 'tel:+85598788789',
  hours: [
    { name: 'Campus', lines: ['Daily, 6 a.m. – 9 p.m.'] },
    { name: 'Museum', lines: ['Mon 1–8 p.m.', 'Tue–Sun 10 a.m. – 5 p.m.'] },
    { name: 'Library branch', lines: ['Mon, Wed 12–8 p.m.', 'Tue, Thu 10 a.m. – 6 p.m.', 'Fri, Sat 9 a.m. – 5 p.m.', 'Sun 1–5 p.m.'] },
  ],
  columns: [
    { title: 'About us', links: ['About', 'Mission and values', 'Leadership', 'Press and media', 'FAQs', 'Financials'] },
    { title: 'Get involved', links: ['Ways to give', 'Host an event', 'Shop', 'Volunteer', 'Contact us'] },
    { title: 'Stay connected', links: ['Instagram', 'YouTube', 'Facebook', 'LinkedIn'] },
  ],
  // Keyed by the English link name above; works in every language.
  // Paths starting with "/" open inside the site, full URLs open in a new tab.
  linkUrls: {
    About: '/about',
    'Mission and values': '/mission',
    Leadership: '/leadership',
    'Press and media': '/press',
    FAQs: '/faq',
    'Ways to give': '/ways-to-give',
    'Host an event': '/host-event',
    Shop: '/shop',
    'Contact us': '/contact',
    Financials: '/financials',
    Volunteer: '/volunteer',
    Instagram: 'https://www.instagram.com/explore/locations/1737053139937061/homeall-village/',
    Facebook: 'https://web.facebook.com/homeallvillage',
    YouTube: 'https://www.youtube.com/channel/UC7_7AUnS2rluymlXC0DJxAA',
  },
}

// Location links, used on the home page (Programs), Campus and Museum pages.
export const location = {
  // Google Maps share link (opens directions)
  directionsUrl: 'https://share.google/BLGF0PDJbhYDgRtjH',
  // Google Maps → Share → Embed a map: copy only the src="..." address
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1111475273287!2d103.87554527516335!3d13.343361587007246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017f6edc54967%3A0xbd142942947ca89!2sHomeall%20Village!5e0!3m2!1sen!2skh!4v1792820666996!5m2!1sen!2skh',
}

// Contact details, used on the Contact page and on "Contact us" buttons across the site.
export const contact = {
  // The Foundation's email address, e.g. 'info@sothearith.org'.
  // While empty, the site shows only the phone number; once set, email appears everywhere automatically.
  email: '',
}

// Best way to contact the Foundation: email if set, otherwise the phone number from the footer
export const contactHref = (subject = '') =>
  contact.email
    ? `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
    : footer.phoneHref
