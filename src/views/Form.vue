<template lang="pug">
form(@submit='submit' v-if='auth && form_result')
  //- .field.is-narrow.is-horizontal
  //-   .field-label.is-normal
  //-     .label(style='white-space: normal') รูปภาพ
  //-   .field-body
  //-     .field
  //-       .control
  //-         figure.image
  //-           imageUpload(:filename='form_result.รหัสนิสิต' v-model='form_result.image')
  .field.is-narrow.is-horizontal
    .field-label.is-normal
      .label(style='white-space: normal') รูปภาพ
    .field-body
      .field
        .control
          File(v-model='form_result.image' className="input" :filename='form_result.รหัสนิสิต')

  .field.is-narrow.is-horizontal(
    v-for='lay in form_layout'
  )
    .field-label.is-normal
      .label(v-show='!lay.hidden_label') {{lay.label}}
      //- .label.label__is-hidden-desktop(v-show='!lay.hidden_label' style='white-space: normal') {{lay.label}}
      //- .label.label__is-hidden-touch(v-show='!lay.hidden_label' style='white-space: pre') {{lay.label}}
    .field-body
      .field
        .control
          p.help(v-if='lay.desc') {{lay.desc}}
          template(v-if='lay.type == "hr"')
            hr
          template(v-if='lay.type == "br"')
            br
          template(v-else-if='lay.type == "checkbox"')
            b-checkbox(v-model='form_result[lay.label]') {{lay.value[!!form_result[lay.label]]}}
          template(v-else-if='lay.type == "disable"')
            input.input(v-model='form_result[lay.label]' disabled)
          template(v-else-if='lay.type == "text"')
            input.input(v-model='form_result[lay.label]' :required='lay.required')
          template(v-else-if='lay.type == "textarea"')
            textarea.textarea(v-model='form_result[lay.label]' :placeholder="lay.placeholder" required)
          template(v-else-if='lay.type == "select"')
            .select.is-fullwidth {{lay.required}}
              select(v-model='form_result[lay.label]' :required='lay.required')
                option
                option(v-for='v in lay.value' :value='v') {{v}}
          template(v-else-if='lay.type == "rank"')
            draggable(v-model='lay.value')
              template(v-for='e in lay.value')
                input.input(v-if='e.type == "input"' v-model='e.name' :placeholder='e.placeholder')
                .button.is-fullwidth(v-else) {{e.name || e}}
                  .drag-icon 
                    i.fa.fa-bars
          template(v-else)
            input.input(disabled :value='`unrender type: ${lay.type}`')
  .field.is-narrow.is-horizontal
    .field-label.is-normal
    .field-body
      .field
        .control
          br
          button.button.is-danger.is-outlined.is-inverted(type='submit') SUBMIT
          label.help-is-success
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
import imageUpload from "./imageUpload.vue";
import _ from "lodash";
import File from "./File.vue";

export default Vue.extend({
  components: {
    draggable,
    imageUpload,
    File
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
          this.form_result["เพศ"] = { นาย: "ชาย", นางสาว: "หญิง" }[v] || "";
        }
      });
      this.form_result = this.form_result;
      this.$forceUpdate();
    },
    async submit(e: Event) {
      e.preventDefault();
      const loadingComponent = this.$loading.open({
        container: null
      });
      this.$store
        .dispatch("submit", this.form_result)
        .then(() =>
          this.$toast.open({
            type: "is-success",
            message: "success submition",
            position: "is-top",
            duration: 5000
          })
        )
        .catch(result => {
          this.$toast.open({
            type: "is-danger",
            message: result.response.data || "unexpected error",
            position: "is-top",
            duration: 5000
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

<style lang="scss" scoped></style>
