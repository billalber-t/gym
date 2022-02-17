<template>
<v-app>
 
    <gheader />
      
    <!-- <v-main>
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

      
      
      

    </v-main>-->
    <v-main>
         <router-view> </router-view>
    </v-main>


    <gfooter /> 
  

  </v-app>
  
</template>
<script>
import gheader from "../components/gheader.vue";
import gfooter from "../components/gfooter.vue";

export default {
  name: "layout",
  components:{
      gheader,
      gfooter
  },

}
</script>
