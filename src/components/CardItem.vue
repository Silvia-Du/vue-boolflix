<template>

  <div class="card">

      

        <img class="img-fluid" :src="`${imgUrl}${object.poster_path}`" :alt="object.title">

        
        <!-- layover -->
        <div class="layover text-center d-flex flex-column justify-content-center align-items-center">
          <p v-if="type === 'movie'" class="title">Title: {{object.title}}</p>
          <p v-else class="title">Title: {{object.name}}</p>
  
          <!-- <p v-if="card.original_language == 'en'">Original title:{{card.original_title}}</p> -->
          <span v-if="object.original_language == 'en'">lingua originale :<flag iso="gb"/></span>
          <span v-else>lingua originale :<flag :iso="object.original_language"/></span>
          <p class=""><i class="fa-solid fa-star"></i>{{object.vote_average}}</p>
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
    object: Object,
    type: String
  },

  data(){
    return{
      imgUrl: 'https://image.tmdb.org/t/p/w500',
      showInfo: false,
      languageString: ''
   
    }
  },

  // computed:{

  //   getObject(){

  //     let objectToPrint = {
  //       name:'',
  //       originalName:'',
  //       imgPath: '',
  //       original_language: '',
  //       vote: ''
  //     } 
  //    if(type === 'movie'){
  //      objectToPrint = this.object;
  //      objectToPrint.name = this.object.title;
  //      objectToPrint.original_language = this.object.original_title;
  //      objectToPrint.vote = this.object.
  //    }

  //    if(type === 'tv'){
  //       objectToPrint = this.serieItem;
  //       objectToPrint.name = this.object.title;
  //       objectToPrint.original_language = this.object.original_title;
  //    }
  //    return objectToPrint
  //  }

  // }
}


</script>

<style lang="scss">

  .card{
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