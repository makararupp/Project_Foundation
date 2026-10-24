import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MissionView from '../features/mission/MissionView.vue'
import AboutView from '../features/about/AboutView.vue'
import LeadershipView from '../features/leadership/LeadershipView.vue'
import LeaderProfileView from '../features/leadership/LeaderProfileView.vue'
import PressView from '../features/press/PressView.vue'

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

