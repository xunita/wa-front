<template>
  <nuxt-link class="logo-link" to="/">
    <div class="is-flex">
      <client-only>
        <a>
          <span class="icon">
            <i class="fas fa-bars"></i>
          </span>
        </a>
        <Logo />
        <h1 class="title-logo">Waloo</h1>
      </client-only>
    </div>
  </nuxt-link>
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
