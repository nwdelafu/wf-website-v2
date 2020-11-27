<template>
  <v-card
    class="pa-6"
    flat
    color="wfBorder"
    width="100%"
    height="100%"
  >
    <v-card
      class="rounded-xl py-10 px-16"
      flat
      color="wfBackground"
      height="100%"
      width="100%"
    >
      <navigation />
      <router-view/>
    </v-card>
  </v-card>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "BorderTemplate",
  components: {
    Navigation
  }
}
</script>

<style>

</style>