<template lang="pug">
.control
  p.help(v-if='lay.desc') {{lay.desc}}
  template(v-if='lay.type == "hr"')
    hr
  template(v-if='lay.type == "br"')
    br
  template(v-else-if='lay.type == "radio"')
    b-field
      b-radio(
        type='is-light'
        v-for='itm in lay.value' 
        :value='value'
        @input='emit_input' 
        :native-value='itm'
        :key='itm.id'
      ) {{itm}}
  //- template(v-else-if='lay.type == "checkbox"')
  //-   .field
  //-     b-checkbox(
  //-       type='is-light'
  //-       :value='value'
  //-       @input='emit_input' 
  //-       :true-value="lay.value[1]"
  //-       :false-value="lay.value[0]"
  //-     ) {{value}}
  template(v-else-if='lay.type == "disable"')
    b-field
      b-input(:value='value' @input='emit_input' disabled)
  template(v-else-if='(lay.type == "tel" || lay.type == "text") && lay.icon')
    b-field
      b-input(:type='lay.type' :icon-pack='lay.iconpack' :icon='lay.icon' :value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='(lay.type == "tel" || lay.type == "text")')
    b-field
      b-input(:type='lay.type' :value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='lay.type == "textarea"')
    b-field
      b-input(type='textarea' :value='value' @input='emit_input' :placeholder="lay.placeholder" :required='lay.required')
  template(v-else-if='lay.type == "select" && lay.icon')
    b-field(type='is-white')
      b-select(:icon-pack='lay.iconpack' expanded :icon='lay.icon' :value='value' @input='emit_input' :required='lay.required' :disabled='lay.disabled')
        option
        option(v-for='v in lay.value' :value='v') {{v}}

  template(v-else-if='lay.type == "select"')
    b-field(type='is-white')
      b-select(expanded :value='value' @input='emit_input' :required='lay.required' :disabled='lay.disabled')
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
    input.input(disabled :value='`unrender type: ${lay.type}`' style='background-color: blue') 
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

function getTextWidth(elem: HTMLSelectElement) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.font = `${elem.style.fontSize}px ${elem.style.fontFamily}`;
  // console.log(context.font, elem.style.fontFamily, elem.style);
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
    this.$nextTick(this.align_select_center);
  },
  mounted() {
    this.align_select_center();
    this.$forceUpdate();
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
        e.style.fontFamily = "ChulaNew";
        e.style.marginLeft = "0";
        const txtsz = getTextWidth(e);
        const boxsz = e.offsetWidth;
        const pad = (boxsz - txtsz) / 2;
        if (window.outerWidth <= 768) {
          e.style.paddingLeft = pad - 13 + "px";
          e.style.paddingRight = 0 + "px";
        } else {
          e.style.paddingLeft = pad + "px";
          e.style.paddingRight = 0 + "px";
        }
        // console.log(pad);
        // console.log(e.style.paddingLeft, e.style.paddingRight);
        // if (window.outerWidth <= 768)
        //   e.style.paddingRight = e.style.paddingLeft = 0 + "px";
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
