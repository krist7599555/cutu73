(function(e) {
  function t(t) {
    for (
      var a, n, o = t[0], l = t[1], u = t[2], c = 0, f = [];
      c < o.length;
      c++
    )
      (n = o[c]), i[n] && f.push(i[n][0]), (i[n] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    d && d(t);
    while (f.length) f.shift()();
    return s.push.apply(s, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], a = !0, n = 1; n < r.length; n++) {
        var o = r[n];
        0 !== i[o] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    i = { app: 0 },
    s = [];
  function o(e) {
    return (
      l.p +
      "js/" +
      ({}[e] || e) +
      "." +
      { "chunk-8cb3fefa": "502bfecd" }[e] +
      ".js"
    );
  }
  function l(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.e = function(e) {
    var t = [],
      r = { "chunk-8cb3fefa": 1 };
    n[e]
      ? t.push(n[e])
      : 0 !== n[e] &&
        r[e] &&
        t.push(
          (n[e] = new Promise(function(t, r) {
            for (
              var a =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  { "chunk-8cb3fefa": "3af59f46" }[e] +
                  ".css",
                n = l.p + a,
                i = document.getElementsByTagName("link"),
                s = 0;
              s < i.length;
              s++
            ) {
              var o = i[s],
                u = o.getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (u === a || u === n)) return t();
            }
            var c = document.getElementsByTagName("style");
            for (s = 0; s < c.length; s++) {
              (o = c[s]), (u = o.getAttribute("data-href"));
              if (u === a || u === n) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function(t) {
                var a = (t && t.target && t.target.src) || n,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (i.request = a), r(i);
              }),
              (f.href = n);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(f);
          }).then(function() {
            n[e] = 0;
          }))
        );
    var a = i[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var s = new Promise(function(t, r) {
          a = i[e] = [t, r];
        });
        t.push((a[2] = s));
        var u,
          c = document.getElementsByTagName("head")[0],
          f = document.createElement("script");
        (f.charset = "utf-8"),
          (f.timeout = 120),
          l.nc && f.setAttribute("nonce", l.nc),
          (f.src = o(e)),
          (u = function(t) {
            (f.onerror = f.onload = null), clearTimeout(d);
            var r = i[e];
            if (0 !== r) {
              if (r) {
                var a = t && ("load" === t.type ? "missing" : t.type),
                  n = t && t.target && t.target.src,
                  s = new Error(
                    "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")"
                  );
                (s.type = a), (s.request = n), r[1](s);
              }
              i[e] = void 0;
            }
          });
        var d = setTimeout(function() {
          u({ type: "timeout", target: f });
        }, 12e4);
        (f.onerror = f.onload = u), c.appendChild(f);
      }
    return Promise.all(t);
  }),
    (l.m = e),
    (l.c = a),
    (l.d = function(e, t, r) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (l.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          l.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "/"),
    (l.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var f = 0; f < u.length; f++) t(u[f]);
  var d = c;
  s.push([0, "chunk-vendors"]), r();
})({
  0: function(e, t, r) {
    e.exports = r("cd49");
  },
  3782: function(e, t, r) {},
  "3bc4": function(e, t, r) {
    "use strict";
    var a = r("c79b"),
      n = r.n(a);
    n.a;
  },
  "46a3": function(e) {
    e.exports = {
      21: { th: "วิศวกรรมศาสตร์", en: "ENGINEERING" },
      22: { th: "อักษรศาสตร์", en: "ARTS" },
      23: { th: "วิทยาศาสตร์", en: "SCIENCE" },
      24: { th: "รัฐศาสตร์", en: "POLITICAL SCIENCE" },
      25: { th: "สถาปัตยกรรมศาสตร์", en: "ARCHITECTURE" },
      26: { th: "พาณิชยศาสตร์และการบัญชี", en: "COMMERCE AND ACCOUNTANCY" },
      27: { th: "ครุศาสตร์", en: "EDUCATION" },
      28: { th: "นิเทศศาสตร์", en: "COMMUNICATION ARTS" },
      29: { th: "เศรษฐศาสตร์", en: "ECONOMICS" },
      30: { th: "แพทยศาสตร์", en: "MEDICINE" },
      31: { th: "สัตวแพทยศาสตร์", en: "VETERINARY SCIENCE" },
      32: { th: "ทันตแพทยศาสตร์", en: "DENTISTRY" },
      33: { th: "เภสัชศาสตร์", en: "PHARMACEUTICAL SCIENCES" },
      34: { th: "นิติศาสตร์", en: "LAW" },
      35: { th: "ศิลปกรรมศาสตร์", en: "FINE AND APPLIED ARTS" },
      36: { th: "พยาบาลศาสตร์", en: "NURSING" },
      37: { th: "สหเวชศาสตร์", en: "ALLIED HEALTH SCIENCES" },
      38: { th: "จิตวิทยา", en: "PSYCHOLOGY" },
      39: { th: "วิทยาศาสตร์การกีฬา", en: "SPORTS SCIENCE" },
      40: { th: "สํานักวิชาทรัพยากรการเกษตร", en: "SCHOOL OF AGRICULTURAL" }
    };
  },
  "56e3": function(e, t, r) {
    "use strict";
    r.r(t),
      (t["default"] = [
        { label: "คำนำหน้า", type: "select", value: ["นาย", "นางสาว"] },
        { label: "ชื่อ", type: "disable" },
        { label: "สกุล", type: "disable" },
        { label: "เพศ", type: "select", value: ["ชาย", "หญิง"] },
        { label: "รหัสนิสิต", type: "disable" },
        { label: "ชั้นปี", type: "disable" },
        { label: "คณะ", type: "disable" },
        { label: "รหัสคณะ", type: "disable" },
        { type: "br" },
        { type: "br" },
        { label: "เบอร์โทร", type: "text" },
        { type: "br" },
        {
          label: "ฝ่าย",
          type: "select",
          value: [
            "ผู้เข้าร่วมงาน",
            "บัตรและอุปกรณ์",
            "ATและทะเบียน",
            "ถ่ายภาพ",
            "วิทยุสื่อสาร",
            "สวัสดิการ",
            "สถานที่",
            "พยาบาล",
            "ประสาน กบจ.",
            "ประสานจุดนัดพบ",
            "ประสานขบวน",
            "หลบฝน",
            "ประธานจัดงาน",
            "รองประธานจัดงาน",
            "อำนวยการ 1",
            "อำนวยการ 2",
            "ประสาน",
            "เลขา",
            "เหรัญญิก"
          ]
        },
        { label: "หอใน", type: "select", value: ["ไม่อยู่", "อยู่"] }
      ]);
  },
  6129: function(e, t, r) {},
  7065: function(e, t, r) {
    "use strict";
    var a = r("3782"),
      n = r.n(a);
    n.a;
  },
  "76a1": function(e, t, r) {
    "use strict";
    var a = r("ee55"),
      n = r.n(a);
    n.a;
  },
  "7ea0": function(e, t, r) {
    "use strict";
    var a = r("cb35"),
      n = r.n(a);
    n.a;
  },
  "9c88": function(e, t, r) {
    "use strict";
    r.r(t);
    var a = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", [
          r("div", [
            r("input", {
              class: e.className,
              staticStyle: { "text-align-last": "left" },
              attrs: {
                type: "file",
                id: "uploads",
                accept: "image/png, image/jpeg, image/gif, image/jpg"
              },
              on: {
                change: function(t) {
                  e.uploadImg(t, 1);
                }
              }
            })
          ]),
          e.value && !e.modelSrc
            ? r("div", [
                r("figure", { staticClass: "image" }, [
                  r("img", { attrs: { src: e.value + e.time } })
                ])
              ])
            : e._e(),
          e.modelSrc
            ? r(
                "div",
                {
                  staticStyle: {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    "z-index": "6"
                  }
                },
                [
                  r(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.model,
                          expression: "model"
                        }
                      ],
                      staticClass: "model",
                      on: {
                        click: function(t) {
                          e.model = !1;
                        }
                      }
                    },
                    [
                      r("div", { staticClass: "model-show" }, [
                        r("img", { attrs: { src: e.modelSrc, alt: "" } })
                      ])
                    ]
                  ),
                  r(
                    "div",
                    { staticClass: "cut" },
                    [
                      r("vue-cropper", {
                        ref: "cropper",
                        attrs: {
                          img: e.modelSrc,
                          "output-size": 1,
                          "output-type": "png",
                          info: !0,
                          full: !0,
                          "can-move": !1,
                          "can-move-box": !0,
                          "fixed-box": !1,
                          original: !1,
                          "auto-crop": !0,
                          "center-box": !0,
                          high: !1,
                          fixedNumber: [3, 4],
                          fixed: !0,
                          canScale: !0,
                          infoTrue: !0
                        },
                        on: { "real-time": e.realTime, "img-load": e.imgLoad }
                      })
                    ],
                    1
                  ),
                  r(
                    "div",
                    {
                      staticClass: "test-button",
                      staticStyle: {
                        position: "absolute",
                        right: "0",
                        top: "0"
                      }
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "btn",
                          on: {
                            click: function(t) {
                              e.finish("blob");
                            }
                          }
                        },
                        [e._v("finish")]
                      ),
                      r(
                        "button",
                        {
                          staticClass: "btn",
                          on: {
                            click: function(t) {
                              e.img = "";
                            }
                          }
                        },
                        [e._v("cancel")]
                      )
                    ]
                  )
                ]
              )
            : e._e()
        ]);
      },
      n = [],
      i = r("53ca"),
      s = (r("cadf"), r("551c"), r("097d"), r("2b0e")),
      o = r("7e79"),
      l = s["default"].extend({
        components: { VueCropper: o["VueCropper"] },
        props: {
          className: {},
          filename: { default: "NONAME" },
          value: { type: String, default: null }
        },
        data: function() {
          return {
            model: !1,
            modelSrc: "",
            crap: !1,
            show: !0,
            img: "",
            file: null,
            time: ""
          };
        },
        methods: {
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
          changeScale: function(e) {
            (e = e || 1), this.$refs.cropper.changeScale(e);
          },
          finish: function(e) {
            var t = this;
            if ("blob" !== e) throw "base 64 not implement";
            this.$refs.cropper.getCropBlob(function(e) {
              console.log(e),
                (t.modelSrc = window.URL.createObjectURL(e)),
                t.upload(e);
            });
          },
          upload: function(e) {
            var t = this;
            console.log(e, Object(i["a"])(e));
            var r = new FormData();
            r.append("image", e, this.filename),
              this.$store.dispatch("upload", r).then(function(e) {
                console.log("FINISH"),
                  t.$emit("input", e),
                  (t.modelSrc = ""),
                  (t.time = "?t=" + new Date().getTime());
              });
          },
          realTime: function(e) {
            console.log("REALTIME", e);
          },
          uploadImg: function(e) {
            var t = this;
            console.log("UPLOAD IMAGE");
            var r = e.target.files[0];
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value))
              return alert("no image select"), !1;
            var a = new FileReader();
            (a.onload = function(e) {
              var r =
                "object" === Object(i["a"])(e.target.result)
                  ? window.URL.createObjectURL(new Blob([e.target.result]))
                  : e.target.result;
              t.modelSrc = r;
            }),
              a.readAsArrayBuffer(r);
          },
          imgLoad: function(e) {
            console.log(e);
          }
        }
      }),
      u = l,
      c = (r("9eb4"), r("2877")),
      f = Object(c["a"])(u, a, n, !1, null, "45da64a0", null);
    f.options.__file = "File.vue";
    t["default"] = f.exports;
  },
  "9eb4": function(e, t, r) {
    "use strict";
    var a = r("c2c5"),
      n = r.n(a);
    n.a;
  },
  bf5c: function(e, t, r) {},
  c2c5: function(e, t, r) {},
  c2f0: function(e, t, r) {},
  c79b: function(e, t, r) {},
  cb35: function(e, t, r) {},
  cd49: function(e, t, r) {
    "use strict";
    r.r(t);
    r("cadf"), r("551c"), r("097d");
    var a = r("2b0e"),
      n = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { attrs: { id: "app" } }, [r("router-view")], 1);
      },
      i = [],
      s = r("2877"),
      o = {},
      l = Object(s["a"])(o, n, i, !1, null, null, null);
    l.options.__file = "App.vue";
    var u = l.exports,
      c = r("8c4f"),
      f = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          [
            r(
              "Head",
              [
                e.auth
                  ? r(
                      "button",
                      {
                        staticClass: "button",
                        staticStyle: {
                          position: "absolute",
                          top: "0",
                          right: "0"
                        },
                        on: {
                          click: function(t) {
                            e.$store.dispatch("logout");
                          }
                        }
                      },
                      [e._v("logout")]
                    )
                  : e._e(),
                e.auth ? r("Form") : r("Login")
              ],
              1
            ),
            r("Footer")
          ],
          1
        );
      },
      d = [],
      p = r("d4ec"),
      m = r("99de"),
      h = r("7e84"),
      v = r("262e"),
      g = r("9ab4"),
      b = r("60a3"),
      _ = r("2f62"),
      C = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          {
            staticClass: "section hero is-fullheight is-danger bg",
            staticStyle: { "min-height": "75vh" }
          },
          [
            r("div", { staticClass: "hero-body" }, [
              r("div", { staticClass: "container" }, [
                r("div", { staticClass: "title is-size-1" }, [e._v("CUTU73")]),
                r("div", { staticClass: "subtitle" }),
                r("br"),
                r("div", [e._t("default")], 2),
                r("br")
              ])
            ])
          ]
        );
      },
      y = [],
      w = {},
      x = w,
      E = (r("7ea0"), Object(s["a"])(x, C, y, !1, null, "2936230a", null));
    E.options.__file = "Head.vue";
    var O = E.exports,
      S = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return e.auth && e.form_result
          ? r(
              "form",
              { on: { submit: e.submit } },
              [
                r("div", { staticClass: "field is-narrow is-horizontal" }, [
                  e._m(0),
                  r("div", { staticClass: "field-body" }, [
                    r("div", { staticClass: "field" }, [
                      r(
                        "div",
                        { staticClass: "control" },
                        [
                          r("File", {
                            attrs: {
                              className: "input",
                              filename: e.form_result.รหัสนิสิต
                            },
                            model: {
                              value: e.form_result.image,
                              callback: function(t) {
                                e.$set(e.form_result, "image", t);
                              },
                              expression: "form_result.image"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                e._l(e.form_layout, function(t) {
                  return r(
                    "div",
                    { staticClass: "field is-narrow is-horizontal" },
                    [
                      r("div", { staticClass: "field-label is-normal" }, [
                        r(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !t.hidden_label,
                                expression: "!lay.hidden_label"
                              }
                            ],
                            staticClass: "label"
                          },
                          [e._v(e._s(t.label))]
                        )
                      ]),
                      r("div", { staticClass: "field-body" }, [
                        r("div", { staticClass: "field" }, [
                          r(
                            "div",
                            { staticClass: "control" },
                            [
                              t.desc
                                ? r("p", { staticClass: "help" }, [
                                    e._v(e._s(t.desc))
                                  ])
                                : e._e(),
                              "hr" == t.type ? [r("hr")] : e._e(),
                              "br" == t.type
                                ? [r("br")]
                                : "checkbox" == t.type
                                ? [
                                    r(
                                      "b-checkbox",
                                      {
                                        model: {
                                          value: e.form_result[t.label],
                                          callback: function(r) {
                                            e.$set(e.form_result, t.label, r);
                                          },
                                          expression: "form_result[lay.label]"
                                        }
                                      },
                                      [
                                        e._v(
                                          e._s(
                                            t.value[!!e.form_result[t.label]]
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                : "disable" == t.type
                                ? [
                                    r("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.form_result[t.label],
                                          expression: "form_result[lay.label]"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: e.form_result[t.label]
                                      },
                                      on: {
                                        input: function(r) {
                                          r.target.composing ||
                                            e.$set(
                                              e.form_result,
                                              t.label,
                                              r.target.value
                                            );
                                        }
                                      }
                                    })
                                  ]
                                : "text" == t.type
                                ? [
                                    r("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.form_result[t.label],
                                          expression: "form_result[lay.label]"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { required: t.required },
                                      domProps: {
                                        value: e.form_result[t.label]
                                      },
                                      on: {
                                        input: function(r) {
                                          r.target.composing ||
                                            e.$set(
                                              e.form_result,
                                              t.label,
                                              r.target.value
                                            );
                                        }
                                      }
                                    })
                                  ]
                                : "textarea" == t.type
                                ? [
                                    r("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.form_result[t.label],
                                          expression: "form_result[lay.label]"
                                        }
                                      ],
                                      staticClass: "textarea",
                                      attrs: {
                                        placeholder: t.placeholder,
                                        required: ""
                                      },
                                      domProps: {
                                        value: e.form_result[t.label]
                                      },
                                      on: {
                                        input: function(r) {
                                          r.target.composing ||
                                            e.$set(
                                              e.form_result,
                                              t.label,
                                              r.target.value
                                            );
                                        }
                                      }
                                    })
                                  ]
                                : "select" == t.type
                                ? [
                                    r(
                                      "div",
                                      { staticClass: "select is-fullwidth" },
                                      [
                                        e._v(e._s(t.required)),
                                        r(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.form_result[t.label],
                                                expression:
                                                  "form_result[lay.label]"
                                              }
                                            ],
                                            attrs: { required: t.required },
                                            on: {
                                              change: function(r) {
                                                var a = Array.prototype.filter
                                                  .call(
                                                    r.target.options,
                                                    function(e) {
                                                      return e.selected;
                                                    }
                                                  )
                                                  .map(function(e) {
                                                    var t =
                                                      "_value" in e
                                                        ? e._value
                                                        : e.value;
                                                    return t;
                                                  });
                                                e.$set(
                                                  e.form_result,
                                                  t.label,
                                                  r.target.multiple ? a : a[0]
                                                );
                                              }
                                            }
                                          },
                                          [
                                            r("option"),
                                            e._l(t.value, function(t) {
                                              return r(
                                                "option",
                                                { domProps: { value: t } },
                                                [e._v(e._s(t))]
                                              );
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    )
                                  ]
                                : "rank" == t.type
                                ? [
                                    r(
                                      "draggable",
                                      {
                                        model: {
                                          value: t.value,
                                          callback: function(r) {
                                            e.$set(t, "value", r);
                                          },
                                          expression: "lay.value"
                                        }
                                      },
                                      [
                                        e._l(t.value, function(t) {
                                          return [
                                            "input" == t.type
                                              ? r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.name,
                                                      expression: "e.name"
                                                    }
                                                  ],
                                                  staticClass: "input",
                                                  attrs: {
                                                    placeholder: t.placeholder
                                                  },
                                                  domProps: { value: t.name },
                                                  on: {
                                                    input: function(r) {
                                                      r.target.composing ||
                                                        e.$set(
                                                          t,
                                                          "name",
                                                          r.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              : r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "button is-fullwidth"
                                                  },
                                                  [
                                                    e._v(e._s(t.name || t)),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "drag-icon"
                                                      },
                                                      [
                                                        r("i", {
                                                          staticClass:
                                                            "fa fa-bars"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                          ];
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                : [
                                    r("input", {
                                      staticClass: "input",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: "unrender type: " + t.type
                                      }
                                    })
                                  ]
                            ],
                            2
                          )
                        ])
                      ])
                    ]
                  );
                }),
                e._m(1)
              ],
              2
            )
          : e._e();
      },
      k = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "field-label is-normal" }, [
            r(
              "div",
              {
                staticClass: "label",
                staticStyle: { "white-space": "normal" }
              },
              [e._v("รูปภาพ")]
            )
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "field is-narrow is-horizontal" }, [
            r("div", { staticClass: "field-label is-normal" }),
            r("div", { staticClass: "field-body" }, [
              r("div", { staticClass: "field" }, [
                r("div", { staticClass: "control" }, [
                  r("br"),
                  r(
                    "button",
                    {
                      staticClass: "button is-danger is-outlined is-inverted",
                      attrs: { type: "submit" }
                    },
                    [e._v("SUBMIT")]
                  ),
                  r("label", { staticClass: "help-is-success" })
                ])
              ])
            ])
          ]);
        }
      ],
      N = (r("7f7f"), r("53ca")),
      T = (r("ac4d"), r("8a81"), r("ac6a"), r("96cf"), r("1da1")),
      j = r("1516"),
      $ = r.n(j),
      A = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", [
          r("div", { staticClass: "field" }, [
            r("input", {
              staticClass: "input",
              attrs: {
                type: "file",
                accept: "image/png, image/jpg, image/jpeg"
              },
              on: { change: e.change, upload: e.upload }
            })
          ]),
          e.image
            ? r("div", { staticClass: "field" }, [
                r("img", {
                  staticStyle: { "max-width": "100%" },
                  attrs: { src: e.image }
                })
              ])
            : e._e()
        ]);
      },
      I = [],
      R = a["default"].extend({
        props: {
          value: { type: String, default: "NONAME" },
          filename: { type: String, require: !0 }
        },
        data: function() {
          return { image: this.value, file: null };
        },
        methods: {
          change: function(e) {
            (this.image = ""), (this.file = e.target.files[0]), this.upload();
          },
          upload: function() {
            var e = this;
            if (this.file)
              if (
                (console.log("file", this.file),
                console.log("filename", this.filename),
                this.filename)
              ) {
                var t = new FormData();
                t.append("image", this.file, this.filename),
                  this.$store
                    .dispatch("upload", t)
                    .then(function(t) {
                      (e.image = t + "?t=" + new Date().getTime()),
                        e.$forceUpdate(),
                        e.$emit("input", t);
                    })
                    .catch(function(e) {
                      console.log("ERROR", e);
                    });
              } else alert("no file name props");
            else alert("no file select");
          }
        }
      }),
      U = R,
      P = (r("76a1"), Object(s["a"])(U, A, I, !1, null, "172240c4", null));
    P.options.__file = "imageUpload.vue";
    var L = P.exports,
      F = r("2ef0"),
      D = r.n(F),
      M = r("9c88"),
      q = a["default"].extend({
        components: { draggable: $.a, imageUpload: L, File: M["default"] },
        data: function() {
          var e = r("56e3").default;
          return { form_result: null, form_layout: e, result: null };
        },
        mounted: (function() {
          var e = Object(T["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(
                function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((this.update_result(), !this.auth)) {
                          e.next = 6;
                          break;
                        }
                        if (this.user) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 5), this.$store.dispatch("fetchUser");
                      case 5:
                        this.form_result = this.user;
                      case 6:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        computed: {
          user: function() {
            return this.$store.getters.user;
          },
          auth: function() {
            return this.$store.getters.auth;
          },
          transform_to_array: function() {
            var e = this;
            if (null === this.form_result) return [];
            var t = D.a.flatten(
              this.form_layout.map(function(t) {
                var r = t.label,
                  a = t.type;
                if (!r) return [];
                if ("rank" != a) {
                  var n = D.a.get(e.form_result, r);
                  return [void 0 != n ? n : "-"];
                }
                return e.form_result[r];
              })
            );
            return t;
          }
        },
        methods: {
          update_result: function() {
            var e = this,
              t = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var n, i = this.form_layout[Symbol.iterator]();
                !(t = (n = i.next()).done);
                t = !0
              ) {
                var s = n.value,
                  o = s.label,
                  l = s.type,
                  u = s.value;
                o &&
                  ("rank" == l &&
                    (this.form_result[o] = u.map(function(e) {
                      return "object" == Object(N["a"])(e) ? e.name : e;
                    })));
              }
            } catch (c) {
              (r = !0), (a = c);
            } finally {
              try {
                t || null == i.return || i.return();
              } finally {
                if (r) throw a;
              }
            }
            D.a.map(this.form_result, function(t, r) {
              "คำนำหน้า" == r &&
                (e.form_result["เพศ"] =
                  { นาย: "ชาย", นางสาว: "หญิง" }[t] || "");
            }),
              (this.form_result = this.form_result),
              this.$forceUpdate();
          },
          submit: (function() {
            var e = Object(T["a"])(
              regeneratorRuntime.mark(function e(t) {
                var r,
                  a = this;
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            (r = this.$loading.open({ container: null })),
                            this.$store
                              .dispatch("submit", this.form_result)
                              .then(function() {
                                return a.$toast.open({
                                  type: "is-success",
                                  message: "success submition",
                                  position: "is-top",
                                  duration: 5e3
                                });
                              })
                              .catch(function(e) {
                                a.$toast.open({
                                  type: "is-danger",
                                  message:
                                    e.response.data || "unexpected error",
                                  position: "is-top",
                                  duration: 5e3
                                }),
                                  405 == e.code && window.location.reload(!0);
                              })
                              .finally(r.close);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })()
        },
        watch: {
          form_layout: {
            handler: function() {
              this.update_result();
            },
            deep: !0
          },
          form_result: {
            handler: function() {
              this.update_result();
            },
            deep: !0
          }
        }
      }),
      z = q,
      H = (r("3bc4"), Object(s["a"])(z, S, k, !1, null, "3f6dace5", null));
    H.options.__file = "Form.vue";
    var B = H.exports,
      G = function() {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      Y = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            {
              staticClass: "section hero is-halfheight is-dark bg",
              staticStyle: { "min-height": "25vh" }
            },
            [
              r("div", { staticClass: "hero-body" }, [
                r("div", { staticClass: "container" }, [
                  r("div", { staticClass: "columns" }, [
                    r("div", { staticClass: "column" }, [
                      r("div", { staticClass: "content" }, [
                        r("div", { staticClass: "is-size-4" }, [
                          r("strong", [e._v("ติดต่อ")])
                        ]),
                        r("div", { staticClass: "is-size-7" }, [
                          e._v(
                            "หากมีปัญหาใดๆ เกี่ยวกับระบบรับสมัครสามารถติดต่อได้ที่"
                          )
                        ]),
                        r("ul", { staticClass: "is-size-7" }, [
                          r("li", [
                            e._v("กฤษฏิ์ "),
                            r("a", { attrs: { href: "tel:0900206430" } }, [
                              e._v("090-020-6430")
                            ])
                          ]),
                          r("li", [
                            r(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://docs.google.com/spreadsheets/d/1QPngfRupOBWfFwzgJITTY2IHwEYjAHdVmUMs77JBFkI/edit?usp=sharing"
                                }
                              },
                              [e._v("sheet")]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          );
        }
      ],
      J = {},
      V = J,
      K = (r("7065"), Object(s["a"])(V, G, Y, !1, null, "878b46ce", null));
    K.options.__file = "Footer.vue";
    var W = K.exports,
      Q = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("form", { on: { submit: e.submit } }, [
          r("div", { staticClass: "field" }, [
            r("div", { staticClass: "control" }, [
              r("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: e.username,
                    expression: "username"
                  }
                ],
                staticClass: "input is-light",
                attrs: {
                  required: "",
                  type: "text",
                  placeholder: "student id",
                  minlength: "8",
                  maxlength: "10"
                },
                domProps: { value: e.username },
                on: {
                  input: function(t) {
                    t.target.composing || (e.username = t.target.value);
                  }
                }
              })
            ])
          ]),
          r("div", { staticClass: "field" }, [
            r("div", { staticClass: "control" }, [
              r("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: e.password,
                    expression: "password"
                  }
                ],
                staticClass: "input is-light",
                attrs: {
                  required: "",
                  type: "password",
                  placeholder: "password"
                },
                domProps: { value: e.password },
                on: {
                  input: function(t) {
                    t.target.composing || (e.password = t.target.value);
                  }
                }
              })
            ])
          ]),
          e._m(0)
        ]);
      },
      X = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "field" }, [
            r("div", { staticClass: "control" }, [
              r(
                "button",
                { staticClass: "button is-danger is-outlined is-inverted" },
                [e._v("login")]
              )
            ])
          ]);
        }
      ],
      Z = a["default"].extend({
        data: function() {
          return { username: "", password: "", loading: !1 };
        },
        methods: {
          submit: function(e) {
            var t = this;
            e.preventDefault();
            var r = this.$loading.open({ container: null });
            this.$store
              .dispatch("login", {
                username: this.username,
                password: this.password
              })
              .then(function() {
                t.$toast.open({
                  type: "is-success",
                  message: "login success",
                  position: "is-top",
                  duration: 3e3
                }),
                  t.$emit("success");
              })
              .catch(function(e) {
                console.log(e.response),
                  t.$toast.open({
                    type: "is-danger",
                    message: D.a.get(e, "response.data") || "login fail",
                    position: "is-top",
                    duration: 3e3
                  });
              })
              .finally(r.close);
          }
        }
      }),
      ee = Z,
      te = (r("f8e5"), Object(s["a"])(ee, Q, X, !1, null, "39b16127", null));
    te.options.__file = "Login.vue";
    var re = te.exports,
      ae = (function(e) {
        function t() {
          return (
            Object(p["a"])(this, t),
            Object(m["a"])(this, Object(h["a"])(t).apply(this, arguments))
          );
        }
        return Object(v["a"])(t, e), t;
      })(b["b"]);
    ae = g["__decorate"](
      [
        Object(b["a"])({
          computed: Object(_["b"])(["auth"]),
          components: { Head: O, Login: re, Form: B, Footer: W }
        })
      ],
      ae
    );
    var ne = ae,
      ie = ne,
      se = (r("fb0a"), Object(s["a"])(ie, f, d, !1, null, "270a1a09", null));
    se.options.__file = "Home.vue";
    var oe = se.exports;
    a["default"].use(c["a"]);
    var le = new c["a"]({
        routes: [
          { path: "/", name: "home", component: oe },
          {
            path: "/file",
            name: "File",
            component: function() {
              return Promise.resolve().then(r.bind(null, "9c88"));
            }
          },
          {
            path: "/crop",
            name: "Crop",
            component: function() {
              return r.e("chunk-8cb3fefa").then(r.bind(null, "c357"));
            }
          }
        ]
      }),
      ue = (r("c5f6"), r("bc3a")),
      ce = r.n(ue),
      fe = r("a78e"),
      de = r.n(fe);
    a["default"].use(_["a"]);
    var pe = function(e) {
        var t = e.firstnameth,
          a = e.lastnameth,
          n = e.ouid,
          i = r("46a3"),
          s = n.slice(-2),
          o = i[s],
          l = o.th,
          u = o.en;
        return {
          รหัสนิสิต: n,
          ชื่อ: t,
          สกุล: a,
          คณะ: l,
          รหัสคณะ: s,
          faculty: u.toLowerCase(),
          ชั้นปี: String(62 - Number(n.slice(0, 2)))
        };
      },
      me = "/api/v1",
      he = new _["a"].Store({
        state: { user: null, ticket: null },
        getters: {
          user: function(e) {
            return e.user;
          },
          auth: function(e) {
            return e.ticket;
          }
        },
        mutations: {
          setUser: function(e, t) {
            t instanceof Object
              ? (e.user = D.a.assign({}, e.user || {}, t))
              : (e.user = null);
          },
          removeTicket: function(e) {
            (e.ticket = null), de.a.remove("ticket");
          },
          setTicket: function(e) {
            e.ticket = de.a.get("ticket") || null;
          }
        },
        actions: {
          login: (function() {
            var e = Object(T["a"])(
              regeneratorRuntime.mark(function e(t, r) {
                var a, n;
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.username),
                            (n = r.password),
                            e.abrupt(
                              "return",
                              ce()({
                                method: "POST",
                                url: me + "/user/login",
                                withCredentials: !0,
                                data: { username: a, password: n }
                              }).then(function() {
                                if (!de.a.get("ticket"))
                                  throw (alert("cookie is not set"),
                                  "no ticket");
                                return (
                                  t.commit("setTicket"), t.dispatch("fetchUser")
                                );
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, r) {
              return e.apply(this, arguments);
            };
          })(),
          logout: function(e) {
            return e.commit("removeTicket"), e.dispatch("fetchUser");
          },
          submit: (function() {
            var e = Object(T["a"])(
              regeneratorRuntime.mark(function e(t, r) {
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log("form submit EMPTY result is", r),
                            e.abrupt(
                              "return",
                              ce()({
                                method: "POST",
                                url: me + "/user/register",
                                withCredentials: !0,
                                data: { form: r },
                                timeout: 1e4,
                                headers: { "Content-Type": "application/json" }
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, r) {
              return e.apply(this, arguments);
            };
          })(),
          upload: (function() {
            var e = Object(T["a"])(
              regeneratorRuntime.mark(function e(t, r) {
                var a;
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = me + "/user/upload"),
                            console.log("upload to", a),
                            (e.next = 4),
                            ce()({
                              method: "POST",
                              url: a,
                              data: r,
                              withCredentials: !0,
                              headers: { "Content-Type": "multipart/form-data" }
                            }).then(function(e) {
                              return e.data;
                            })
                          );
                        case 4:
                          return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, r) {
              return e.apply(this, arguments);
            };
          })(),
          fetchUser: (function() {
            var e = Object(T["a"])(
              regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.commit("setTicket"), !t.getters.auth)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 4),
                            ce()({
                              method: "GET",
                              url: me + "/user/getUserInfo",
                              withCredentials: !0
                            }).then(function(e) {
                              var r = e.data,
                                a = r.data,
                                n = r.basicData;
                              return (
                                t.commit("setUser", a),
                                t.commit("setUser", pe(n)),
                                t.commit("setUser", n),
                                t.getters.user
                              );
                            })
                          );
                        case 4:
                          return e.abrupt("return", e.sent);
                        case 7:
                          console.log("set User to Null"),
                            t.commit("setUser", null),
                            t.commit("removeTicket");
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })()
        }
      }),
      ve = r("9483");
    Object(ve["a"])("".concat("/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    });
    var ge = r("8a03"),
      be = r.n(ge),
      _e = (r("c2f0"), r("59ca")),
      Ce = r.n(_e),
      ye = r("f477");
    a["default"].use(be.a), (a["default"].config.productionTip = !1);
    var we = {
      apiKey: "AIzaSyCFiD4b_wrKGToaYgpOIrzDoasUlPVq0as",
      authDomain: "cutu73-e9eff.firebaseapp.com",
      databaseURL: "https://cutu73-e9eff.firebaseio.com",
      projectId: "cutu73-e9eff",
      storageBucket: "",
      messagingSenderId: "358105585257"
    };
    Ce.a.initializeApp(we),
      a["default"].component("vue-core-image-upload", ye["a"]),
      new a["default"]({
        router: le,
        store: he,
        render: function(e) {
          return e(u);
        },
        mounted: function() {
          this.$store.dispatch("fetchUser");
        }
      }).$mount("#app");
  },
  ee55: function(e, t, r) {},
  f8e5: function(e, t, r) {
    "use strict";
    var a = r("6129"),
      n = r.n(a);
    n.a;
  },
  fb0a: function(e, t, r) {
    "use strict";
    var a = r("bf5c"),
      n = r.n(a);
    n.a;
  }
});
//# sourceMappingURL=app.acedf102.js.map
