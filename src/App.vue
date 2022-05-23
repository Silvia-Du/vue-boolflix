<template>
  <div id="app">
    
    <HeaderComp @getFilmToSearch ="getData" @getTypeResearch="getTypeResearch"/>
    <MainComp :selectedFilms ="filmsContainer" :checkInput="checkSting"/>

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
    apiUrl: 'https://api.themoviedb.org/3/search/movie/?',
    filmsContainer: [],
    checkSting: '',
    typeOfResearch:'',
  }
},

methods:{

  
  getTypeResearch(stringOfType){
    this.typeOfResearch = stringOfType;
    console.log(this.typeOfResearch);
  },

  getData(receivedSTring){
    this.checkSting = receivedSTring;
    axios.get(this.apiUrl,{
      params: {
        api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
        query: receivedSTring,
        language: 'it-IT'
      } 
    })
    .then(response=>{
      this.filmsContainer = response.data.results;
      console.log(this.filmsContainer);
      this.isLoading = true;
    })
    .catch(error => {
      console.log(error);
    })

  },




},


}
</script>

<style lang="scss">

@import './assets/style/general.scss';

</style>
