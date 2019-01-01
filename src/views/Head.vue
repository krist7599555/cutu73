<template lang="pug">
  .hero.is-fullheight.bg.is-success(style='min-height: 75vh')
    .hero-body
      .container(:style='big ? "max-width: unset !important" : ""')
        router-link.title.is-size-1(to='/') CUTU73
        .subtitle
        br
        div
          slot
        br
</template>

<script>
export default {
  props: ["big"]
};
</script>

<style lang="scss" scoped>
.bg {
  color: whitesmoke;
  background-image: linear-gradient(#dc84b4, #ea8094);
}
.container {
  max-width: 300px;
  @media (min-width: 600px) {
    max-width: 400px;
  }
  @media (min-width: 900px) {
    max-width: 500px;
  }
}
</style>
