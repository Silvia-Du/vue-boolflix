<template>
  <div id="app">
    
    <HeaderComp @getFilmToSearch ="getFilmToSearch"/>
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

    apiParams: {
      api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
      query: 'harry potter',
      language: 'it_IT'
    },

    filmsContainer: [],
  }
},

methods:{

  getData(){

    axios.get(this.apiUrl,{
      params: this.apiParams
    })
    .then(response=>{
      this.filmsContainer = response.data.results;
      console.log(this.filmsContainer);
    })
    .catch(error => {
      console.log(error);
    })

  },

  getFilmToSearch(receivedSTring){
    this.query = receivedSTring;
    console.log(this.query);
  }


},

mounted(){

  this.getData()

}


}
</script>

<style lang="scss">

@import './assets/style/general.scss'

</style>
