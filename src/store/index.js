import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentHomeView: "",
    onHome: true,
    homeViews: [
      { component: "BaseCard", tagWord: "Products" },
      { component: "FlaireCard", tagWord: "Apps" },
      { component: "WebQICard", tagWord: "Experiences" },
    ],
  },
  mutations: {
    setCurrentHomeView: (state, payload) => {
      state.currentHomeView = payload;
    },
    setOnHome: (state, payload) => {
      state.onHome = payload;
    },
  },
  actions: {},
  getters: {
    currentHomeView: (state) => state.currentHomeView,
    homeViews: (state) => state.homeViews,
    onHome: (state) => state.onHome,
  },
  modules: {},
});
