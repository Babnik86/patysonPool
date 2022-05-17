import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    setCurrentUser(state, user) {
      let fields = {};
      try {
        fields = JSON.parse(user.displayName)
      } catch (e) {
        console.error(e)
      }
      state.currentUser = { ...user, ...fields }
    },
  },
  actions: {},
  modules: {},
})
