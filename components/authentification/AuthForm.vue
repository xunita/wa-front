<template>
  <div class="auth-form">
    <LoginForm v-if="logging" />
    <RegisterForm v-if="registrering" />
  </div>
</template>

<script>
export default {
  props: {
    logging: Boolean,
    registrering: Boolean,
  },
}
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
  width: 100%;
  animation: 0.5s appear;
  height: 1000px;
  background-color: #f9f9f9 !important;
}
.body-home {
  width: 100%;
  height: 500px;
}
.waloo-head {
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.164),
    0 0px 0 0px rgba(10, 10, 10, 0.068);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
