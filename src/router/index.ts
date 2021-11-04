import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/add_patient',
    name: 'CreatePatient',
    component: () => import('../views/AddPatient.vue')
  },
  {
    path: '/create_order',
    name: 'CreateOrder',
    component: () => import('../views/CreateOrder.vue')
  },
  {
    path: '/view_results',
    name: 'ViewResults',
    component: () => import('../views/ViewResults.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
