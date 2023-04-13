<template>
  <div>
    <!-- hero section -->
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- <main> -->

        <!-- Hero area start -->
        <section class="hero__about">
          <div class="container g-0 line">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-12">
                <div class="hero__about-content">
                  <h1 class="hero-title animation__word_come" data-speed="0.1">
                    We’re a full service creative and digital agency, working
                    globally with leargest brands.
                  </h1>
                  <div class="hero__about-info">
                    <div class="hero__about-btn" style="width: 346px">
                      <div id="btn_wrapper" style="width: 432px">
                        <!-- <a href="" class="wc-btn-primary btn-hover btn-item"
                          ><span></span> Trends & <br />
                          technology
                          <i class="fa-solid fa-arrow-right"></i
                        ></a> -->
                        <div class="col-xxl-7 col-xl-7 col-lg-7 perks">
                          <a href="#">
                            <ul class="career__benefits-list" style="margin: 0">
                              <li class="li-6">
                                Trends & <br />
                                technology
                              </li>
                            </ul>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="hero__about-text title-anim">
                      <p>
                        Think of the world's most iconica and successful brands
                        easily findable, impactful. Interactional and
                        exceptional designs. Our story takes beginning in 2013
                      </p>
                    </div>
                    <div class="hero__about-award">
                      <img
                        src="@/assets/imgs/about/award.png"
                        alt="Best Studio Award"
                      />
                    </div>
                  </div>
                  <div
                    class="btn-dark-container"
                    style="margin: 10px auto 40px auto !important; width: 100%"
                  >
                    <a href="#job_list" class="btn-dark"
                      >Trends & Technology
                      <i class="fa-solid fa-circle-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row hero__about-row">
              <div class="col-xxl-12">
                <div class="hero__about-video">
                  <video loop muted autoplay playsinline>
                    <source src="@/assets/video/hero-3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <FloatingWhatsapp></FloatingWhatsapp>
          </div>
        </section>
        <div class="offcanvas__close">
          <router-link :to="{ path: '/' }">
            <button type="button" id="close_offcanvas">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Hero area end -->
  </div>
</template>
<script>
import FloatingWhatsapp from "@/components/Home/FloatingWhatsapp.vue";
export default {
  name: "MainSection",
  components: {
    FloatingWhatsapp,
  },
  methods: {
    offcanvascontact() {
      $("#open_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "1");
        $(".offcanvas__area").css("visibility", "visible");
      });
      $("#close_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "0");
        $(".offcanvas__area").css("visibility", "hidden");
      });
    },
  },
};
</script>

<style scoped>
.offcanvas__close button {
  font-size: 30px;
  width: 55px;
  position: fixed;
  top: 20px;
  right: 20px;
}

.btn-dark {
  cursor: pointer;
  border-radius: 20px;
  width: 15;
  background-color: #004295;
  color: #fff;
  padding: 8px 20px;
}
.btn-dark i {
  margin: auto auto auto 10px;
  /* font-size: 70%; */
}
.btn-dark:hover {
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #004295;
  width: 15px;
  background-color: #fff;
  color: #004295;
  padding: 8px 20px;
}
@media screen and (max-width: 768px) {
  #close_offcanvas {
    display: none;
  }
}

h1 {
  animation: ani 1s;
  /* text-align: center; */
}
.career__benefits-list li {
  border-radius: 0 80px 0 80px;
}
.career__benefits-list .li-1 {
  border: 30px 0 0 0;
}
.career__benefits-list .li-1,
.li-3,
.li-5 {
  background-color: #121212;
}
.career__benefits-list .li-2,
.li-4,
.li-6 {
  background-color: #004295;
  color: #fff;
  transition: all 0.3s;
}
.li-6:hover {
  background-color: #fff;
  color: #000;
}
.btn-dark-container {
  margin-bottom: 70px;
  width: auto;
}
.btn-dark {
  cursor: pointer;
  border-radius: 20px;
  width: 15;
  background-color: #004295;
  color: #fff;
  padding: 8px 20px;
}
.btn-dark i {
  margin: auto auto auto 10px;
  /* font-size: 70%; */
}
.btn-dark:hover {
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #004295;
  width: 15px;
  background-color: #fff;
  color: #004295;
  padding: 8px 20px;
}
@keyframes ani {
  from {
    letter-spacing: 3px;
    filter: blur(5px);
    opacity: 0;
  }
  to {
    letter-spacing: 0;
    filter: blur(0);
    opacity: 1px;
  }
}
@media screen and (max-width: 768px) {
  .hero__about-btn {
    display: none;
  }
  .hero__about-info {
    padding: 0;
  }
}
@media screen and (min-width: 768px) {
  .btn-dark-container {
    display: none;
  }
}
</style>
