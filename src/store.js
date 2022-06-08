import { createStore } from "vuex"

const store = createStore({
  state() {
  return {
    quizes: [
      {id: 1, title: 'How good you know Albert?', disc: 'Description', type: 'Default', questions: [
          {id: 1, title: 'How many cutlets Albert stole?', disc: 'Albert was very fond of cutlets and took a piece for himself every chance he got. One evening my mother made cutlets for dinner. Albert could not resist and 30 minutes before supper he began to eat the cutlets.',
            type:'AnswerInputCheckbox',
          options: [
            {id: 1, title: 'Seven efwfwf wefwefw fsdfsdfsd', right: true},
            {id: 2, title: 'Seven', right: false},
            {id: 3, title: 'Seven', right: false},
            {id: 4, title: 'Seven', right: false},
          ]},
          {id: 2, title: 'Question2', disc: 'Question2 description', type:'AnswerInputCheckbox',
            options: [
              {id: 1, title: 'Seven', right: true},
              {id: 2, title: 'Seven2', right: false},
              {id: 3, title: 'Seven3', right: false},
              {id: 4, title: 'Seven4', right: false},
            ]},
          {id: 3, title: 'Question3', disc: 'Question3 description', type:'AnswerInputCheckbox',
            options: [
              {id: 1, title: 'Seven', right: true},
              {id: 2, title: 'Seven', right: false},
              {id: 3, title: 'Seven', right: false},
              {id: 4, title: 'Seven', right: false},
            ]},
          {id: 4, title: 'Question4', disc: 'Question4 description', type:'AnswerInputCheckbox',
            options: [
              {id: 1, title: 'Seven', right: true},
              {id: 2, title: 'Seven', right: false},
              {id: 3, title: 'Seven', right: false},
              {id: 4, title: 'Seven', right: false},
            ]}
        ]}
    ]
  }
  }
})

export default store