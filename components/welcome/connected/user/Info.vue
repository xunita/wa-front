<template>
  <div class="fav-page box pb-3">
    <div class="title-fav py-2">
      <span class="has-text-weight-semibold is-size-6 px-4">My profile</span>
    </div>
    <div class="py-2 px-4 m-centered user-setting">
      <div class="picture py-4">
        <div class="mb-3">
          <h6 class="title is-6 pb-2">Profile's picture</h6>
        </div>
        <div class="is-flex">
          <figure
            class="mr-1 mt-1 user-img-inf is-clickable"
            @click="openImage"
          >
            <img
              v-lazy-load
              class="user-img-inf"
              :data-src="image"
              alt="Placeholder image"
            />
          </figure>
          <div class="modal gros-pic" :class="{ 'is-active': open }">
            <div class="modal-background"></div>
            <div class="modal-content full-width" @click="openImage">
              <figure class="image fig mt-6">
                <img
                  class="is-border-radius-5px c-fig is-d-centered"
                  :src="image"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="pic-edit ml-2">
            <div class="edit-del">
              <client-only>
                <div class="d-likes is-flex" @click="uploadApic">
                  <span class="icon is-block inf-eddit">
                    <i class="far fa-edit"></i>
                  </span>
                  <input
                    id="file"
                    ref="file"
                    type="file"
                    class="inputfile"
                    hidden
                    @change="handleFileUpload()"
                  />
                </div>
                <div v-if="picting" class="mt-1">
                  <button
                    class="button is-small is-light is-font-size16"
                    @click="canceling"
                  >
                    Cancel
                  </button>
                  <button
                    class="button is-small btn-subscribe is-font-size16"
                    @click="saving"
                  >
                    Save
                  </button>
                </div>
                <div
                  v-else-if="this.$auth.user.profile !== null"
                  class="d-del is-flex"
                  @click="delPic"
                >
                  <div>
                    <span class="icon is-block inf-reddit">
                      <i class="fas fa-times"></i>
                    </span>
                  </div>
                </div>
              </client-only>
            </div>
          </div>
        </div>
        <!-- <div class="us-inf-inf d-flex">
          <input
            id="file"
            ref="file"
            type="file"
            class="inputfile"
            @change="handleFileUpload()"
          />
          <label for="file">Importer une photo</label>
          <div
            v-show="saved"
            class="alert alert-success success-img"
            role="alert"
          >
            Photo mis à jour avec succès ✓
          </div>
          <div
            v-if="notimg"
            class="alert alert-danger success-img"
            role="alert"
          >
            {{ msglert }}
          </div>
        </div> -->
      </div>
      <div class="picture py-2">
        <div class="is-flex">
          <div><h6 class="title is-6">My informations</h6></div>
          <client-only>
            <div
              v-if="!infoing"
              class="d-likes d-d-inf"
              @click="
                {
                  infoing = true
                }
              "
            >
              <span class="icon is-block inf-eddit">
                <i class="far fa-edit"></i>
              </span></div
          ></client-only>
        </div>
        <div>
          <div v-if="infoing" class="info-info pt-2">
            <div class="field">
              <div class="control">
                <input
                  v-model="info.name"
                  class="input is-small is-font-size16"
                  type="text"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="info.surname"
                  class="input is-small is-font-size16"
                  type="text"
                  placeholder="Your surname"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="info.email"
                  class="input is-small is-font-size16"
                  type="text"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div class="mt-1">
              <button
                class="button is-small is-light is-font-size16"
                @click="
                  {
                    infoing = false
                  }
                "
              >
                Cancel
              </button>
              <button
                class="button is-small btn-subscribe is-font-size16"
                @click="
                  {
                    infoing = false
                  }
                "
              >
                Save
              </button>
            </div>
          </div>
          <div v-if="!infoing" class="not-mod">
            <div class="label-inf">
              <span class="has-text-weight-semibold is-font-size16"
                >Name :</span
              >
              <span>{{ info.name | capitalize }}</span>
            </div>
            <div v-if="info.surname !== null" class="label-inf">
              <span class="has-text-weight-semibold is-font-size16"
                >Surname :</span
              >
              <span>{{ info.surname | capitalize }}</span>
            </div>
            <div class="label-inf">
              <span class="has-text-weight-semibold is-font-size16"
                >Email :</span
              >
              <span>{{ info.email }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="picture py-2 mt-2">
        <div class="is-flex">
          <div><h6 class="title is-6 pb-2">My adress</h6></div>
          <client-only>
            <div
              v-if="adress.adr !== '' && !adressing"
              class="d-likes d-d-inf"
              @click="
                {
                  adressing = true
                }
              "
            >
              <span class="icon is-block inf-eddit">
                <i class="far fa-edit"></i>
              </span></div
          ></client-only>
        </div>
        <div>
          <div v-if="adressing" class="info-info">
            <div class="field">
              <div class="control">
                <input
                  v-model="adress.adr"
                  class="input is-small is-font-size16"
                  type="text"
                  placeholder="Your adress"
                />
              </div>
            </div>
            <div class="mt-1">
              <button
                class="button is-small is-light is-font-size16"
                @click="
                  {
                    adressing = false
                  }
                "
              >
                Cancel
              </button>
              <button
                class="button is-small btn-subscribe is-font-size16"
                @click="
                  {
                    adressing = false
                  }
                "
              >
                Save
              </button>
            </div>
          </div>
          <div v-if="adress.adr !== '' && !adressing" class="label-inf">
            <span class="has-text-weight-semibold is-font-size16"
              >Adress :</span
            >
            <span>{{ adress.adr }}</span>
          </div>
          <client-only>
            <div
              v-if="adress.adr === '' && !adressing"
              class="is-flex is-color-028300-hover fited-width is-clickable"
              @click="
                {
                  adressing = true
                }
              "
            >
              <div class="d-likes">
                <span class="icon is-block d-d-add">
                  <i class="fas fa-plus"></i>
                </span>
              </div>
              <span class="is-block is-font-size16 mt-2 ml-1"
                >Add an adress</span
              >
            </div></client-only
          >
        </div>
      </div>
      <div class="picture py-2 mt-2">
        <div class="is-flex">
          <div><h6 class="title is-6 pb-2">My contact</h6></div>
          <client-only>
            <div
              v-if="phone.tel !== '' && !phoning"
              class="d-likes d-d-inf"
              @click="
                {
                  phoning = true
                }
              "
            >
              <span class="icon is-block inf-eddit">
                <i class="far fa-edit"></i>
              </span></div
          ></client-only>
        </div>
        <div>
          <div v-if="phoning" class="info-info">
            <div class="field">
              <div class="control">
                <input
                  v-model="phone.tel"
                  class="input is-small is-font-size16"
                  type="text"
                  placeholder="Your cellphone number"
                />
              </div>
            </div>
            <div class="mt-1">
              <button
                class="button is-small is-light is-font-size16"
                @click="
                  {
                    phoning = false
                  }
                "
              >
                Cancel
              </button>
              <button
                class="button is-small btn-subscribe is-font-size16"
                @click="
                  {
                    phoning = false
                  }
                "
              >
                Save
              </button>
            </div>
          </div>
          <div v-if="phone.tel !== '' && !phoning" class="label-inf">
            <span class="has-text-weight-semibold is-font-size16"
              >Cellphone :</span
            >
            <span>{{ phone.tel }}</span>
          </div>
          <client-only>
            <div
              v-if="phone.tel === '' && !phoning"
              class="is-flex is-color-028300-hover fited-width is-clickable"
              @click="
                {
                  phoning = true
                }
              "
            >
              <div class="d-likes">
                <span class="icon is-block d-d-add">
                  <i class="fas fa-plus"></i>
                </span>
              </div>
              <span class="is-block is-font-size16 mt-2 ml-1"
                >Add a phone number</span
              >
            </div></client-only
          >
        </div>
      </div>
      <div class="picture py-2 mt-2">
        <div class="is-flex">
          <div><h6 class="title is-6 pb-2">Settings</h6></div>
        </div>
        <div class="is-flex justy-between">
          <div>
            <span class="has-text-weight-semibold is-font-size16"
              >Account :</span
            >
          </div>
          <button class="button is-small is-danger is-font-size16">
            Delete my account
          </button>
        </div>
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
    lowerlize(value) {
      return value.toLowerCase()
    },
  },
  data() {
    return {
      isUpdating: false,
      isDeleting: false,
      open: false,
      file: '',
      image:
        this.$auth.user.profile !== null
          ? 'http://localhost:8000/storage/users/' +
            this.$auth.user.id +
            '/profile/' +
            this.$auth.user.profile
          : '/images/profile/1.png',
      picting: false,
      infoing: false,
      adressing: false,
      phoning: false,
      hasphone: true,
      adress: {
        adr: '',
      },
      phone: {
        tel: '',
      },
      info: {
        name: this.$auth.user.name,
        surname:
          this.$auth.user.surname === null ? '' : this.$auth.user.surname,
        email: this.$auth.user.email,
      },
    }
  },
  computed: {
    myfav() {
      return this.$store.state.myFav
    },
  },
  created() {
    this.$store.dispatch('getAdress').then(() => {
      this.adress.adr = this.$store.state.myAdress.adress
        ? this.$store.state.myAdress.adress
        : ''
    })
    this.$store.dispatch('getPhone').then(() => {
      this.phone.tel = this.$store.state.myPhone.phone
        ? this.$store.state.myPhone.phone
        : ''
    })
  },
  methods: {
    openImage() {
      this.open = !this.open
    },
    handleFileUpload() {
      this.isDeleting = false
      this.file = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        function () {
          this.image = reader.result
        }.bind(this),
        false
      )
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          if (this.file.size <= 5000000) {
            reader.readAsDataURL(this.file)
            this.picting = true
            this.isUpdating = true
          }
        }
      }
    },
    uploadApic() {
      document.getElementById('file').click()
    },
    delPic() {
      this.picting = true
      this.isUpdating = false
      this.isDeleting = true
    },
    canceling() {
      document.getElementById('file').value = ''
      if (this.$auth.user.profile === null) {
        this.image = '/images/profile/1.png'
      } else {
        this.image =
          'http://localhost:8000/storage/users/' +
          this.$auth.user.id +
          '/profile/' +
          this.$auth.user.profile
      }
      this.isUpdating = false
      this.isDeleting = false
      this.picting = false
    },
    saving() {
      if (this.isUpdating) {
        this.$store.dispatch('updateUserPic', this.file).then(() => {
          this.$auth.fetchUser().then(() => {})
        })
      } else if (this.isDeleting) {
        this.$store.dispatch('delUserPic').then(() => {
          this.$auth.fetchUser().then(() => {})
          this.image = '/images/profile/1.png'
        })
      }
      document.getElementById('file').value = ''
      this.isUpdating = false
      this.isDeleting = false
      this.picting = false
    },
  },
}
</script>
<style scoped>
.modal-content {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 7px; /* Remove scrollbar space */
  border-radius: 10px;
  animation: 0.2s appear;
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.modal-content:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.c-fig {
  width: 628px !important;
  height: 628px !important;
}
.user-setting {
  width: 50%;
}
@media screen and (max-width: 1024px) {
  .user-setting {
    width: 60%;
  }
}
@media screen and (max-width: 830px) {
  .modal-content {
    margin-top: 7rem !important;
  }
}
@media screen and (max-width: 747px) {
  .c-fig {
    width: 70% !important;
    height: 70% !important;
  }
  .user-setting {
    width: 80%;
  }
}
@media screen and (max-width: 1024px) {
  .user-setting {
    width: 100%;
  }
}
.info-info {
  animation: 0.2s appear;
}
.fa-edit,
.fa-times {
  font-size: 20px;
}
.inf-eddit {
  position: absolute;
  left: 0.6rem;
  top: 0.4rem;
}
.info-info {
  width: 60%;
}
.inf-reddit {
  position: absolute;
  left: 0.7rem;
  top: 0.5rem;
}
.d-d-inf {
  position: relative;
  left: 0.3rem;
  top: -0.5rem;
}
.d-d-add {
  position: relative;
  left: 0.725rem;
  top: 0.4rem;
}
.d-likes,
.d-del {
  position: relative;
  justify-content: center;
  width: 36px !important;
  height: 36px !important;
  cursor: pointer;
}
.is-color-028300-hover:hover .d-likes {
  color: #028300;
  background-color: #0283000e;
  border-radius: 290486px;
  transition: ease-in 0.1s;
}
.d-likes:hover {
  color: #028300;
  background-color: #0283000e;
  border-radius: 290486px;
  transition: ease-in 0.1s;
}
.d-del:hover {
  color: rgb(255, 0, 0);
  background-color: rgb(255, 0, 0, 0.055);
  border-radius: 290486px;
  transition: ease-in 0.1s;
}
.user-info {
  border-left: 1px solid #d4d4d4;
}
.btn-subscribes {
  background: #004e66 !important;
  border: #004e66 !important;
  color: rgb(255, 255, 255) !important;
}
.btn-subscribes:hover,
.btn-subscribes:focus,
.btn-subscribes:active {
  background: #004e66e1 !important;
  border: #004e66e1 !important;
}
.fav-page {
  padding: 0;
  position: relative;
  top: 3rem;
  width: 100%;
  min-height: 470px;
}
.btn-favv {
  width: fit-content !important;
}
.info-fav {
  width: 100%;
  flex-direction: column;
}
.title-fav {
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  background-color: #eeeeee00;
}
.fav-list {
  width: 50%;
  border-bottom: 1px solid #e4e4e4;
  margin: 0 auto;
}
</style>

<style scoped>
.the-prod {
  flex: none;
  width: 205.2px;
  z-index: 0;
}
.fa-heart {
  font-size: 24px !important;
  color: #868686;
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
.filled .fa-heart {
  font-size: 24px !important;
  color: #888888;
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
@media screen and (max-width: 956px) {
  .fav-list {
    width: 80%;
  }
}
@media screen and (max-width: 690px) {
  .fav-list {
    width: 100% !important;
  }
}
@media screen and (max-width: 575px) {
  .info-fav {
    margin-left: 0.5rem !important;
  }
}
@media screen and (max-width: 535px) {
  .fav-list {
    flex-direction: column;
  }
  .profav {
    width: fit-content;
    margin: 0 auto;
  }
  .info-fav {
    margin-top: 1.5rem;
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
.btn-unavailable {
  background: #ffffff2c !important;
  border: #ffffff2c !important;
  color: red !important;
}
.add-cart-btn {
  width: 65%;
}
.add-cart-btn-add {
  width: 100%;
}
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
<style scoped>
.mul-reg-v {
  width: 50%;
  position: relative;
  left: auto;
}
.mul-reg-v input {
  border: none;
}
.success-img {
  position: relative;
  left: 2%;
  top: -0.5rem;
}
.us-inf-inf button {
  height: 32px;
  position: relative;
  left: 2%;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile:focus + label {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}
.inputfile + label {
  height: 32px;
  font-size: 1.1em;
  color: white;
  background-color: #004e66;
  display: inline-block;
  padding-top: 0.24rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.inputfile:focus + label,
.inputfile + label:hover {
  background-color: rgb(1, 102, 133);
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}
.us-inf-inf {
  position: relative;
  left: 8%;
}
.us-info {
  position: relative !important;
  top: 1rem !important;
}
.us-inf-img img {
  border-radius: 50%;
}
@keyframes appear {
  0% {
    transform: translateX(-10px);
  }
}
</style>
