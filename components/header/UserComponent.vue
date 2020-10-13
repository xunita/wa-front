<template>
  <div class="user">
    <client-only>
      <div
        v-if="this.$auth.loggedIn"
        class="user-auth"
        :class="{ 'is-hidden': isauthenticating }"
      >
        <div class="dropdown dd-btn" :class="{ 'is-active': isShown }">
          <div class="dropdown-trigger">
            <button
              v-click-outside="hideIt"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              class="button is-white btn-user"
              @click="
                {
                  isShown = !isShown
                }
              "
            >
              <span class="has-text-weight-semibold is-size-6 name is-color-4a"
                >Hi, {{ this.$auth.user.name | capitalize }}</span
              >
              <span v-if="this.$auth.loggedIn" class="icon is-small">
                <i class="fas fa-angle-down"></i>
              </span>
            </button>
          </div>
          <div id="dropdown-menu" class="dropdown-menu signup" role="menu">
            <div class="dropdown-content has-text-centered">
              <a class="a-cart is-flex align-center dropdown-item">
                <span class="icon is-block">
                  <i class="far fa-user"></i>
                </span>
                <span
                  class="my-cart is-block pl-1 mb-1 has-text-weight-semibold is-color-black"
                  >Profile</span
                >
              </a>
              <a class="a-cart is-flex align-center dropdown-item">
                <span v-if="hasNotif" key="wstared" class="icon is-block">
                  <i class="fas fa-bell"></i>
                </span>
                <span v-else key="wunstared" class="icon is-block">
                  <i class="far fa-bell"></i>
                </span>
                <span
                  class="my-cart is-block pl-1 mb-1 has-text-weight-semibold is-color-black"
                  >Notifications</span
                >
              </a>
              <a class="a-cart is-flex align-center dropdown-item">
                <span v-if="hasFavorite" key="azstared" class="icon is-block">
                  <i class="fas fa-heart"></i>
                </span>
                <span v-else key="azunstared" class="icon is-block">
                  <i class="far fa-heart"></i>
                </span>
                <span
                  class="my-cart is-block pl-1 mb-1 has-text-weight-semibold is-color-black"
                  >Favorites</span
                >
              </a>
              <a class="a-cart is-flex align-center dropdown-item">
                <span key="dd" class="icon is-block">
                  <i class="far fa-list-alt"></i>
                </span>
                <span
                  class="my-cart is-block pl-1 mb-1 has-text-weight-semibold is-color-black"
                  >Orders</span
                >
              </a>
              <a class="a-cart is-flex align-center dropdown-item">
                <span key="dgd" class="icon is-block">
                  <i class="fas fa-history"></i>
                </span>
                <span
                  class="my-cart is-block pl-1 mb-1 has-text-weight-semibold is-color-black"
                  >Orders history</span
                >
              </a>
              <a class="dropdown-item barr is-unclickable mt-2 mb-1"></a>
              <button
                class="has-text-centered m-centered mt-1 button logout-btn mt-2 is-color-004e66-hover is-block has-text-weight-semibold is-color-black"
                @click="logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="user-unauth is-flex align-center">
        <div class="dropdown dd-btn" :class="{ 'is-active': isShownReg }">
          <div class="dropdown-trigger">
            <button
              v-click-outside2="hideItReg"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              class="button is-white btn-user"
              @click="
                {
                  isShownReg = !isShownReg
                }
              "
            >
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span class="has-text-weight-semibold is-size-6 name is-color-4a"
                >Sign in</span
              >
            </button>
          </div>
          <div id="dropdown-menu" class="dropdown-menu signup" role="menu">
            <div class="dropdown-content has-text-centered">
              <nuxt-link
                class="login px-4 my-2 underline is-color-028300-hover is-block has-text-weight-semibold is-color-black"
                to="/waloo/login"
                >Sign In</nuxt-link
              >
              <span
                class="is-block has-text-weight-semibold is-size-6 pt-1 mb-2"
                >Or</span
              >
              <a class="dropdown-item barr is-unclickable mt-2 mb-1"></a>
              <nuxt-link
                class="mx-4 mt-2 button btn-subscribe is-block"
                to="/waloo/register"
                >Create an account</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  data() {
    return {
      hasNotif: false,
      isLogged: false,
      isShown: false,
      isShownReg: false,
      hasFavorite: false,
      isauthenticating: false,
    }
  },
  methods: {
    hideIt() {
      this.isShown = false
    },
    hideItReg() {
      this.isShownReg = false
    },
    logout() {
      this.isauthenticating = true
      this.$auth.logout()
      this.isauthenticating = false
    },
  },
}
</script>

<style scoped>
.fa-user,
.fa-angle-down {
  font-size: 18px !important;
  color: #6e6e6e;
}
.btn-user:hover .fa-user {
  color: #028300 !important;
}
.barr {
  background-color: #f1f1f1;
}
.dd-btn {
  position: relative;
}
.signup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.login {
  min-width: fit-content !important;
}
.btn-user:hover .fa-angle-down,
.btn-user:hover .name {
  color: #028300;
}
.btn-user {
  border: none !important;
  background-color: transparent !important;
  color: black !important;
}
.fa-shopping-cart {
  font-size: 22px !important;
  color: #6e6e6e;
}
</style>
