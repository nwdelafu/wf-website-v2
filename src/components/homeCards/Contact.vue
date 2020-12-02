<template>
  <v-container 
    class="mt-3 px-10"
    fill-height 
    justify-start
  >
    <v-col>
      <!-- Signin Title -->
      <v-layout class="mb-10" align-center>
        <span class="text-h6 wfLighterGray--text">BECOME A CLIENT</span>
      </v-layout>
      <!-- Signin Form -->
      <v-form 
        v-model="isFormValid"
        lazy-validation
        ref="form"
        @submit.prevent="handleMessage"
      >
        <v-text-field 
          v-model="name"
          :rules="nameRules"
          label="Name*"
          type="text"
          required
        ></v-text-field>
        <v-text-field 
          v-model="email"
          :rules="emailRules"
          label="Email*"
          type="text"
          required
        ></v-text-field>
        <v-text-field 
          v-model="company"
          label="Company"
          required
        ></v-text-field>
        <v-textarea
          class="mt-13"
          label="Message*"
          :rules="messageRules"
        >

        </v-textarea>
        <v-btn
          color="wfRed"
          type="submit"
          :disabled="!isFormValid"
        >Send</v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: "",
      isFormValid: true,
      nameRules: [
        name => !!name || "Name is required",
      ],
      emailRules: [
        email => !!email || "Email is required",
        email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Email must be valid"
      ],
      messageRules: [
        message => !!message || "Message is required",
      ]
    }
  },
  methods: {
    handleMessage() {
      if(this.$refs.form.validate()) {

      };
    }
  }
}
</script>