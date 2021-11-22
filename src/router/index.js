import { createRouter, createWebHashHistory } from 'vue-router'
import ReviewsHome from '../views/ReviewsHome.vue'

const routes = [
  {
    path: '/',
    name: 'ReviewsHome',
    component: ReviewsHome
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
