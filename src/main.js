import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Quizes from "./components/Quizes.vue";
import { createRouter, createWebHistory} from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Quizes
    }
  ]
})


createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
