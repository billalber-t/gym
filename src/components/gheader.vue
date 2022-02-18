<template>
 <v-card>
    <v-app-bar
     
      absolute
      color="white lighten-4"
      tile
      elevate-on-scroll
     
      min-height="20"
      app
    >
     

      <v-toolbar-title class="success--text ml-10" >
        <v-img src="../images/gYm_logo.jpg" height="65" width="75">
        </v-img> 
        </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-chip
        class="ma-2"
        color="green"
        text-color="white"
        v-for="(item) in items" :key="item.name"
        :to="item.link"
        >
           {{ item.name }} 
        </v-chip>

        <!-- <v-btn flat>
        <v-icon>mdi-heart</v-icon>
            Join
        </v-btn>
        
        <v-btn flat>
         <v-icon>mdi-heart</v-icon>
            Timetable
        </v-btn>

         <v-btn flat>
         <v-icon>mdi-heart</v-icon>
            FAQs
        </v-btn>-->
        
      <!-- <v-btn  dense rounded outlined class="success--text pl-15 py-0">
        <v-icon></v-icon>
      </v-btn>  -->
      <div style="width:15%">
      <v-text-field
          
            label="Search"
            append-icon="mdi-magnify"
            dense
            height="100%"
            class="pt-4 mt-3 ml-2 success--text "
            outlined
            
          ></v-text-field>

     </div>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
      </v-container>
    </v-sheet> -->
  </v-card>
    
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data(){
        return{

            items :[
                {name:'Home', link:'/'},
                {name:'Join', link:'/join'},
                {name:'Timetable', link:'/timetable'},
                {name:'FAQs', link:'/faqs'}
            ]
        }
    }
}
</script>
