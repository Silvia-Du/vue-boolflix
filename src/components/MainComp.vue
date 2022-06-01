<template>

  <main class="text-center pb-5" :class="{'pt-5': checkInput !='' }">

    <div v-if="checkInput === '' " class="jumbotron transparency">
      <img class="" :src="`${imgUrl}${popularContainer[selectedFilm].backdrop_path}`" :alt="popularMovie[selectedFilm].title">
    </div>
    <div>

      </div>
      <ContainerComp v-if="checkInput === '' " :cardContainer="popularMovie" :popularType="'Most Popular'"/>

      
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
        selectedFilm: 0,
        typeFilm:['Film', 'movie'],
        typeSerie:['Serie', 'tv'],
        popularContainer: [],
        imgUrl: "https://image.tmdb.org/t/p/w500",

      }
    },

    watch:{
      popularMovie(){
        this.popularContainer = this.popularMovie;
        console.log(this.popularContainer[0].backdrop_path, '_____');

      }
    }


}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';



main{
  min-height: 100vh;
  background-color: $bgColor;
  color: white;

  .jumbotron{
    height: 70vh;
    &.transparency{
      mask-image: linear-gradient(black, transparent)
    }
    img{
      width: 100%;
    }
  }
  
}

</style>