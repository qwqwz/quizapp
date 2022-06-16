<template>
  <div class="quizes">
    <h3 class="header">Quiz app</h3>
    <quiz-questions
      :key="questions.id"
      v-for="(questions) in $store.state.quizes[0].questions"
      :questions="questions"
      :currentQuestion="currentQuestion"
      :currentAnswers="currentAnswers"
      @selectAnswer="selectAnswer"
      @addAnswer="addAnswer"
      @delAnswer="delAnswer"
    ></quiz-questions>
    <div class="status_bar" v-if="currentQuestion < $store.state.quizes[0].questions.length">
      <div class="progress">
        <p class="questions-count">Question 2 of 16</p>
        <div class="bars">
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
          <div class="rec"></div>
        </div>
      </div>
      <button class="btn_submit"
              @click="nextQuestion"
      >Next
        <Icon icon="heroicons-solid:arrow-narrow-right"/>
      </button>
    </div>
    <div class="result" v-if="$store.state.quizes[0].questions.length === currentQuestion">
      <h3>Результаты</h3>
      <div v-for="answer in this.answers">
        <p>{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
import quizQuestions from "../src/components/QuizQuestions.vue";

export default {
  name: "Quizes",
  components: {quizQuestions, Icon},
  data() {
    return {
      currentQuestion: 0,
      currentAnswers: [],
      answers: [],
    }
  },
  methods: {
    addAnswer(question) {
      console.log('add')
      this.currentAnswers.push(question);
    },
    delAnswer(question) {
      console.log('del')
      this.currentAnswers = this.currentAnswers.filter(x => x !== question);
    },
    selectAnswer(question) {
      this.currentAnswers = [question]
    },
    clearAnswers() {
      this.currentAnswers = [];
    },
    nextQuestion() {
      console.log(this.currentAnswers)
      if (this.currentAnswers[0].id) {
        this.answers.push(this.currentAnswers);
        this.clearAnswers();
        this.currentQuestion++;
      } else {
        console.log('Выберете ответ')

      }
    }
  }

}
</script>

<style lang="scss" scoped>

.quizes {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .header {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 64px;
  }

  .status_bar {
    align-self: center;
    width: 100%;
    margin-top: 96px;
    display: flex;
    max-width: 1310px;
    justify-content: right;
    gap: 2.45rem;

    @media (max-width: 1349px) {
      padding-left: 20px;
      padding-right: 20px;
      justify-content: center;
    }

    @media (max-width: 500px) {
      margin-top: 58px;
      flex-wrap: wrap;
      justify-content: right;
  }

    .progress {
      width: 100%;
      max-width: 460px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 1350px) {
        max-width: 466px;
      }

      .questions-count {
        margin-bottom: 16px;
      }

      .bars {
        width: 100%;
        display: flex;
        gap: 8px;

        .rec {
          width: 100%;
          height: 4px;
          background-color: var(--primary);
          border-radius: 6px;
        }
      }

    }

    .btn_submit {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      gap: 10px;
      padding: 12px 24px;
      color: var(--light);
      background-color: var(--primary);
      border-radius: 8px;
    }
  }
}
</style>