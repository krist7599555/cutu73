<template lang="pug">
div
  Head(:big='true')
    .box(style='font-size: 13px; max-width: unset')
      .buttons
        button.button.is-rounded.is-small.is-success(@click='download("xls")') Download Excel
        button.button.is-rounded.is-small.is-info(@click='download("csv")') Download Csv
      b-field(grouped group-multiline)
        b-input(rounded icon-pack='fa' icon="search" v-model='search' type="search" placeholder="Search...")
        b-switch(v-model="userImage") รูปภาพ
      b-table(
        :loading='loading'
        :data="records"
        :paginated="true"
        :per-page="10"
        :pagination-simple="true"
        detailed
        detail-key="รหัสนิสิต"
        icon-pack='fas'
        hoverable
      )
        template(slot-scope="props")
          b-table-column(field="img" label="รูปภาพ" centered :visible='userImage')
            div(style='white-space:nowrap;')
              //- figure.is-inline.image.user
              img.is-inline(:src='props.row.image' style='max-width: 150px')
              //- img.is-inline(:src='props.row.image' style='max-width: 150px')
              img.is-inline(@click='runCard(props.row.ouid)' :src='`http://www.cutu73.ml/cards/${props.row.ouid}.png`' style='max-width: 150px')
              //- figure.is-inline.image.user(@click='runCard(props.row.ouid)')
          template(v-for='atr in attributes')
            b-table-column(:field="atr" :label="atr" sortable) 
              div(@click='atr == "ฝ่าย" ? updateRole(props.row.ouid, props.row.ฝ่าย) : null') {{ props.row[atr] }}
          b-table-column(field="เบอร์โทร" label="เบอร์โทร")
            a(style='text-decoration: underline' :href='"tel://" + (props.row.เบอร์โทร || "").replace("-", "")') {{props.row.เบอร์โทร}}
          b-table-column(field="Line ID" label="Line ID")
            a(style='text-decoration: underline' :href='"line://ti/p/~" + props.row["line-ID"]') {{ props.row["line-ID"] }}
                
        
        template(slot="detail" slot-scope="props")
            <article class="media">
                <figure class="media-left">
                    figure.image(style='max-width: 200px')
                      img.is-hidden-mobile(:src='props.row.image')
                      img.is-hidden-tablet(:src='getCard(props.row.ouid)')
                </figure>
                <div class="media-content">
                    <div class="content">
                      div {{props.row.คำนำหน้า}} {{props.row.ชื่อ}} {{props.row.สกุล}} (#[strong {{props.row.ชื่อเล่น}}])
                      div {{props.row.คณะ}} # {{props.row.ชั้นปี}}
                      br
                      div ตำแหน่ง #[strong {{props.row.ตำแหน่ง}}]
                      div ฝ่าย #[strong {{props.row.ฝ่าย}}]
                      br
                      div อาหารที่แพ้ {{props.row.อาหารที่แพ้}}
                      div โรคประจำตัว {{props.row.โรคประจำตัว}}
                      br
                      div ขนาดเสื้อ {{props.row.ขนาดเสื้อ}}
                    </div>
                </div>
                <figure class="media-right is-hidden-mobile">
                    figure.image(style='max-width: 200px')
                      img(:src='getCard(props.row.ouid)')
                </figure>
            </article>
  Footer
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Action } from "vuex-class";
import Head from "./Head.vue";
import Footer from "./Footer.vue";
import _ from "lodash";

import XlsExport from "xlsexport";

@Component({
  computed: mapGetters(["getall"]),
  components: {
    Head,
    Footer
  }
})
export default class Records extends Vue {
  _records = [];
  records = [];
  loading = true;
  userImage = false;
  attributes = "รหัสนิสิต ชื่อ สกุล ชื่อเล่น ฝ่าย ตำแหน่ง".split(" ");
  search = "";
  async mounted() {
    this._records = await this.$store.getters["auth/getall"];
    this.comprecords();
    this.loading = false;
  }
  download(type: string) {
    const title = `cutu73_data_${new Date().getTime()}`;
    var xls = new XlsExport(this._records, title);
    if (type == "xls") {
      xls.exportToXLS(`${title}.xls`);
    } else if (type == "csv") {
      xls.exportToCSV(`${title}.csv`);
    } else {
      console.error("type is", type, "not found");
    }
  }
  suffix = 0;
  getCard(ouid: string) {
    return `http://www.cutu73.ml/cards/${ouid}.png?t=${this.suffix}`;
  }
  // @ts-ignore
  @Action("auth/getCard") genCard;
  runCard(ouid: string) {
    this.$dialog.confirm({
      type: "is-warning",
      message: "confirm gen card",
      onConfirm: () => {
        const load = this.$loading.open({});
        this.genCard(ouid)
          .then(() => {
            this.suffix += 1;
            this.$forceUpdate();
            this.$toast.open("สักครู่");
          })
          .finally(load.close);
      }
    });
    return this.getCard(ouid);
  }

  @Watch("search")
  // @ts-ignore
  comprecords() {
    const patterns = this.search.split(" ").map(s => RegExp(s));
    return (this.records = this._records.filter(row => {
      const str = JSON.stringify(row).replace(/[:",]/g, "\n");
      // console.log(patterns, str);
      return _.every(patterns, p => p.test(str));
    }));
  }
  updateRole(ouid, ฝ่าย) {
    this.$dialog.prompt({
      message: `กำหนดฝ่ายใหม่`,
      inputAttrs: {
        placeholder: "กรุณาเติมฝ่าย",
        value: ฝ่าย
      },
      onConfirm: value =>
        this.$store
          .dispatch("auth/updateRole", {
            ouid: ouid,
            ฝ่าย: value
          })
          .then(user => {
            // @ts-ignore
            this._records = this._records.map(u =>
              // @ts-ignore
              u.ouid == user.ouid ? user : u
            );
            this.comprecords();
            this.$toast.open({
              message: "update success",
              type: "is-success"
            });
          })
    });
  }
}
</script>

<style lang="scss" scoped>
.user.image {
  max-width: 120px;
  @media screen and (max-width: 768px) {
    max-width: 150px;
  }
}
</style>
