<template>

  <div class="film">

      <img class="img-fluid" :src="`${imgUrl}${card.poster_path}`" alt="card.title">
      
      <!-- layover -->
      <div class="layover text-center d-flex flex-column justify-content-center align-items-center">
        <p class="title">Title: {{card.title}}</p>
        <!-- <p v-if="card.original_language == 'en'">Original title:{{card.original_title}}</p> -->
        <span v-if="card.original_language == 'en'">lingua originale :<flag iso="gb"/></span>
        <span v-else>lingua originale :<flag :iso="card.original_language"/></span>
        <p class=""><i class="fa-solid fa-star"></i>{{card.vote_average}}</p>
        <button 
        @click="showInfo = !showInfo"
        type="button" class="btn btn-danger">More Info</button>
      </div>

      <!-- box al click -->
       <!-- <div v-show="showInfo" class="info-row container">
      </div> -->

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
      imgUrl: 'https://image.tmdb.org/t/p/w500',
      showInfo: false,
      languageString: ''
    }
  },

}
</script>

<style lang="scss">

  .film{
    position: relative;
    flex-basis: 230px;
    height: 330px;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    background-color: black;
    box-shadow: 10px 10px 15px black;
    transition: all 1s;
    &:hover{
      transform: scale(1.2);
    }
    &:Hover .layover{
      opacity: 100%;
    }

    img{
      transition: all 1s;
    }

    .layover{
      width: 100%;
      height: 100%;
      padding: 15px;
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 0.9rem;
      color: rgb(238, 226, 226);
      background-color: rgba(0, 0, 0, 0.534);
      opacity: 0%;

      .title{
        font-weight: bold;
        font-size: 1rem;
      }

      button{
        width: 60%;
      }
    }

  }

  .info-row{
    height: 200px;
    background-color: black;
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
  }


</style>