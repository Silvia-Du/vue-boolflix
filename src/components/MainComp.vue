<template>

  <main class="text-center py-5">

    <ContainerComp v-if="checkInput === '' " :cardContainer="popularMovie" :typeArray="typePopular"/>
      
    <h3 class="errorResearch mt-5" v-else-if="selectedFilms.length == 0 ">
    Errore di caricamento, la ricerca non ha prodotto risultati
    </h3>
      
    <div v-else>
      <ContainerComp :cardContainer="selectedFilms" :typeArray="typeFilm" v-if="onlyFilms"/>
      <ContainerComp :cardContainer="selectedSeries" :typeArray="typeSerie" v-if="onlySeries"/>
    </div>

  </main>
</template>

<script>

import ContainerComp from './ContainerComp.vue';

export default {
    name: "MainComp",
    props: {
        checkInput: String,
        onlyFilms: Boolean,
        onlySeries: Boolean,
        selectedFilms: Array,
        selectedSeries: Array,
        popularMovie: Array
    },
    components: { ContainerComp },

    data(){
      return{
        typePopular:['MostPopular'],
        typeFilm:['Film', 'movie'],
        typeSerie:['Serie', 'tv']
      }
    },


}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';



main{
  min-height: calc(100vh - 80px);
  background-color: $bgColor;
  color: white;
  
}

</style>