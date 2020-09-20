<template>
  <div class="favorite">
    <client-only>
      <a class="a-fav">
        <span v-if="hasFavorite" key="stared" class="icon">
          <i class="fas fa-heart"></i>
        </span>
        <span v-else key="unstared" class="icon">
          <i class="far fa-heart"></i>
        </span>
      </a>
      <span v-if="isLogged" class="px-4"></span>
      <a v-if="isLogged" class="a-fav">
        <span v-if="!hasNotif" key="willstared" class="icon">
          <i class="far fa-bell"></i>
        </span>
        <span v-else key="willunstared" class="icon">
          <i class="fas fa-bell"></i>
        </span>
      </a>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNotif: false,
      hasFavorite: false,
      isLogged: false,
    }
  },
}
</script>

<style scoped>
.fa-heart,
.fa-bell {
  font-size: 20px !important;
  color: #6e6e6e;
}
.a-fav:hover .fa-heart,
.a-fav:hover .fa-bell {
  color: #004e66 !important;
}
</style>
