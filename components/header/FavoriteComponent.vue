<template>
  <div class="favorite" :class="{ expand: this.$auth.loggedIn }">
    <client-only>
      <a class="a-fav">
        <span v-if="hasFavorite" key="stared" class="icon">
          <i class="fas fa-heart"></i>
        </span>
        <span v-else key="unstared" class="icon">
          <i class="far fa-heart"></i>
        </span>
      </a>
      <span v-if="this.$auth.loggedIn" class="px-4"></span>
      <a v-if="this.$auth.loggedIn" class="a-fav">
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
.expand {
  width: 85px !important;
}
.fa-heart,
.fa-bell {
  font-size: 18px !important;
  color: #6e6e6e;
}
.a-fav:hover .fa-heart,
.a-fav:hover .fa-bell {
  color: #004e66 !important;
}
</style>
