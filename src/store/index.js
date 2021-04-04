import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aimdatas: [],
    count:0
  },
  mutations: {
    aimMutation(state, aimdatabox) {
      state.aimdatas[state.count] = aimdatabox[0]
      state.count =+ 1
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'xddgooooood',
    paths: ['state'],
    storage: window.localStorage
  })]
  
})
