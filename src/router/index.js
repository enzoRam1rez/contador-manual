import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/counter', name: 'counter', component: CounterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
