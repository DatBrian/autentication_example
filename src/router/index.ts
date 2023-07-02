import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthVieww from '../views/AuthView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import SocialView from '../views/SocialView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auto',
    component: AuthVieww
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
