<template>
  <div>
    <div>
      <b-field class="file">
        <b-upload
          v-model="file"
          @input="uploadImg($event)"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          :multiple="false"
          :drag-drop="false"
        >
          <a class="button is-success is-fullwidth">
            <b-icon pack="fas" icon="file-image"></b-icon>
            <span>Click to upload</span>
          </a>
        </b-upload>
        <!-- <span class="file-name" v-if="file">{{ file.name }}</span> -->
      </b-field>
    </div>
    <div style="height: 7px" />
    <div v-if="value && !modelSrc">
      <figure class="image" style="border-radius: 4px; overflow: hidden">
        <img :src="value + time" />
        <!-- <span>{{ value }} {{ time }}</span> -->
      </figure>
    </div>
    <div v-if="modelSrc" style="position: fixed; top: 0; left: 0; z-index: 6">
      <div class="model" v-show="model" @click="model = false">
        <div class="model-show"><img :src="modelSrc" alt /></div>
      </div>

      <div class="cut">
        <vue-cropper
          ref="cropper"
          :img="modelSrc"
          :output-size="1"
          output-type="png"
          :info="true"
          :full="true"
          :can-move="false"
          :can-move-box="true"
          :fixed-box="false"
          :original="false"
          :auto-crop="true"
          :centerBox="true"
          :high="false"
          :fixedNumber="[3, 4]"
          :fixed="true"
          :canScale="true"
          :infoTrue="true"
        ></vue-cropper>
      </div>
      <div class="test-button" style="position: absolute; right: 0; top: 0;">
        <button type="button" class="btn" @click="finish('blob')">
          finish
        </button>
        <button type="button" class="btn" @click="cancel">cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import compressBlob from "./blobImageResize";
// @ts-ignore
import VueCropper from "../components/vue-cropper/vue-cropper";
export default Vue.extend({
  components: {
    VueCropper
  },
  props: {
    className: {},
    filename: {
      default: "NONAME"
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      model: false,
      modelSrc: "",
      crap: false,
      show: true,
      img: "",
      file: null as File | null,
      time: ""
    };
  },
  methods: {
    startCrop() {
      this.crap = true;
      // @ts-ignore
      this.$refs.cropper.startCrop();
    },
    stopCrop() {
      this.crap = false;
      // @ts-ignore
      this.$refs.cropper.stopCrop();
    },
    clearCrop() {
      // @ts-ignore
      this.$refs.cropper.clearCrop();
    },
    refreshCrop() {
      // @ts-ignore
      this.$refs.cropper.refresh();
    },
    changeScale(num: number) {
      num = num || 1;
      // @ts-ignore
      this.$refs.cropper.changeScale(num);
    },
    cancel() {
      this.modelSrc = "";
      // @ts-ignore
      this.$refs.uploadSelect.value = "";
    },
    finish(type: string) {
      if (type === "blob") {
        // @ts-ignore
        this.$refs.cropper.getCropBlob(data => {
          this.upload(data);
        });
      } else {
        throw "base 64 not implement";
      }
    },
    async upload(blob: Blob) {
      const loadingComponent = this.$loading.open({
        container: null
      });
      await Promise.all(
        ["jpeg", "png"].map(async typ => {
          return this.$store.dispatch("file/uploadImage", {
            image: await compressBlob(blob),
            name: String(this.filename) + "." + typ,
            path: "/user"
          });
        })
      )
        .then(urls => {
          for (let url of urls) {
            console.log(url);
            this.$emit("input", url);
            this.modelSrc = "";
            this.time = "?t=" + new Date().getTime();
          }
        })
        .catch(err => {
          alert("error occur via upload");
          console.error(err);
        })
        .finally(() => {
          this.file = null;
          loadingComponent.close();
        });
    },
    uploadImg() {
      console.log(this.file);
      if (this.file === null) return;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(this.file.name)) {
        alert("no image select");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data =
          // @ts-ignore
          typeof e.target.result === "object"
            ? // @ts-ignore
              // @ts-ignore
              window.URL.createObjectURL(new Blob([e.target.result]))
            : // @ts-ignore
              // @ts-ignore
              e.target.result;
        this.modelSrc = data;
      };
      // reader.readAsDataURL(file); // base64
      reader.readAsArrayBuffer(this.file); // blob
    }
  }
});
</script>

<style lang="scss" scoped>
.input[type="file"] {
  text-align-last: left;
}
* {
  margin: 0;
  padding: 0;
}

.cut {
  width: 100vw;
  height: 100vh;
  // margin: 30px auto;
}

.c-item {
  max-width: 800px;
  margin: 10px auto;
  margin-top: 20px;
}

.content {
  margin: auto;
  max-width: 1200px;
  margin-bottom: 100px;
}

.test-button {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.btn {
  // display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 20px 10px 0px 0px;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
}

.des {
  line-height: 30px;
}

code.language-html {
  padding: 10px 20px;
  margin: 10px 0px;
  display: block;
  background-color: #333;
  color: #fff;
  overflow-x: auto;
  font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo,
    Lucida, Sans, Type, Writer, Ubuntu, Mono;
  border-radius: 5px;
  white-space: pre;
}

.show-info {
  margin-bottom: 50px;
}

.show-info h2 {
  line-height: 50px;
}

.title {
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  margin: 20px 0px;
  background-image: -webkit-linear-gradient(
    left,
    #3498db,
    #f47920 10%,
    #d71345 20%,
    #f7acbc 30%,
    #ffd400 40%,
    #3498db 50%,
    #f47920 60%,
    #d71345 70%,
    #f7acbc 80%,
    #ffd400 90%,
    #3498db
  );
  color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: slide 5s infinite linear;
  font-size: 40px;
}

.test {
  height: 500px;
}

.model {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}

.model-show {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.model img {
  display: block;
  margin: auto;
  max-width: 80%;
  user-select: none;
  background-position: 0px 0px, 10px 10px;
  background-size: 20px 20px;
  background-image: linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee 100%
    ),
    linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
}

.c-item {
  display: block;
  user-select: none;
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
