<template>
  <v-card
    class="pa-6 rounded-0"
    flat
    :color="onHome ? borderColor : 'wfBorder'"
    width="100%"
    height="100%"
  >
    <v-card
      class="rounded-xl py-10 px-16"
      flat
      :color="onHome ? backgroundColor : 'wfBackground'"
      height="100%"
      width="100%"
    >
      <navigation />
      <slot name="Content"/>
    </v-card>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import Navigation from "@/components/Navigation.vue";

export default {
  name: "BorderTemplate",
  data() {
    return {
      backgroundColor: this.$vuetify.theme.themes.light.wfBackground,
      borderColor: this.$vuetify.theme.themes.light.wfBorder,
    }
  },
  components: {
    Navigation,
  },
  computed: {
    ...mapGetters([
      "currentHomeView",
      "onHome"
    ]),
  },
  watch: {
    currentHomeView: {
      handler(newView) {
        if (newView.component === "FlaireCard") {
          this.backgroundColor = this.$vuetify.theme.themes.light.flaireBackground
          this.borderColor = this.$vuetify.theme.themes.light.flaireBorder
        } else if (newView.component === "WebQICard") {
          this.backgroundColor = this.$vuetify.theme.themes.light.webQIBackground
          this.borderColor = this.$vuetify.theme.themes.light.webQIBorder
        } else {
          this.backgroundColor = this.$vuetify.theme.themes.light.wfBackground
          this.borderColor = this.$vuetify.theme.themes.light.wfBorder
        }
      }
    }
  }
}
</script>

<style>

</style>