export default ({app, store}) => {
  const token = app.$cookies.get('jwt_token') // 1

  if (token) {
    store.dispatch('setToken', token)
  }
}
