import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MissionView from '../features/mission/MissionView.vue'
import AboutView from '../features/about/AboutView.vue'
import LeadershipView from '../features/leadership/LeadershipView.vue'
import LeaderProfileView from '../features/leadership/LeaderProfileView.vue'
import PressView from '../features/press/PressView.vue'
import FaqView from '../features/faq/FaqView.vue'
import DonateView from '../features/donate/DonateView.vue'
import FinancialsView from '../features/financials/FinancialsView.vue'
import TermsView from '../features/terms/TermsView.vue'
import PrivacyView from '../features/privacy/PrivacyView.vue'
import CampusView from '../features/campus/CampusView.vue'
import MuseumView from '../features/museum/MuseumView.vue'
import ProgramsView from '../features/programs/ProgramsView.vue'
import VolunteerView from '../features/volunteer/VolunteerView.vue'
import StoriesView from '../features/stories/StoriesView.vue'
import StoryDetailView from '../features/stories/StoryDetailView.vue'
import WaysToGiveView from '../features/give/WaysToGiveView.vue'
import HostEventView from '../features/host/HostEventView.vue'
import ShopView from '../features/shop/ShopView.vue'
import ContactView from '../features/contact/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/mission',
    name: 'mission',
    component: MissionView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/leadership',
    name: 'leadership',
    component: LeadershipView,
  },
  {
    path: '/leadership/:id',
    name: 'leader',
    component: LeaderProfileView,
    props: true,
  },
  {
    path: '/press',
    name: 'press',
    component: PressView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView,
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateView,
  },
  {
    path: '/financials',
    name: 'financials',
    component: FinancialsView,
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
  },
  {
    path: '/campus',
    name: 'campus',
    component: CampusView,
  },
  {
    path: '/museum',
    name: 'museum',
    component: MuseumView,
  },
  {
    path: '/programs',
    name: 'programs',
    component: ProgramsView,
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: VolunteerView,
  },
  {
    path: '/stories',
    name: 'stories',
    component: StoriesView,
  },
  {
    path: '/stories/:id',
    name: 'story',
    component: StoryDetailView,
    props: true,
  },
  {
    path: '/ways-to-give',
    name: 'ways-to-give',
    component: WaysToGiveView,
  },
  {
    path: '/host-event',
    name: 'host-event',
    component: HostEventView,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

