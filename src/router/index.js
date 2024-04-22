import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      children: [
        {
          path: '',
          name: 'welcome-login',
          component: () => import('@/views/welcome/LoginPage.vue')
        }, {
          path: 'register',
          name: 'welcome-register',
          component: () => import('@/views/welcome/RegisterPage.vue')
        }, {
          path: 'forget',
          name: 'welcome-forget',
          component: () => import('@/views/welcome/ForgetPage.vue')
        }
      ]
    }, {
      path: '/index',
      name: 'index',
      component: () => import('@/views/IndexView.vue'),
      /*children: [
        {
          path: '',
          name: 'index-list',
          component: () => import('@/views/index/PostList.vue')
        }, {
          path: 'settings',
          name: 'index-settings',
          component: () => import('@/views/index/Settings.vue')
        }
      ]

       */
    },
    {
      path:'/result',
      name:'result',
      component: () => import('@/views/ResultView.vue'),
    },
    {
      path:'/rec',
      name:'rec',
      component: () => import('@/views/rec.vue'),
    }
  ]
})

export default router
