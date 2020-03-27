<template>
  <div class="container cards">
    <b-form-input v-model="search" placeholder="Search Games" class="my-3"></b-form-input>

    <div class="row">
        <div class="col-4" v-for="game in filteredGames" :key="game.id">
          <b-card :title="game.name" :img-src="game.background_image" img-alt="Image" img-top>
            <b-card-text>
              <strong>Released :  {{ game.released }} </strong><br>
              <small class="text-muted">Rating : {{ game.rating }} </small>
            </b-card-text>
            <template v-slot:footer>
              <b-button block :to="{ name: 'Game', params: { id: game.id } }" variant="info">View Game</b-button><br>

            </template>
          </b-card>
        </div>
  </div>
</div>



</template>


<script>
export default {
  name: 'Games',
  data () {
      return {
          games: "",
          search: ""
      }
  },
  mounted() {
      this.$http.get("https://api.rawg.io/api/games").then(result => {
          this.games = result.body.results;

      }, error => {
          console.error(error);
      });
  },
  computed: {
    filteredGames() {
      if(!this.search){
        return this.games
      }
      else {
        return this.games.filter(game => {
          return game.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
  }
}
</script>
