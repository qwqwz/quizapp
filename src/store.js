import { createStore } from "vuex"

const store = createStore({
  state() {
  return {
    quizes: [
      {id: 1, title: 'Quiz1', disc: 'Description', type: 'Default', questions: [
          {id: 1, title: 'Question1', disc: 'Question1 description', type:'AnswerInputCheckbox',
          options: [
            {id: 1, title: 'Seven', right: true},
            {id: 2, title: 'Seven2', right: false},
            {id: 3, title: 'Seven3', right: false},
            {id: 4, title: 'Seven4', right: false},
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