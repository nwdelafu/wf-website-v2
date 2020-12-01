import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentHomeView: "",
  },
  mutations: {
    setCurrentHomeView: (state, payload) => {
      state.currentHomeView = payload;
    },
  },
  actions: {},
  getters: {
    currentHomeView: (state) => state.currentHomeView,
  },
  modules: {},
});
