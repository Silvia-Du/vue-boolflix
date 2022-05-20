<template>
  <div class="film">
      <!-- <img :src="`${imgUrl}${card.backdrop_path}`" alt=""> -->
      <img class="img-fluid" :src="`${imgUrl}${card.poster_path}`" alt="">
      <!-- <h4>{{card.title}}</h4>
      <p>{{card.original_title}}</p>
      <p>{{card.original_language}}</p>
      <p>{{card.vote_average}}</p> -->
      <div class="info-box">
        
      </div>

  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: Object
  },

  data(){
    return{
      imgUrl: 'https://image.tmdb.org/t/p/w500'
    }
  }
}
</script>

<style lang="scss">

  .film{
    flex-basis: 230px;
    margin: 10px;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 10px 10px 15px black;
    transition: all 1s;
    &:hover{
      transform: scale(1.3);
    }
    &:Hover img{
      opacity: 0%;
    }

    img{
      transition: all 2s;
    }
  }


</style>