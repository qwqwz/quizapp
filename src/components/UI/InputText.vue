<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
export default {
  name: "InputDefault",
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

input {
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