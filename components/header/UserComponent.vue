<template>
  <div class="user">
    <client-only>
      <div v-if="isLogged" class="user-auth"></div>
      <div v-else class="user-unauth is-flex align-center">
        <nuxt-link
          class="login underline is-color-004e66-hover is-block has-text-weight-semibold is-color-black"
          to="#"
          >Sign In</nuxt-link
        >
        <span class="px-2 is-block">Or</span>
        <nuxt-link class="button btn-subscribe is-block" to="#"
          >Create an account</nuxt-link
        >
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false,
    }
  },
}
</script>

<style scoped>
.login {
  min-width: fit-content !important;
}
.fa-shopping-cart {
  font-size: 22px !important;
  color: #6e6e6e;
}
.btn-subscribe {
  background: #004e66e1 !important;
  border: #004e66e1 !important;
  color: rgb(255, 255, 255) !important;
}
.btn-subscribe:hover,
.btn-subscribe:focus,
.btn-subscribe:active {
  background: #004e66 !important;
  border: #004e66 !important;
}
</style>
