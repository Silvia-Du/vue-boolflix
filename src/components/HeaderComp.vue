<template>
  <div class="_header d-flex align-items-center justify-content-between px-3">
    <div class="left-btn-box d-flex">

      <img class="mt-2" src="../assets/img/logo.png" alt="logo">
      <button @click="$emit('getTypeResearch', 'movie')" type="button" class="btn btn-dark">Film</button>
      <button @click="$emit('getTypeResearch', 'tv')" type="button" class="btn btn-dark">Serie</button>
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
    }
  },


  methods: {

    startResearch(){
      this.$emit('getTitleToSearch', this.tipedText);
      this.tipedText = ''
    },

  }
}
</script>

<style lang="scss">
@import '../assets/style/vars.scss';


._header{
  height: 80px;
  background-color: $bgColor;
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