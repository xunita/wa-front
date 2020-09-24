<template>
  <div class="is-flex d-search">
    <client-only>
      <div class="is-flex search-d">
        <div class="select">
          <select>
            <option v-for="(categ, key) in category" :key="key">
              {{ categ }}
            </option>
          </select>
        </div>
        <input
          v-model="search"
          placeholder="Iphone 11 pro Max..."
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
        'Mini-market',
        'Home & office',
        'Electronics',
        'Phone & tablet',
        'Fashion',
        'Computer',
        'Video games',
        'Sports',
        'Auto & motorcycle',
        'Garden & outdoor',
        'Others categories',
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
div.select::after {
  /* color: #004e66 !important; */
  border-color: #004e66 !important;
  font-size: 12px !important;
}
div.select select {
  outline: none !important;
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
  width: 30% !important;
}
@media screen and (max-width: 413px) {
  .search-d,
  .d-search {
    width: 75% !important;
  }
}
@media screen and (max-width: 370px) {
  .search-d,
  .d-search {
    width: 60% !important;
  }
}
.delete {
  margin-top: 0.78rem;
}
.d-search {
  flex-direction: column;
  height: 24px !important;
  width: 100% !important;
}
.list-result {
  position: relative;
  left: 11.75rem;
  width: 63%;
  z-index: 99;
}
.search-d {
  width: fit-content;
  height: 28px;
  width: 100%;
  align-items: center;
}
.search-input {
  height: 40px;
  font-size: medium;
  width: 100% !important;
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
  background-color: #004e66;
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
