<template>
  <div class="is-flex d-search">
    <client-only>
      <div class="is-flex search-d">
        <div class="select">
          <select>
            <option
              v-for="(categ, key) in category"
              :key="key"
              class="has-text-weight-semibold is-size-6"
              :class="{ all: categ === 'All categories' }"
            >
              {{ categ }}
            </option>
          </select>
        </div>
        <input
          v-model="search"
          placeholder="Tomato, Oignon..."
          type="text"
          class="search-input has-a-border px-4 is-border-radius-5px has-no-outline border-color-gray"
          @input="make_search"
        />
        <div
          class="is-flex d-btn-search"
          :class="{
            'is-typing': search !== '',
            'can-delete': search !== '',
          }"
        >
          <client-only>
            <a
              v-if="search !== ''"
              class="delete is-small mr-1"
              @click="
                {
                  search = ''
                  searching = false
                }
              "
            ></a>
            <button class="button has-no-outline search-btn is-pulled-right">
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
            </button>
          </client-only>
        </div>
      </div>
      <div v-if="looking" class="list-result mt-2">
        <div class="dropdown-content">
          <a
            v-for="(item, key) in filteredList"
            :key="key"
            class="dropdown-item is-flex align-center"
          >
            <span class="icon for-search mt-1 is-block">
              <i class="fas fa-search"></i>
            </span>
            <span class="is-block has-text-weight-semibold">{{
              item.title
            }}</span>
          </a>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searching: false,
      titles: [],
      category: [
        'All categories',
        'Livestock',
        'Poultry',
        'Fruits',
        'Honey',
        'Cereals',
        'Oilseeds',
        'Vegetables',
        'Tobacco',
      ],
    }
  },
  computed: {
    looking() {
      return this.searching === true
    },
    filteredList() {
      return this.titles.filter((title) => {
        return title.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  // beforeMount() {
  //   this.making_search()
  // },
  methods: {
    async making_search() {
      const data = await this.$axios.$get('getAllProductsTitle')
      this.titles = data
    },
    make_search() {
      if (this.search !== '' && this.titles.length !== 0) {
        let isfound = false
        for (const title of this.titles) {
          if (title.title.toLowerCase().includes(this.search.toLowerCase()))
            isfound = true
        }
        if (isfound) {
          this.searching = true
        } else this.searching = false
      } else this.searching = false
    },
  },
}
</script>

<style scoped>
.all {
  color: #028300;
  font-size: 18px !important;
  font-weight: normal !important;
}
div.select::after {
  /* color: #004e66 !important; */
  border-color: #028300 !important;
  font-size: 12px !important;
}
div.select select {
  outline: none !important;
  font-size: 16px !important;
  position: relative;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
div.select select:focus,
div.select select:active {
  /* color: #004e66 !important; */
  outline: none !important;
}
div.select {
  /* color: #004e66 !important; */
  position: relative;
  left: 0.1rem;
}
.delete {
  margin-top: 0.78rem;
}
.d-search {
  flex-direction: column;
  height: 24px !important;
}
.list-result {
  position: relative;
  left: 11.75rem;
  width: 390px;
  z-index: 99;
}
@media screen and (max-width: 1210px) {
  .search-input {
    width: 350px !important;
  }
  .list-result {
    width: 257px !important;
    left: 11.75rem;
  }
  .search-d {
    width: 400px !important;
  }
}
@media screen and (max-width: 1024px) {
  .search-input {
    width: 200px !important;
  }
  .list-result {
    width: 257px !important;
    left: 5rem;
  }
  .search-d {
    width: 80px !important;
  }
}
.search-d {
  width: fit-content;
  height: 28px;
  align-items: center;
}
.search-input {
  height: 40px;
  font-size: 15.5px !important;
  width: 390px !important;
  padding-top: 0.4rem;
  padding-right: 64px !important;
  padding-bottom: 0.4rem;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
.d-btn-search {
  position: relative;
  right: 2.4rem;
  z-index: 99;
}
.is-typing {
  right: 5.64rem !important;
}
.can-delete {
  right: 3.64rem !important;
}
.searching {
  right: 5.64rem !important;
}
.search-btn {
  background-color: transparent;
  border: none;
  height: 40px !important;
}
.search-btn:hover {
  background-color: #028300;
  animation: 0.5s appearZ;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
.search-btn:hover .fa-search {
  color: white !important;
}
.fa-search {
  color: #6e6e6e !important;
}
.for-search .fa-search {
  color: #cacaca !important;
}
@keyframes appearZ {
  0% {
    opacity: 0.5;
  }
}
</style>
