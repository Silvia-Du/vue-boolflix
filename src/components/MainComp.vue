<template>
  <main>

    <div class="container d-flex flex-wrap pt-5">

      <div v-if="selectedFilms === []">
        <h3>Non ci sono risultati per la tua ricerca</h3>
      </div>
      
      
        <CardItem v-else
        v-for="film in selectedFilms" :key="film.id"
        :card ="film"/>
      
     


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
    },


}
</script>

<style lang="scss">

main{
  min-height: calc(100vh - 80px);
  background-color: rgb(37, 36, 36);
  
}

</style>