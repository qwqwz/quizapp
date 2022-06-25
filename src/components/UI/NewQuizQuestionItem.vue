<template>
  <div class="question-item">
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
        <button class="item-controls_item edit"><icon icon="heroicons-solid:pencil-alt"></icon></button>
        <button class="item-controls_item delete"><icon icon="heroicons-solid:trash"></icon></button>

      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";
import modalWindow from "./ModalWindow.vue";

export default {
  name: "NewQuizQuestionItem",
  components: {
    Icon, modalWindow
  },
  props: {
    question: Object,
    index: Number
  },

  data () {
    return {
      onModal: false,
    }
  },
  methods: {
    openModal() {
      this.onModal = true;
    },
    closeModal() {
      this.onModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>


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

</style>