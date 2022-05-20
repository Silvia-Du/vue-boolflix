<template>
  <div id="app">
    
    <HeaderComp />
    <MainComp />

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
      query: 'harry potter'
    }
  }
},

methods:{

  getData(){

    axios.get(this.apiUrl,{
      params: this.apiParams
    })
    .then(response=>{
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })

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
