<template>
<div class="dropdown-menu" v-if="isActive === true"
>
<slot></slot>
</div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    isActive: Boolean
  },
  data () {
    return {
      closing: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.dropdown-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 112px;
  padding: 12px 0 12px;
  background-color: #375E75;
  position: absolute;
  border-radius: 12px 0px 12px 12px;
}

</style>