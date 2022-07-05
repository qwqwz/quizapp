import { createRouter, createWebHistory} from "vue-router";
import myquizes from "../../views/myquizes.vue";
import Quizes from "../../views/Quizes.vue";
import NewQuiz from "../../views/NewQuiz.vue";
import EditQuiz from "../../views/EditQuiz.vue";

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
    },

    {
      path: '/newquiz',
      component: NewQuiz
    },
    {
      path: '/editquiz',
      component: EditQuiz
    }
  ]
})

export default router