<template>
 <v-card>
    <v-app-bar
     
      absolute
      color="grey lighten-4"
      tile
      elevate-on-scroll
     
      min-height="20"
      app
    >
     

      <v-toolbar-title class="success--text pl-5" >gYm</v-toolbar-title>

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
        
      <v-btn  dense rounded outlined class="success--text pl-15 py-0">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> 

     
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
