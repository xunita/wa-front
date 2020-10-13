<template>
  <div class="body-home">
    <Products />
    <Home class="mt-6" />
  </div>
</template>

<script>
export default {
  // layout: 'body',
}
</script>
<style scoped>
.body-home {
  width: 100%;
  animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
