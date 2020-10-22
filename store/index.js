export const state = () => ({
  // Status
  errorRegister: false,
  emailUsed: false,
  registered: false,
  errorLogin: false,
  notLogged: false,
  hasPicDeleted: false,
  hasPicUpadated: false,
  /* User management */
  // Auth
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
  myAdress: {},
  myPhone: {},
  mytoken: '',
  // Products
  // My favorites
  myFav: {},
})
export const mutations = {
  // User info
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
  // User Product favorites
  setFavorites(state, value) {
    state.myFav = value
  },
  setAdress(state, value) {
    state.myAdress = value
  },
  setPhone(state, value) {
    state.myPhone = value
  },
  setmyToken(state, value) {
    state.mytoken = value
  },
  setupdPic(state, value) {
    state.hasPicUpadated = value
  },
  setdelPic(state, value) {
    state.hasPicDeleted = value
  },
}
export const actions = {
  // Auth
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
            commit('setmyToken', response.data.token)
          }
          resolve(response)
        })
        .catch((error) => {
          commit('hasNotLogged', true)
          reject(error)
        })
    })
  },
  getAdress({ state, commit }) {
    return new Promise((resolve, reject) => {
      // const config = {
      //   headers: { Authorization: `Bearer ${state.mytoken}` },
      // }
      this.$axios
        .$post('myadresses', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) commit('setAdress', {})
          else commit('setAdress', response['0'])
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getPhone({ commit }) {
    return new Promise((resolve, reject) => {
      // const config = {
      //   headers: { Authorization: `Bearer ${state.mytoken}` },
      // }
      this.$axios
        .$post('myphones', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) commit('setPhone', {})
          else commit('setPhone', response['0'])
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // Products
  getfavorite({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('myfavorites', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) {
            commit('setFavorites', {})
          } else {
            commit('setFavorites', response)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateUserPic({ commit }, picture) {
    const formData = new FormData()
    formData.append('file', picture)
    formData.append('id', this.$auth.user.id)
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('updatepic', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          if (response.undo) {
            commit('setupdPic', false)
          } else {
            commit('setupdPic', true)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  delUserPic({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('delpic', { id: this.$auth.user.id })
        .then((response) => {
          if (response.undo) {
            commit('setdelPic', false)
          } else {
            commit('setdelPic', true)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('myfavorites', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) {
            commit('setFavorites', {})
          } else {
            commit('setFavorites', response)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateAdress({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('myfavorites', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) {
            commit('setFavorites', {})
          } else {
            commit('setFavorites', response)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateTel({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('myfavorites', { id: this.$auth.user.id })
        .then((response) => {
          if (response.message) {
            commit('setFavorites', {})
          } else {
            commit('setFavorites', response)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
