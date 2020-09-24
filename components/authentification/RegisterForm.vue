<template>
  <div class="register-form box pb-6">
    <form class="container form" autocomplete="off" @submit.prevent="register">
      <div class="field">
        <h5 class="title is-6 is-block regmess navbar mt-2 has-text-centered">
          Sign up and start buying from all your favorites shops.
        </h5>
      </div>
      <div class="is-flex mt-4 dd-register">
        <div class="other column">
          <div class="d-other m-centered">
            <h5 class="title fb-title is-6 is-block mb-6 has-text-centered">
              Sign up using Facebook or Google.
            </h5>
            <div class="fb-login has-text-centered">
              <client-only>
                <nuxt-link to="#" class="button btn-fb is-flex">
                  <span class="is-block has-text-weight-semibold is-size-6"
                    >Sign up with Facebook</span
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
                    >Sign up with</span
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
                    >Sign up with Google</span
                  >
                  <span class="icon ml-2 is-block">
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
                    >Sign up with</span
                  >
                  <span class="is-block is-flex">
                    <span class="is-block has-text-weight-semibold is-size-6"
                      >Google</span
                    >
                    <span class="icon ml-2 is-block">
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
            <h5 class="title is-6 is-block mb-5 has-text-centered">
              Create an account using your email.
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
                  v-model="name"
                  class="input"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </p>
              <span v-if="nameEmpty" class="is-red is-size-7">
                <span>Please enter a name.</span>
              </span>
            </div>
            <div class="field">
              <p class="control">
                <input
                  v-model="surname"
                  class="input"
                  type="text"
                  placeholder="Enter your surname"
                />
              </p>
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
            <div class="field">
              <p class="control">
                <input
                  v-model="password_confirmation"
                  autocomplete="off"
                  class="input"
                  type="password"
                  placeholder="Your password confirmation"
                />
              </p>
              <span class="is-size-7">
                <span>The password confirmation must be at least </span>
                <span v-if="validPwdconf" class="is-green">8 characers ✔.</span>
                <span v-else class="is-red">8 characters &#215;.</span>
              </span>
              <p v-if="notpwdequal">
                <span class="is-red is-size-7"
                  >The password and its confirmation are not equal.</span
                >
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  v-model="cellphone"
                  class="input"
                  type="text"
                  placeholder="Enter a cellphone number"
                />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  v-model="adress"
                  class="input"
                  type="text"
                  placeholder="Enter an adress"
                />
              </p>
            </div>
            <div class="field has-text-centered">
              <input
                type="submit"
                class="button btn-subscribes"
                value="Create an account"
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
  data() {
    return {
      email: '',
      name: '',
      surname: '',
      password: '',
      password_confirmation: '',
      cellphone: '',
      adress: '',
      nameEmpty: false,
      emailInvalid: false,
    }
  },
  computed: {
    everyThingOk() {
      return (
        !this.emailInvalid &&
        !this.nameEmpty &&
        this.validPwd &&
        this.validPwdconf &&
        !this.notpwdequal
      )
    },
    validPwd() {
      return this.password.length >= 8
    },
    validPwdconf() {
      return this.password_confirmation.length >= 8
    },
    notpwdequal() {
      return (
        this.password.length >= 8 &&
        this.password_confirmation.length >= 8 &&
        this.password_confirmation !== this.password
      )
    },
    validEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  methods: {
    checkName() {
      if (this.name !== '') {
        this.nameEmpty = false
      } else this.nameEmpty = true
    },
    register() {
      if (this.email === '' || !this.validEmail) {
        this.emailInvalid = true
      } else this.emailInvalid = false
      if (this.name === '' || !this.name.trim().length) this.nameEmpty = true
      else this.nameEmpty = false
      if (this.everyThingOk) {
        // this.$store.dispatch('register').then(() => {
        //   this.$store.commit('hasRegistered', true)
        //   setTimeout(function () {
        //     this.$store.push('/waloo/login')
        //   }, 1000)
        // })
        alert('ok')
      }
    },
  },
}
</script>

<style scoped>
.register-form {
  font-size: 8px !important;
  position: relative;
  top: 2rem;
  bottom: 2rem;
  /* height: 90%;
  width: 100%; */
}
.d-my-register,
.d-other {
  width: 70%;
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
    margin-top: -17.5rem !important;
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
  .my-register {
    margin-top: -18.5rem !important;
  }
}
</style>
