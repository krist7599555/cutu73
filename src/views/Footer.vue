<template lang="pug">
.section.hero.is-halfheight.is-dark.bg(style='min-height: 25vh')
  .hero-body    
    .container
      .columns
        .column
          .content 
            .is-size-4: strong ติดต่อ
            .is-size-7 หากมีปัญหาใดๆ เกี่ยวกับระบบรับสมัครสามารถติดต่อได้ที่
            ul.is-size-7
              li กฤษฏิ์ #[a(href='tel:0900206430') 090-020-6430]
              li #[router-link(to='/') home]
              li #[router-link(to='/records') records]
              li #[router-link(to='/generate') generate]

              
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  padding-top: 0rem;
  padding-bottom: 0rem;
  color: white !important;
  background-color: #ea8094;
  background-image: linear-gradient(#443e40, #363636) !important;
}
</style>
