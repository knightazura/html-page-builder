import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Local instance
import ElementBuilder from './utilities/element/builder'

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

const app = createApp(App)

// Global vars using provide/inject
app.config.globalProperties.$elBuilder = element => new ElementBuilder(element)

// State management
app.use(store)

// Router
app.use(router)

// Mount the app!
app.mount('#app')
