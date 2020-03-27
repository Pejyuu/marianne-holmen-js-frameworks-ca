<template>
  <div class="hello">
    <b-card :title="game.name" :img-src="game.background_image" img-alt="Image" img-top>
      <b-card-text>
        <strong>Released :  {{ game.released }} </strong><br>
        <small class="text-muted">Rating : {{ game.rating }} </small>
        <p v-html="game.description"></p>
      </b-card-text>
      <template v-slot:footer>
        <b-button block :href="game.website" variant="info">Go to Website</b-button><br>
      </template>
    </b-card>


  </div>


</template>


<script>

export default {
  name: 'Game',
  data () {
      return {
          game: ""
      }
  },
  mounted() {
      var url = "https://api.rawg.io/api/games/" + this.$route.params.id
      this.$http.get(url).then(result => {
          this.game = result.body
          console.log(this.game)
      }, error => {
          console.error(error);
      });
  }
}
</script>
