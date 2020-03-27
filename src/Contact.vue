<template>
  <div id="contact">
  <h1>Contact Us</h1>
  <ContactForm></ContactForm>
  </div>
</template>

<script>


import ContactForm from './components/ContactForm.vue'
export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>
