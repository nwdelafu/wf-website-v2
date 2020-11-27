import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        wfBorder: "#EAEAEA",
        wfBackground: "#2D2D2D",
        wfWhite: "#ECECEC",
        wfDarkGray: "#AFAFAF",
        wfLighterGray: "#808080",
      },
    },
  },
});
