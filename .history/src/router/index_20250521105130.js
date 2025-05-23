import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'layout_main',
    component: () => import('../layouts/defaultLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('../pages/MainPage.vue') },
      { path: '/:CatchAll(.*)', name: '404', component: () => import('../pages/404NotFound.vue') },
      // { path: '', name: 'VacanciesList', component: () => import('../pages/') },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
