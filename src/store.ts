import Vue from "vue";
import Vuex from "vuex";
// import Resource from "vue-resource";
import axios from "axios";
import _ from "lodash";
import cookie from "js-cookie";

Vue.use(Vuex);
// Vue.use(Resource);

const toThai = (usr: any) => {
  let { firstnameth, lastnameth, ouid } = usr;
  const facultys = require("./faculty.json");
  let faculty = ouid.slice(-2);
  let { th, en } = facultys[faculty];
  return {
    รหัสนิสิต: ouid,
    ชื่อ: firstnameth,
    สกุล: lastnameth,
    คณะ: th,
    รหัสคณะ: faculty,
    faculty: en.toLowerCase(),
    ชั้นปี: String(62 - Number(ouid.slice(0, 2)))
  };
};

const url =
  process.env.NODE_ENV == "production"
    ? "/api/v1"
    : "http://localhost:3000/api/v1";
// : "http://128.199.216.159:3000/api/v1";
// : "http://localhost:3000/api/v1";
// "http://128.199.216.159:3000/api/v1"
export default new Vuex.Store({
  state: {
    user: null as null | object,
    ticket: null as null | string
  },
  getters: {
    user(state) {
      return state.user;
    },
    auth(state) {
      return state.ticket;
    }
  },
  mutations: {
    setUser(state, content) {
      if (content instanceof Object) {
        state.user = _.assign({}, state.user || {}, content);
      } else state.user = null;
    },
    removeTicket(state) {
      state.ticket = null;
      cookie.remove("ticket");
    },
    setTicket(state) {
      state.ticket = cookie.get("ticket") || null;
    }
  },
  actions: {
    async login(state, { username, password }) {
      return axios({
        method: "POST",
        url: url + "/user/login",
        withCredentials: true, // setting cookie
        data: {
          username,
          password
        }
      }).then(() => {
        if (!cookie.get("ticket")) {
          alert("cookie is not set");
          throw "no ticket";
        }
        state.commit("setTicket");
        return state.dispatch("fetchUser");
      });
    },
    logout(state) {
      state.commit("removeTicket");
      return state.dispatch("fetchUser");
    },
    async submit(state, formResult) {
      // console.log("form submit EMPTY result is", formResult);
      return axios({
        method: "POST",
        url: url + "/user/register",
        withCredentials: true,
        data: { form: formResult },
        timeout: 10000,
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    async upload(state, formData) {
      const endpoint = url + "/user/upload";
      // console.log("upload to", endpoint);
      return await axios({
        method: "POST",
        url: endpoint,
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(x => {
        return x.data;
      });
    },
    async fetchUser(state) {
      state.commit("setTicket");
      if (state.getters.auth) {
        return await axios({
          method: "GET",
          url: url + "/user/getUserInfo",
          withCredentials: true
        }).then(res => {
          let { data, basicData } = res.data;
          state.commit("setUser", data);
          state.commit("setUser", toThai(basicData));
          state.commit("setUser", basicData);
          return state.getters.user;
        });
      } else {
        // console.log("set User to Null");
        state.commit("setUser", null);
        state.commit("removeTicket");
      }
    }
  }
});
