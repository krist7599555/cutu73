import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/file",
      name: "File",
      component: () => import("./views/File.vue")
    },
    {
      path: "/crop",
      name: "Crop",
      component: () => import("./views/Crop.vue")
    }
  ]
});
