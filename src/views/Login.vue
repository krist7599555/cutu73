<template lang="pug">
  form(@submit='submit')
    .field: .control
      input.input.is-light(v-model='username' required type='text' placeholder='student id' minlength='8' maxlength="10")
    .field: .control
      input.input.is-light(v-model='password' required type='password' placeholder='password')
    .field.is-grouped
      .control
        button.button.is-danger.is-outlined.is-inverted login
      .control 
        div(style='font-size: 0.8rem') * รหัสตาม reg chula
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { AxiosError } from "axios";

export default Vue.extend({
  data() {
    return {
      username: process.env.NODE_ENV == "production" ? "" : "6031301721",
      password: "",
      loading: false
    };
  },
  methods: {
    submit(e: any) {
      e.preventDefault();
      const loadingComponent = this.$loading.open({
        container: null
      });
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })

        .then(() => {
          this.$toast.open({
            type: "is-success",
            message: "login success",
            position: "is-top",
            duration: 3000
          });
          this.$emit("success");
        })
        .catch((e: AxiosError) => {
          // alert(e);
          console.log(e.response);
          this.$toast.open({
            type: "is-danger",
            message: _.get(e, "response.data") || "login fail",
            position: "is-top",
            duration: 3000
          });
        })
        .finally(loadingComponent.close);
    }
  }
});
</script>

<style lang="scss" scoped></style>
