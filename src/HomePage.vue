<template>
  <div id="homepage">
    <h1>Games!</h1>
  <Games></Games>
  </div>
</template>

<script>

import Games from './components/Games.vue'

export default {
  name: 'HomePage',
  components: {
    Games
  }
}
</script>
