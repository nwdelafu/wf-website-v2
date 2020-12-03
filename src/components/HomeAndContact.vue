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
          <slot name="tagWord"/>
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
          <slot name="CardContent"/>
        </v-card>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomeAndContact",
  }
</script>