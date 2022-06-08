<template>
  <div class="quiz"
       v-if="currentQuestion === this.questions.id - 1"
  >
    <div class="quiz-wrap">
      <p class="quiz-title">{{ this.questions.title }}</p>

      <div class="quiz-body">
        <div class="quiz-info">
          <p class="disc">{{ this.questions.disc }} {{this.currentAnswers}}</p>
          <div class="question-title">
            <div class="alert"></div>
            <div class="title"><h2>{{ this.questions.title }}</h2></div>
          </div>
        </div>
        <div class="answers">
                    <AnswerInputCheckbox
                      v-if="questions.type === 'AnswerInputCheckbox'"
                      :key="question.id"
                      v-for="question in questions.options"
                      :question="question"
                      @addAnswer="addAnswer"
                      @delAnswer="delAnswer"
                    >{{ question.title }}
                    </AnswerInputCheckbox>
          <AnswerInputRadio
            v-if="questions.type === 'AnswerInputRadio'"
            :key="question.id"
            v-for="question in this.questions.options"
            :question="question"
            :active="currentAnswers?.id"
            @change="selectAnswer(question)"
          >{{ question.title }}
          </AnswerInputRadio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerInputRadio from "./inputs/AnswerInputRadio.vue";
import AnswerInputCheckbox from "./inputs/AnswerInputCheckbox.vue";

export default {
  name: "QuizQuestions",
  props: {
    questions: Object,
    currentQuestion: Number,
    currentAnswers: Object
  },
  components: {AnswerInputRadio, AnswerInputCheckbox},
  methods: {
    selectAnswer(question) {
      this.$emit('selectAnswer', question)
    },
    addAnswer(question) {
      this.$emit('addAnswer', question)
    },
    delAnswer(question) {
      this.$emit('delAnswer', question)
    }
  }
}
</script>

<style lang="scss" scoped>

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

  }
}

</style>