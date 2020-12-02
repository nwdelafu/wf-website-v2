<template>
  <v-row>
    <v-col>
      <v-card 
        class="pt-16 pr-5"
        color="transparent"
        flat
      >
        <v-card-title class="wfBorder--text text-h1 font-weight-bold mb-n6 pb-0 mt-3">
          We
        </v-card-title>
        <v-card-title class="wfBorder--text text-h1 font-weight-bold mb-n6 pb-0">
          Build
        </v-card-title>
        <v-card-title class="wfBorder--text text-h1 font-weight-bold mb-n6 pb-0">
          Digital
        </v-card-title>
        <v-card-title class="wfBorder--text text-h1 font-weight-bold mb-n3 pb-2">
          {{ currentHomeView.tagWord }}
        </v-card-title>
        <v-card-title class="wfLighterGray--text text-h2 font-weight-bold pb-0">
          ®2020
        </v-card-title>
        <v-layout class="mr-16">
          <v-card-text class="text-end text-h5 mr-3">
            <span class="wfBorder--text font-weight-regular">BRANDING</span>
            <span class="wfDarkGray--text font-weight-regular">STRATEGY</span> 
            <br/>
            <span class="wfBorder--text font-weight-regular">UX + UI</span>
            <span class="wfDarkGray--text font-weight-regular">DEVELOPMENT</span>
          </v-card-text>
          <v-divider 
            color="#808080" 
            vertical
          />
        </v-layout>
      </v-card>
    </v-col>
    <v-col>
      <v-layout justify-center align-center>
        <v-card
          class="rounded-xl mt-10"
          color="wfBorder"
          width="430px"
          height="620px"
        >
        <!-- Contains Card Work -->
          <component :is="currentHomeView.component"/>
        </v-card>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Base from "@/components/homeCards/Base.vue";
import Flaire from "@/components/homeCards/Flaire.vue";
import WebQI from "@/components/homeCards/WebQI.vue";
import Contact from "@/components/homeCards/Contact.vue";

export default {
  components: {
    Base,
    Flaire,
    WebQI,
    Contact,
  },
  data () {
    return {
      homeCycle: null,
    }
  },
  mounted() {
    this.setCurrentHomeView(this.homeViews[0]);
    this.homeControl();
  },
  computed: {
    ...mapGetters([
      "currentHomeView",
      "homeViews",
    ]),
  },
  watch: {
    currentHomeView: {
      handler(newView, oldView) {
        console.log(newView.component)
        if (newView.component === "Contact") {
          clearInterval(this.homeCycle);
        }
      }
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentHomeView"
    ]),
    homeControl() {
      let i = 0;
      this.homeCycle = setInterval(() => { 
        if (i === 3) {
          i = 0;
        }
        this.setCurrentHomeView(this.homeViews[i]);
        i += 1;
        }, 10000);
    },
  },
  

}
</script>
