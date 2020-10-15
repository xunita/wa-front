<template>
  <div class="wawa mt-5 box">
    <div class="wawa-fils py-5">
      <h6 class="title is-6 has-text-centered">
        Buy from your favourites farmers, sell your products directly to
        consumer or invest in a farmer.
      </h6>
      <div
        v-if="isLogged"
        class="columns mt-5"
        :class="{
          'd-d-pre': !this.$auth.loggedIn,
          'notd-d-pre': this.$auth.loggedIn,
        }"
      >
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="pre-img"
                  src="/images/presentation/farm.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-size-6 has-text-weight-semibold">
                Sell your products to consumers entirely by your own.
              </div>
            </div>
            <div class="d-pre-btn">
              <client-only>
                <button class="button pre-btn is-size-7">
                  Learn more
                  <span class="icon pl-4">
                    <i class="fas fa-arrow-right"></i>
                  </span></button
              ></client-only>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="pre-img"
                  src="/images/presentation/invest.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-size-6 has-text-weight-semibold">
                Invest in a farmer to support him or be a partner.
              </div>
            </div>
            <div class="d-pre-btn">
              <client-only>
                <button class="button pre-btn is-size-7">
                  Learn more
                  <span class="icon pl-4">
                    <i class="fas fa-arrow-right"></i>
                  </span></button
              ></client-only>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="columns mt-5"
        :class="{
          'd-d-pre': !this.$auth.loggedIn,
          'notd-d-pre': this.$auth.loggedIn,
        }"
      >
        <div v-if="isLogged" class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="pre-img"
                  src="/images/presentation/consumer.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-size-6 has-text-weight-semibold">
                Buy from your favourites farmers and stay in touch.
              </div>
            </div>
            <div class="d-pre-btn">
              <client-only>
                <button class="button pre-btn is-size-7">
                  <span class="icon pr-4">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  Sign up
                </button></client-only
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="pre-img"
                  src="/images/presentation/farm.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-size-6 has-text-weight-semibold">
                Sell your products to consumers entirely by your own.
              </div>
            </div>
            <div class="d-pre-btn">
              <client-only>
                <button class="button pre-btn is-size-7">
                  Learn more
                  <span class="icon pl-4">
                    <i class="fas fa-arrow-right"></i>
                  </span></button
              ></client-only>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="pre-img"
                  src="/images/presentation/invest.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-size-6 has-text-weight-semibold">
                Invest in a farmer to support him or be a partner.
              </div>
            </div>
            <div class="d-pre-btn">
              <client-only>
                <button class="button pre-btn is-size-7">
                  Learn more
                  <span class="icon pl-4">
                    <i class="fas fa-arrow-right"></i>
                  </span></button
              ></client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$auth.loggedIn === true
    },
  },
}
</script>

<style scoped>
.wawa {
  position: relative;
  top: 5rem;
}
.wawa-fils {
  width: 75%;
  position: relative;
  margin: 0 auto;
}
@media screen and (max-width: 1150px) {
  .wawa-fils {
    width: 85%;
  }
}
@media screen and (max-width: 925px) {
  .wawa-fils {
    width: 100%;
  }
}
.card {
  padding-bottom: 1rem;
}
.pre-btn,
.d-pre-btn {
  width: 100%;
}
.pre-btn {
  color: white;
  background-color: #028300;
  border: none !important;
}
.pre-btn:hover {
  transform: scale(1.08);
  animation: 0.2s appear;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.notd-d-pre {
  width: 67%;
  margin: 0 auto;
}
.card:hover .d-pre-btn {
  display: block !important;
}
@media screen and (max-width: 768px) {
  .d-d-pre {
    width: 70%;
    margin: 0 auto;
  }
  .notd-d-pre {
    width: 57%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 550px) {
  .d-d-pre {
    width: 90%;
  }
  .notd-d-pre {
    width: 87%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 400px) {
  .d-d-pre {
    width: 100%;
  }
  .notd-d-pre {
    width: 100%;
    margin: 0 auto;
  }
}
.card:hover {
  transform: scale(1.03);
  animation: 0.2s appear;
}
.d-pre-btn {
  position: relative;
  width: 90%;
  margin: 0 auto;
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
@keyframes appear2 {
  0% {
    transform: translateY(10px);
  }
}
</style>
