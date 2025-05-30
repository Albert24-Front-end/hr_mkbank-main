import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'layout_main',
    component: () => import('../layouts/defaultLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('../pages/MainPage.vue') },
      { path: '/:CatchAll(.*)', name: '404', component: () => import('../pages/404NotFound.vue') },
      { path: '/vacancies', name: 'VacanciesList', component: () => import('../pages/VacanciesList.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)}), children: [
          { path: 'id', name: 'VacancyInfo', component: () => import('../pages/VacancyInfo.vue') }
        ]
       },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
