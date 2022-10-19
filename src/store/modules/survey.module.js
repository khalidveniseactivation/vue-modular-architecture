export default {
  namespaced: true,
  getters: {
    getValidateAnswersModel(state) {
      return state.answersModel.map(q => {
        if (q.answerModel !== null && q.answer !== q.answerModel) {
          return false
        } else {
          if (q.answerModel !== null && q.answer === q.answerModel) {
            return true
          }
        }

        return null
      })
    }
  },
  state: () => ({
    isAllValide: false,
    questions: [
      {
        id: 1,
        question: "Question 1",
        answer: false
      },
      {
        id: 2,
        question: "Question 2",
        answer: true
      },
      {
        id: 3,
        question: "Question 3",
        answer: false
      }
    ],
    answersModel: []
  }),
  mutations: {
    SET_IS_ALL_VALIDE(state, isAllValide) {
      state.isAllValide = isAllValide
    },
    SET_CURRENT_INDEX(state, index) {
      state.currentIndex = index
    },
    SET_ANSWERS_MODEL(state, answersModel) {
      const checkIfExists = state.answersModel.findIndex(
        element => element.id === answersModel.id
      )
      if (checkIfExists < 1) state.answersModel.push(answersModel)
    }
  },
  actions: {}
}
