<script>
export default {
    props: ['myCard'],
}
</script>

<template lang="">
    <div class="rounded card-container d-flex flex-column align-items-center py-3 my-3" :class="myCard.type1 == 'Grass' ? 'grass' : myCard.type1 == 'Fire' ? 'fire' : myCard.type1 == 'Water' ? 'water' : ''">
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

    .grass {
        background-color: $grass-color;
    }
    .fire {
        background-color: $fire-color;
    }
    .water {
        background-color: $water-color;
    }
</style>