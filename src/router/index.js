import { createRouter, createWebHistory } from 'vue-router'
import about from '@/pages/about.vue'
import service from '@/pages/service.vue'
import contact from '@/pages/contact.vue'
import Project from '@/pages/project.vue'
import Home from '@/pages/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
   path: '/',
   name:'home',
   component:Home
  },
  {
   path: '/about',
   name:'about',
   component:about
  },
  {
   path: '/service',
   name:'service',
   component:service
  },
  {
   path: '/contact',
   name:'contact',
   component:contact
  },
  {
   path: '/project',
   name:'project',
   component:Project
  }
  ],
})

export default router