import mission from '../features/mission/locales/en.js'
import about from '../features/about/locales/en.js'
import leadership from '../features/leadership/locales/en.js'
import press from '../features/press/locales/en.js'
import faq from '../features/faq/locales/en.js'
import donatePage from '../features/donate/locales/en.js'
import financials from '../features/financials/locales/en.js'
import terms from '../features/terms/locales/en.js'
import privacy from '../features/privacy/locales/en.js'
import campus from '../features/campus/locales/en.js'
import museum from '../features/museum/locales/en.js'
import programsPage from '../features/programs/locales/en.js'
import volunteer from '../features/volunteer/locales/en.js'
import storiesPage from '../features/stories/locales/en.js'
import give from '../features/give/locales/en.js'
import host from '../features/host/locales/en.js'
import shop from '../features/shop/locales/en.js'
import contact from '../features/contact/locales/en.js'

export default {
  nav: {
    visit: 'Visit',
    stories: 'Stories',
    mission: 'Mission',
    programs: 'Programs',
    about: 'About',
    donate: 'Donate',
  },
  hero: {
    tag: 'Now open',
    title: 'A place that brings change home.',
    words: ['A campus', 'A museum', 'Art', 'Sports', 'Events'],
    lede: 'Walk the grounds, explore the exhibits, and join programs built for neighbors of every age.',
    cta: 'Plan your visit',
  },
  visit: {
    heading: 'Visit',
    theCampus: 'The campus',
    theCampusText: 'Gardens, trails, and open lawns where visitors gather, rest, and take in the neighborhood.',
    theCampusLink: 'Visit the campus',
    theMuseum: 'The museum',
    theMuseumText: 'Hands-on exhibits and rare objects tell the stories of people who shaped the community.',
    theMuseumLink: 'Explore exhibits',
  },
  experience: {
    heading: 'Experience the center',
    item1Title: 'Programs and events',
    item1Text: 'Art, sports, food, and civics programs where people of all ages can gather and create.',
    item1Link: 'Learn more',
    item2Title: 'Volunteer with us',
    item2Text: 'Lend your time to tours, garden care, and community days that keep the campus running.',
    item2Link: 'Learn more',
    item3Title: 'Become a member',
    item3Text: 'Give monthly to support young leaders, local solutions, and a more welcoming future.',
    item3Link: 'Explore membership',
  },
  mission,
  about,
  leadership,
  press,
  faq,
  donatePage,
  financials,
  terms,
  privacy,
  campus,
  museum,
  programsPage,
  volunteer,
  storiesPage,
  give,
  host,
  shop,
  contact,
  stories: {
    heading: 'Stories from leaders and neighbors.',
    viewAll: 'View all stories',
    items: [
      {
        cats: ['Programs', 'Education'],
        title: 'Teachers gather to plan a new year of after-school clubs',
        text: 'Educators from twelve schools shared ideas, swapped lesson plans, and set goals for the months ahead.'
      },
      {
        cats: ['Leaders'],
        title: 'A former nurse turns a corner lot into a shared kitchen',
        text: 'How one neighbor built a space where families cook, learn, and trade recipes.'
      },
      {
        cats: ['Sustainability'],
        title: 'Young organizers push their city to plant ten thousand trees',
        text: 'A student-led campaign won funding and a clear timeline from city hall.'
      },
      {
        cats: ['Programs', 'Youth'],
        title: 'Summer fellows document what neighbors want from local government',
        text: 'Forty fellows recorded interviews across the city and shared the results at a public forum.'
      },
      {
        cats: ['Stories'],
        title: 'Mapping a summer of service across sixty-one cities',
        text: 'One hundred students, one summer, and a map of what they built.'
      }
    ]
  },
  programs: {
    heading: 'Programs',
    viewAll: 'View all programs',
    items: [
      { name: 'Youth mentorship alliance', tag: 'Ages 12–24' },
      { name: 'Girls education network', tag: 'Global' },
      { name: 'Community leaders program', tag: 'Cohort' },
      { name: 'Scholars program', tag: 'Graduate' },
      { name: 'Travel scholarship', tag: 'High school' },
      { name: 'Speaker series', tag: 'Public' },
      { name: 'Youth jobs corps', tag: 'Paid' },
      { name: 'Alumni network', tag: 'Members' },
    ],
  },
  donate: {
    heading: 'Donate today',
    text: 'Your gift helps us turn hope into action and connect more people to the work.',
    btn: 'Give now',
  },
  signup: {
    heading: 'Be an insider',
    desc: 'Get ticket dates, event announcements, and stories from people changing their communities.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    agree: 'I agree to the terms of service.',
    disclaimer: 'Demo form: your details are saved only in this browser and are not sent anywhere.',
    submit: 'Sign up',
    errName: 'Enter your first and last name.',
    errEmail: 'Enter a valid email address.',
    errAgree: 'Check the box to agree to the terms.',
    success: 'Thank you for signing up! We’ll keep you posted.',
    errDuplicate: 'This email is already signed up.',
    errGeneric: 'Something went wrong. Please try again.',
    submitting: 'Signing up…',
  },
  footer: {
    visit: 'Visit',
    address: ['Tolaka St, Krong Siem Reap 171201'],
    hours: [
      { name: 'Campus', lines: ['Daily, 6 a.m. – 9 p.m.'] },
      { name: 'Museum', lines: ['Mon 1–8 p.m.', 'Tue–Sun 10 a.m. – 5 p.m.'] },
      { name: 'Library branch', lines: ['Mon, Wed 12–8 p.m.', 'Tue, Thu 10 a.m. – 6 p.m.', 'Fri, Sat 9 a.m. – 5 p.m.', 'Sun 1–5 p.m.'] },
    ],
    columns: [
      {
        title: 'About us',
        links: ['About', 'Mission and values', 'Leadership', 'Press and media', 'FAQs', 'Financials']
      },
      {
        title: 'Get involved',
        links: ['Ways to give', 'Host an event', 'Shop', 'Volunteer', 'Contact us']
      },
      {
        title: 'Stay connected',
        links: ['Instagram', 'YouTube', 'Facebook', 'LinkedIn']
      },
    ],
    note: 'Placeholder content. Replace the text, images, and links with your own.',
    terms: 'Terms of service',
    privacy: 'Privacy policy',
  },
  announcement: {
    highlight: 'Tour tickets are limited.',
    text: 'New dates open on the first Monday of each month at 9 a.m.',
    link: 'Get notified',
  },
}
