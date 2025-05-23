import { createPinia } from 'pinia'
import router from '@/router'

export function introducePlugins(app) {
    app
    .use(createPinia());
    .use(router);
}