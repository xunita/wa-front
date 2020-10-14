<template>
  <div class="products-pop">
    <div class="card most-card">
      <div class="card-content">
        <h6 class="title is-6">
          The most popular<a class="is-size-7 pl-2 see-post"
            >See more popular articles</a
          >
        </h6>
        <div id="elprod" class="is-flex db-prod">
          <client-only>
            <div
              class="prev is-clickable ml-4"
              @mouseover="showLeft"
              @mouseleave="unshowLeft"
            >
              <span v-if="left" key="poret" class="icon">
                <i class="fas fa-chevron-circle-left"></i>
              </span>
              <span v-else key="potre" class="icon">
                <i class="fas fa-chevron-left"></i>
              </span>
            </div>
            <div
              class="next is-clickable mr-4"
              @mouseover="showRight"
              @mouseleave="unshowRight"
            >
              <span v-if="right" key="por" class="icon">
                <i class="fas fa-chevron-circle-right"></i>
              </span>
              <span v-else key="pot" class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
          </client-only>
          <div v-for="i in 8" :key="i" class="column m-centered">
            <Product />
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
      right: false,
      left: false,
    }
  },
  methods: {
    showLeft() {
      this.left = true
    },
    unshowLeft() {
      this.left = false
    },
    showRight() {
      this.right = true
    },
    unshowRight() {
      this.right = false
    },
  },
}
</script>

<style scoped>
.see-post {
  color: #028300;
}
.see-post:hover {
  text-decoration: underline;
}
.products-pop {
  position: relative;
  top: 3rem;
  margin: 0 auto;
}
.wal:hover {
  color: #028300 !important;
}
.most-card {
  padding-bottom: 0rem;
}
.fa-chevron-circle-right,
.fa-chevron-circle-left {
  font-size: 44px;
  width: 40px !important;
  height: 40px !important;
  color: #028300;
  opacity: 0;
  border: none;
  background-color: white;
}
.fa-chevron-right,
.fa-chevron-left {
  font-size: 36px;
  color: #0000008a;
}
.prev:hover .fa-chevron-circle-left,
.next:hover .fa-chevron-circle-right {
  animation: 0.1s appearZ;
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
  transform: scale(1.01);
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
  }
}
</style>
