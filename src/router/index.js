import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Votings from '../views/Votings'
import Voting from '../views/Voting.vue'

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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
