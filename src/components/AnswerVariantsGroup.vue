<template>
</template>

<script>
import answerInputRadio from "./inputs/AnswerInputRadio.vue";
import answerInputCheckbox from "./inputs/AnswerInputCheckbox.vue";

export default {
  name: "AnswerVariantsGroup",
  props: {type: String},
  components: {answerInputRadio, answerInputCheckbox}

}
</script>

<style scoped>

</style>