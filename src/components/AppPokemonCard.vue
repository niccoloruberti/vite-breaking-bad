<script>
import { store } from '../store';

export default {
    props: ['myCard'],
    store,
    computed: {
        backgroundCard() {
            for(let i=1; i <= 18; i++) {
                console.log(this.myCard.type1);
                console.log(store.card_colors[i].type);
                if (store.card_colors[i].type === this.myCard.type1) {
                    return `background-color: ${store.card_colors[i].color}`;
                }
            }
        }
    }
}
</script>

<template lang="">
    <div class="rounded card-container d-flex flex-column align-items-center py-3 my-3" :style="backgroundCard">
        <img :src="myCard.imageUrl" alt="">
        <div class="mt-2">{{ myCard.code}}</div>
        <h6>{{ myCard.name}}</h6>
        <div class="fst-italic">{{ myCard.type1}}</div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

    .card-container {


        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
</style>