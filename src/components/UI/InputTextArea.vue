<template>
<textarea :value="modelValue" @input="updateInput" class="textarea"></textarea>
</template>

<script>
export default {
  name: "InputTextArea",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

textarea {
  display: flex;
  padding: 16px;
  border: 2px solid #B4CDDB;
  border-radius: 6px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: var(--text-gray);
}

</style>