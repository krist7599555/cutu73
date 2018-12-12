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
    //- .field {{FUCK}}
      //- b-checkbox(:value='value', type='is-info') Info
    //- p.content
    //-   b Selection: {{ radio }}
  template(v-else-if='lay.type == "disable"')
    input.input(:value='value' @input='emit_input' disabled)
  template(v-else-if='lay.type == "text"')
    input.input(:value='value' @input='emit_input' :required='lay.required')
  template(v-else-if='lay.type == "textarea"')
    textarea.textarea(:value='value' @input='emit_input' :placeholder="lay.placeholder" required)
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

export default Vue.extend({
  props: ["lay", "value"],
  created() {
    switch (this.lay.type) {
      case "checkbox":
        if (!this.value) this.emit_input(this.lay.value[0]);
    }
  },
  methods: {
    emit_input(e: any) {
      if (typeof e == "string") e = { target: { value: e } };
      // console.log("input", e);
      this.$emit("input", e);
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
</style>
