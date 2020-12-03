<template>
  <border-template>
    <template v-slot:Content>
      <home-and-contact>
        <template v-slot:tagWord>
          {{ currentHomeView.tagWord }}
        </template>
        <template v-slot:CardContent>
          <component :is="currentHomeView.component" />
        </template>
      </home-and-contact>
    </template>
  </border-template>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BorderTemplate from "@/components/BorderTemplate.vue";
import HomeAndContact from "@/components/HomeAndContact.vue";
import BaseCard from "@/components/HomeCards/BaseCard.vue";
import FlaireCard from "@/components/HomeCards/FlaireCard.vue";
import WebQICard from "@/components/HomeCards/WebQICard.vue";

export default {
  components: {
    HomeAndContact,
    BorderTemplate,
    BaseCard,
    FlaireCard,
    WebQICard,
    HomeAndContact,
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
      "onHome"
    ]),
  },
  watch: {
    currentHomeView: {
      handler(newView) {
        if (newView.component === "Contact") {  
          clearInterval(this.homeCycle);
        }
      }
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentHomeView",
      "setOnHome",
    ]),
    homeControl() {
      let i = 0;
      this.homeCycle = setInterval(() => { 
        if (i === 3) {
          i = 0;
        }
        this.setCurrentHomeView(this.homeViews[i]);
        i += 1;
      }, 5000);
    },
    leaving () {
      this.setOnHome(false);
      console.log(this.onHome)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setOnHome(true);
    });
  },
  beforeRouteLeave (to, from, next) {
    this.setOnHome(false);
    next();
  }
}
</script>
