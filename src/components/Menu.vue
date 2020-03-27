<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="bg-dark">
    <b-navbar-brand href="#">MHolmen</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to=" { name: 'Home' }">Home</b-nav-item>
        <b-nav-item :to=" { name: 'Contact' }">Contact</b-nav-item>

      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" disabled>Making Shiny Things with Vue</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
export default {
  name: 'Menu',
  components: {
  }
}
</script>
