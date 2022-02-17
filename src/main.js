import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGeolocation from 'vue-browser-geolocation';



Vue.config.productionTip = false;
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1Ts2T7CCYrr-xsW-8jQLNno9AsSsWDCw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

// Vue.use(VueGoogleMaps, {
//   load:{
//     key:'AIzaSyB1Ts2T7CCYrr-xsW-8jQLNno9AsSsWDCw'
//   },
//   installComponents: false
// })

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
