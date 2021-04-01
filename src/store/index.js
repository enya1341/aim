import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import test from "./test";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
        test
    },
    plugins: [createPersistedState({
      key: 'xddgooooood',
      paths: ['test'],
      storage: window.localStorage
    })]
  
})
