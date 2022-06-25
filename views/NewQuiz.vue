<template>
  <modal-window
    v-if="onModal"
    @closeModal="closeModal"
  >
    <template #title>Create new question</template>
    <template #default>
      <div class="newquestion-wrap">
        <div class="newquestion-name">
          <p class="newquestion-name_title"
          >Question name*</p>
          <InputText class="quiz_input"
                     v-model="newquestion.title"
          ></InputText>
        </div>
        <div class="newquestion-desc">
          <p class="newquestion-desc_title">Question description</p>
          <InputTextArea class="quiz_textarea"
                         v-model="newquestion.desc"
          ></InputTextArea>
        </div>
      </div>

      <div class="newquestion-answers-wrap">
        <p class="newquestion-answers_title">Answer options</p>
        <draggable
          animation="200"
          class="drag-list"
          :list="newquestion.options"
          item-key="id"
          ghost-class="ghost"
          handle=".question-item_drag"
        >
          <template #item=" { element, index }">
            <NewAnswerItem
              :option="element"
              :index="index"
              @updateTitle="updateAnswer"
              @deleteAnswer="deleteAnswer"
            ></NewAnswerItem>
          </template>
        </draggable>
        <button class="newquestion-answers_add" @click.prevent="addAnswer">
          Add new answer
        </button>
      </div>

    </template>
    <template #footer>
      <div class="newquestion_warn" style="text-align: end">
        <p v-for="warn in newQuestionWarn">{{ warn }}</p>
      </div>

      <button class="newquestion_create"  @click="createQuestion">
        Create question
      </button>
    </template>
  </modal-window>
  <div class="new-quiz-wrap"
  >
    <h3 class="header">Quiz app</h3>
    <h2 class="header_title">Create new quiz</h2>
    <div class="new-quiz">
      <div class="new-quiz_info">
        <div class="new-quiz_info-wrap">
          <div class="quiz-name">
            <p class="quiz-name_title"
            >Quiz name*</p>
            <InputText class="quiz_input"
                       v-model="quizinfo.title"
            ></InputText>
          </div>
          <div class="quiz-desc">
            <p class="quiz-desc_title">Quiz description</p>
            <InputTextArea class="quiz_textarea"
                           v-model="quizinfo.desc"
            ></InputTextArea>
          </div>
        </div>
      </div>
      <div class="new-quiz_questions"
      >
        <p class="new-quiz_questions_title">Questions</p>
        <draggable
          animation="200"
          class="drag-list"
          :list="questions"
          item-key="id"
          ghost-class="ghost"
          handle=".question-item_drag"
        >
          <template #item=" { element, index }">
            <NewQuizQuestionItem
              :question="element"
              :index="index"
            ></NewQuizQuestionItem>
          </template>
        </draggable>
        <button class="new-quiz_questions_add" @click.prevent="openModal">
          Add new question
        </button>
      </div>
    </div>
    <div class="create-quiz_wrap">
      <router-link to="/quizes" tag="button" class="btn_create-quiz">
        Create quiz
      </router-link>
    </div>
  </div>
</template>

<script>
import InputText from "../src/components/UI/InputText.vue";
import InputTextArea from "../src/components/UI/InputTextArea.vue";
import NewQuizQuestionItem from "../src/components/UI/NewQuizQuestionItem.vue";
import draggable from "vuedraggable";
import ModalWindow from "../src/components/UI/ModalWindow.vue";
import NewAnswerItem from "../src/components/UI/NewAnswerItem.vue";

export default {
  name: "NewQuiz",
  components: {InputText, InputTextArea, NewQuizQuestionItem, draggable, ModalWindow, NewAnswerItem},
  data() {
    return {
      enabled: true,
      quizinfo: {
        title: '',
        desc: '',
      },
      newquestion: {
        title: '',
        desc: '',
        options: [
          {id: 1, title: 'How long Alber still can live???', right: true},
          {id: 2, title: 'Seven', right: false},
          {id: 3, title: 'Seven', right: false},
          {id: 4, title: 'Seven', right: false},
        ]
      },
      questions: [

      ],
      Warns: [
        {noTitle: 'Come up with a question title'},
        {noAnswers: 'Create at least one answer'},
        {noCorrect: 'Choose at least one correct answer'},
      ],
      newQuestionWarn: [],
      dragging: false,
      onModal: false
    }
  },
  methods: {
    openModal() {
      console.log(this.newquestion.options)
      this.onModal = true;
    },
    closeModal() {
      this.onModal = false;
    },
    updateAnswer(event, index) {
      this.newquestion.options[index].title = event;
    },
    addAnswer() {
      if (this.newquestion.options.length === 0) {
        return this.newquestion.options.push({id: 1, title: '', right: false})
      }
      this.newquestion.options.push({
        id: this.newquestion.options.reduce((x, y) => x.id > y.id ? x : y).id + 1,
        title: '',
        right: false
      });
    },
    deleteAnswer(id) {
      this.newquestion.options = this.newquestion.options.filter(x => x.id !== id)
    },

    checkQuestionForm() {
      if (this.newquestion.title && (this.newquestion.options.filter(x => x.right === true)).length > 0)
      {
        this.newQuestionWarn = []
        return true;
      }
      else {
        this.newQuestionWarn = []
        if (!this.newquestion.title) {
          this.newQuestionWarn.push('Come up with a question title')
        }
        if (this.newquestion.options.length === 0) {
          this.newQuestionWarn.push('Create at least one answer')
        }
        if ((this.newquestion.options.filter(x => x.right === true)).length === 0) {
          this.newQuestionWarn.push('Choose at least one correct answer')
        }
      }
    },
    createQuestion() {
      if (this.checkQuestionForm()) {
        let id = 1;
        let type = 'AnswerInputRadio'

        if (this.questions.length !== 0) {
          id = this.questions.reduce((x, y) => x.id > y.id ? x : y).id + 1 }

        if ((this.newquestion.options.filter(x => x.right === true)).length > 1) {
          type = 'AnswerInputCheckbox'
        }

        this.questions.push({
          id,
          title: this.newquestion.title,
          desc: this.newquestion.desc,
          type,
          options: this.newquestion.options
        });
        this.closeModal()
        this.newquestion.title = ''
        this.newquestion.desc = ''
        this.newquestion.options = []
      }
    }

  }
}
</script>

<style lang="scss" scoped>

textarea {
  resize: vertical;
}

.ghost {
  opacity: 0;
}

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
    margin-bottom: 100px;

    .new-quiz_info {
      width: 100%;
      max-width: 631px;
      display: flex;
      flex-direction: column;

      .new-quiz_info-wrap {
        position: sticky;
        top: 22px;
      }

      .quiz-name {
        flex-direction: column;
        margin-bottom: 22px;

        .quiz-name_title {
          margin-bottom: 12px;
        }

        .quiz_input {
          width: 100%;
        }

      }

      .quiz-desc {

        .quiz-desc_title {
          margin-bottom: 12px;
        }

        .quiz_textarea {
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

      .nohover {
        pointer-events: none;
      }

      .new-quiz_questions_title {
        margin-bottom: 12px;
      }

      .drag-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .flip-list-move {
        transition: transform 0.5s;
      }

      .no-move {
        transition: transform 0s;
      }

      .new-quiz_questions_add {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px;
        margin-top: 8px;
        border: 2px dashed var(--gray);
        border-radius: 6px;
        color: var(--gray);

        &:hover {
          border: 2px dashed var(--primary);
          color: var(--primary);
        }

        &:active {
          filter: brightness(0.95);
        }
      }
    }

  }
}

.create-quiz_wrap {
  display: flex;
  justify-content: right;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 16px;
  position: fixed;
  background: var(--light);
  box-shadow: 0px -4px 60px rgba(0, 0, 0, 0.05);
  border-radius: 12px 12px 0px 0px;

  .btn_create-quiz {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: var(--light);
    background-color: var(--primary);
    border-radius: 6px;
    padding: 12px 24px;
  }
}

/* ModalWindow - New question */

.newquestion-name {
  flex-direction: column;
  margin-bottom: 22px;

  .newquestion-name_title {
    margin-bottom: 12px;
  }

  .quiz_input {
    width: 100%;
  }

}

.newquestion-desc {

  .newquestion-desc_title {
    margin-bottom: 12px;
  }

  .quiz_textarea {
    width: 100%;
    height: 115px;
  }

}

.newquestion-answers_title {
  margin-bottom: 12px;
}

.newquestion-answers_add {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 8px;
  border: 2px dashed var(--gray);
  border-radius: 6px;
  color: var(--gray);

  &:hover {
    border: 2px dashed var(--primary);
    color: var(--primary);
  }

  &:active {
    filter: brightness(0.95);
  }
}

.modal-footer {
  justify-content: right;
}

.newquestion_warn {
  p {
    font-size: 18px;
    color: var(--red-default);
  }
}

.newquestion_create {
  padding: 12px 24px;
  background: var(--primary);
  border-radius: 6px;
  color: var(--light);
  align-self: center;

  &:hover {
    filter: brightness(0.98);
  }

  &:active {
    filter: brightness(1);
  }
}

</style>