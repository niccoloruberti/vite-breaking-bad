<script>
import { store } from '../store';
import axios from 'axios';


export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        filterPokemon(type) {
        if (type !== '') {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[Type1]=${type}&per=1048`).then((response) => {
        this.store.pokemons = response.data.docs;
        })
        }
        else {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons`).then((response) => {
        this.store.pokemons = response.data.docs;
        })
        }
    }
    },
}
</script>

<template lang="">
        <select class="form-select w-25"  v-model="store.searchType" @change="filterPokemon(store.searchType)">
            <option value="" default>Seleziona un tipo</option>
            <option v-for="elem in store.types" :value="elem">{{ elem }}</option>
        </select>
</template>

<style lang="scss">
    
</style>