import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// Miscellaneous
import './assets/main.css'
import store from './state'
// Components
import App from './App.vue'
import Builder from './Builder.vue'
import Preview from './Preview.vue'

const routes = [
  { path: '/', component: Builder },
  { path: '/preview', component: Preview },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
