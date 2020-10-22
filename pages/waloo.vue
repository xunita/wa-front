<template>
  <div class="container is-fluid pt-1 home">
    <!-- for annoncement -->
    <div></div>
    <!-- header of the site -->
    <div class="waloo-head container is-fluid navbar is-fixed-top">
      <Header />
    </div>
    <div style="height: 55px"></div>
    <!-- after header, body -->
    <div class="best-child">
      <nuxt-child />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
const CryptoJS = require('crypto-js')
export default {
  beforeMount() {
    window.addEventListener('beforeunload', this.handler)
  },
  mounted() {
    this.getTokenFromStorage()
  },
  methods: {
    handler() {
      if (this.$auth.loggedIn) {
        // Encrypt
        const ciphertext = CryptoJS.AES.encrypt(
          this.$store.state.mytoken,
          'whothehellareyou'
        )
        localStorage.setItem('atinux', ciphertext)
      }
    },
    getTokenFromStorage() {
      if (this.$auth.loggedIn) {
        if (localStorage.atinux) {
          // Decrypt
          const bytes = CryptoJS.AES.decrypt(
            localStorage.getItem('atinux'),
            'whothehellareyou'
          )
          const plaintext = bytes.toString(CryptoJS.enc.Utf8)
          this.$store.commit('setmyToken', plaintext)
          localStorage.removeItem('atinux')
        }
      }
    },
  },
}
</script>
<style scoped>
.home {
  width: 100%;
  animation: 0.5s appear;
  background-color: #f9f9f9 !important;
}
@media screen and (max-width: 830px) {
  .best-child {
    margin-top: 3.5rem !important;
  }
}
.waloo-head {
  z-index: 9999;
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.164),
    0 0px 0 0px rgba(10, 10, 10, 0.068);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
