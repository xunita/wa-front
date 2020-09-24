export const state = () => ({
  registered: false,
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
  registered(state, value) {
    state.email = value.email
    state.name = value.name
    state.surname = value.surname
    state.password = value.password
    state.cellphone = value.cellphone
    state.adress = value.adress
  },
  logged(state, value) {
    state.email = value.email
    state.password = value.password
  },
  hasRegistered(state, value) {
    state.registered = value
  },
  noAuth(state, value) {
    state.hasFailedAuth = value
  },
}
export const actions = {
  register({ state }) {},
}
