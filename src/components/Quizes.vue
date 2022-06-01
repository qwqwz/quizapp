<template>
  <h3 class="header">Quiz app</h3>
  <p class="quiz-title">How good u know Albert?</p>

  <div class="quiz-body">
    <div class="quiz-info">
      <div class="disc">
        <p>Albert was very fond of cutlets and took a piece for himself every chance he got. One evening my mother made
          cutlets for dinner. Albert could not resist and 30 minutes before supper he began to eat the cutlets.</p>
      </div>
      <div class="answer-title">
        <div class="alert"></div>
        <div class="title"><h2>How many cutles Albert stole?</h2></div>
      </div>
    </div>
    <div class="answers">
      <AnswerInputRadio
        :key="currentQuestion.id"
        v-for="question in this.$store.state.quizes[0].questions[currentQuestion].options"
        :question="question"
        :select="select"
        @addAnswer="addAnswer"
        @delAnswer="delAnswer"
        @selectAnswer="selectAnswer"
      >{{ question.title }}
      </AnswerInputRadio>
    </div>
  </div>
  <div class="status_bar">
    <button class="btn_submit">Next
      <Icon icon="heroicons-solid:arrow-narrow-right"/>
    </button>
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
      answers: [],
      select: null
    }
  },
  methods: {
    addAnswer(question) {
      this.answers.push(question)
    },
    delAnswer(question) {
      this.answers = this.answers.filter(x => x !== question);
    },
    selectAnswer(select) {
      this.answers[this.currentQuestion] = select;
    },
  }

}
</script>

<style lang="scss" scoped>

.header {
  text-align: center;
  margin-top: 32px;
  margin-bottom: 64px;
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
    max-width: 631px;

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
  display: flex;
  justify-content: left;

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
</style>