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
        <select class="form-select w-25"  v-model="store.searchType"  @change="$emit('typeChanged')">
            <option value="" default>Seleziona un tipo</option>
            <option v-for="elem in store.types" :value="elem">{{ elem }}</option>
        </select>
</template>

<style lang="scss">
    
</style>