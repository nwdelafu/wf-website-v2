import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentHomeView: "",
    onContact: false,
    homeViews: [
      { component: "Base", tagWord: "Products" },
      { component: "Flaire", tagWord: "Apps" },
      { component: "WebQI", tagWord: "Experiences" },
      { component: "Contact", tagWord: "Contact" },
    ],
  },
  mutations: {
    setCurrentHomeView: (state, payload) => {
      state.currentHomeView = payload;
    },
    setOnContact: (state) => {
      state.onContact = !state.onContact;
    },
  },
  actions: {},
  getters: {
    currentHomeView: (state) => state.currentHomeView,
    homeViews: (state) => state.homeViews,
    onContact: (state) => state.onContact,
  },
  modules: {},
});
