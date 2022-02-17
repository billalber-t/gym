<template>
<v-container>
    <v-row>
        <v-col cols="8">
        <h1>Your Coordinates</h1>
        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>

        <h1>Map Coordinates</h1>
        <p>{{ mapCoordinates.lat }} Latitude , {{ mapCoordinates.lng }} Longitude</p>
        <GmapMap
            :center="center"
            :zoom="18"
            map-type-id="terrain"
            style="width: 640px; height: 360px; margin:32px auto;"
            ref="mapRef"
            >
            <GmapMarker
                :key="index"
                :position="position"
                :clickable="true"
                :draggable="true"
                
            />
        </GmapMap>
        </v-col>
        <v-col cols="4">
                <div>
                    <h3>Locations</h3>
                </div>
        </v-col>

    </v-row>
</v-container>
   
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

const home = {lat : -1.260010647992203 , lng : 36.808197176967525 }; 
//const work = { lat : -1.1820794246187234 , lng : 36.936786638388064 };

export default {
    name: "Map",
    data(){
        
        return{
            map : null,

            myCoordinates : {
                lat : 0,
                lng : 0
            },

            position : home,
            // marker: [{
            //         position : home
            //     },
            //      {
            //         position : work
            //     }
            // ],

            center : home
        }
    },

    methods:{

        drawMarkers(){
            
                
               
        }


    },

    created(){
        this.$getLocation({})
        .then(coordinates=>{
            this.myCoordinates = coordinates;
        })
        .catch(error => alert(error));

    },
    
    mounted(){
        //add the map to a data object
        // this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        this.$refs.mapRef.$mapPromise.then( map => this.map = map);
    },

    computed:{
        mapCoordinates(){
            if(!this.map){
                return{
                    lat : 0,
                    lng  : 0
                };
            }
            
            return{
                lat : this.map.getCenter().lat().toFixed(4),
                lng : this.map.getCenter().lng().toFixed(4)
            }
        }
    }
}
</script>
<style scoped>
    .map{
       margin-top: 4vh;
       margin-left: auto;
       margin-right: auto;
    }
</style>