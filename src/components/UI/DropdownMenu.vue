<template>
<div class="dropdown-menu"
>
<slot></slot>
</div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    isActive: Boolean
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
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 400px) {
    border-radius: 0px 12px 12px 12px;
  }
}

</style>