<template lang="pug">
form.trans-input(@submit.prevent='submit' v-if='auth && form_result')
  .field.is-narrow.is-horizontal
    .field-label.is-normal
      .label(style='white-space: normal') รูปภาพ
    .field-body
      .field
        .control
          File(v-model='form_result.image' :filename='form_result.รหัสนิสิต')
  br
  .field.is-narrow.is-horizontal(
    v-for='lay in form_layout'
  )
    .field-label.is-normal
      .label(v-show='!lay.hidden_label') {{lay.label}}
    .field-body
      .field
        MyInput(:value='form_result[lay.label]' @input='handleInput($event, lay.label)' :lay='lay')
  .field.is-narrow.is-horizontal
    .field-label.is-normal
    .field-body
      .field
        .control
          br
          button.button.is-danger.is-outlined.is-inverted(type='submit') SUBMIT
</template>

<script lang="ts">
interface InputField {
  label: string;
  type: string;
  value?: any;
}

// import Vue from "vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
// @ts-ignore
import draggable from "vuedraggable";
import MyInput from "./MyInput.vue";
import File from "./File.vue";
import _ from "lodash";

@Component({
  components: {
    draggable,
    File,
    MyInput
  }
})
export default class From extends Vue {
  form_result = null as any | null;
  form_layout = [] as InputField[];
  form_attributes = [] as string[];
  result = null;

  @Getter("auth/user") user: any;
  @Getter("auth/auth") auth: any;

  async mounted() {
    const json = await this.$store.dispatch(
      "file/getText",
      "/template/_input_form.json"
    );
    if (typeof json == "string") {
      alert("_input_form.json is wrong format");
    }
    let layout: InputField[] = json;

    this.form_layout = layout;
    this.form_attributes = layout
      .filter(obj => "label" in obj)
      .map(obj => obj.label);
    this.update_result();
    console.log("!!!");
    if (this.auth) {
      if (!this.user) {
        await this.$store.dispatch("auth/fetchUser");
      }
      this.form_result = this.user;
    }
  }
  get transform_to_array(): any[] {
    if (this.form_result === null) return [];
    let arr = _.flatten(
      this.form_layout.map(({ label, type }: any) => {
        if (!label) return [];
        if (type != "rank") {
          let res = _.get(this.form_result, label);
          return [res != undefined ? res : "-"];
        } else {
          return this.form_result[label];
        }
      })
    );
    return arr;
  }

  handleInput(e: any, label: string) {
    // console.log("handleUpdate", e.target.value);
    this.$set(this.form_result, label, e.target.value);
    this.$forceUpdate();
  }

  @Watch("form_result", { deep: true })
  @Watch("form_layout", { deep: true })
  update_result() {
    for (let { label, type, value } of this.form_layout) {
      if (!label) continue;
      if (type == "rank") {
        this.form_result[label] = value.map((x: any) =>
          typeof x == "object" ? x.name : x
        );
      }
    }
    _.map(this.form_result, (v, k) => {
      if (k == "คำนำหน้า") {
        // @ts-ignore
        this.form_result["เพศ"] = _.get({ นาย: "ชาย", นางสาว: "หญิง" }, v, "");
      }
    });
    this.form_result = this.form_result;
    this.$forceUpdate();
  }

  async submit() {
    this.$dialog.confirm({
      title: "ยืนยันข้อมูล",
      message: "loading..",
      cancelText: "Cancel",
      confirmText: "Process",
      type: "is-success",
      onConfirm: () => this._submit()
    });
    this.$nextTick(() => {
      const elem = document.getElementsByClassName("media-content");
      elem[0].innerHTML =
        "<table class='table'>" +
        _.join(
          _.map(
            this.form_attributes,
            k => `
            <tr> 
              <td>${k}</td>
              <td>${this.form_result[k] || "------ต้องใส่ข้อมูล------"}</td>
            </tr>`
          ),
          ""
        ) +
        "</table>";
    });
  }

  async _submit() {
    const loadingComponent = this.$loading.open({
      container: null
    });
    this.$store
      .dispatch("auth/submit", this.form_result)
      .then(() => {
        this.$toast.open({
          type: "is-success",
          message: "success submition",
          position: "is-top",
          duration: 3000
        });
        // REMOVE: show card result
        // this.$modal.open(
        //   `<p class="image is-4by6">
        //         <img src="http://www.cutu73.ml/cards/${
        //           this.form_result.ouid
        //         }.png?t=${new Date().getTime()}">
        //     </p>`
        // );
      })
      .catch(result => {
        this.$toast.open({
          type: "is-danger",
          message: _.get(result, "response.data") || "unexpected error",
          position: "is-top",
          duration: 3000
        });
        if (result.code == 405) {
          window.location.reload(true);
        }
      })
      .finally(loadingComponent.close);
  }
}
</script>

<style lang="scss" scoped></style>
