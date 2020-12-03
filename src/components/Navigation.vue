<template>
  <div>
    <!-- Horizontal Navbar -->
    <v-app-bar  
      flat
      color="transparent"
      dark
      width="700px"
    >
      <!-- Navigation icon dot -->
      <img class="mr-2 mt-1" src="@/assets/images/wf-nav-circle.png">
      <!-- App Title -->
      <v-toolbar-title
        class="wfWhite--text mr-10"
      >
        <router-link
        to="/" 
        tag="span"
        style="cursor: pointer"
        >
          <h1 class="text-h4 font-weight-bold">West&Faring.</h1>
        </router-link>
      </v-toolbar-title>
      <!-- Horizontal Navbar Links -->
      <v-toolbar-items>
        <v-btn 
          class="wfDarkGray--text no-background-hover text-h6 font-weight-light"
          :ripple="false"
          text
          to="/work"
          
        >
          <span>Work</span>
        </v-btn>
        <v-btn 
          class="wfDarkGray--text no-background-hover text-h6 font-weight-light"
          :ripple="false"
          text
          to="/process"
        >
          <span>Process</span>
        </v-btn>
        <v-btn 
          class="wfDarkGray--text no-background-hover text-h6 font-weight-light"
          :ripple="false"
          text
          to="/contact"
        >
          <span>Contact</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <v-divider
      class="ml-8"
      color="#AFAFAF"
      width="575px" 
    />
  </div>
</template>

<script>

export default {
  name: "Navigation",
}
</script>

<style lang="scss">
.no-background-hover::before {
   background-color: transparent !important;
}
</style>