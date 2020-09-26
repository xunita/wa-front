export const state = () => ({
  errorRegister: false,
  emailUsed: false,
  registered: false,
  errorLogin: false,
  notLogged: false,

  registerUser: {
    email: '',
    name: '',
    surname: '',
    password: '',
    cellphone: '',
    adress: '',
  },
  loginUser: {
    email: '',
    password: '',
  },
})
export const mutations = {
  registerInfo(state, value) {
    state.registerUser.email = value.email
    state.registerUser.name = value.name
    state.registerUser.surname = value.surname
    state.registerUser.password = value.password
    state.registerUser.cellphone = value.cellphone
    state.registerUser.adress = value.adress
  },
  loginInfo(state, value) {
    state.loginUser.email = value.email
    state.loginUser.password = value.password
  },
  hasRegistered(state, value) {
    state.registered = value
  },
  hasNotLogged(state, value) {
    state.notLogged = value
  },
  hasMailUsed(state, value) {
    state.emailUsed = value
  },
  // noAuth(state, value) {
  //   state.hasFailedAuth = value
  // },
}
export const actions = {
  register({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('register', state.registerUser)
        .then((response) => {
          if (response.message === 'User registered with success') {
            commit('hasRegistered', true)
            commit('hasMailUsed', false)
          } else {
            commit('hasRegistered', false)
            commit('hasMailUsed', true)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  login({ state, commit }) {
    return new Promise((resolve, reject) => {
      this.$auth
        .loginWith('local', {
          data: state.loginUser,
        })
        .then((response) => {
          if (response.message) {
            commit('hasNotLogged', true)
          } else {
            commit('hasNotLogged', false)
          }
          resolve(response)
        })
        .catch((error) => {
          commit('hasNotLogged', true)
          reject(error)
        })
    })
  },
}
