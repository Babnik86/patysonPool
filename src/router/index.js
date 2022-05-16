import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/utils/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/account-settings',
    name: 'account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (auth.currentUser && to.name === 'login') {
    next({
      path: '/dashboard',
    })
  }
  if (to.matched.some(record => record.meta.authRequired)) {
    if (auth.currentUser && to.name !== 'login') {
      next()
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
})

export default router
