import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      greetingVisible: true,
      mobileMenuVisible: false,
      theme: undefined
    }
  },
  mutations: {
    changeGreetingVisibility (state, payload) {
      state.app.greetingVisible = payload
    },
    changeMenuVisibility (state, payload) {
      state.app.mobileMenuVisible = payload
    },
    setTheme (state, theme) {
      state.app.theme = theme
      localStorage.theme = theme
    }
  },
  actions: {
    changeGreetingVisibility (context, payload) {
      context.commit('changeGreetingVisibility', payload)
    },
    changeMenuVisibility (context, payload) {
      context.commit('changeMenuVisibility', payload)
    },
    initTheme ({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (cachedTheme) {
        commit('setTheme', cachedTheme)
      } else if (userPrefersDark) {
        commit('setTheme', 'dark')
      } else {
        commit('setTheme', 'light')
      }
    },
    toggleTheme ({ commit }) {
      switch (localStorage.theme) {
        case 'light':
          commit('setTheme', 'dark')
          break
        default:
          commit('setTheme', 'light')
          break
      }
    }
  },
  getters: {
    greetingVisible: state => {
      return state.app.greetingVisible
    },
    menuVisible: state => {
      return state.app.mobileMenuVisible
    },
    getTheme: (state) => {
      return state.app.theme
    }
  },
  modules: {
  }
})
