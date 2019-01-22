<template lang="pug">
div
  Head(:big='true')
    b-message(type="is-warning" has-icon) โปรดดำเนินการอย่างระมัดระวัง เพราะข้อมูลส่วนนี้มีผลต่อระบบ
    .columns
      .column.is-5
        .box.config
          b-field(grouped)
            .control
              b-dropdown
                button.button.is-primary(slot="trigger")
                    span Config
                    b-icon(pack='fas' icon="sliders-h")
                b-dropdown-item(v-for='tab in tabs' :key='tab' @click='click(tab)') {{tab}}
            .control(v-show='edit')
                button.button.is-success(@click='save')
                  span Save
                  b-icon(pack='fa' icon='save')
                  .control(v-show='edit')
            .control(v-show='edit')
                button.button.is-info(@click='click(curr)')
                  span Reload
                  b-icon(pack='fa' icon='sync-alt')
            
          b-field(type='is-grey')
            prism-editor(v-model="conf" language="html")
      .column
        .box
          b-field(grouped)
            .control
                button.button.is-info(@click='clickwatch')
                  span Watch
                  b-icon(pack='fa' icon='search')
            //- .control
            //-     button.button.is-warning(@click='computing')
            //-       span Compute
            //-       b-icon(pack='fas' icon='id-card-alt')
            
          b-field(type='is-grey')
            textarea.textarea.is-info(v-model='watch')

          div.is-flex(style='flex-wrap: wrap; justify-content: space-evenly')
            template(v-for='w in watchs')

              figure.image(style='max-width: 180px; margin: 10px')
                img(:src='w' @click='modal(w)')

  Footer
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Head from "./Head.vue";
import Footer from "./Footer.vue";
import _ from "lodash";
import axios from "axios";
import "prismjs";
import "prismjs/themes/prism.css";
// @ts-ignore
import PrismEditor from "vue-prism-editor";
import cookie from "js-cookie";

@Component({
  components: {
    Head,
    Footer,
    PrismEditor
  }
})
export default class GenerateCard extends Vue {
  tabs = `_main.json _config.json _input_form.json _admin.json`.split(" ");
  conf = "";
  edit = false;
  curr = "";
  watch = "6031301721";
  time = 0;

  async mounted() {
    this.click("_main.json");
  }

  async click(tab: string) {
    tab = tab.replace("/template/", "");
    this.edit = false;
    this.curr = "/template/" + tab;
    this.conf = await this.$store
      .dispatch("file/getText", this.curr)
      .then(res => {
        if (res instanceof Array || res instanceof Object) {
          return JSON.stringify(res, null, 2);
        } else {
          return res;
        }
      });
  }
  @Watch("conf")
  _edit() {
    this.edit = true;
  }
  modal(src: string) {
    this.$modal.open(`<p class="image is-4by6"><img src=${src} /></p>`);
  }
  save() {
    this.edit = false;
    const loadingComponent = this.$loading.open({
      container: null
    });
    this.$store
      .dispatch("file/setText", {
        path: this.curr,
        value: this.conf
      })
      .finally(loadingComponent.close);
  }
  get _watchs() {
    return this.watch.split("\n").map(ln => ln.trim());
  }
  get watchs() {
    return this.watch.split("\n").map(ln => {
      return "http://www.cutu73.ml/cards/" + ln.trim() + ".png?t=" + this.time;
    });
  }
  async clickwatch() {
    const loadingComponent = this.$loading.open({
      container: null
    });
    await Promise.all(
      this._watchs.map(id => this.$store.dispatch("file/getCard", id))
    )
      .then(() =>
        this.$toast.open({
          message: "รอสักครู่",
          type: "is-info"
        })
      )
      .catch(() =>
        this.$toast.open({
          message: "เกิดปัญหาขึ้น กรุณาลองใหม่",
          type: "is-danger"
        })
      )
      .finally(loadingComponent.close);
    this.time += 1;
  }
}
</script>

<style lang="scss" scoped>
.box {
  max-width: unset;
}
// textarea {
//   font-size: 0.8rem;
//   font-family: monospace !important;
//   min-height: 800px !important;
//   background-color: #363636;
//   color: #f4f4f4;
// }

.prism-editor-wrapper {
  font-size: 0.9rem !important;
}
</style>
