<template>
  <div class="fapost mt-6 mb-6">
    <div class="card">
      <div class="card-content post-content">
        <div class="is-flex tittle has-text-weight-semibold">
          <h6 class="title is-6">Some posts from ours users</h6>
          <a class="is-size-7 pl-2 see-post">Go to post's page</a>
        </div>
        <div class="df-post is-border-radius-5px">
          <div v-for="j in [9, 7]" :key="j">
            <div class="vvicard">
              <div class="card-content">
                <div class="far-head is-flex">
                  <div class="is-flex">
                    <client-only>
                      <div class="d-ico-enter is-clickable">
                        <img
                          class="ico-enter is-rounded"
                          src="https://crosscut.com/sites/default/files/styles/max_2000x2000/public/images/articles/veronica_001.jpg"
                          alt="Image"
                        />
                        <span class="icon ico-check checks">
                          <i class="fas fa-check-circle"></i>
                        </span></div
                    ></client-only>
                    <div class="far-info pl-3">
                      <div>
                        <client-only>
                          <div>
                            <a
                              class="is-size-6 is-block has-text-weight-semibold"
                              >John Son
                              <a
                                class="is-size-7 is-farmer is-color-4a has-text-weight-normal"
                                >Farmer</a
                              ></a
                            >
                            <span class="is-size-7 is-block from-farm is-flex"
                              ><span class="is-block">From Pretoria</span
                              ><a
                                target="_blank"
                                href="https://www.google.fr/maps/place/Abidjan"
                                class="is-block icon ico-check pl-1"
                              >
                                <i class="fas fa-location-arrow"></i> </a
                            ></span>
                          </div>
                          <div class="hh-post">
                            <span class="has-text-weight-semibold is-size-7"
                              >2 h &bull;</span
                            >
                          </div></client-only
                        >
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="dropdown is-hoverable">
                      <client-only>
                        <div class="dropdown-trigger is-clickable">
                          <span class="icon is-small">
                            <i class="fas fa-ellipsis-h"></i>
                          </span></div
                      ></client-only>
                      <div
                        id="dropdown-menu3"
                        class="dropdown-menu"
                        role="menu"
                      >
                        <div class="dropdown-content ff-dr-co">
                          <a href="#" class="dropdown-item"> Overview </a>
                          <a href="#" class="dropdown-item"> Modifiers </a>
                          <a href="#" class="dropdown-item"> Grid </a>
                          <a href="#" class="dropdown-item"> Form </a>
                          <a href="#" class="dropdown-item"> Elements </a>
                          <a href="#" class="dropdown-item"> Components </a>
                          <a href="#" class="dropdown-item"> Layout </a>
                          <hr class="dropdown-divider" />
                          <a href="#" class="dropdown-item"> More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fard-d-m card-content">
                <div class="content">
                  Uncle John sowing rice this Friday. <a>#Rice</a>
                  <a>#Fridayfarming</a>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-clickable">
                  <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="none"
                    poster="/videos/poster.jpg"
                    data-setup="{}"
                    onclick="if(this.playing) this.pause(); else this.play();"
                  >
                    <source
                      src="/videos/camilo-pablo-alboran-el-mismo-aire-official-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </figure>
              </div>
              <div class="likes-section is-flex mt-4">
                <client-only>
                  <div class="d-likes is-flex">
                    <span class="icon pl-4 is-block">
                      <i class="far fa-thumbs-up"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >6 k</span
                    >
                  </div>
                  <div class="d-likes is-flex fffirst">
                    <span class="icon pl-4 is-block">
                      <i class="far fa-comment"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >850</span
                    >
                  </div>
                  <div class="d-likes is-flex sssecond">
                    <span class="icon pl-4 is-block">
                      <i class="fas fa-share"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >20</span
                    >
                  </div></client-only
                >
              </div>
            </div>
          </div>
          <div v-for="i in 4" :key="i">
            <div class="vvicard">
              <div class="card-content">
                <div class="far-head is-flex">
                  <div class="is-flex">
                    <div class="d-ico-enter is-clickable">
                      <img
                        class="ico-enter is-rounded"
                        src="https://www.thehindu.com/sci-tech/agriculture/87sx5z/article30131510.ece/ALTERNATES/LANDSCAPE_1200/NEWS2FARMER"
                        alt="Image"
                      />
                    </div>
                    <div class="far-info pl-3">
                      <div>
                        <div>
                          <client-only>
                            <a
                              class="is-size-6 is-block has-text-weight-semibold"
                              >John Farmer<!-- <span class="icon ico-check">
                              <i class="fas fa-check-circle"></i>
                            </span> -->
                              <a
                                class="is-size-7 is-farmer is-color-4a has-text-weight-normal"
                                >Consumer</a
                              ></a
                            >
                            <span class="is-size-7 is-block from-farm is-flex"
                              ><span class="is-block">From Abidjan</span
                              ><a
                                target="_blank"
                                href="https://www.google.fr/maps/place/Abidjan"
                                class="is-block icon ico-check pl-1"
                              >
                                <i class="fas fa-location-arrow"></i> </a
                              ><span class="is-block inline-part"
                                ><strong>Partnership renew </strong>with<strong
                                  ><a> John</a></strong
                                ></span
                              ></span
                            >
                            <span
                              class="is-size-7 is-block from-farm partenariat is-hidden"
                              ><strong>Partnership renew </strong>with<strong
                                ><a> John</a></strong
                              ></span
                            ></client-only
                          >
                        </div>
                        <div class="hh-post">
                          <span class="has-text-weight-semibold is-size-7"
                            >2 h &bull;</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="dropdown is-hoverable">
                      <client-only>
                        <div class="dropdown-trigger is-clickable">
                          <span class="icon is-small">
                            <i class="fas fa-ellipsis-h"></i>
                          </span></div
                      ></client-only>
                      <div
                        id="dropdown-menu3"
                        class="dropdown-menu"
                        role="menu"
                      >
                        <div class="dropdown-content ff-dr-co">
                          <a href="#" class="dropdown-item"> Overview </a>
                          <a href="#" class="dropdown-item"> Modifiers </a>
                          <a href="#" class="dropdown-item"> Grid </a>
                          <a href="#" class="dropdown-item"> Form </a>
                          <a href="#" class="dropdown-item"> Elements </a>
                          <a href="#" class="dropdown-item"> Components </a>
                          <a href="#" class="dropdown-item"> Layout </a>
                          <hr class="dropdown-divider" />
                          <a href="#" class="dropdown-item"> More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fard-d-m card-content">
                <div class="content">
                  Uncle John sowing rice this Friday. <a>#Rice</a>
                  <a>#Fridayfarming</a>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-clickable">
                  <img
                    class="prod-img"
                    src="https://crosscut.com/sites/default/files/styles/max_2000x2000/public/images/articles/veronica_001.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="likes-section is-flex mt-4">
                <client-only>
                  <div class="d-likes is-flex">
                    <span class="icon pl-4 is-block">
                      <i class="far fa-thumbs-up"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >6 k</span
                    >
                  </div>
                  <div class="d-likes is-flex fffirst">
                    <span class="icon pl-4 is-block">
                      <i class="far fa-comment"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >850</span
                    >
                  </div>
                  <div class="d-likes is-flex sssecond">
                    <span class="icon pl-4 is-block">
                      <i class="fas fa-share"></i>
                    </span>
                    <span class="pl-3 is-block has-text-weight-semibold"
                      >20</span
                    >
                  </div></client-only
                >
              </div>
            </div>
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
      isPlaying: false,
    }
  },
}
</script>

<style scoped>
.fapost {
  margin: 0 auto;
  position: relative;
  top: 6rem;
}
.post-content {
  padding-bottom: 5rem;
}
.vvicard {
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
}
.see-post {
  color: #028300;
}
.ff-dr-co {
  position: absolute;
  left: -7rem;
}
.d-likes {
  width: fit-content !important;
  padding-right: 0.9rem;
  text-align: center;
  cursor: pointer;
}
.d-likes span {
  margin: 0 auto;
}
.fa-check-circle {
  color: #326ee6;
  font-size: 14px;
  position: relative;
  top: -0.05rem !important;
}
.fa-location-arrow {
  color: #028300;
}
.hh-post {
  margin-top: -0.3rem;
}
.is-farmer:hover {
  color: #028300 !important;
  text-decoration: underline;
}
.d-likes:hover {
  color: #028300;
  background-color: #0283000e;
  border-radius: 290486px;
  transition: ease-in 0.1s;
}
.likes-section {
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
.fard-d-m {
  margin-top: -2rem;
}
.likes .icon .fa-thumbs-up {
  color: #028300;
}
.far-info {
  margin-top: -0.3rem;
}
.far-head {
  justify-content: space-between;
}
.see-post:hover {
  text-decoration: underline;
}
.far-info a {
  color: black;
}
.df-post {
  width: 46%;
  height: 800px;
  border: 1px solid #dbdbdb;
  overflow: scroll;
  padding-left: 5px;
  overflow-x: hidden;
  position: relative;
  top: 0.5rem;
  margin: 0 auto;
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
.df-post:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.ico-enter {
  width: 48px;
  height: 48px;
  border-radius: 290486px;
}
.d-ico-enter {
  width: fit-content;
  height: fit-content;
}
.checks {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 3.9rem;
  background-color: white;
  border: white 1px solid;
  border-radius: 290486px;
}
.partenariat {
  margin-top: -0.28rem !important;
}
.from-farm {
  margin-top: -0.1rem;
}
.prod-img,
video {
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}
@media screen and (max-width: 1023px) {
  .df-post {
    width: 48%;
  }
}
@media screen and (max-width: 1215px) {
  .df-post {
    width: 55%;
  }
}
@media screen and (max-width: 970px) {
  .df-post {
    width: 57%;
  }
}
@media screen and (max-width: 900px) {
  .df-post {
    width: 60%;
  }
}
@media screen and (max-width: 747px) {
  .df-post {
    width: 73%;
  }
}
@media screen and (max-width: 620px) {
  .df-post {
    width: 80%;
  }
}
@media screen and (max-width: 567px) {
  .df-post {
    width: 90%;
  }
}
@media screen and (max-width: 500px) {
  .inline-part {
    display: none !important;
  }
  .partenariat {
    display: block !important;
  }
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
