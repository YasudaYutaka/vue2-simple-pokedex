<template>
  <v-container class="my-md-10 mt-xs-5">

    <v-row class="mb-10" wrap row justify-space-around>
      <v-col cols="4" sm="2" class="text-center" v-for="region in pokemonRegions" :key="region">
        <v-btn small color="blue" dark @click="regionSort(region)">{{firstLetterUpperCase(region)}}</v-btn>
      </v-col>
    </v-row>

    <v-card class="px-3">
      <v-row row wrap justify-center>
          <v-col cols="6" md="3" v-for="(pokemon, index) in pokemonList.results" :key="index">
            <v-img :src='`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1+pokemonNumber}.png`' class="ma-auto" max-width="150"/>
            <div class="text-sm-caption text-lg-h5 text-center">{{firstLetterUpperCase(pokemon.name)}}</div>
          </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pokemonList: [],
      pokemonNumber: 0,
      pokemonRegions: ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar'],
    };
  },
  created() {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.pokemonList = json;
    //   });
    this.regionSort('kanto');
  },
  methods: {
    regionSort(region) {
      switch(region) {
        case 'kanto':
          this.fetchPokemon(151, 0);
          this.pokemonNumber = 0;
          break;
        case 'johto':
          this.fetchPokemon(100, 151);
          this.pokemonNumber = 151;
          break;
        case 'hoenn':
          this.fetchPokemon(135, 251);
          this.pokemonNumber = 251;
          break;    
        case 'sinnoh':
          this.fetchPokemon(107, 386);
          this.pokemonNumber = 386;
          break;
        case 'unova':
          this.fetchPokemon(156, 493);
          this.pokemonNumber = 493;
          break;
        case 'kalos':
          this.fetchPokemon(72, 649);
          this.pokemonNumber = 649;
          break;
        case 'alola':
          this.fetchPokemon(88, 721);
          this.pokemonNumber = 721;
          break;
        case 'galar':
          this.fetchPokemon(89, 809);
          this.pokemonNumber = 809;
          break;      
      }
    },
    fetchPokemon(limit, offset) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then((json) => {
          this.pokemonList = json;
        });
    },
    firstLetterUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style scoped></style>
