import {createStore} from "vuex"

const store = createStore({
  state() {
    return {
      quizes: [
        {
          id: 1,
          title: 'How good you know Albert?',
          desc: 'Description',
          type: 'Default',
          questions: [
            {
              id: 1,
              title: 'How many cutlets Albert stole?',
              desc: 'Albert was very fond of cutlets and took a piece for himself every chance he got. One evening my mother made cutlets for dinner. Albert could not resist and 30 minutes before supper he began to eat the cutlets.',
              type: 'AnswerInputCheckbox',
              options: [
                {id: 1, title: 'Seven efwfwf wefwefw fsdfsdfsd', right: true},
                {id: 2, title: 'Seven', right: false},
                {id: 3, title: 'Seven', right: false},
                {id: 4, title: 'Seven', right: false},
              ]
            },
            {
              id: 2, title: 'Question2', desc: 'Question2 description', type: 'AnswerInputRadio',
              options: [
                {id: 1, title: 'Seven', right: true},
                {id: 2, title: 'Seven2', right: true},
                {id: 3, title: 'Seven3', right: false},
                {id: 4, title: 'Seven4', right: false},
              ]
            },
            {
              id: 3, title: 'Question3', desc: 'Question3 description', type: 'AnswerInputCheckbox',
              options: [
                {id: 1, title: 'Seven', right: true},
                {id: 2, title: 'Seven', right: false},
                {id: 3, title: 'Seven', right: false},
                {id: 4, title: 'Seven', right: false},
              ]
            },
            {
              id: 4, title: 'Question4', desc: 'Question4 description', type: 'AnswerInputCheckbox',
              options: [
                {id: 1, title: 'Seven', right: true},
                {id: 2, title: 'Seven', right: false},
                {id: 3, title: 'Seven', right: false},
                {id: 4, title: 'Seven', right: false},
              ]
            }
          ]
        },
        {
          id: 2, title: 'You debil sovsem ili shto', desc: 'Description', type: 'Default', questions: []
        }
      ]
    }
  },
  mutations: {
    createQuiz(state, quiz) {
      let id = 1;
      if (state.quizes.length !== 0) {
        id = state.quizes.reduce((x, y) => x.id > y.id ? x : y).id + 1
      }

      state.quizes.push(
        {
          id: id,
          title: quiz.title,
          desc: quiz.desc,
          questions: quiz.questions
        }
      )
      console.log('Quiz Created')
    }
  }
})

export default store