<template>
<v-container>
    <v-row>
        <v-layout align-center>
            <v-flex>
                <h1>Timetable Page </h1>
            </v-flex>
        </v-layout>

    </v-row>
    <v-row>
    
    <v-data-table
        :headers="headers"
        :items="sessions"
        class="elevation-1 mt-4"
    ></v-data-table>
    
    </v-row>
    
</v-container>


    
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "Timetable",
    data () {
      return {
        headers: [
            {
            text: 'Day of Week',
            align: 'start',
            sortable: false,
            value: 'dday'
          
          },
          {
            text: 'Morning',
            align: 'start',
            sortable: false,
            value: 'morning'
          
          },
          { 
              text: 'Day', 
              value: 'day', 
              sortable: false, 
              
              },
          { 
              text: 'Evening ', 
              value: 'evening',
              sortable: false
        },
          
        ],
        sessions: [
          {
            dday: 'Monday',
            morning: 'Mr X',
            day: 'Mr Y',
            evening: 'Mr Z',
          },
          {
            dday: 'Tuesday',
            morning: 'Mr X',
            day: 'Mr Y',
            evening: 'Mr Y',
          },
          {
           dday : 'Wednesday',
            morning: 'Mr Y',
            day: 'Mr Z',
            evening: 'Mr K',
          },
          {
            dday : 'Thursday',
            morning: 'Mr X',
            day: 'Mr Z',
            evening: 'Mr Z',
          },
          {
            dday : 'Friday',
            morning: 'Mr W',
            day: 'Mr V',
            evening: 'Mr K',
          },
          {
            dday: 'Saturday',
            morning: 'Mr X',
            day: 'Mr Z',
            evening: 'Mr K',
          },
          {
            dday: 'Sunday',
            morning: 'CLOSED',
            day: 'Mr W',
            evening: 'Mr K',
          }
        ],
      }
    },
}
</script>
<style scoped>

</style>