<template>
  <div class="question-item">
    <div class="question-item-body">
      <div class="question-item-main">
        <icon class="question-item_drag" icon="heroicons-solid:menu"></icon>
      <div class="question-item_title">
        <p>1. How many cutlets Albert stole?</p>
      </div>
      </div>
      <div class="question-item_edit">
        <icon icon="heroicons-solid:pencil-alt"></icon>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "NewQuizQuestionItem",
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>

.question-item {
  border: 2px solid var(--gray);
  color: var(--gray);
  border-radius: 6px;
  padding: 16px;

  &:hover {

    border: 2px solid var(--primary);

    &:hover .question-item_edit {
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

    .question-item-main {
      display: flex;
      flex-direction: row;
      align-items: center;

      .question-item_drag {
        cursor: pointer;
        margin-right: 16px;
      }
    }


    .question-item_edit {
      position: relative;
      visibility: hidden;
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

</style>