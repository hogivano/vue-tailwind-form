import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import BiodataForm from '@/views/BiodataForm.vue';
import Summary from '@/views/Summary.vue';
import Error from '@/views/Error.vue';
import Success from '@/views/Success.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/biodata',
    name: 'Biodata',
    component: BiodataForm,
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
