import Vue from "vue"
import Vuex from "vuex"
import Survey from "./modules/survey.module"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    survey: Survey
  }
})
