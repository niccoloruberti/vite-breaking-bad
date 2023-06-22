<script>
import { store } from '../store';
import AppPokemonCard from './AppPokemonCard.vue';

export default {
    components: {
        AppPokemonCard
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container bg-secondary-subtle rounded d-flex mt-5">
        <div class="container bg-secondary m-4">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-2" v-for="pokemon in store.pokemons" :key="pokemon.id">
                    <div class="content">
                        <AppPokemonCard   :myCard="pokemon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>