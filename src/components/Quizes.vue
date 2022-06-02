<template>
  <h3 class="header">Quiz app</h3>
  <div class="quiz"
  >
    <div class="quiz-wrap">
      <p class="quiz-title">{{ this.$store.state.quizes[0].title }}</p>

      <div class="quiz-body">
        <div class="quiz-info">
          <p class="disc">{{ this.$store.state.quizes[0].questions[currentQuestion].disc }}</p>
          <div class="question-title">
            <div class="alert"></div>
            <div class="title"><h2>{{ this.$store.state.quizes[0].questions[currentQuestion].title }}</h2></div>
          </div>
        </div>
        <div class="answers">
          <AnswerInputCheckbox
            v-if="this.$store.state.quizes[0].questions[currentQuestion].type === 'AnswerInputCheckbox'"
            :key="currentQuestion.id"
            v-for="question in this.$store.state.quizes[0].questions[currentQuestion].options"
            :question="question"
            @addAnswer="addAnswer"
            @delAnswer="delAnswer"
          >{{ question.title }}
          </AnswerInputCheckbox>
          <AnswerInputRadio
            v-if="this.$store.state.quizes[0].questions[currentQuestion].type === 'AnswerInputRadio'"
            :key="currentQuestion.id"
            v-for="question in this.$store.state.quizes[0].questions[currentQuestion].options"
            :question="question"
            :select="select"
            @selectAnswer="selectAnswer"
          >{{ question.title }}
          </AnswerInputRadio>

        </div>
      </div>
      <div class="status_bar">
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
    </div>
  </div>
</template>

<script>
import AnswerInputCheckbox from "./inputs/AnswerInputCheckbox.vue";
import AnswerInputRadio from "./inputs/AnswerInputRadio.vue";
import {Icon} from '@iconify/vue';

export default {
  name: "Quizes",
  components: {AnswerInputCheckbox, AnswerInputRadio, Icon},
  data() {
    return {
      currentQuestion: 0,
      currentAnswers: [],
      answers: [],
      select: null
    }
  },
  methods: {
    addAnswer(question) {
      this.currentAnswers.push(question);
    },
    delAnswer(question) {
      this.currentAnswers = this.currentAnswers.filter(x => x !== question);
    },
    selectAnswer(select) {
      this.select = select.title;
      this.currentAnswers = [select]
    },
    clearAnswers() {
      this.currentAnswers = [];
    },
    nextQuestion() {
      if (this.currentAnswers.length > 0) {
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

.header {
  text-align: center;
  margin-top: 32px;
  margin-bottom: 64px;
}

.quiz {


  .quiz-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: 680px) {
      align-items: normal;
    }

    .quiz-title {
      text-align: center;
      margin-bottom: 64px;
    }

    .quiz-body {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 48px;

      .quiz-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 631px;

        .disc {
          margin-bottom: 2rem;
        }

      }

      .answers {
        width: 631px;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        user-select: none;
      }
    }

    .status_bar {
      width: 100%;
      margin-top: 96px;
      display: flex;
      flex-wrap: wrap;
      max-width: 1310px;
      justify-content: right;
      gap: 2.45rem;

      @media (max-width: 1350px) {
        width: auto;
      }

      .progress {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .questions-count {
          margin-bottom: 16px;
        }

        .bars {
          width: 462px;
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
        gap: 10px;
        padding: 12px 24px;
        color: var(--light);
        background-color: var(--primary);
        border-radius: 8px;
      }
    }
  }
}
</style>