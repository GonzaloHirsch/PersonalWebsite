import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      greetingVisible: true
    }
  },
  mutations: {
    changeGreetingVisibility (state, payload) {
      state.app.greetingVisible = payload
    }
  },
  actions: {
    changeGreetingVisibility (context, payload) {
      context.commit('changeGreetingVisibility', payload)
    }
  },
  getters: {
    greetingVisible: state => {
      return state.app.greetingVisible
    }
  },
  modules: {
  }
})
