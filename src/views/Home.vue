<template>
<v-app>
 
    <gheader />
      
    <v-main>
      <v-container app>
        <v-row>
          <v-col md-12>
          <showCase />
          </v-col>
        </v-row>
        <v-row>
          <v-col md-12>
            <Map />
          </v-col> 
        </v-row>
      </v-container>
      
      

    </v-main>
    

    <gfooter /> 
  

  </v-app>
  
</template>

<script>
import showCase from "../components/Home/showCase.vue";
import gheader from "../components/gheader.vue";
import gfooter from "../components/gfooter.vue";
import Map from "../components/Map.vue";

export default {
  name: "Home",

  components: {
         Map,
        showCase,
        gheader,
        gfooter
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
