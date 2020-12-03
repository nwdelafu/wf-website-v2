<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import BorderTemplate from './components/BorderTemplate.vue';

export default {
  name: 'App',
  components: {
    BorderTemplate,
  },
};
</script>
