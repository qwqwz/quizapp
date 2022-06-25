<template>
  <div class="modal-wrap"
       @mousedown="closing = $event.target === $el"
       @mouseup.self="closing && closeModal()"
  >

    <div class="modal-window"
    >
      <div class="modal-header">
        <div class="modal-header_title">
          <h2>
            <slot name="title"></slot>
          </h2>
        </div>
        <button class="modal-header_close"
                @click="closeModal"
        >
          <icon icon="heroicons-solid:x"></icon>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "ModalWindow",
  components: {Icon},
  data: () => {
    return {
      title: '',
      closing: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  }
}
</script>

<style lang="scss" scoped>

.modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 20%);
  z-index: 3;

  .modal-window {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    margin: 22px;
    max-width: 603px;
    width: 100%;
    background-color: var(--light);
    border-radius: 6px;
    padding: 22px;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;


      .modal-header_close {
        color: var(--text-gray);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        border-radius: 6px;
        transition: 0.15s;

        &:hover {
          background-color: var(--btn-bg-light);
          transition: 0.15s;
        }
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      margin: 44px 0 44px;
      gap: 22px;
    }

    .modal-footer {
      display: flex;
      justify-content: right;
      flex-wrap: wrap;
      margin-top: 22px;
      gap: 16px;
      align-items: center;
    }
  }
}



</style>