<template>
  <div class="question-item">
    <modal-window
      v-if="onModal"
      @closeModal="closeModal"
    >
      <template #title>Edit question</template>
      <template #default>
        <div class="newquestion-wrap">
          <div class="newquestion-name">
            <p class="newquestion-name_title"
            >Question name*</p>
            <InputText class="quiz_input"
                       v-model.trim="editQuestion.title"
            ></InputText>
          </div>
          <div class="newquestion-desc">
            <p class="newquestion-desc_title">Question description</p>
            <InputTextArea class="quiz_textarea"
                           v-model.trim="editQuestion.desc"
            ></InputTextArea>
          </div>
        </div>
        <div class="newquestion-answers-wrap">
          <p class="newquestion-answers_title">Answer options</p>
          <draggable
            animation="200"
            class="drag-list"
            :list="editQuestion.options"
            item-key="id"
            ghost-class="ghost"
            handle=".answer-item_drag"
          >
            <template #item=" { element, index }">
              <NewAnswerItem
                :option="element"
                :index="index"
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
          <p v-for="warn in editQuestionWarn">{{ warn }}</p>
        </div>

        <button class="newquestion_create" @click="saveQuestion">
          Save changes
        </button>
      </template>
    </modal-window>
    <div class="question-item-body">
      <div class="question-item-main">
        <div class="question-item_drag">
          <icon icon="heroicons-solid:menu"></icon>
        </div>
        <div class="question-item_title">
          <p>{{ index + 1 }}. {{ this.question.title }}</p>
        </div>
      </div>
      <div class="question-item-controls">
        <button class="item-controls_item edit"
                @click="openModal"
        >
          <icon icon="heroicons-solid:pencil-alt"></icon>
        </button>
        <button class="item-controls_item delete" @click="deleteQuestion">
          <icon icon="heroicons-solid:trash"></icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "./InputText.vue";
import InputTextArea from "./InputTextArea.vue";
import draggable from "vuedraggable";
import {Icon} from "@iconify/vue";
import modalWindow from "./ModalWindow.vue";
import NewAnswerItem from "./NewAnswerItem.vue";

export default {
  name: "NewQuizQuestionItem",
  components: {
    InputText, InputTextArea, draggable, Icon, modalWindow, NewAnswerItem
  },
  props: {
    question: Object,
    index: Number
  },

  data() {
    return {
      onModal: false,
      editQuestion: {
        title: '',
        desc: '',
        options: []
      },
      editQuestionWarn: []
    }
  },

  beforeMount() {
    this.editQuestion = {
      title: this.question.title,
      desc: this.question.desc,
      options: this.question.options
    }
  },
  methods: {
    openModal() {
      this.onModal = true;
    },
    closeModal() {
      this.onModal = false;
    },

    deleteAnswer(id) {
      this.editQuestion.options = this.editQuestion.options.filter(x => x.id !== id)
    },
    deleteQuestion() {
      this.$emit('deleteQuestion', this.question.id)
    },
    addAnswer() {
      if (this.editQuestion.options.length === 0) {
        return this.editQuestion.options.push({id: 1, title: '', right: false})
      }
      this.editQuestion.options.push({
        id: this.editQuestion.options.reduce((x, y) => x.id > y.id ? x : y).id + 1,
        title: '',
        right: false
      });
    },
    checkQuestionForm() {
      if (this.editQuestion.title && (this.editQuestion.options.filter(x => x.right === true)).length > 0) {
        this.editQuestionWarn = []
        return true;
      } else {
        this.editQuestionWarn = []
        if (!this.editQuestion.title) {
          this.editQuestionWarn.push('Come up with a question title')
        }
        if (this.editQuestion.options.length === 0) {
          this.editQuestionWarn.push('Create at least one answer')
        }
        if ((this.editQuestion.options.filter(x => x.right === true)).length === 0) {
          this.editQuestionWarn.push('Choose at least one correct answer')
        }
      }
    },
    saveQuestion() {
      this.editQuestion.options = this.editQuestion.options.filter(x => x.title.length > 0)

      if (this.checkQuestionForm()) {
        let type = 'AnswerInputRadio'

        if ((this.editQuestion.options.filter(x => x.right === true)).length > 1) {
          type = 'AnswerInputCheckbox'
        }

        this.question.title = this.editQuestion.title
        this.question.desc = this.editQuestion.desc
        this.question.options = this.editQuestion.options
        this.question.type = type
        this.closeModal()
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

.question-item {
  border: 2px solid var(--gray);
  color: var(--gray);
  border-radius: 6px;
  padding: 8px;

  &:hover {

    border: 2px solid var(--primary);

    &:hover .question-item-controls {
      visibility: visible;
    }

    &:hover .question-item_drag {
      color: var(--primary);
    }
  }

  .question-item-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;

    .question-item-main {
      display: flex;
      flex-direction: row;
      align-items: center;

      .question-item_drag {
        display: flex;
        justify-content: center;
        cursor: move;
        margin-right: 16px;
      }
    }


    .question-item-controls {
      display: flex;
      gap: 8px;
      visibility: hidden;

      .item-controls_item {
        color: var(--gray);
        border-radius: 6px;
        padding: 10px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }

      .edit {

        &:hover {
          border-radius: 6px;
          background-color: var(--primary-30);
          color: var(--primary);
          transition: 0.15s;
        }

      }

      .delete {
        &:hover {
          border-radius: 6px;
          background-color: var(--red-light);
          color: var(--red-default);
          transition: 0.15s;
        }
      }


    }
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

  .quiz_textarea {
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