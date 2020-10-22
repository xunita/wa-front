<template>
  <div class="vvcard the-prod pb-2">
    <div class="card-image">
      <client-only>
        <a title="Retire from the favorites" class="btn-fav filled">
          <span class="icon my-2 mx-1">
            <i class="fas fa-heart"></i>
          </span>
        </a>
      </client-only>
      <figure
        lazy-background="/images/product/product.gif"
        class="image is-3by2"
      >
        <img
          class="prod-img"
          :src="
            'http://localhost:8000/storage/shop/' +
            item.shop_id +
            '/products/' +
            item.picture
          "
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div>
      <div class="px-2 is-flex info">
        <client-only>
          <nuxt-link to="#" class="shopname is-color-4a"
            ><span
              class="underline is-size-7 has-text-weight-semibold is-color-4a"
              >{{ item.shop.name }}</span
            ><span class="icon ico-check mt-1">
              <i class="fas fa-check-circle"></i> </span
          ></nuxt-link>
        </client-only>
        <span class="tittle is-block">{{ item.title | capitalize }}</span>
        <div class="is-flex justy-between">
          <span
            class="price is-size-6 is-block has-text-weight-semibold is-color-028300"
            >$ {{ item | price }}/Kilo</span
          >
          <span
            v-if="item.reduction !== 0"
            class="is-block fited-width is-color-028300 reductible is-border-radius-5px has-text-weight-semibold"
            >-{{ item.reduction }}%</span
          >
        </div>
        <span class="priceold is-size-7 is-block has-text-weight-semibold"
          >$ {{ item.price }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    price(value) {
      if (value.reduction === 0) return value.toFixed(2)
      return (value.price * (value.reduction / 100)).toFixed(2)
    },
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      hasFavorite: false,
    }
  },
}
</script>

<style scoped>
.fa-check-circle {
  color: #666666;
  font-size: 11px;
}
.shopname {
  margin-top: -0.3rem;
}
.shopname:hover {
  color: #4a4a4a !important;
}
.image {
  height: 145px !important;
}
.the-prod {
  flex: none;
  width: 180px;
  z-index: 0;
}
.btn-fav .icon {
  width: 32px !important;
  height: 32px !important;
  border-radius: 290486px;
}
.btn-fav .icon .fa-heart {
  width: 24px !important;
  height: 24px !important;
  border-radius: 290486px;
}
.unfilled:hover .icon .fa-heart,
.filled:hover .icon .fa-heart {
  background-color: transparent !important;
}
.unfilled:hover .icon,
.filled:hover .icon {
  box-shadow: 0 0 10px rgb(196, 196, 196);
  -webkit-box-shadow: 0 0 10px rgb(196, 196, 196);
  background-color: transparent !important;
}
.filled .icon .fa-heart {
  font-size: 16px !important;
  color: #999999;
}
.filled .icon {
  width: 32px !important;
  height: 32px !important;
  border-radius: 290486px;
}
.filled .icon .fa-heart {
  width: 24px !important;
  height: 24px !important;
  border-radius: 290486px;
}
.filled:hover .icon .fa-heart {
  color: #949494;
}
.btn-fav {
  position: absolute;
  z-index: 999;
  right: 0;
}
.see-post {
  color: #028300;
}
.see-post:hover {
  text-decoration: underline;
}
.products-pop {
  position: relative;
  top: 3rem;
  margin-top: 4rem;
  margin: 0 auto;
}
.wal:hover {
  color: #028300 !important;
}
.prod-img {
  width: 100% !important;
}
.prod-taille {
  flex: none;
  width: 205.2px;
  z-index: 0;
}
@media screen and (max-width: 798px) {
  .products-pop {
    margin-top: 4rem !important;
  }
}
.most-card {
  padding-bottom: 0rem;
}

.db-prod {
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 0;
}
.vvcard:hover {
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}
.vvcard:hover .supp {
  display: block !important;
  animation: 0.5s appearz;
}
.qte {
  width: 70px;
  height: 28px;
  font-size: 0.9rem;
}
.btn-available {
  background: #ffffff2c !important;
  border: #ffffff2c !important;
  color: #027900 !important;
}
.add-cart-btn,
.btnbtn {
  width: 100%;
}
.fa-shopping-cart {
  color: white !important;
}
.buttonss {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 0.9rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
/* 
@media screen and (max-width: 1215px) {
  .prod-taille {
    width: 25%;
  }
}
@media screen and (max-width: 1000px) {
  .prod-taille {
    width: 25%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: 2rem;
  }
}
@media screen and (max-width: 980px) {
  .prod-taille {
    width: 33%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: -0.6rem;
  }
}
@media screen and (max-width: 798px) {
  .register-form {
    margin-top: 4rem !important;
  }
}
@media screen and (max-width: 768px) {
  .db-prod {
    display: flex !important;
  }
  .prod-taille {
    width: 33%;
  }
  .d-item {
    display: flex !important;
  }
}
@media screen and (max-width: 750px) {
  .d-item {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 700px) {
  .prod-taille {
    width: 50%;
  }
}
@media screen and (max-width: 540px) {
  .prod-taille {
    width: 80%;
  }
}
@media screen and (max-width: 380px) {
  .prod-taille {
    width: 100%;
  }
} */
.reductible {
  align-self: flex-end;
  padding: 0rem 0.3rem 0rem 0.3rem;
  background-color: rgba(2, 131, 0, 0.192);
}
.tittle {
  text-overflow: ellipsis;
  margin-top: -0.3rem;
  white-space: nowrap;
  overflow: hidden;
}
.priceold {
  text-decoration: line-through;
}
.info {
  flex-direction: column;
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
@keyframes appearZ {
  0% {
    transform: translateZ(10px);
    opacity: 0;
  }
}
</style>
