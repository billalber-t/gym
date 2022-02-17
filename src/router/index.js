import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import FAQs from "../views/FAQs.vue";
import layout from "../views/layout.vue"
//import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children:[
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/faqs",
        name: "FAQs",
        component: () => import("../views/FAQs.vue"),
      }
      ,
      {
        path: "/join",
        name: "Join",
        component: () => import("../views/Join.vue"),
      },

      {
        path: "/timetable",
        name: "Timetable",
        component: () => import("../views/Timetable.vue"),
      }
    ],
  },
 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
