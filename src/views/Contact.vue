<template>
  <border-template>
    <template v-slot:Content>
      <home-and-contact>
        <template v-slot:tagWord>
          Contact
        </template>
        <template v-slot:CardContent>
          <contact-card />
        </template>
      </home-and-contact>
    </template>
  </border-template>
</template>

<script>
import BorderTemplate from "@/components/BorderTemplate.vue";
import HomeAndContact from "@/components/HomeAndContact.vue"
import ContactCard from '@/components/HomeCards/ContactCard.vue';

export default {
  name: "Contact",
  components: {
    HomeAndContact,
    BorderTemplate,
    ContactCard,
  }

}
</script>
