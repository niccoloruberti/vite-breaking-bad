<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container bg-secondary-subtle rounded d-flex mt-5">
        <div class="container bg-secondary m-2">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-2" v-for="pokemon in store.pokemons" :key="pokemon.id">
                    <div class="content" :myCard="pokemon">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>