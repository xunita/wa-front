<template>
  <div class="vvcard">
    <div class="card-image">
      <client-only>
        <a
          v-if="hasFavorite"
          title="Retire the favorites"
          class="btn-fav filled"
        >
          <span key="azstared" class="icon my-2 mx-1">
            <i class="fas fa-heart"></i>
          </span>
        </a>
        <a v-else title="Add to the favorites" class="btn-fav unfilled">
          <span key="zaunstared" class="icon my-2 mx-1">
            <i class="far fa-heart"></i>
          </span>
        </a>
      </client-only>
      <figure class="image is-1by1">
        <img
          class="prod-img"
          src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/2362/1.jpg"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div>
      <div class="px-2 is-flex info">
        <span
          class="is-block fited-width is-color-white reductible is-border-radius-5px has-text-weight-semibold is-pulled-right"
          >-14%</span
        >
        <span class="tittle is-block my-1"
          >Tecno Spark 5 Air - 7"- 2 Go - 32 Go - Jadeite Ice - Garantie 1
          An</span
        >
        <span
          class="price is-size-6 is-block has-text-weight-semibold is-color-004e66"
          >$ 998,45</span
        >
        <span class="priceold is-size-7 is-block has-text-weight-semibold"
          >$ 1350,45</span
        >
        <div class="supp">
          <div class="add-cart is-flex justy-between">
            <div class="is-flex-self-end">
              <span class="buttonss btn-available has-text-weight-semibold">
                Available
              </span>
            </div>
            <div class="field">
              <div class="control">
                <label class="is-size-7 has-text-weight-semibold" for="qty"
                  >Quantity</label
                ><br />
                <input
                  id="qty"
                  class="input qte"
                  type="number"
                  placeholder="Qty"
                />
              </div>
            </div>
          </div>
          <div class="m-centered add-cart-btn my-2">
            <button class="button btnbtn btn-subscribe is-size-7">
              <client-only>
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </client-only>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasFavorite: false,
    }
  },
}
</script>

<style scoped>
.fa-heart {
  font-size: 24px !important;
  color: #007497;
}
.btn-fav .icon {
  width: 32px !important;
  height: 32px !important;
  border-radius: 290486px;
  background-color: rgba(255, 255, 255, 0.589);
}
.btn-fav .icon .fa-heart {
  width: 24px !important;
  height: 24px !important;
  border-radius: 290486px;
}
.unfilled:hover .icon {
  background-color: rgba(255, 255, 255, 1);
}

.filled .fa-heart {
  font-size: 24px !important;
  color: #006a8a;
}
.filled .icon {
  width: 32px !important;
  height: 32px !important;
  border-radius: 290486px;
  background-color: #004e6600;
}
.filled .icon .fa-heart {
  width: 24px !important;
  height: 24px !important;
  border-radius: 290486px;
}
.filled:hover .icon {
  background-color: #ffffff3a;
}
.filled:hover .icon .fa-heart {
  color: #007497;
}
.btn-fav {
  position: absolute;
  z-index: 999;
  right: 0;
}
.see-post {
  color: #004e66;
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
.fa-chevron-circle-right,
.fa-chevron-circle-left {
  font-size: 44px;
  width: 40px !important;
  height: 40px !important;
  color: #004e66;
  opacity: 0;
  border: none;
  background-color: white;
}
.fa-chevron-right,
.fa-chevron-left {
  font-size: 36px;
  color: #00000079;
}
.prev:hover .fa-chevron-circle-left,
.next:hover .fa-chevron-circle-right {
  animation: 0.4s appearZ;
  opacity: 1;
  border-radius: 290486px;
  /* -webkit-box-shadow: 0 0 5px rgb(0, 0, 0, 0.158);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.158); */
}
.next .fa-chevron-right,
.prev .fa-chevron-left {
  border-radius: 290486px;
  /* -webkit-box-shadow: 0 0 5px rgb(0, 0, 0, 0.158);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.158); */
}
.prev {
  position: absolute;
  z-index: 999;
  top: 45%;
  left: 0;
}
.next {
  position: absolute;
  z-index: 999;
  top: 45%;
  right: 0;
}
.db-prod {
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 0;
}
::-webkit-scrollbar {
  width: 5px; /* Remove scrollbar space */
  border-radius: 10px;
  animation: 0.2s appear;
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.db-prod:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.vvcard:hover {
  cursor: pointer;
  animation: 0.2s appear;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  transform: scale(1.05);
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
  background-color: #007497;
}
.tittle {
  text-overflow: ellipsis;
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
