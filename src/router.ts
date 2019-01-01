import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/records",
      name: "records",
      component: () => import("./views/Records.vue")
    },
    {
      path: "/generate",
      name: "gencards",
      component: () => import("./views/GenCards.vue")
    }
  ]
});
