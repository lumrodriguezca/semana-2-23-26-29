<template>
  <div id="app">

    <image-text></image-text>
    <carousel-section></carousel-section>
    <services-section></services-section>

    <!--  news -->
    <div id="news" class="container-fluid">
        <news-section></news-section>
    </div>
    <!--  news -->

    <!--  members -->
    <div class="container-fluid">
      <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(miembro, index) of Team" :key="index" >
            <team-card :member="miembro"></team-card>
          </div>
          
      </div>
    </div>
    <!--  members -->

    <final-section></final-section>

  </div>
</template>

<script>

import ImageText from './components/ImageText.vue';
import CarouselSection from './components/CarouselSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FinalSection from './components/FinalSection.vue';
import TeamCard from './components/TeamCard.vue';
import NewsSection from "./components/NewsSection.vue"



export default {
  name: 'App',
  components:{
    ImageText,
    CarouselSection,
    ServicesSection,
    FinalSection,
    TeamCard,
    NewsSection
  },
  data(){
    return{
      Team: [
      {
        codigo : 1 ,
        nombre : 'Luisa' ,
        descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
        rol : 'Lorem ipsum dolor' ,
        // image : 'https://i.imgur.com/***.png'
      },
      {
        codigo : 2 ,
        nombre : 'Omar' ,
        descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
        rol : 'Lorem ipsum dolor' ,
        // image : 'https://i.imgur.com/***.png'
      },
      {
        codigo : 3 ,
        nombre : 'Martha' ,
        descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
        rol : 'Lorem ipsum dolor' ,
        // image : 'https://i.imgur.com/***.png'
      }
      ]
    }
  }
}
</script>

