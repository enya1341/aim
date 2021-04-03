import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import test from "./test";
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
        test
    },
    plugins: [createPersistedState({
      key: 'xddgooooood',
      paths: ['state.aimdatas'],
      storage: window.localStorage
    })]
  
})
