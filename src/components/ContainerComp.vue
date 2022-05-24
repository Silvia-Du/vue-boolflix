<template>

  <div class="container d-flex flex-wrap pt-5 debug">
    <h2>{{typeString}}</h2>
    <CardItem
    v-for="item in cardContainer" :key="item.id"
    :card ="item" :type="'movie'"/>

  </div>

  
</template>

<script>

import CardItem from './CardItem.vue';

export default {
  name: 'MovieComp',
  props:{
    typeString: String,
    cardContainer: Array,
    
  },

  components:{ CardItem }
}
</script>

<style lang="scss">

</style>