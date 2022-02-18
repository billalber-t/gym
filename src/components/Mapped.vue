<template>
<v-container>
    <v-row>
        <v-col cols="8">
        <div>
        <h3>Location</h3>
        <!-- <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>

        <h1>Map Coordinates</h1>
        <p>{{ mapCoordinates.lat }} Latitude , {{ mapCoordinates.lng }} Longitude</p> -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus modi, 
            est doloremque laboriosam repellat, atque voluptatum dolore perspiciatis ratione, 
            accusantium eveniet quae sunt 
            tenetur harum cumque sapiente consequatur inventore.
        </p>

        </div>
        <GmapMap
            :center="center"
            :zoom="16"
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
                    <h3>Services</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque.</p>
                    <v-list>
                        <v-list-item v-for="service in services" :key="service.name">
                            <v-list-item-icon>
                                <v-icon>{{ service.icon }}</v-icon>
                            </v-list-item-icon>
                           <v-list-item-content>{{ service.name }}</v-list-item-content> 
                        </v-list-item>
                    </v-list>
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

            center : home,

            services:[
                {icon : 'mdi-dumbbell', name: 'Gyming facilities'},
                {icon : 'mdi-bottle-tonic-plus-outline', name: 'Psyiotheraphy'},
                {icon : 'mdi-slide', name: 'Massage'},
                {icon : 'mdi-shower-head', name: 'Hot shower'},
                {icon : 'mdi-wifi', name: 'WiFi'}
            ]
                
            


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