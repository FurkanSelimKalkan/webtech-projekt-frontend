import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Votings from '../views/Votings'
import Voting from '../views/Voting.vue'
import Profile from '@/views/Profile'
import auth from './../auth/AuthService'
import Login from '@/views/Login'
import Guide from '@/views/Guide'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/votings',
    name: 'Votings',
    component: Votings
  },
  // dynamic segments start with a colon
  {
    path: '/votings/:id',
    name: 'Voting',
    component: Voting
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (!auth.isAuthenticated()) {
        next(false)
      } else {
        next()
      }
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
