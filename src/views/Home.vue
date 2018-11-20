<template lang="pug">
div
  Head
    button.button(v-if='auth' style='position: absolute; top: 0; right: 0' @click='$store.dispatch("logout")') logout
    Login(v-if='!auth')
    Form(v-else)
  Footer
</template>

<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Head from "./Head.vue";
import Form from "./Form.vue";
import Footer from "./Footer.vue";
import Login from "./Login.vue";

@Component({
  computed: mapGetters(["auth"]),
  components: {
    Head,
    Login,
    Form,
    Footer
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
