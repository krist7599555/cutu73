import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";
import vm from "./main";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/__home",
      name: "home2",
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
    },
    {
      path: "/preview",
      name: "preview",
      component: () => import("./views/CardPreview.vue")
    },
    {
      path: "/records__kjsvjklieurvkne",
      name: "__records",
      component: () => import("./views/Records.vue")
    },
    {
      path: "/generate__982fnknnwdv823d",
      name: "__gencards",
      component: () => import("./views/GenCards.vue")
    },
    {
      path: "/preview__jkasdci9wnkjecwnj",
      name: "__preview",
      component: () => import("./views/CardPreview.vue")
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  console.log(to.name);
  if (to.name == "home" || (to.name && to.name.indexOf("__") != -1)) {
    next();
  } else {
    try {
      await store.dispatch("auth/fetchUser");
    } catch (e) {
      await store.dispatch("auth/logout");
    }
    const ouid = store.getters["auth/ouid"];
    const admin = await store.dispatch("file/getText", "/template/_admin.json");
    if (ouid in admin) {
      next();
    } else {
      vm.$toast.open(
        ouid
          ? {
              message: "no permission",
              type: "is-danger"
            }
          : {
              message: "please login",
              type: "is-warning"
            }
      );
      next({ name: "home" });
    }
  }
});

export default router;
