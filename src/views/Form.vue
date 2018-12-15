<template lang="pug">
form(@submit.prevent='submit' v-if='auth && form_result')
  .field.is-narrow.is-horizontal
    .field-label.is-normal
      .label(style='white-space: normal') รูปภาพ
    .field-body
      .field
        .control
          File(v-model='form_result.image' :filename='form_result.รหัสนิสิต')

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

import Vue from "vue";
// @ts-ignore
import draggable from "vuedraggable";
import MyInput from "./MyInput.vue";
import File from "./File.vue";
import _ from "lodash";

export default Vue.extend({
  components: {
    draggable,
    File,
    MyInput
  },
  data() {
    let layout = require("./input_form.js").default;
    return {
      form_result: null as any | null,
      form_layout: layout as InputField[],
      result: null
    };
  },
  async mounted() {
    this.update_result();
    if (this.auth) {
      if (!this.user) {
        await this.$store.dispatch("fetchUser");
      }
      this.form_result = this.user;
    }
  },
  computed: {
    user(): object {
      return this.$store.getters.user;
    },
    auth(): boolean {
      return this.$store.getters.auth;
    },
    transform_to_array(): any[] {
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
  },
  methods: {
    handleInput(e: any, label: string) {
      // console.log("handleUpdate", e.target.value);
      this.$set(this.form_result, label, e.target.value);
      this.$forceUpdate();
    },
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
          this.form_result["เพศ"] = _.get(
            { นาย: "ชาย", นางสาว: "หญิง" },
            v,
            ""
          );
        }
      });
      this.form_result = this.form_result;
      this.$forceUpdate();
    },
    async submit() {
      const loadingComponent = this.$loading.open({
        container: null
      });
      console.log("SUBMIT");
      this.$store
        .dispatch("submit", this.form_result)
        .then(() =>
          this.$toast.open({
            type: "is-success",
            message: "success submition",
            position: "is-top",
            duration: 3000
          })
        )
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
  },
  watch: {
    form_layout: {
      handler() {
        this.update_result();
      },
      deep: true
    },
    form_result: {
      handler() {
        this.update_result();
      },
      deep: true
    }
  }
});
</script>
