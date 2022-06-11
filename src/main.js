import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import myquizes from "../views/myquizes.vue";
import Quizes from "./components/Quizes.vue";
import { createRouter, createWebHistory} from "vue-router";


const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: myquizes
    },

    {
      path: '/quizes',
      component: Quizes
    }
  ]
})


createApp(App)
  .use(router)
  .use(store)
  .directive("click-outside", clickOutside)
  .mount('#app')
