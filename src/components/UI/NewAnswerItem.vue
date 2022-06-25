<template>
  <div class="question-item" :class="option.right === true ? 'checked' : false">
    <div class="question-item-body">
      <div class="question-item-main">
        <div class="question-item_drag">
          <icon icon="heroicons-solid:menu"></icon>
        </div>
          <input type="text" placeholder="Type answer" v-model="option.title" @input="updateTitle">
      </div>
      <div class="question-item_edit-wrap">
        <p>Correct answer</p>
        <div class="question-item_delete" @click="deleteAnswer">
          <icon icon="heroicons-solid:trash"></icon>
        </div>
        <label class="question-item_edit">
          <input v-model="option.right" type="checkbox" class="checkbox">
          <icon icon="heroicons-solid:check"></icon>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "NewAnswerItem",
  components: {Icon},
  props: {
    option: Object,
    index: Number
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    updateTitle(event) {
      this.$emit('updateTitle', event.target.value, this.index)
    },
    deleteAnswer() {
      this.$emit('deleteAnswer', this.option.id)
    }
  }
}
</script>

<style lang="scss" scoped>

input[type="checkbox"] {
  display: none;
}


input[type="text"] {
  border: 2px none;
  width: 100%;
  display: flex;
  padding: 6px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: var(--text-gray);
  outline-color: var(--gray-darken);

  &::placeholder {
    color: var(--gray);
  }

  &:focus-visible {
    border: none;
  }

  &:active {
    border: none;
  }
}

.question-item {
  border: 2px solid var(--gray);
  color: var(--gray);
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 8px;


  &:hover {

    border: 2px solid var(--gray-darken);

    &:hover .question-item_drag {
      color: var(--gray-darken);
    }

    &:hover .question-item_edit-wrap .question-item_delete {
      visibility: visible;
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
      width: 65%;

      .question-item_drag {
        display: flex;
        justify-content: center;
        cursor: move;
        margin-right: 16px;
      }
    }


    .question-item_edit-wrap {

      display: flex;
      align-items: center;
      gap: 8px;
      text-align: right;

      p {
        display: none;
        pointer-events: none;
        user-select: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: var(--green-default);
      }

      .question-item_edit {
        border: 2px solid var(--gray);
        color: var(--green-default);
        border-radius: 8px;
        padding: 4px;
        display: flex;
        justify-content: center;
        cursor: pointer;

        svg {
          visibility: hidden;
        }

        &:hover {
          border: 2px solid var(--gray-darken);
          transition: 0.15s;
        }
      }
      .question-item_delete {
        color: var(--red-default);
        border-radius: 8px;
        padding: 6px;
        display: flex;
        visibility: hidden;
        justify-content: center;
        cursor: pointer;

        svg {
        }

        &:hover {
          background-color: var(--red-light);
          transition: 0.15s;
        }
      }
    }
  }
}

.checked {


  input[type="text"] {
    outline-color: var(--green-default);
  }

  border: 2px solid var(--green-default);

  .question-item_drag {
    color: var(--green-default);
  }


  .question-item_edit {
    border: 2px solid var(--green-default) !important;
  }

  .question-item_edit-wrap .question-item_delete {
    display: none !important;
  }

  &:hover {
    border: 2px solid var(--green-default);


    &:hover .question-item_drag {
      color: var(--green-default);
    }
  }

  svg {
    visibility: visible !important;
  }
  p {
    display: inline !important;
  }
}
</style>