import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EmployeeDetails from '../views/EmployeeDetails.vue';
import CreateEmployee from '@/views/CreateEmployee.vue';
import UpdateEmployee from '@/views/UpdateEmployee.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'createEmployee',
      component: CreateEmployee
    },
    {
      path: '/employee/:id',
      name: 'employee.details',
      component: EmployeeDetails
    },
    {
      path: '/update',
      name: 'updateEmployee',
      component: UpdateEmployee
    }
  ]
})

export default router
