<template>
  <div class="cart">
    <client-only>
      <a class="a-cart is-flex align-center">
        <span class="icon is-block">
          <i class="fas fa-shopping-cart"></i>
        </span>
        <span class="badge">7</span>
        <span
          class="my-cart is-block pl-1 has-text-weight-semibold is-color-black"
          >My cart</span
        >
      </a>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasCmd: false,
    }
  },
}
</script>

<style scoped>
.cart,
.my-cart {
  width: fit-content !important;
}
.my-cart {
  width: 60px !important;
}
.fa-shopping-cart {
  font-size: 16px !important;
  color: #6e6e6e;
}
.a-cart {
  position: relative;
}
.a-cart:hover .fa-shopping-cart,
.a-cart:hover .my-cart {
  color: #028300 !important;
}
</style>
