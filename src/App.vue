<script>
import AppHeader from './components/AppHeader.vue';
import AppPokemonList from './components/AppPokemonList.vue';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import { store } from './store.js';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppPokemonList,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=12').then((response) => {
      this.store.pokemons = response.data.docs;
    })
  },
}
</script>

<template lang="">

<div class="background-color">
  <AppHeader />
  <AppPokemonList />
</div>

</template>

<style lang="scss">
@use './styles/generals.scss';

.background-color {
  background-color: rgb(183, 27, 27);
  min-height: 100vh;
  height: 100%;
}

</style>