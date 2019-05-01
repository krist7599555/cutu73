<template lang="pug">
div
  Head
    .trans-input 
      button.button(v-if='auth' style='position: absolute; top: 0; right: 0' @click='$store.dispatch("auth/logout")') logout
    //- h1.title(style='margin: 6px') ปิดระบบ รอบที่ 1
    Login(v-if='!auth')
    Form(v-else)
  Footer
</template>

<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Head from "./Head.vue";
import Form from "./Form.vue";
import Footer from "./Footer.vue";
import Login from "./Login.vue";

@Component({
  components: {
    Head,
    Login,
    Form,
    Footer
  }
})
export default class Home extends Vue {
  @Getter("auth/auth") auth: any;
}
</script>

<style lang="scss" scoped></style>
