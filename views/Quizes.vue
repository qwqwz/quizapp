<template>
  <div class="quizes">
    <h3 class="header">Quiz app</h3>
    <p class="quiz-title">{{ currentQuiz.title }}</p>
    <quiz-questions
      :key="questions.id"
      v-for="(questions) in currentQuiz.questions"
      :questions="questions"
      :currentQuestion="currentQuestion"
      :currentAnswers="currentAnswers"
      @selectAnswer="selectAnswer"
      @addAnswer="addAnswer"
      @delAnswer="delAnswer"
    ></quiz-questions>
    <div class="status_bar" v-if="currentQuestion < currentQuiz.questions.length">
      <div class="progress">
        <p class="questions-count">Question {{ currentQuestion + 1 }} of {{ currentQuiz.questions.length }}</p>
        <div class="bars">
          <div v-for="(rec, index) in currentQuiz.questions" class="rec"
               :class="index === currentQuestion ? 'active' : false, index < currentQuestion ? 'done' : false"></div>
        </div>
      </div>
      <button class="btn_submit"
              @click="nextQuestion"
      >Next
        <Icon icon="heroicons-solid:arrow-narrow-right"/>
      </button>
    </div>
    <div class="results" v-if="$store.state.quizes[0].questions.length === currentQuestion">
      <h3>Results</h3>
      <div v-for="(question, index) in currentQuiz.questions" class="results-question_wrap">
        <h3 class="results-question_title">{{ currentQuiz.questions[index].title }}</h3>
        <div class="results-options">
          <div class="item-options">
            <div v-for="(option, op_index) in question.options" class="item-option_wrap"
                 :class="option.right === true ? 'true': false, answers[index].filter(x => x.id === option.id)[0]?.right === false ? 'false' : false">
              <div class="item_option">
                <icon class="icon_true" icon="heroicons-solid:check-circle"></icon>
                <icon class="icon_false" icon="heroicons-solid:x-circle"></icon>
                <div class="item-option_title"><h4>{{ option.title }}</h4>
                </div>
              </div>
              <div v-if="answers[index][op_index]" class="item-option_choice"><h4>Your choice</h4></div>
            </div>
          </div>
        </div>
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
      currentQuiz: this.$store.state.quizes[0],
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

  .quiz-title {
    text-align: center;
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
          background-color: var(--gray);
          border-radius: 6px;
        }

        .active {

          background-color: var(--primary-50);
        }

        .done {
          background-color: var(--primary);
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

/*        Results         */

.results {
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;


  .results-question_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    max-width: 645px;
    background-color: var(--gray-light);
    padding: 24px;
    border-radius: 6px;
  }

  .results-question_title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }

  .results-options {
    gap: 16px;

    .results-item_title {
      margin-bottom: 16px;
    }

    .item-options {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .item-option_wrap {
        min-height: 56px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;
        align-items: center;
        border-radius: 6px;
        padding: 12px 16px;
        background-color: var(--light);

        .item_option {
          display: flex;
          align-items: flex-start;
          align-items: center;
          gap: 16px;

        }

        .item-option_choice {
          background-color: var(--light-60);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 6px 8px;
          border-radius: 6px;
          text-align: center;

          h4 {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
          }
        }

        .item-option_title {
          display: contents;
        }


        .icon_true {
          display: none;
          align-self: flex-start;
          min-width: 32px;
          height: 32px;
          color: var(--green-default);
        }

        .icon_false {
          display: none;
          align-self: flex-start;
          min-width: 32px;
          height: 32px;
          color: var(--red-default);
        }
      }

      .true {
        background-color: var(--green-light);

        .icon_false {
          display: none;
        }

        .icon_true {
          display: block;
        }
      }

      .false {
        background-color: var(--red-light);

        .icon_false {
          display: block;
        }
      }
    }

  }
}

</style>