<template>
  <div>
    <div>
      <input
        type="file"
        id="uploads"
        :class="className"
        style="text-align-last: left"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1);"
      />
      <!-- style="position:absolute; clip:rect(0 0 0 0);" -->
    </div>
    <div v-if="value && !modelSrc">
      <figure class="image"><img :src="value + time" /></figure>
    </div>
    <div v-if="modelSrc" style="position: fixed; top: 0; left: 0; z-index: 6">
      <div class="model" v-show="model" @click="model = false;">
        <div class="model-show"><img :src="modelSrc" alt="" /></div>
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
          :center-box="true"
          @real-time="realTime"
          :high="false"
          @img-load="imgLoad"
          :fixedNumber="[3, 4]"
          :fixed="true"
          :canScale="true"
          :infoTrue="true"
        ></vue-cropper>
      </div>
      <div class="test-button" style="position: absolute; right: 0; top: 0;">
        <button class="btn" @click="finish('blob');">finish</button>
        <!-- <button class="btn" @click="finish('base64');">base64</button> -->
        <button class="btn" @click="img = '';">cancel</button>
        <!-- <label class="btn" for="uploads">upload</label> -->
        <!--
          <input
            type="file"
            id="uploads"
            style="position:absolute; clip:rect(0 0 0 0);"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event, 1);"
          />
        -->
        <!--
          <button @click="startCrop" v-if="!crap" class="btn">start</button>
          <button @click="stopCrop" v-else class="btn">stop</button>
          <button @click="clearCrop" class="btn">clear</button>
          <button @click="refreshCrop" class="btn">refresh</button>
          <button @click="changeScale(1);" class="btn">+</button>
          <button @click="changeScale(-1);" class="btn">-</button>
          <button @click="finish('base64');" class="btn">preview(base64)</button>
          <button @click="finish('blob');" class="btn">preview(blob)</button>
          <a @click="down('base64');" class="btn">download(base64)</a>
          <a @click="down('blob');" class="btn">download(blob)</a>
        -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { VueCropper } from "vue-cropper";
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
      file: null,
      time: ""
    };
  },
  methods: {
    startCrop() {
      // start
      this.crap = true;
      // @ts-ignore
      this.$refs.cropper.startCrop();
    },
    stopCrop() {
      //  stop
      this.crap = false;
      // @ts-ignore
      this.$refs.cropper.stopCrop();
    },
    clearCrop() {
      // clear
      // @ts-ignore
      this.$refs.cropper.clearCrop();
    },
    refreshCrop() {
      // clear
      // @ts-ignore
      this.$refs.cropper.refresh();
    },
    changeScale(num: number) {
      num = num || 1;
      // @ts-ignore
      this.$refs.cropper.changeScale(num);
    },
    finish(type: string) {
      // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === "blob") {
        // @ts-ignore
        this.$refs.cropper.getCropBlob(data => {
          console.log(data);
          // this.model = true;
          this.modelSrc = window.URL.createObjectURL(data);
          this.upload(data);
        });
      } else {
        throw "base 64 not implement";
        // // @ts-ignore
        // this.$refs.cropper.getCropData(data => {
        //   // this.model = true;
        //   this.modelSrc = data;
        //   this.$emit("input", data);
        // });
      }
    },
    upload(blob: Blob) {
      console.log(blob, typeof blob);
      let data = new FormData();
      data.append("image", blob, this.filename);
      this.$store.dispatch("upload", data).then(url => {
        console.log("FINISH");
        this.$emit("input", url);
        this.modelSrc = ""; //.replace("http:", "https:");
        this.time = "?t=" + new Date().getTime();
      });
    },
    realTime(data: any) {
      console.log("REALTIME", data);
    },
    // down(type: string) {
    //   // event.preventDefault()
    //   var aLink = document.createElement("a");
    //   aLink.download = "demo";
    //   // 输出
    //   if (type === "blob") {
    //     this.$refs.cropper.getCropBlob(data => {
    //       this.downImg = window.URL.createObjectURL(data);
    //       aLink.href = window.URL.createObjectURL(data);
    //       aLink.click();
    //     });
    //   } else {
    //     this.$refs.cropper.getCropData(data => {
    //       this.downImg = data;
    //       aLink.href = data;
    //       aLink.click();
    //     });
    //   }
    // },
    uploadImg(e: any) {
      console.log("UPLOAD IMAGE");
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
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
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg: any) {
      console.log(msg);
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
  display: inline-block;
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
