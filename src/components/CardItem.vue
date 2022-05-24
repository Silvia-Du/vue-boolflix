<template>

  <div class="_card d-flex flex-column">

      

        <img class="img-fluid" :src="`${imgUrl}${card.poster_path}`" :alt="card.title">
        <img v-if="card.poster_path == null" :src="require('../assets/img/img-alt.png')" alt="">
        
        <!-- layover -->
        <div class="layover text-center d-flex flex-column justify-content-center align-items-center">
          <p class="title">Title: {{card.title || card.name}}</p>
          <p>Original title:{{card.original_title || card.original_name}}</p>
          
          <span v-if="card.original_language == 'en'">lingua originale :<flag iso="gb"/></span>
          <span v-else>lingua originale :<flag :iso="card.original_language"/></span>
          <div class="d-flex my-3">
            <span>Vote:</span>
            <i v-for="(string, index) in fullStar" :key="index" :class="`fa-${string} fa-star`"></i>
          </div>
          
          <button 
          @click="showInfo = !showInfo"
          type="button" class="btn btn-danger">More Info</button>
        </div>


  </div>

</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: Object,
    type: String
  },

  data(){
    return{
      imgUrl: 'https://image.tmdb.org/t/p/w500',
      showInfo: false,
      languageString: '',
      voteNum: this.card.vote_average,
   
    }
  },

  computed:{

    fullStar(){
        let star = [];
        let fullStar = Math.floor(this.voteNum / 2) ;
        let rest = 5 - fullStar;
        for(let i= 0; i< fullStar; i++){
          star.push('solid');
        }

        

        for(let i=0; i< rest; i++){
          star.push('regular');
        }
        return star;
      }


  }
}


</script>

<style lang="scss">

  ._card{
    flex-shrink: 0;
    border-radius: 0.40rem;
    position: relative;
    width: 250px;
    height: 355px;
    margin: 30px 10px;
    overflow: hidden;
    background-color: rgb(218, 212, 212);
    box-shadow: 10px 10px 15px black;
    transition: all 1s;
    background-image: require('../assets/img/alt.png');
    &:hover{
      transform: scale(1.2);
      z-index: 999;
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

      i{
       color: yellow; 
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