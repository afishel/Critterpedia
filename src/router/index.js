import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List/List.vue'),
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/Pictures/Pictures.vue'),
  },
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: () => import(/* webpackChunkName: "details" */ '../views/Details/Details.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
