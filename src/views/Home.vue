<template>
<v-app>
 
    <gheader />
      
    <v-main>
      <showCase />
    </v-main>
    

    <gfooter />
  
    
  </v-app>
  
</template>

<script>
import showCase from "../components/Home/showCase.vue";
import gheader from "../components/gheader.vue";
import gfooter from "../components/gfooter.vue";

export default {
  name: "Home",

  components: {
    showCase,
    gheader,
    gfooter
  },

  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
  }
};
</script>
<style scoped>
.showcase{
  background: url("/src/images/image1.jpg");
}
</style>
