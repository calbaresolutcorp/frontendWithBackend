import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeDetails from '../views/EmployeeDetails.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/employee/:id',
      name: 'employee.details',
      component: EmployeeDetails
    }
  ]
})

export default router
