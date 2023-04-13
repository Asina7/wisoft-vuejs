<template>
  <div>
    <main>
      <!-- Career hero area start -->
      <section class="career__top">
        <div class="career__top-title pb-0 color-bg">
          <div class="container pt-120">
            <div class="row" style="margin-bottom: 20px">
              <div class="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
                <div class="sec-title-wrapper">
                  <h2
                    class="sec-title-2 animation__char_come"
                    style="color: black"
                    data-speed="0.1"
                  >
                    let’s work together
                  </h2>
                </div>
              </div>

              <div class="col-md-12">
                <!-- <div id="btn_wrapper">
                  <a href="#job_list" class="wc-btn-secondary btn-hover btn-item"><span></span> Explore job
                    <br>vacancies <i class="fa-solid fa-arrow-right"></i></a>
                </div> -->

                <div
                  class="btn-dark-container"
                  style="margin: 40px 44px 0px 0px"
                >
                  <a href="#job_list" class="btn-dark"
                    >Let's Talk <i class="fa-solid fa-circle-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Career hero area end -->

      <!-- Career gallery start -->
      <section class="career__gallery">
        <div class="container g-0 line pt-140 pb-140">
          <span class="line-3"></span>
          <div class="row">
            <div class="col-xxl-12">
              <ul>
                <li>Future</li>
                <li>Community</li>
                <li>Honor</li>
              </ul>
              <p>
                What sets us apart is what brings us together – a shared passion
                for solving business challenges through strategy, design, and
                engineering. We are the sum total of our team, their unique
                perspectives, capabilities, and our ability to collaborate from
                ideation to deployment.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div class="career__gallery-img">
                <img src="@/assets/imgs/career/2.jpg" alt="Image" />
              </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div class="career__gallery-img img-anim" ref="parallaxImage">
                <img
                  src="@/assets/imgs/career/3.jpg"
                  alt="Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div class="career__gallery-img">
                <img src="@/assets/imgs/career/4.jpg" alt="Image" />
                <img src="@/assets/imgs/career/5.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Career gallery end -->

      <!-- Career area start -->
      <section class="job__area pt-130 pb-150" id="job_list">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="sec-title-wrapper">
                <h2 class="sec-title title-anim">
                  We’re Currently <br />hiring
                </h2>
              </div>
            </div>
            <div class="col-xxl-12">
              <div v-for="(jobs, index) in joblist" v-bind:key="index">
                <router-link :to="'/jobdetail/' + jobs.id">
                  <div class="job__item">
                    <p class="job__no">{{ jobs.no }}</p>
                    <h3 class="job__title">{{ jobs.job }}</h3>
                    <h4 class="job__open">{{ jobs.openings }}</h4>
                    <h5 class="job__link">
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                    </h5>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Career area end -->

      <!-- <router-link :to="'/jobdetail/'+ jobs.id"> -->
      <!-- Career benifit area start -->
      <section class="career__benefits">
        <div class="container line g-0 pt-140 pb-150">
          <span class="line-3"></span>

          <div class="row">
            <div class="col-xxl-7 col-xl-7 col-lg-7 perks">
              <ul class="career__benefits-list">
                <li class="li-1">Vacation & Paid <br />Time Off</li>
                <li class="li-2">
                  Work-life <br />
                  Integration
                </li>
                <li class="li-3">Maternity/Paternity <br />Benefits</li>
                <li class="li-4">
                  Personal <br />
                  Career Growth
                </li>
                <li class="li-5">Learning & <br />Development</li>
                <li class="li-6">
                  Healthy <br />
                  Food & Snacks
                </li>
              </ul>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5">
              <div class="sec-title-wrapper">
                <h2 class="sec-title title-anim">Global Perks & Benefits</h2>
                <p>
                  We want you to love working here as much as we do. To inspire
                  our team to be creative, productive, and most importantly –
                  feel valued as employees, we offer endless perks and
                  de-stressors. How fun it is to unwind while at work!
                </p>
              </div>
            </div>
            <!-- --- -->
            <!-- <div class="row">
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Vacation & Paid Time Off</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Work-life Integration</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Maternity/Paternity Benefits</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Personal Career Growth</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Learning & Development</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cta__content perks-2">
                  <p class="cta__sub-title">Healthy Food & Snacks</p>
                </div>
              </div>
            </div> -->
            <ul class="perks-2">
              <div class="row">
                <li class="col-sm-6" style="font-weight: 600">
                  + Vacation & Paid Time Off
                </li>
                <li class="col-sm-6" style="font-weight: 600">
                  + Work-life Integration
                </li>
                <li class="col-sm-6" style="font-weight: 600">
                  + Maternity/Paternity Benefits
                </li>
                <li class="col-sm-6" style="font-weight: 600">
                  + Personal Career Growth
                </li>
                <li class="col-sm-6" style="font-weight: 600">
                  + Learning & Development
                </li>
                <li class="col-sm-6" style="font-weight: 600">
                  + Healthy Food & Snacks
                </li>
              </div>
            </ul>
            <!-- ---- -->
          </div>
        </div>
      </section>
      <!-- Career benifit area end -->
      <FloatingWhatsapp></FloatingWhatsapp>
      <div class="offcanvas__close">
        <router-link :to="{ path: '/' }">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>
<script>
import FloatingWhatsapp from "@/components/Home/FloatingWhatsapp.vue";
export default {
  components: {
    FloatingWhatsapp,
  },
  data() {
    return {
      joblist: [
        {
          id: 1,
          no: "01",
          job: "UI/UX Designer",
          openings: "(02 open Roles)",
        },
        {
          id: 2,
          no: "02",
          job: "Frontend Developer",
          openings: "(03 open Roles)",
        },
        {
          id: 3,
          no: "03",
          job: "Backend Developer",
          openings: "(05 open Roles)",
        },
        {
          id: 4,
          no: "04",
          job: "Mobile Developer",
          openings: "(08 open Roles)",
        },
        {
          id: 5,
          no: "05",
          job: "UI/UX Designer",
          openings: "(01 open Roles)",
        },
        {
          id: 6,
          no: "06",
          job: "UI/UX Designer",
          openings: "(02 open Roles)",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowY = window.pageYOffset;
      const el = this.$refs.parallaxImage;
      if (!el) {
        return;
      }
      const elRect = el.getBoundingClientRect();
      const elY = elRect.top + windowY;

      const speed = 0.3; // adjust speed as desired
      const yPosition = -(windowY - elY) * speed;

      el.style.transform = `translate3d(0, ${yPosition}px, 0)`;
    },
  },
};
</script>
<style>
.color-bg {
  background: white !important;
  color: black;
}
.offcanvas__close button {
  font-size: 30px;
  width: 55px;
  position: fixed;
  top: 20px;
  right: 20px;
}
.btn-dark-container {
  margin-bottom: 70px;
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
.career__benefits-list li {
  border-radius: 0 80px 0 80px;
  color: #000;
  border-color: #000;
}
.career__benefits-list .li-1 {
  border: 30px 0 0 0;
  color: #000;
}
.career__benefits-list .li-1,
.li-3,
.li-5 {
  background-color: #fff;
  transition: all 0.3s;
  border-color: #000;
}

.career__benefits-list .li-2,
.li-4,
.li-6 {
  background-color: #fff;
  border-color: #000;
}

.perks-2 {
  margin: 20px 0;
}
@media screen and (max-width: 768px) {
  #close_offcanvas {
    display: none;
  }
  .btn-dark-container {
    margin: 0px 44px 0px 0px !important;
  }
}

@media screen and (max-width: 990px) {
  .btn-dark-container {
  }
}
@media screen and (max-width: 1922px) {
  .btn-dark-container {
  }
}
@media only screen and (max-width: 1199px) {
  .career__benefits-list .li-1,
  .li-4,
  .li-5 {
    background-color: #fff;
    border-color: #000;
    transition: all 0.3s;
  }

  .career__benefits-list .li-2,
  .li-3,
  .li-6 {
    background-color: #fff;
    border-color: #000;
    transition: all 0.3s;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .perks {
    display: none;
  }

  .career__benefits-list .li-1,
  .li-3,
  .li-5 {
    background-color: #fff;
    border-color: #000;
    transition: all 0.3s;
  }

  .career__benefits-list .li-2,
  .li-4,
  .li-6 {
    background-color: #fff;
    border-color: #000;
    transition: all 0.3s;
  }
}
@media only screen and (min-width: 990px) {
  .perks-2 {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .career__benefits-list .li-1,
  .li-3,
  .li-5 {
    background-color: #fff;
    border-color: #000;
  }

  .career__benefits-list .li-2,
  .li-4,
  .li-6 {
    background-color: #fff;
    border-color: #000;
    transition: all 0.3s;
  }

  .perks {
    display: none;
  }
}

h2 {
  animation: ani 1s;
  /* text-align: center; */
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
</style>
