import axios from "axios";
import _ from "lodash";
import cookie from "js-cookie";
import * as ls from "local-storage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { url } from "./url";

export interface State {
  // ouid: null | string;
  user: null | any;
  ticket: null | string;
}

export default {
  namespaced: true,
  state: {
    // ouid: null as null | string,
    user: null as null | any,
    ticket: null as null | string
  },
  getters: {
    ouid: (state: State) => (state.user && state.user.ouid) || null,
    user: (state: State) => state.user,
    auth: (state: State) => state.ticket,
    async getall(state: State) {
      return await axios({
        url: url + "/db/query/get-all?limit=10000",
        headers: {
          password: "superstrongpassword"
        }
      }).then(res => res.data.data);
    }
  },
  mutations: {
    setUser(state: State, content: object | null) {
      if (content instanceof Object) {
        state.user = _.assign({}, state.user || {}, content);
        console.log(state.user.ouid);
        // @ts-ignore
        // state.ouid = state.user.ouid | null;
      } else {
        state.user = null;
        // state.ouid = null;
      }
    },
    removeTicket(state: State) {
      state.ticket = null;

      cookie.remove("ticket");
      ls.remove("ticket");
    },
    setTicket(state: State) {
      state.ticket = cookie.get("ticket") || ls.get("ticket") || null;
    }
  },
  actions: {
    async login(
      { getters, commit, dispatch },
      { username, password }: { username: String; password: String }
    ) {
      return axios({
        method: "POST",
        url: url + "/user/login" + (process.env.NODE_ENV == "production" ? "" : "?force=1"),
        withCredentials: true, // setting cookie
        data: {
          username,
          password
        }
      }).then(res => {
        cookie.set("ticket", res.data, { expires: 1 });
        ls.set("ticket", res.data);
        commit("setTicket");
        if (!getters.auth) {
          alert("cookie is not set");
          throw "no ticket";
        }
        return dispatch("fetchUser");
      });
    },
    logout({ commit, dispatch }) {
      commit("removeTicket");
      return dispatch("fetchUser");
    },
    async submit({ commit, dispatch, getters }, formResult: object) {
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
      }).then(async res => {
        await dispatch("getCard", getters.ouid);
        return res;
      });
    },
    async fetchUser({ commit, dispatch, getters }) {
      commit("setTicket");
      if (getters.auth) {
        return await axios({
          method: "GET",
          url: url + "/user/getUserInfo",
          withCredentials: true
        }).then(res => {
          let { data, basicData } = res.data;
          const toThai = (usr: any) => {
            let { firstnameth, lastnameth, ouid } = usr;
            const facultys = {
              "21": { th: "วิศวกรรมศาสตร์", en: "ENGINEERING" },
              "22": { th: "อักษรศาสตร์", en: "ARTS" },
              "23": { th: "วิทยาศาสตร์", en: "SCIENCE" },
              "24": { th: "รัฐศาสตร์", en: "POLITICAL SCIENCE" },
              "25": { th: "สถาปัตยกรรมศาสตร์", en: "ARCHITECTURE" },
              "26": {
                th: "พาณิชยศาสตร์และการบัญชี",
                en: "COMMERCE AND ACCOUNTANCY"
              },
              "27": { th: "ครุศาสตร์", en: "EDUCATION" },
              "28": { th: "นิเทศศาสตร์", en: "COMMUNICATION ARTS" },
              "29": { th: "เศรษฐศาสตร์", en: "ECONOMICS" },
              "30": { th: "แพทยศาสตร์", en: "MEDICINE" },
              "31": { th: "สัตวแพทยศาสตร์", en: "VETERINARY SCIENCE" },
              "32": { th: "ทันตแพทยศาสตร์", en: "DENTISTRY" },
              "33": {
                th: "เภสัชศาสตร์",
                en: "PHARMACEUTICAL SCIENCES"
              },
              "34": { th: "นิติศาสตร์", en: "LAW" },
              "35": {
                th: "ศิลปกรรมศาสตร์",
                en: "FINE AND APPLIED ARTS"
              },
              "36": { th: "พยาบาลศาสตร์", en: "NURSING" },
              "37": {
                th: "สหเวชศาสตร์",
                en: "ALLIED HEALTH SCIENCES"
              },
              "38": { th: "จิตวิทยา", en: "PSYCHOLOGY" },
              "39": { th: "วิทยาศาสตร์การกีฬา", en: "SPORTS SCIENCE" },
              "40": {
                th: "สํานักวิชาทรัพยากรการเกษตร",
                en: "SCHOOL OF AGRICULTURAL"
              }
            };
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
          commit("setUser", data);
          commit("setUser", toThai(basicData));
          commit("setUser", basicData);

          return getters.user;
        });
      } else {
        // console.log("set User to Null");
        commit("setUser", null);
        commit("removeTicket");
      }
    },
    async getCard(_, ouid: string) {
      return await axios({
        method: "GET",
        url: url + "/user/card/" + ouid
      }).then(() => url + "/file/static/card/" + ouid + ".png");
    },
    async getText(_, path: string) {
      return await axios.get(url + "/file" + path).then(res => res.data);
    },
    async setText(_, { path, value }: { path: string; value: string }) {
      return await axios.post(url + "/file/setText", { path, value });
    },
    updateRole(_, { ouid, ฝ่าย }) {
      return axios.post(url + "/user/updateRole", { ouid, ฝ่าย }).then(res => res.data);
    }
  }
};
