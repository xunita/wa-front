<template>
  <div class="cart">
    <client-only>
      <a class="a-cart is-flex align-center">
        <span class="icon is-block">
          <i class="fas fa-shopping-cart"></i>
        </span>
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
.fa-shopping-cart {
  font-size: 20px !important;
  color: #6e6e6e;
}
.a-cart:hover .fa-shopping-cart,
.a-cart:hover .my-cart {
  color: #004e66 !important;
}
</style>
