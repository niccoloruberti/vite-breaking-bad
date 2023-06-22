<script>
export default {
    
}
</script>

<template lang="">
    <div class="container pt-5">
        <div class="row">
            <div class="col-12">
                <div class="content d-flex">
                    <div class="big-circle mx-2"></div>
                    <div class="little-circle mx-2 red"></div>
                    <div class="little-circle mx-2 yellow"></div>
                    <div class="little-circle mx-2 green"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .big-circle {
        height: 50px;
        width: 50px;
        border: 3px solid white;
        border-radius: 50%;
        background: rgb(255,255,255);
        background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(24,19,194,1) 100%);;
    }
    .little-circle {
        height: 30px;
        width: 30px;
        border: 2px solid white;
        border-radius: 50%;
    }
    .red {
        background: rgb(255,255,255);
        background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(221,14,0,1) 68%);
    }
    .yellow {
        background: rgb(255,255,255);
        background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(245,242,23,1) 68%);
    }
    .green {
        background: rgb(255,255,255);
        background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(11,175,17,1) 68%);
    }
    
</style>