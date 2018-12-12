import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
import Resize from "./views/Resize.vue";
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
    // {
    //   path: "/r",
    //   name: "resize",
    //   component: Resize
    // }
  ]
});
