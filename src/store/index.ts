import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import file from "./file";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, file }
});
