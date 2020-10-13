<template>
  <div class="home">
    <Bewa />
    <Wa />
    <Fapost />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  animation: 3s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
