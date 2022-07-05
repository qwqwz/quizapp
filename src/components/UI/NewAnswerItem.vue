<template>
  <div class="answer-item" :class="option.right === true ? 'checked' : false">
    <div class="answer-item-body">
      <div class="answer-item-main">
        <div class="answer-item_drag">
          <icon icon="heroicons-solid:menu"></icon>
        </div>
          <input type="text" placeholder="Type answer" v-model.trim="option.title">
      </div>
      <div class="answer-item_edit-wrap">
        <p>Correct answer</p>
        <div class="answer-item_delete" @click="deleteAnswer">
          <icon icon="heroicons-solid:trash"></icon>
        </div>
        <label class="answer-item_edit">
          <input v-model.trim="option.right" type="checkbox" class="checkbox">
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

.answer-item {
  border: 2px solid var(--gray);
  color: var(--gray);
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 8px;


  &:hover {

    border: 2px solid var(--gray-darken);

    &:hover .answer-item_drag {
      color: var(--gray-darken);
    }

    &:hover .answer-item_edit-wrap .answer-item_delete {
      visibility: visible;
    }
  }

  .answer-item-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;

    .answer-item-main {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 65%;

      .answer-item_drag {
        display: flex;
        justify-content: center;
        cursor: move;
        margin-right: 16px;
      }
    }


    .answer-item_edit-wrap {

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

      .answer-item_edit {
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
      .answer-item_delete {
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
    outline-color: var(--green-default) ;
  }

  border: 2px solid var(--green-default) !important;

  .answer-item_drag {
    color: var(--green-default);
  }


  .answer-item_edit {
    border: 2px solid var(--green-default) !important;
  }

  .answer-item_edit-wrap .answer-item_delete {
    display: none !important;
  }

  &:hover {
    border: 2px solid var(--green-default) !important;


    &:hover .answer-item_drag {
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