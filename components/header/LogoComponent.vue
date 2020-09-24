<template>
  <div class="is-flex align-center">
    <client-only>
      <a>
        <span class="icon">
          <i class="fas fa-bars"></i>
        </span>
      </a>
      <nuxt-link class="logo-link" to="/">
        <div class="is-flex">
          <Logo />
          <h1 class="title-logo pb-1">Waloo</h1>
        </div>
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.is-flex {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  width: fit-content;
  align-items: center;
}
.logo-link {
  display: block;
  width: fit-content !important;
}
.fa-bars {
  color: #6e6e6e;
}
</style>
