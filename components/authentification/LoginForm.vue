<template>
  <div class="register-form box">
    <form class="container form" autocomplete="off" @submit.prevent="login">
      <div class="field">
        <h5
          class="title is-6 is-block regmess navbar mt-2 mb-2 has-text-centered"
        >
          Sign in to order from your favorites shops and get delivery in 24
          hours to your town, 3 days inside the country and a week in the world.
        </h5>
      </div>
      <!-- <div
        class="notification is-danger m-centered is-size-6 has-text-centered mt-6"
      >
        <button class="delete"></button>
        Email already exists.
      </div> -->
      <div
        v-if="this.$store.state.registered"
        class="notification is-success mt-4 is-size-6 m-centered"
      >
        <button class="delete" @click="close"></button>
        Congratulations, your account has been created, login to continue.
      </div>
      <div class="is-flex mt-0 dd-register">
        <div class="other column">
          <div class="d-other m-centered">
            <h5 class="title fb-title is-6 is-block mb-6 has-text-centered">
              Sign in using Facebook or Google.
            </h5>
            <div class="fb-login has-text-centered">
              <client-only>
                <nuxt-link to="#" class="button btn-fb is-flex">
                  <span class="is-block has-text-weight-semibold is-size-6"
                    >Log in with Facebook</span
                  >
                  <span class="icon ml-2">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </nuxt-link>
                <nuxt-link
                  to="#"
                  class="button btn-fb btn-fb2 is-hidden is-flex py-5"
                >
                  <span class="is-block has-text-weight-semibold is-size-6"
                    >Log in with</span
                  >
                  <span class="is-block is-flex">
                    <span class="is-block has-text-weight-semibold is-size-6"
                      >Facebook</span
                    >
                    <span class="icon ml-2">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                  </span>
                </nuxt-link>
              </client-only>
            </div>
            <h5 class="title is-6 is-block mb-4 mt-4 has-text-centered">Or</h5>
            <div class="gl-login has-text-centered">
              <client-only>
                <nuxt-link to="#" class="button btn-gle is-flex">
                  <span class="is-block has-text-weight-semibold is-size-6"
                    >Log in with Google</span
                  >
                  <span class="icon ml-2 is-block icogoogle">
                    <svg
                      viewBox="0 0 533.5 544.3"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </span>
                </nuxt-link>
                <nuxt-link
                  to="#"
                  class="button btn-gle2 is-hidden is-flex py-5"
                >
                  <span class="is-block has-text-weight-semibold is-size-6"
                    >Login with</span
                  >
                  <span class="is-block is-flex">
                    <span class="is-block has-text-weight-semibold is-size-6"
                      >Google</span
                    >
                    <span class="icon ml-2 is-block icogoogle">
                      <svg
                        viewBox="0 0 533.5 544.3"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </span>
                  </span>
                </nuxt-link>
              </client-only>
            </div>
          </div>
        </div>
        <div class="d-tilde">
          <h5 class="title is-4 tilde is-block mb-5 has-text-centered">
            &#126;
          </h5>
        </div>
        <div class="my-register column">
          <div class="d-my-register m-centered">
            <div
              v-if="this.$store.state.notLogged"
              class="notification is-danger mt-4 is-size-6 m-centered"
            >
              <button class="delete" @click="close2"></button>
              Sorry, email or password incorrect !
            </div>
            <h5 class="title is-6 is-block mb-5 has-text-centered">
              Sign in with your email.
            </h5>
            <div class="field">
              <p class="control">
                <input
                  v-model="email"
                  class="input"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </p>
              <span v-if="emailInvalid" class="is-red is-size-7"
                >A valid email is required. Ex: yaya@gmail.com
              </span>
            </div>
            <div class="field">
              <p class="control">
                <input
                  v-model="password"
                  autocomplete="new-password"
                  class="input"
                  type="password"
                  placeholder="Your password"
                />
              </p>
              <span class="is-size-7">
                <span>The password must be at least </span>
                <span v-if="validPwd" class="is-green">8 characers ✔.</span>
                <span v-else class="is-red">8 characters &#215;.</span>
              </span>
            </div>
            <div class="field has-text-centered">
              <input
                type="submit"
                class="button btn-subscribes"
                value="Log in"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  loading: {
    continuous: true,
  },
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      emailInvalid: false,
    }
  },
  computed: {
    everyThingOk() {
      return !this.emailInvalid && this.validPwd
    },
    validPwd() {
      return this.password.length >= 8
    },
    validEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  mounted() {
    this.$store.commit('hasMailUsed', false)
    this.$store.commit('hasNotLogged', false)
  },
  methods: {
    checkMail() {
      if (this.email === '' || !this.validEmail) {
        this.emailInvalid = true
      } else this.emailInvalid = false
    },
    close() {
      this.$store.commit('hasRegistered', false)
    },
    close2() {
      this.$store.commit('hasNotLogged', false)
    },
    login() {
      this.checkMail()
      if (this.everyThingOk) {
        const infos = {
          email: this.email,
          password: this.password,
        }
        this.$store.commit('loginInfo', infos)
        this.$store.commit('hasRegistered', false)
        this.$store.commit('hasMailUsed', false)
        this.$store.commit('hasNotLogged', false)
        this.$store
          .dispatch('login')
          .then(() => {
            if (this.$auth.loggedIn) this.$router.push('/')
          })
          .catch(() => {
            console.log("********** You can't log******")
          })
      }
    },
  },
}
</script>

<style scoped>
.notification {
  width: fit-content !important;
}
.icogoogle {
  margin-top: 0.4rem !important;
}
.register-form {
  height: fit-content !important;
  font-size: 8px !important;
  position: relative;
  top: 3rem;
  bottom: 2rem;
  /* height: 90%;
  width: 100%; */
}
.d-my-register,
.d-other {
  width: 70%;
}
.my-register {
  position: relative !important;
}
.d-my-register {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.other,
.d-tilde {
  position: relative;
  height: 524px !important;
}
.d-other,
.tilde {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.regmess {
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.164),
    0 0px 0 0px rgba(10, 10, 10, 0.068) !important;
}
.btn-subscribes {
  background: #004e66e1 !important;
  width: 100%;
  border: #004e66e1 !important;
  color: rgb(255, 255, 255) !important;
}
.btn-subscribes:hover,
.btn-subscribes:focus,
.btn-subscribes:active {
  background: #004e66 !important;
  border: #004e66 !important;
}
.tilde {
  align-self: center;
}
@media screen and (max-width: 899px) {
  .dd-register {
    flex-direction: column;
  }
  .fb-title {
    margin-bottom: 1.5rem !important;
  }
  .d-other {
    margin-top: 6rem;
  }
  .tilde {
    margin-bottom: 0rem;
  }
  .my-register {
    margin-top: -10.5rem !important;
    margin-bottom: 8rem;
  }
  .d-my-register {
    width: 45%;
  }
}
@media screen and (max-width: 798px) {
  .register-form {
    margin-top: 4rem !important;
  }
}
@media screen and (max-width: 700px) {
  .d-my-register {
    width: 60%;
  }
}
@media screen and (max-width: 440px) {
  .btn-gle,
  .btn-fb {
    display: none !important;
  }
  .btn-gle2,
  .btn-fb2 {
    display: flex !important;
    flex-direction: column !important;
  }
}
@media screen and (max-width: 450px) {
  .d-my-register {
    width: 80%;
  }
}
@media screen and (max-width: 350px) {
  .d-my-register {
    width: 100%;
  }
}
@media screen and (max-width: 640px) {
  .regmess {
    padding-bottom: 2rem !important;
  }
}
@media screen and (max-width: 320px) {
  .regmess {
    padding-bottom: 2rem !important;
  }
  .fb-title {
    padding-bottom: 0.5rem !important;
    padding-top: 2rem !important;
  }
  .d-tilde {
    margin-top: 2rem !important;
  }
}
</style>
