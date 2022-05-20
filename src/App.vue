<template>
  <div id="app">
    
    <HeaderComp @getFilmToSearch ="getData"/>
    <MainComp :selectedFilms ="filmsContainer"/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';

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
    isLoading: false
  }
},

methods:{

  getData(receivedSTring){

    this.query = receivedSTring;

    axios.get(this.apiUrl,{
      params: {
        api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
        query: receivedSTring,
        language: 'it_IT'
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

@import './assets/style/general.scss'

</style>
