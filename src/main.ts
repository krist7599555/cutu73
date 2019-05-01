process.env.PORT = process.env.PORT || 3000;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./registerServiceWorker";
import Buefy from "buefy";
Vue.use(Buefy, { defaultIconPack: "fas" });

import "./store"; // vuex & vue-resource
import "./style/all.scss";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);
dom.watch();

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch("auth/fetchUser");
  }
});

vm.$mount("#app");

export default vm;
