<template>
  <div class="header mx-6">
    <!-- Main container -->
    <nav
      class="mynavbar is-flex align-center justy-between"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <LogoComponent />
      </div>
      <div class="search-api">
        <SearchComponent />
      </div>
      <div class="is-flex align-center right justy-between">
        <div class="favorite">
          <FavoriteComponent />
        </div>
        <div class="user">
          <UserComponent />
        </div>
        <div class="cart">
          <CartComponent />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  width: 100% !important;
}
.search-api {
  position: relative;
  right: 7rem;
  width: 30% !important;
}
.right {
  width: 35%;
}
</style>
