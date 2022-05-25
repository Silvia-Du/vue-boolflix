<template>
  <div class="_header d-flex align-items-center justify-content-between px-3">
    <div class="left-btn-box d-flex">

      <img @click="showType(true, true)" class="mt-2" src="../assets/img/logo.png" alt="logo">
      <button @click="showType(true, false)" type="button" class="btn btn-dark">Film</button>
      <button @click="showType(false, true)" type="button" class="btn btn-dark">Serie</button>
    </div>

    <div class="d-flex">

      <input 
      v-model="tipedText" @keyup.enter="startResearch"
      type="text" class="form-control me-2" placeholder="cerca un film">

      <button 
      @click="startResearch"
      type="button" class="btn-start btn-danger">Cerca
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data(){
    return{
      tipedText: '',
      showFilm: true,
      showSeries: true
    }
  },


  methods: {

    startResearch(){
      this.$emit('getTitleToSearch', this.tipedText);
      this.tipedText = ''
    },

    showType(isFilm, isTv){
      this.showFilm = isFilm;
      this.showSeries = isTv;
      this.$emit('getTypeResearch', this.showFilm, this.showSeries)
    }


  }
}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';


._header{
  height: 80px;
  width: 100%;
  // background-color: $bgColor;
  position: fixed;
  z-index: 999;
.left-btn-box{
  button{
    background-color: $bgColor;
    border: 0;
    margin-left: 20px;
    align-self: flex-end;
  }
  img{
    width: 180px;
    justify-self: flex-start;
  }
}

  input{
    max-width: 250px;
  }
  .btn-start{
    background-color: $redColor;
  }
}

</style>