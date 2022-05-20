<template>
  <main>

    <div class="container d-flex flex-wrap debug">
      
      <CardItem 
      v-for="film in selectedFilms" :key="film.id"
      :filmToPrint ="film"/>
    </div>

  </main>
</template>

<script>
import CardItem from './CardItem.vue';
export default {
    name: "MainComp",
    props: {
        selectedFilms: Array
    },
    components: { CardItem },



    data(){
      return{

      }
    }
}
</script>

<style lang="scss">

main{
  min-height: calc(100vh - 80px);
  background-color: rgb(54, 50, 50);
  
}

</style>