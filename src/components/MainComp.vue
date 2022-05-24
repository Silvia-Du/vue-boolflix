<template>
  <main>

    <div class="container d-flex flex-wrap pt-5 justify-content-center">

      <div class="emptyResearch mt-5" v-if="checkInput == '' ">
        <h3>Che cosa vuoi vedere?</h3>
      </div>
      <div class="errorResearch mt-5" v-else-if="selectedFilms.length == 0 ">
        <h3>Errore di caricamento, la ricerca non ha prodotto risultati</h3>
      </div>
      <div v-else>
        <ContainerComp :cardContainer="selectedFilms" :typeString="'Film'"/>
        <ContainerComp :cardContainer="selectedSeries" :typeString="'Serie'"/>
      </div>
    </div>

  </main>
</template>

<script>

import ContainerComp from './ContainerComp.vue';

export default {
    name: "MainComp",
    props: {
        checkInput: String,
        resarchType: String,
        selectedFilms: Array,
        selectedSeries: Array
    },
    components: { ContainerComp },

    data(){
      return{

      }
    },


}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';



main{
  min-height: calc(100vh - 80px);
  background-color: $bgColor;

  .emptyResearch, .errorResearch{
    color: white;
  }
  
}

</style>