<template>

  <div class="container-fluid d-flex flex-column pt-5 px-5">
    <h2 class="mb-5 align-self-baseline">{{typeArray[0]}}</h2>
    <div class="_row d-flex">
      <CardItem
      v-for="item in cardContainer" :key="item.id"
      :card ="item" :type="typeArray"
      @getCardInfo="getMoreInfo"/>
    </div>




  </div>

  
</template>

<script>

import CardItem from './CardItem.vue';

export default {
  name: 'MovieComp',
  props:{
    typeArray: Array,
    popularType: String,
    cardContainer: Array,
  },

  methods:{
    getMoreInfo(){

    }
  },

  components:{ CardItem }
}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';


._row{
  overflow-x: auto;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: $redColor; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $redColor; 
}


</style>