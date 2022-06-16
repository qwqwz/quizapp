<template>
  <div class="myquizes">
    <h3 class="header">Quiz app</h3>
    <h4 class="myquizes-title">My Quizes</h4>
    <div class="myquizes-items">
      <router-link to="/newquiz">
      <div class="item-wrap new_quiz">
        <p class="new_quiz-title">Add new quiz</p>
      </div>
    </router-link>
      <quiz-item
        v-for="quiz in $store.state.quizes"
        :quiz="quiz"
        :key="quiz.id"
      ></quiz-item>
    </div>
  </div>
</template>

<script>
import QuizItem from "../src/components/UI/QuizItem.vue";

export default {
  name: "myquizes",
  components: {QuizItem},

  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.myquizes {
  margin: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .header {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 64px;
  }

  .myquizes-title {
    text-align: center;
    margin-bottom: 64px;
  }

  .myquizes-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 1010px;
    gap: 24px;

    @media (max-width: 580px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
        font-size: 1.2rem;
        line-height: 1.06;
    }

    .item-wrap {
      display: flex;
      width: 100%;
      max-width: 493px;
      max-height: 220px;
      height: 37vw;
      padding: 24px;

      p {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 1.4rem;
        line-height: 1.05;
      }
    }

    .new_quiz {
      border: 2px dashed var(--gray);
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;

      &:hover {
        border: 2px dashed var(--primary);

        p {
          color: var(--primary);
        }

      }

      &:active {
        filter: brightness(0.95);
      }

      p {
        color: var(--gray);
      }
    }

  }

}

</style>