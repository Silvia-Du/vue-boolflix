<template>
  <div id="app">
    
    <HeaderComp @getTitleToSearch ="getData" @getTypeResearch="getTypeResearch"/>
    <MainComp :selectedFilms ="movieContainer" :selectedSeries="seriesContainer" :checkInput="checkSting" :onlyFilms="showFilms" :onlySeries="showSeries"/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
// import FlagIcon from 'vue-flag-icon'
// Vue.use(FlagIcon);

import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
},

data(){
  return{
    movieContainer: [],
    seriesContainer: [],
    researchType:['movie', 'tv'],
    checkSting: '',
    showFilms: true,
    showSeries:true,
    apiObject: {
        api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
        query: '',
        language: 'it-IT'
      } 
  }
},

methods:{

  
  getTypeResearch(onlyFilm, onlySeries){
    this.showFilms = onlyFilm;
    this.showSeries= onlySeries;
  },

  getData(receivedSTring){
    this.checkSting = receivedSTring;
    this.apiObject.query = receivedSTring;
    
    this.researchType.forEach(type =>{
      
      axios.get(`https://api.themoviedb.org/3/search/${type}/?`,{
      params: this.apiObject
      })
      .then(response=>{
        if(type === 'movie'){
          this.movieContainer = response.data.results;
        }

        if(type === 'tv'){
          this.seriesContainer = response.data.results;
        }
       
      })
      .catch(error => {
        console.log(error);
      })

    }) 
    

    
   

  },




},


}
</script>

<style lang="scss">

@import './assets/style/general.scss';

</style>
