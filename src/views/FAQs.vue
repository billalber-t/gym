<template>

    <v-container>
      <v-row class="pb-4" >
        <h1>Frequently asked questions</h1>
      </v-row>
       <v-row>
        
       
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 10"
              :key="i"
            outlined>
              <v-expansion-panel-header><h4>This is an item member of the expansion panel header</h4></v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row> 


      <!-- <v-expansion-panel>
        <v-expansion-panel-content>


        </v-expansion-panel-content>
      </v-expansion-panel> -->
    </v-container>
  
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {

}
</script>
