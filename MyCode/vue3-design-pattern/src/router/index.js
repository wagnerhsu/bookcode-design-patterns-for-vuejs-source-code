import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropsView from '../views/PropsView.vue';
import AndDesignUiView from '@/views/AndDesignUiView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/props',
    name: 'props',
    component: PropsView,
  },
  {
    path: '/antd',
    name: 'antd',
    component: AndDesignUiView,
  },
  {
    path: '/provideinject',
    name: 'provideinject',
    component: () => import('../views/ProvideInjectView.vue'),
  },
  {
    path: '/datetime',
    name: 'datetime',
    component: () => import('../views/DateTimeView.vue'),
  },
  {
    path: '/formvalidation',
    name: 'formvalidation',
    component: () => import('../views/FormValidationView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
