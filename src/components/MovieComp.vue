<template>

  <div class="container d-flex flex-wrap pt-5">
    
    <CardItem
    v-for="film in cardContainer" :key="film.id"
    :filmItem ="film" :type="'movie'"/>

  </div>

  
</template>

<script>

import CardItem from './CardItem.vue';

export default {
  name: 'MovieComp',
  props:{
    cardContainer: Array
  },

  components:{ CardItem }
}
</script>

<style lang="scss">

</style>