<template lang="pug">
div
  Head(:big='true')
    .box(style='font-size: 13px; max-width: unset')
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
        icon-pack='fab'
        hoverable
      )
        template(slot-scope="props")
          b-table-column(field="img" label="รูปภาพ" centered :visible='userImage')
            figure.image.user
              img(:src='props.row.image')
          template(v-for='atr in attributes')
            b-table-column(:field="atr" :label="atr" sortable) {{ props.row[atr] }}
          b-table-column(field="เบอร์โทร" label="เบอร์โทร")
            a(style='text-decoration: underline' :href='"tel://" + (props.row.เบอร์โทร || "").replace("-", "")') {{props.row.เบอร์โทร}}
          b-table-column(field="Line ID" label="Line ID")
            a(style='text-decoration: underline' :href='"line://ti/p/" + props.row["line-ID"]') {{ props.row["line-ID"] }}
                
        
        template(slot="detail" slot-scope="props")
            <article class="media">
                <figure class="media-left">
                    figure.image(style='max-width: 200px')
                      img.is-hidden-mobile(:src='props.row.image')
                      img.is-hidden-tablet(:src='`http://www.cutu73.ml/cards/${props.row.ouid}.png`')
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
                      img(:src='`http://www.cutu73.ml/cards/${props.row.ouid}.png`')
                </figure>
            </article>
        
  Footer
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Head from "./Head.vue";
import Footer from "./Footer.vue";
import _ from "lodash";
@Component({
  computed: mapGetters(["getall"]),
  components: {
    Head,
    Footer
  }
})
export default class Home extends Vue {
  _records = [];
  records = [];
  loading = true;
  userImage = false;
  attributes = "รหัสนิสิต ชื่อ สกุล ชื่อเล่น ฝ่าย ตำแหน่ง".split(" ");
  search = "";
  async mounted() {
    this._records = await this.$store.getters.getall;
    this.comprecords();
    this.loading = false;
  }
  @Watch("search")
  comprecords() {
    const patterns = this.search.split(" ").map(s => RegExp(s));
    return (this.records = this._records.filter(row => {
      const str = JSON.stringify(row).replace(/[:",]/g, "\n");
      console.log(patterns, str);
      return _.every(patterns, p => p.test(str));
    }));
  }
}
</script>

<style lang="scss" scoped>
.user.image {
  max-width: 100px;
  @media screen and (max-width: 768px) {
    max-width: 130px;
  }
}
</style>
