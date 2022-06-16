<template>
  <div class="new-quiz-wrap">
  <h3 class="header">Quiz app</h3>
  <h2 class="header_title">Create new quiz</h2>
    <div class="new-quiz">
      <div class="new-quiz_info">
        <div class="quiz-name">
          <p class="quiz-name_title">Quiz name*</p>
          <InputText class="quiz-name_input"></InputText>
        </div>
        <div class="quiz-desc">
          <p class="quiz-desc_title">Quiz description</p>
          <InputTextArea class="quiz-name_textarea"></InputTextArea>
        </div>
      </div>
      <div class="new-quiz_questions">
        <p class="new-quiz_questions_title">Questions</p>
        <NewQuizQuestionItem></NewQuizQuestionItem>
      </div>
    </div>
    <footer>
  </footer>
  </div>
</template>

<script>
import InputText from "../src/components/UI/InputText.vue";
import InputTextArea from "../src/components/UI/InputTextArea.vue";
import NewQuizQuestionItem from "../src/components/UI/NewQuizQuestionItem.vue";

export default {
  name: "NewQuiz",
  components: { InputText, InputTextArea, NewQuizQuestionItem }
}
</script>

<style lang="scss" scoped>

.new-quiz-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  margin-left: 22px;

  .header {
    margin-top: 32px;
  }
  .header_title {
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .new-quiz {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 48px;

    .new-quiz_info {
      width: 100%;
      max-width: 631px;
      display: flex;
      flex-direction: column;
      gap: 22px;

      .quiz-name {
        flex-direction: column;

        .quiz-name_title {
          margin-bottom: 12px;
        }

        .quiz-name_input {
          width: 100%;
        }

      }

      .quiz-desc {

        .quiz-desc_title {
          margin-bottom: 12px;
        }

        .quiz-name_textarea {
          width: 100%;
          height: 215px;
        }

      }
    }

    .new-quiz_questions {
      width: 100%;
      max-width: 631px;
      display: flex;
      flex-direction: column;

      .new-quiz_questions_title {
        margin-bottom: 12px;
      }
    }

  }
}

</style>