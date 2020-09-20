<template>
  <div class="container is-fluid pt-1 home">
    <div class="waloo-head navbar is-fixed-top">
      <Header />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
.home {
  animation: 0.5s appear;
  height: 1000px;
}
.waloo-head {
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.164),
    0 0px 0 0px rgba(10, 10, 10, 0.068);
}
.navbar {
  width: 100% !important;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
