<template>

  <main class="text-center pb-5" :class="{'pt-5': checkInput !='' }">

    <div v-if="checkInput === '' " class="jumbotron transparency position-relative" @mouseover="hover= true" @mouseleave="hover= false">
      <h2 class="title-film-j position-absolute">{{popularContainer[selectedFilm].title}}</h2>
      <img class="" :src="`${imgUrl}${popularContainer[selectedFilm].backdrop_path}`" :alt="popularMovie[selectedFilm].title">
    </div>
    
    <ContainerComp v-if="checkInput === '' " :cardContainer="popularMovie" :popularType="'Most Popular'"/>

      
    <h3 class="error-research mt-5" v-else-if="selectedFilms.length == 0 ">
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
        hover: false,
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
    },

    methods:{

      switchDown(){
        this.selectedFilm ++;
        if(this.activeThumb > this.slides.length -1){
            this.activeThumb = 0;
        }
      }
    },

    mounted(){
      setInterval(()=> {
        if(!this.hover){
          this.switchDown();  
        }      
      }, 3000);
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
    height: 75vh;
    &.transparency{
      mask-image: linear-gradient(black, transparent)
    }
    img{
      width: 100%;
    }

    .title-film-j{
      top: 90px;
      right: 30px;
      z-index: 880;
    }
  }
  
  
}

</style>