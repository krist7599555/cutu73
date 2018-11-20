import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// // Add all icons to the library so you can use it in your page
// library.add(fas, far, fab);
// dom.watch();

// import "buefy/types/components.d"
import Buefy from "buefy";
// import "buefy/types/index.d"
Vue.use(Buefy);
// const checkbox = require("buefy/dist/components/checkbox");
// Vue.use(checkbox);
// const toast = require("buefy/dist/components/toast");
// Vue.use(toast);
// const toast = require("buefy/dist/components/pagination");
// import VueCookies from "vue-cookies";
// const VueCookies = require("vue-cookies");
// import VueCookies from 'vue-cookies';
// Vue.use(VueCookies);

import "./store"; // vuex & vue-resource
import "./style/all.scss";

Vue.config.productionTip = false;

import firebase from "firebase/app";
var config = {
  apiKey: "AIzaSyCFiD4b_wrKGToaYgpOIrzDoasUlPVq0as",
  authDomain: "cutu73-e9eff.firebaseapp.com",
  databaseURL: "https://cutu73-e9eff.firebaseio.com",
  projectId: "cutu73-e9eff",
  storageBucket: "",
  messagingSenderId: "358105585257"
};
firebase.initializeApp(config);
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker.u

import VueCoreImageUpload from "vue-core-image-upload/src/vue-core-image-upload.vue";
Vue.component("vue-core-image-upload", VueCoreImageUpload);
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch("fetchUser");
  }
  // components: {
  //   'vue-core-image-upload': VueCoreImageUpload
  // },
}).$mount("#app");
