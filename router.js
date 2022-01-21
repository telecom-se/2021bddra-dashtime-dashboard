import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/home'
import CompanyPage from '@/pages/company'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: HomePage,
        name: 'home-page',
      },
      {
        path: '/companies/:symbol/stocks',
        component: CompanyPage,
        name: 'company-page',
      },
    ],
  })
}
