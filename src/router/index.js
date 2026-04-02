import { createRouter, createWebHistory } from 'vue-router'
import about from '@/pages/about.vue'
import service from '@/pages/service.vue'
import contact from '@/pages/contact.vue'
import Project from '@/pages/project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 {
  path: '/',
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