import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// var Base = { title: "Base", component: "Base" };
// var Flaire = { title: "Flaire", component: "Flaire" };
// var WebIQ = { title: "WebIQ", component: "WebIQ" };

export default new Vuex.Store({
  state: {
    currentContent: "Contact",
    // dynamicHomeContents: [Base, Flaire, WebIQ],
  },
  // mutations: {
  //   cycleContent() {
  //     // Cycle through components for the home
  //     this.state.currentContent = this.state.dynamicHomeContents.Flaire;
  //   },
  // },
  muations: {
    setCurrentContent: (state, payload) => {
      state.currentContent = payload;
    },
  },
  actions: {
    currentContentControl() {
      if (currentContent !== "Contact") {
      }
    },
  },
  modules: {},
});
