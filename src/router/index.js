import { createRouter, createWebHashHistory } from 'vue-router'
import LogsView from '../views/LogsView.vue'

const routes = [
  {
    path: '/',
    name: 'logs',
    component: LogsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue')
  },
  {
    path: '/contacts/new',
    name: 'new-contact',
    component: () => import(/* webpackChunkName: "new-contact" */ '../views/NewContactView.vue')
  },
  {
    path: '/keypad',
    name: 'keypad',
    component: () => import(/* webpackChunkName: "keypad" */ '../views/KeypadView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
