import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from './views/EventList.vue'
import EventDetails from './views/EventDetails.vue'
import EventCreate from './views/EventCreate.vue'
import ErrorDisplay from './views/ErrorDisplay.vue'
import About from './views/About.vue'
import Component from './views/Component.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
