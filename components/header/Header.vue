<template>
  <div class="header">
    <!-- Main container -->
    <nav class="mynavbar" role="navigation" aria-label="main navigation">
      <div class="search-mini mt-4 mb-3 is-hidden m-centered align-center">
        <div class="search-api-mini">
          <MiniSearchComponent />
        </div>
        <div class="cart mymini-cart is-hidden">
          <CartComponent />
        </div>
      </div>
      <div class="is-flex align-center justy-between">
        <div class="navbar-brand">
          <LogoComponent />
        </div>
        <div class="is-flex align-center right-brand ml-6 justy-between">
          <div class="search-api">
            <SearchComponent />
          </div>
          <div class="is-flex align-center right max">
            <div class="favorite">
              <FavoriteComponent />
            </div>
            <div class="user px-5">
              <UserComponent />
            </div>
          </div>
          <div class="right is-hidden mini">
            <MiniComponent />
          </div>
          <div class="cart big-cart">
            <CartComponent />
          </div>
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
.navbar-brand {
  width: fit-content !important;
}
.right-brand {
  width: 100% !important;
}
.search-api {
  width: 578px !important;
}
@media screen and (max-width: 1210px) {
  .search-api {
    width: 400px !important;
  }
}
@media screen and (max-width: 1024px) {
  .search-api {
    width: 300px !important;
  }
}
@media screen and (max-width: 940px) {
  .max {
    display: none !important;
  }
  .mini {
    display: block !important;
  }
}
@media screen and (max-width: 797px) {
  .search-api {
    display: none !important;
  }
  .search-mini {
    display: flex !important;
    margin-left: 15% !important;
    width: 80% !important;
  }
  .right-brand {
    width: fit-content !important;
    margin-left: -3rem !important;
    justify-content: initial;
    float: right;
  }
}
@media screen and (max-width: 490px) {
  .big-cart {
    display: none !important;
  }
  .mymini-cart {
    display: block !important;
    position: relative;
    right: 2rem;
  }
  .search-mini {
    margin-left: 0% !important;
    width: 30% !important;
    margin: 0;
  }
}
@media screen and (max-width: 413px) {
  .mymini-cart {
    right: 5rem;
  }
}
@media screen and (max-width: 370px) {
  .mymini-cart {
    right: 9rem;
  }
}
@media screen and (max-width: 330px) {
  .mymini-cart {
    right: 9rem;
  }
}
.right {
  width: auto !important;
  padding-left: 3rem;
}
.cart {
  width: fit-content !important;
}
.favorite {
  width: fit-content !important;
}
.user {
  width: fit-content !important;
}
/* .search-api {
  position: relative;
  right: 7rem;
  width: 30% !important;
}
.right {
  width: 35%;
} */
</style>
