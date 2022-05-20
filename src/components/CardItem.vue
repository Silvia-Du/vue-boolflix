<template>
  <div class="film">
    <div class="data-box">
      <h4>{{filmToPrint.title}}</h4>
      <p>{{filmToPrint.original_title}}</p>
      <p>{{filmToPrint.original_language}}</p>
      <p>{{filmToPrint.vote_average}}</p>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    filmToPrint: Object
  }
}
</script>

<style lang="scss">

  .film{
    flex-basis: 20%;
    min-height: 200px;
    padding: 15px;
    color: white;
    background-color: rgb(54, 50, 50);
    .data-box{
      background-color: #2e3a46;
      height: 100%;
      padding: 10px;
    }
  }


</style>