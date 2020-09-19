import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Admin.vue')
  },
  {
    path: '/admin/new-product',
    component: () => import('../views/admin/NewProduct.vue')
  },
  {
    path: '/admin/:id',
    component: () => import('../views/admin/AdminProduct.vue')
  },
  {
    path: '/:id',
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
