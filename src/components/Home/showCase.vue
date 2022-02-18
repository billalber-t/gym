<template>
<div class="showcase" >
    <v-container class="contain"  >
        <v-row class="md-6 sm-12">
            <v-col class="md-6 sm-12">
                <h1> Beba chuma ! Unga leo  </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, im
                    pedit nam debitis incidunt quae und
                </p>
                 <v-btn outlined  depressed class="red white--text pa-5 btn" width="50%"><h3>Join</h3></v-btn>
            </v-col>
            <v-col class="md-6 sm-12" >
                <v-row>
                    <v-col class="md-4"></v-col>
                    <v-col class="md-8">
                        <signup />
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>

</div>
    
</template>
<script>
import signup from "./signup.vue";
export default {
    components:{
        signup,
    }
    
}
</script>
<style scoped>
.showcase{
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../../images/image1.jpg") !important;
    height: 80vh;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position-y: 0 !important;
    background-position-x: 0 !important;
    color: white !important;

    box-sizing: border-box !important;
   
}

.contain{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
}

.contain h1{
        font-family:Verdana, Geneva, Tahoma, sans-serif; 
        font-size: 24px;
        
}
.contain p{
        font-size: 16px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/* .contain btn{
        font-family: Verdana, Geneva, Tahoma, sans-serif !important;
} */
</style>
