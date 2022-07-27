import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/SiteContacts.vue')
  },
  {
    path: '/for-psychologists',
    name: 'for-psychologists',
    component: () => import('../views/SiteForPsychologists.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/SitePayment.vue')
  },
  {
    path: '/seminars',
    name: 'seminars',
    component: () => import('../views/SiteSeminars.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/SiteServices.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/SiteAboutUs.vue')
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import('../views/SitePrices.vue')
  },
  {
    path: '/successes',
    name: 'successes',
    component: () => import('../views/SiteSuccesses.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior() {
    // always scroll to top
    return { 
      top: 0,
      behavior: 'smooth'
    }
  },
  base:'/psychology-gorshenko-simonov/',
})

export default router
