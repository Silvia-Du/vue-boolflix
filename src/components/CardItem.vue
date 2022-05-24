<template>

 


    <div class="_card d-flex mx-5" @mouseleave="resetFunction()">

      <div class="img-box">
        <img class="img-fluid" :src="`${imgUrl}${card.poster_path}`" :alt="card.title">
        <img v-if="card.poster_path == null" :src="require('../assets/img/img-alt.png')" alt="">
      </div>

      <div class="text-box pt-3">
        <div class="text">
          <p class="title text-uppercase">{{card.title || card.name}}</p>
          <p>Original title:{{card.original_title || card.original_name}}</p>

          <span v-if="card.original_language == 'en'">lingua originale :<flag iso="gb"/></span>
          <span v-else>lingua originale :<flag :iso="card.original_language"/></span>

          <div class="d-flex my-3 justify-content-center align-items-center">
            <span class="me-2">Vote:</span>
            <i v-for="(string, index) in fullStar" :key="index" :class="`fa-${string} fa-star`"></i>
          </div>

          <button @click="shwInfo()" type="button" class="btn btn-danger">More Info</button>

          <div class="plus mt-2 p-1">

            <span class="text-uppercase" v-show="genresCard.length > 0 ">Genere:</span>
            <span class="mx-1 mb-2" v-for="(genre, index) in genresCard" :key="`genre${index}`">{{genre.name}},</span>
            <br>
            <span class="text-uppercase" v-show="cardCast.length > 0 ">Cast:</span>
            <span class="mx-1" v-for="(actor, index) in cardCast" :key="`actor${index}`">{{actor.name}},</span>

          </div>
          
        </div> 
      </div>
    </div>

</template>

<script>

import axios from 'axios';

export default {
    name: "CardItem",
    props: {
        card: Object,
        type: Array
    },
    data() {
        return {
            imgUrl: "https://image.tmdb.org/t/p/w500",
            showInfo: false,
            languageString: "",
            voteNum: this.card.vote_average,

            apiObject: {
              api_key: 'e7a2cd392c6eda895fa73f2972eca6a2',
              language: 'it-IT'
            },

            genresCard: [],
            cardCast:[],
            getCredits:[' ', '/credits'],

        };
    },

    methods:{
      shwInfo(){
        this.getCredits.forEach(item =>{

          axios.get(`https://api.themoviedb.org/3/${this.type[1]}/${this.card.id}${item}?`, {
            params: this.apiObject
          })
          .then(response =>{

            if(item === ' '){
              this.genresCard =  response.data.genres;
              console.log(this.genresCard,'generi_____');
            }

            if(item === '/credits'){
              this.cardCast =  response.data.cast;
              this.cardCast.length = 4;
              console.log(this.cardCast,'cast_____');
            } 
          })
        })
      },

      resetFunction(){
        this.genresCard = [],
        this.cardCast = []
      }
    },

    computed: {
        fullStar() {
            let star = [];
            let fullStar = Math.floor(this.voteNum / 2);
            let rest = 5 - fullStar;
            for (let i = 0; i < fullStar; i++) {
                star.push("solid");
            }

            for (let i = 0; i < rest; i++) {
                star.push("regular");
            }
            return star;
        }
    },
}


</script>

<style lang="scss">
@import '../assets/style/vars.scss';


  ._card{
    flex-shrink: 0;
    height: 355px;
    margin: 30px 10px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 2s;
    background-color: $bgColor;

    
    
    &:hover{
      transform: scale(1.1);
      border-radius: 10px;
    }
    &:hover .text-box{
      width: 250px;
      padding: 10px;
      border-radius: 0 10px 10px 0;
      opacity: 100%;
    }

    &:hover .img-box{
      border-radius: 10px 0px 0px 10px;
      img{
        border-radius: 10px 0px 0px 10px;
      }
    }


      &:hover .text-box p{
        opacity: 100%;
      }
      
      
      .text-box{
        width: 0px;
        height: 100%;
        transition: all .5s;
        overflow: hidden;
        opacity: 0%;
        background-color: lighten($bgColor, 5%);
        p{
          opacity: 0%;
          color: white;
        }

        i{
          color: rgb(255, 187, 0);
        }

        .btn{
          background-color: $redColor;
          font-size: 0.9rem;
        }

        .plus{
          font-size: 0.7rem;
          overflow: auto;
        }

      }

    .img-box{
      width: 250px;
      height: 100%;
      transition: all 1s;
      border-radius: 10px;
      img{
        width: 100%;
        border-radius: 10px;

      }
    }

  }




</style>