<template>
  <div class="container is-fluid pt-1 home">
    <!-- for annoncement -->
    <div></div>
    <!-- header of the site -->
    <div class="waloo-head container is-fluid navbar is-fixed-top">
      <Header />
    </div>
    <div style="height: 55px"></div>
    <!-- after header, body -->
    <div>
      <nuxt-child />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  // layout: 'body',
}
</script>
<style scoped>
.home {
  width: 100%;
  animation: 0.5s appear;
  background-color: #f9f9f9 !important;
}
.waloo-head {
  z-index: 9999;
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.164),
    0 0px 0 0px rgba(10, 10, 10, 0.068);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
