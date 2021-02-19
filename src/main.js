import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Miscellaneous
import './assets/main.css'
import store from './state'

// Components
import App from './App.vue'
import Builder from './Builder.vue'
// Async imported
const Preview = () => import('./Preview.vue')

const routes = [
  { path: '/', component: Builder },
  { path: '/preview', component: Preview },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

// State management
app.use(store)

// Router
app.use(router)

// Mount the app!
app.mount('#app')
