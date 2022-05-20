<template>
  <div class="_header d-flex align-items-center justify-content-between px-3">
    <img class="mt-2" src="../assets/img/logo.png" alt="logo">

    <div class="d-flex">

      <input 
      v-model="tipedText" @keyup.enter="startResearch"
      type="text" class="form-control me-2" placeholder="cerca un film">

      <button 
      @click="startResearch"
      type="button" class="btn btn-warning">Cerca
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data(){
    return{
      tipedText: ''
    }
  },


  methods: {

    startResearch(){
      this.$emit('getFilmToSearch', this.tipedText);
      this.tipedText = ''
    }
  }
}
</script>

<style lang="scss">

._header{
  height: 80px;
  background-color: black;
  img{
    width: 160px;
    justify-self: flex-start;
  }
  input{
    max-width: 250px;
  }
}

</style>