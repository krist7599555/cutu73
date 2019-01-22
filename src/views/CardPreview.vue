<template lang="pug">
div
  Head(:big='true')
    div(style='font-size: 13px; max-width: unset')
      .select.is-fullwidth
        select(v-model='select')
          option(v-for='(records, group) of grouping' :value='group') {{group}}
      hr
      .container
        .is-flex(v-if='select != null' style='flex-wrap: wrap; justify-content: space-between;')
          template(v-for='rec in grouping[select]')
            .box.is-marginless.is-paddingless.is-clipped(style='max-width: 140px; margin-bottom: 10px !important;')
              .field.is-marginless(style='padding: 4px 0px 0px 10px')
                label.label {{rec.ชื่อเล่น}}
              figure.image(@click='runCard(rec.รหัสนิสิต)')  
                img(:src='getCard(rec.รหัสนิสิต)')
  Footer
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Action } from "vuex-class";
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
export default class CardPreview extends Vue {
  loading = true;
  grouping = {};
  select = null;
  async mounted() {
    this.grouping = _.groupBy(await this.$store.getters["auth/getall"], "ฝ่าย");
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
