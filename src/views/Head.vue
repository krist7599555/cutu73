<template lang="pug">
  .section.hero.is-fullheight.is-danger.bg(style='min-height: 75vh')
    .hero-body
      .container
        .title.is-size-1 CUTU73
        .subtitle
        br
        div
          slot
        br
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  color: whitesmoke;
  background-image: linear-gradient(#dc84b4, #ea8094);
}
</style>
