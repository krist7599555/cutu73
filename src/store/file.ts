import axios from "axios";
import _ from "lodash";
import cookie from "js-cookie";

import { url } from "./url";

export interface State {}

export default {
  namespaced: true,
  actions: {
    async uploadImage(
      { dispatch },
      { image, name, path }: { image: Blob; name: string; path: string }
    ) {
      let imageForm = new FormData();
      imageForm.append("image", image, name);
      const endpoint = url + "/file" + path + "/" + name;
      return await axios({
        method: "POST",
        url: endpoint,
        data: imageForm,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        return "https://cutu73.sgp1.digitaloceanspaces.com" + res.data;
        // return url + "/file/static" + res.data;
      });
    },
    async getCard(_, ouid: string) {
      return await axios({
        method: "GET",
        url: url + "/user/card/" + ouid
      }).then(() => url + "/cards/" + ouid + ".png");
    },
    async getText(_, path: string) {
      console.assert(/.txt|.json/.test(path));
      return await axios.get(url + "/file" + path).then(res => res.data);
    },
    async setText(_, { path, value }: { path: string; value: string }) {
      console.assert(/.txt|.json/.test(path));
      return await axios.post(url + "/file" + path, { value }); // send body as json only
    }
  }
};
