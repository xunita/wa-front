<template>
  <div class="fav-home">
    <Info />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  created() {
    this.$store.dispatch('getfavorite')
  },
  // layout: 'body',
}
</script>
<style scoped>
.fav-home {
  width: 100%;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
