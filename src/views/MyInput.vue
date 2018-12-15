<template lang="pug">
.control
  p.help(v-if='lay.desc') {{lay.desc}}
  template(v-if='lay.type == "hr"')
    hr
  template(v-if='lay.type == "br"')
    br
  template(v-else-if='lay.type == "radio"')
    .block
      b-radio(
        type='is-light'
        v-for='itm in lay.value' 
        :value='value'
        @input='emit_input' 
        :native-value='itm'
        :key='itm.id'
      ) {{itm}}
  template(v-else-if='lay.type == "checkbox"')
    .field
      b-checkbox(
        type='is-light'
        :value='value'
        @input='emit_input' 
        :true-value="lay.value[1]"
        :false-value="lay.value[0]"
      ) {{value}}
  template(v-else-if='lay.type == "disable"')
    input.input(:value='value' @input='emit_input' disabled)
  template(v-else-if='lay.type == "tel" && lay.icon')
    b-input(type='tel' :icon-pack='lay.iconpack || "fa"' :icon='lay.icon' :value='value' @input='emit_input' :required='lay.required')
    //- input.input(type='tel' :value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='lay.type == "text" && lay.icon')
    b-input(:icon-pack='lay.iconpack || "fa"' :icon='lay.icon' :value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='lay.type == "text"')
    input.input(:value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='lay.type == "textarea"')
    textarea.textarea(:value='value' @input='emit_input' :placeholder="lay.placeholder" required)
  template(v-else-if='lay.type == "select" && lay.icon')
    b-select(:icon-pack='lay.iconpack || "fa"' expanded :icon='lay.icon' :value='value' @input='emit_input' :required='lay.required')
        option
        option(v-for='v in lay.value' :value='v') {{v}}
  template(v-else-if='lay.type == "select"')
    .select.is-fullwidth {{lay.required}}
      select(:value='value' @input='emit_input' :required='lay.required')
        option
        option(v-for='v in lay.value' :value='v') {{v}}
  //- template(v-else-if='lay.type == "rank"') // error
  //-   draggable(v-model='value')
  //-     template(v-for='e in lay.value')
  //-       input.input(v-if='e.type == "input"' v-model='e.name' :placeholder='e.placeholder')
  //-       .button.is-fullwidth(v-else) {{e.name || e}}
  //-         .drag-icon 
  //-           i.fa.fa-bars
  template(v-else)
    input.input(disabled :value='`unrender type: ${lay.type}`') 
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

function getTextWidth(elem: HTMLSelectElement) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.font = "1rem ChulaNew";
  context.font;
  var metrics = context.measureText(elem.value);
  // canvas.toBlob(blob => {
  //   console.log(URL.createObjectURL(blob));
  // });
  return metrics.width;
}

export default Vue.extend({
  props: ["lay", "value"],
  created() {
    switch (this.lay.type) {
      case "checkbox":
        if (!this.value) this.emit_input(this.lay.value[0]);
        break;
      case "tel":
        this.emit_input(this.value || "");
    }
  },
  methods: {
    emit_input(e: any) {
      if (typeof e == "string") e = { target: { value: e } };
      if (this.lay.type == "tel") {
        let s = String(e.target.value).replace(/-/g, "");
        s = s.substring(0, 3) + "-" + s.substring(3, 6) + "-" + s.substring(6);
        e.target.value = _.trimEnd(s, "-");
      }
      this.align_select_center();
      this.$emit("input", e);
    },
    align_select_center() {
      const elems = document.getElementsByTagName("select");
      for (const e of elems) {
        const txtsz = getTextWidth(e);
        const boxsz = e.clientWidth;
        const pad = (boxsz - txtsz) / 2;
        e.style.paddingLeft = pad + "px";
        e.style.paddingRight = pad + "px";
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.$nextTick(this.align_select_center);
    }
  }
});
</script>

<style lang="scss">
.b-radio.radio input[type="radio"] + .check,
.b-checkbox.checkbox input[type="checkbox"] + .check {
  border-color: white !important;
}
.checkbox,
.radio {
  &:hover {
    color: inherit !important;
  }
}
.control.has-icons-left .icon {
  color: white !important;
}
</style>
