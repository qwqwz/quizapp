<template>
  <div class="quiz_item"
       @mouseover="upHere = true" @mouseleave="upHere = false"
       v-click-outside="closeDropdownMenu"

  >
    <div class="item-body">
      <p class="questions_count">{{ quiz.questions.length }} questions</p>
      <p class="item_title">{{ quiz.title }}</p>
    </div>
    <Transition>
      <div class="item-controls"
           v-show="upHere || isActive"
      >
        <div class="btn_edit-wrap">
          <button class="item_btn btn_edit"
                  @click="turnActive"
                  :class="isActive === true ? 'active' : false"
          >
            <Icon icon="heroicons-solid:dots-vertical"></Icon>
          </button>
          <Transition>
            <dropdown-menu class="myquizes-dropdown_menu"
                           v-if="isActive === true"
                           :isActive="isActive"
            >
              <a class="dropdown_item dropdown_item_edit" href="/edit">
                <div class="dropdown_item_body"
                >
                  <icon icon="heroicons-solid:pencil-alt"></icon>
                  Edit
                </div>
              </a>
              <a class="dropdown_item dropdown_item_delete" href="#delete">
                <div class="dropdown_item_body">
                  <icon icon="heroicons-solid:trash"></icon>
                  Delete
                </div>
              </a>
            </dropdown-menu>
          </Transition>
        </div>
<router-link to="/quizes" tag="button" class="item_btn btn_start">
          <icon icon="heroicons-solid:play"></icon>
          Start
        </router-link>
      </div>
    </Transition>

  </div>
</template>

<script>
import {Icon} from "@iconify/vue";
import DropdownMenu from "./DropdownMenu.vue";

export default {
  name: "QuizItem",
  components: {DropdownMenu, Icon},
  props: {
    quiz: Object
  },

  data() {
    return {
      isActive: false,
      upHere: false,
    }
  },
  methods: {
    closeDropdownMenu() {
      this.isActive = false;
    },
    turnActive() {
      this.isActive = !this.isActive
    },
  }
}
</script>

<style lang="scss" scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.item-wrap {

}

.quiz_item {
  flex-direction: column;
  justify-content: space-between;
  background: var(--text-gray);
  border-radius: 12px;
  display: flex;
  width: 100%;
  max-width: 493px;
  max-height: 220px;
  height: 37vw;
  padding: 24px;

  p {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.05;
    color: white;
  }

  @media (max-width: 550px) {
    min-height: 220px;

    p {
      font-size: 1.2rem;
      line-height: 1.06;
    }
  }

  .item-body {

    .questions_count {
      color: var(--gray);
      font-size: 1rem;
    }

    .item_title {
      margin: 16px 0 16px;
    }

  }

  .item-controls {
    position: relative;
    display: flex;
    transition: 0.1s ease-out;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;


    .item_btn {
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 6px;
      font-weight: 500;

      &:hover {
        filter: brightness(1.03);
      }

      &:active {
        filter: none;
      }
    }

    .btn_edit-wrap {

      .active {
        background-color: #375E75;
        border-radius: 6px 6px 0px 0px;
      }

      .btn_edit {
        padding: 14px 14px;
        color: #688FA6;

        &:hover {
          background-color: #375E75;
        }

      }

      .myquizes-dropdown_menu {
        top: 48px;
        right: 134px;

        .dropdown_item {
          padding: 10px 24px;
          align-items: center;
        }

        .dropdown_item_body {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dropdown_item_edit {
          color: white;

          &:hover {
            background-color: #3A6680;
          }
        }

        .dropdown_item_delete {


          color: #EB5757;

          &:hover {
            background-color: #665C6D;
          }
        }

        @media (max-width: 400px) {
          right: -28px;
        }
      }
    }

    .btn_start {
      padding: 10px 24px;
      background: var(--primary);
      color: white;
    }
  }


}

</style>