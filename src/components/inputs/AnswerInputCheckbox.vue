<template>
  <label class="quiz-item" :class="isActive ? 'selected' : false" @change="isActive = !isActive">
    <input class="checkbox" type="checkbox" :value="question.title"/>
    <span class="icon"><icon icon="heroicons-solid:check"></icon></span>
    <span class="question-title"><slot></slot></span>
  </label>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "AnswerInputCheckbox",
  components: {Icon},
  props: {
    question: Object,
  },

  data () {
    return {
    isActive: false,
    }
  },
  watch: {
    isActive() {
      if (this.isActive) {
        this.$emit('addAnswer', this.question)
      } else {
        this.$emit('delAnswer', this.question)
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.radio:checked .quiz-item {
  outline: 2px solid var(--primary);
                 }

.quiz-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  outline: 1px solid var(--gray);
  border-radius: 6px;
  cursor: pointer;
}

.selected {
  outline: 2px solid #5EC5FF;
}

label {
  outline: 2px solid var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    border: 2px solid var(--gray);
    border-radius: 6px;

    svg {
      color: var(--primary);
      visibility: hidden;
    }
  }

  input {
    display: none;

    &:checked ~.icon  {
      border: 2px solid var(--primary);

      svg {
        visibility: visible;
      }

      label, .quiz-item {
        outline: 2px solid var(--primary);
      }
    }
  }
}

</style>