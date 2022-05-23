<template>

   <div class="container d-flex flex-wrap pt-5">
    
    <CardItem :v-for="serie in seriesContainer" :key="serie.id" :serieItem="serie"/>

  </div>

</template>

<script>
import CardItem from './CardItem.vue';
export default {
    name: "SeriesComp",
    components: { CardItem },

    props:{ seriesContainer : Array}
}
</script>

<style>

</style>