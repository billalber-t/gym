<template>
<div>   
   
      <v-container app>
        <v-row>
          <v-col md-12>
          <showCase />
          </v-col>
        </v-row>
        <v-row>
          <v-col md-12>
            <Mapped />
          </v-col> 
        </v-row>
      </v-container>  

    
</div>
  
</template>

<script>
import showCase from "../components/Home/showCase.vue";
// import gheader from "../components/gheader.vue";
// import gfooter from "../components/gfooter.vue";
import Mapped from "../components/Mapped.vue";

export default {
  name: "Home",

  components: {
         Mapped,
        showCase,
        // gheader,
        // gfooter
  },

  data () {
      return {
        // items: [
        //   {
        //     src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        //   },
        //   {
        //     src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        //   },
        //   {
        //     src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        //   },
        //   {
        //     src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        //   },
        // ],
      }
  }
};
</script>
