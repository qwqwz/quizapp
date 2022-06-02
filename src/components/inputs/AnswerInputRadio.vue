<template>
  <label class="quiz-item" :class="select === this.question.title ? 'selected' : false">
    <input class="radio" name="radio" type="radio" v-bind:value="question.title" @click="selectAnswer"/>
    <span class="icon"><svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="42"/></svg></span>
    <span class="question-title"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: "AnswerInputRadio",
  props: {
    question: Object,
    select: String,
  },

  data () {
    return {
    isActive: this.select === this.question.title
    }
  },
  methods: {
    selectAnswer() {
      this.$emit('selectAnswer', this.question)
    },
  },
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
    border-radius: 24px;

    svg {
      fill: var(--primary);
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