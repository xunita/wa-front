<template>
  <div class="bewa px-2">
    <div class="columns">
      <div class="column is-one-fifth listcateg">
        <div class="card">
          <div class="card-content">
            <div
              class="content d-item is-multiline is-size-7 has-text-weight-semibold"
            >
              <client-only>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fas fa-stream"></i> </span
                  ><span>All categories</span> </a
                ><a class="navbar-item wal">
                  <span class="icon">
                    <i class="fas fa-hat-cowboy-side"></i> </span
                  ><span>Livestock</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon">
                    <i class="fas fa-drumstick-bite"></i> </span
                  ><span>Poultry</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fas fa-apple-alt"></i> </span
                  ><span>Fruits</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fab fa-forumbee"></i> </span
                  ><span>Honey</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fas fa-ring"></i> </span
                  ><span>Cereals</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon">
                    <i class="fas fa-cloud-meatball"></i> </span
                  ><span>Oilseeds</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fas fa-carrot"></i> </span
                  ><span>Vegetables</span>
                </a>
                <a class="navbar-item wal">
                  <span class="icon"> <i class="fas fa-cannabis"></i> </span
                  ><span>Tobacco</span>
                </a></client-only
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card most-card">
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
          <div class="ads">
            <figure class="image">
              <img
                class="is-border-radius-5px ads-img"
                src="/images/presentation/consumer.jpg"
              />
            </figure>
          </div>
          <div class="dotstyle dotstyle-fillin">
            <ul>
              <li :class="{ current: current1 }">
                <a @click="gotoNext('current1')">Home</a>
              </li>
              <li :class="{ current: current2 }">
                <a @click="gotoNext('current2')">About</a>
              </li>
              <li :class="{ current: current3 }">
                <a @click="gotoNext('current3')">Products</a>
              </li>
            </ul>
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
      current1: true,
      current2: false,
      current3: false,
    }
  },
  methods: {
    gotoNext(current) {
      return current === 'current1'
        ? ((this.current1 = true),
          (this.current2 = false),
          (this.current3 = false))
        : ((this.current1 = false),
          current === 'current2'
            ? ((this.current2 = true),
              (this.current1 = false),
              (this.current3 = false))
            : ((this.current2 = false),
              current === 'current3'
                ? ((this.current3 = true),
                  (this.current2 = false),
                  (this.current1 = false))
                : (this.current3 = false)))
    },
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
.dotstyle {
  position: absolute;
  width: fit-content;
  display: block !important;
  background-color: transparent;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 1rem;
}
.ads-img {
  width: 100%;
  height: 500px;
}
.bewa {
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
  width: 33%;
}
.most-card {
  position: relative;
  height: 500px;
  padding-bottom: 3rem;
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
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 5px;
  overflow: scroll;
  padding-left: 5px;
  overflow-x: hidden;
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
}
@media screen and (max-width: 1215px) {
  .prod-taille {
    width: 33.3333%;
  }
}
@media screen and (max-width: 900px) {
  .prod-taille {
    width: 45%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: 2rem;
  }
}
@media screen and (max-width: 780px) {
  .prod-taille {
    width: 50%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: -0.6rem;
  }
}
@media screen and (max-width: 867px) {
  .most-card {
    height: 420px;
  }
  .ads-img {
    height: 420px;
  }
}
@media screen and (max-width: 768px) {
  .listcateg {
    display: none !important;
  }
  .most-card {
    height: 400px;
  }
  .ads-img {
    height: 400px;
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
@media screen and (max-width: 600px) {
  .most-card {
    height: 320px;
  }
  .ads-img {
    height: 320px;
  }
}
@media screen and (max-width: 460px) {
  .most-card {
    height: 240px;
  }
  .ads-img {
    height: 240px;
  }
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
