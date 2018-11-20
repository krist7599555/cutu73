<template lang="pug">
div
  .field
    input.input(type='file' @change='change' @upload='upload' accept='image/png, image/jpg, image/jpeg')
  .field(v-if='image')
    img(:src='image' style='max-width: 100%')
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: String,
      default: "NONAME"
    },
    filename: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      image: this.value,
      file: null as Blob | null
    };
  },
  methods: {
    change(e: any) {
      this.image = "";
      this.file = e.target.files[0];
      this.upload();
    },
    upload() {
      if (!this.file) {
        alert("no file select");
        return;
      }
      console.log("file", this.file);
      console.log("filename", this.filename);
      if (!this.filename) {
        alert("no file name props");
        return;
      }
      let data = new FormData();
      data.append("image", this.file, this.filename);
      this.$store
        .dispatch("upload", data)
        .then((response: any) => {
          this.image = response + "?t=" + new Date().getTime();
          this.$forceUpdate();
          this.$emit("input", response);
        })
        .catch(function(response: any) {
          console.log("ERROR", response);
        });
    }
  }
});
</script>

<style lang="scss" scoped></style>
