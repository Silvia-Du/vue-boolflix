<template>
  <div id="app">
    
    <HeaderComp @getTitleToSearch ="getData" @getTypeResearch="getTypeResearch"/>
    <MainComp :selectedFilms ="movieContainer" :selectedSeries="seriesContainer" :checkInput="checkSting" :resarchType="typeOfResearch"/>

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
    typeOfResearch:'',
    apiObject: {
        api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
        query: '',
        language: 'it-IT'
      } 
  }
},

methods:{

  
  getTypeResearch(stringOfType){
    this.typeOfResearch = stringOfType;
    console.log(this.typeOfResearch);
  },

  getData(receivedSTring){
    this.checkSting = receivedSTring;
    this.apiObject.query = receivedSTring;
    this.researchType.forEach(type =>{
      
      axios.get(`https://api.themoviedb.org/3/search/${type}/?`,{
      params: this.apiObject
      })
      .then(response=>{
        console.log(response.data.results);
        if(type === 'movie'){
          this.movieContainer = response.data.results;
          console.log(this.movieContainer);
        }

        if(type === 'tv'){
          this.seriesContainer = response.data.results;
          console.log(this.seriesContainer);
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
