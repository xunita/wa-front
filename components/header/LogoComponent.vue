<template>
  <div class="is-flex align-center">
    <client-only>
      <a v-click-outside="hideIt">
        <span
          class="icon"
          @click="
            {
              menus = true
            }
          "
        >
          <i class="fas fa-bars"></i>
        </span>
        <transition v-if="menu" name="slide-fade">
          <div class="card menu-prod">
            <div
              class="full-width has-text-centered is-bgcolor-028300 is-color-white py-1"
            >
              <span
                class="has-text-centered menu-text is-size-6 has-text-weight-semibold"
                >Waloo Menu</span
              >
            </div>
            <a
              class="delete is-medium menu-del"
              @click="
                {
                  menus = false
                }
              "
            ></a>
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
        </transition>
      </a>
      <nuxt-link class="logo-link" to="/">
        <div class="is-flex">
          <Logo />
          <h1 class="title-logo is-green pb-1">Waloo</h1>
        </div>
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: false,
    }
  },
  computed: {
    menu() {
      return this.menus === true
    },
  },
  methods: {
    hideIt() {
      if (this.menus) this.menus = false
    },
  },
}
</script>

<style scoped>
.menu-text {
  font-size: 13px !important;
}
.wal:hover {
  color: #028300 !important;
}
.menu-del {
  position: absolute;
  top: 0.3rem;
  right: -1.8rem;
}
.menu-prod {
  z-index: 10000;
  animation: 0.2s appear;
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
}
.is-flex {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  width: fit-content;
  align-items: center;
}
.logo-link {
  display: block;
  width: fit-content !important;
}
.fa-bars {
  color: #6e6e6e;
}
@media screen and (max-width: 460px) {
  .title-logo {
    display: none !important;
  }
}
@keyframes appear {
  0% {
    transform: translateX(-10px);
  }
}
</style>
