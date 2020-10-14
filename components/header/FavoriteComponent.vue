<template>
  <div class="favorite" :class="{ expand: this.$auth.loggedIn }">
    <client-only>
      <nuxt-link to="/waloo/myfavorites" class="a-fav">
        <span key="stared" class="icon">
          <i class="fas fa-heart"></i>
        </span>
      </nuxt-link>
      <span v-if="this.$auth.loggedIn" class="px-4"></span>
      <nuxt-link
        v-if="this.$auth.loggedIn"
        to="/waloo/user/mynotifications"
        class="a-fav"
      >
        <span key="willstared" class="icon">
          <i class="fas fa-bell"></i>
        </span>
      </nuxt-link>
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
  color: #028300 !important;
}
</style>
