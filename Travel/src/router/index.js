import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';


const routes = [
  { path: '/', name: 'home', component: Main },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;