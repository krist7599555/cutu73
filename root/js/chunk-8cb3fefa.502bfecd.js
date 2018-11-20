(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-8cb3fefa"],
  {
    "65b3": function(t, o, e) {},
    c357: function(t, o, e) {
      "use strict";
      e.r(o);
      var n = function() {
          var t = this,
            o = t.$createElement,
            e = t._self._c || o;
          return e("div", [
            e(
              "div",
              { staticClass: "cut" },
              [
                e("vue-cropper", {
                  ref: "cropper",
                  attrs: { img: t.option.img }
                })
              ],
              1
            ),
            e("div", { staticClass: "test-button" }, [
              e("button", { staticClass: "btn", on: { click: t.changeImg } }, [
                t._v("changeImg")
              ]),
              e("label", { staticClass: "btn", attrs: { for: "uploads" } }, [
                t._v("upload")
              ]),
              e("input", {
                staticStyle: { position: "absolute", clip: "rect(0 0 0 0)" },
                attrs: {
                  type: "file",
                  id: "uploads",
                  accept: "image/png, image/jpeg, image/gif, image/jpg"
                },
                on: {
                  change: function(o) {
                    t.uploadImg(o, 1);
                  }
                }
              }),
              t.crap
                ? e(
                    "button",
                    { staticClass: "btn", on: { click: t.stopCrop } },
                    [t._v("stop")]
                  )
                : e(
                    "button",
                    { staticClass: "btn", on: { click: t.startCrop } },
                    [t._v("start")]
                  ),
              e("button", { staticClass: "btn", on: { click: t.clearCrop } }, [
                t._v("clear")
              ]),
              e(
                "button",
                { staticClass: "btn", on: { click: t.refreshCrop } },
                [t._v("refresh")]
              ),
              e(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.changeScale(1);
                    }
                  }
                },
                [t._v("+")]
              ),
              e(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.changeScale(-1);
                    }
                  }
                },
                [t._v("-")]
              ),
              e("button", { staticClass: "btn", on: { click: t.rotateLeft } }, [
                t._v("rotateLeft")
              ]),
              e(
                "button",
                { staticClass: "btn", on: { click: t.rotateRight } },
                [t._v("rotateRight")]
              ),
              e(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.finish("base64");
                    }
                  }
                },
                [t._v("preview(base64)")]
              ),
              e(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.finish("blob");
                    }
                  }
                },
                [t._v("preview(blob)")]
              ),
              e(
                "a",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.down("base64");
                    }
                  }
                },
                [t._v("download(base64)")]
              ),
              e(
                "a",
                {
                  staticClass: "btn",
                  on: {
                    click: function(o) {
                      t.down("blob");
                    }
                  }
                },
                [t._v("download(blob)")]
              )
            ])
          ]);
        },
        c = [],
        i = e("53ca"),
        r = (e("cadf"), e("551c"), e("097d"), e("7e79")),
        a = {
          components: { VueCropper: r["VueCropper"] },
          data: function() {
            return {
              model: !1,
              modelSrc: "",
              crap: !1,
              previews: {},
              lists: [
                {
                  img:
                    "https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG"
                },
                {
                  img:
                    "https://avatars2.githubusercontent.com/u/15681693?s=460&v=4"
                }
              ],
              option: {
                img:
                  "https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG",
                size: 1,
                full: !0,
                outputType: "png",
                canMove: !0,
                fixedBox: !1,
                original: !1,
                canMoveBox: !0,
                autoCrop: !0,
                canScale: !0,
                centerBox: !0,
                high: !1,
                fixedNumber: [3, 4],
                fixed: !0,
                infoTrue: !0
              },
              show: !0
            };
          },
          methods: {
            changeImg: function() {
              this.option.img = this.lists[
                ~~(Math.random() * this.lists.length)
              ].img;
            },
            startCrop: function() {
              (this.crap = !0), this.$refs.cropper.startCrop();
            },
            stopCrop: function() {
              (this.crap = !1), this.$refs.cropper.stopCrop();
            },
            clearCrop: function() {
              this.$refs.cropper.clearCrop();
            },
            refreshCrop: function() {
              this.$refs.cropper.refresh();
            },
            changeScale: function(t) {
              (t = t || 1), this.$refs.cropper.changeScale(t);
            },
            rotateLeft: function() {
              this.$refs.cropper.rotateLeft();
            },
            rotateRight: function() {
              this.$refs.cropper.rotateRight();
            },
            finish: function(t) {
              var o = this;
              "blob" === t
                ? this.$refs.cropper.getCropBlob(function(t) {
                    console.log(t);
                    var e = window.URL.createObjectURL(t);
                    (o.model = !0), (o.modelSrc = e);
                  })
                : this.$refs.cropper.getCropData(function(t) {
                    (o.model = !0), (o.modelSrc = t);
                  });
            },
            realTime: function(t) {
              (this.previews = t), console.log(t);
            },
            finish2: function(t) {
              var o = this;
              this.$refs.cropper2.getCropData(function(t) {
                (o.model = !0), (o.modelSrc = t);
              });
            },
            finish3: function(t) {
              var o = this;
              this.$refs.cropper3.getCropData(function(t) {
                (o.model = !0), (o.modelSrc = t);
              });
            },
            down: function(t) {
              var o = this,
                e = document.createElement("a");
              (e.download = "demo"),
                "blob" === t
                  ? this.$refs.cropper.getCropBlob(function(t) {
                      (o.downImg = window.URL.createObjectURL(t)),
                        (e.href = window.URL.createObjectURL(t)),
                        e.click();
                    })
                  : this.$refs.cropper.getCropData(function(t) {
                      (o.downImg = t), (e.href = t), e.click();
                    });
            },
            uploadImg: function(t, o) {
              var e = this,
                n = t.target.files[0];
              if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(t.target.value))
                return alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"), !1;
              var c = new FileReader();
              (c.onload = function(t) {
                var n;
                (n =
                  "object" === Object(i["a"])(t.target.result)
                    ? window.URL.createObjectURL(new Blob([t.target.result]))
                    : t.target.result),
                  1 === o
                    ? (e.option.img = n)
                    : 2 === o && (e.example2.img = n);
              }),
                c.readAsArrayBuffer(n);
            },
            imgLoad: function(t) {
              console.log(t);
            }
          }
        },
        s = a,
        p = (e("f0c5"), e("2877")),
        l = Object(p["a"])(s, n, c, !1, null, "ece00570", null);
      l.options.__file = "Crop.vue";
      o["default"] = l.exports;
    },
    f0c5: function(t, o, e) {
      "use strict";
      var n = e("65b3"),
        c = e.n(n);
      c.a;
    }
  }
]);
//# sourceMappingURL=chunk-8cb3fefa.502bfecd.js.map
