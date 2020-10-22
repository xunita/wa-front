export default function ({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  store.dispatch('getfavorite').then(() => {
    redirect('/waloo/myfavorites')
  })
}
