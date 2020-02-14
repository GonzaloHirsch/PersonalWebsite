import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Experience from '@/views/experience/Experience.vue'
import Projects from '@/views/projects/Projects.vue'
import RouterView from '@/views/RouterView.vue'
import { i18n } from '@/main.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: RouterView,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!['en', 'es'].includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/:lang/projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: '/:lang/experience',
        name: 'Experience',
        component: Experience
      }
    ]
  },
  {
    path: '*',
    redirect: '/en'
  }
]

const router = new VueRouter({
  routes
})

export default router
