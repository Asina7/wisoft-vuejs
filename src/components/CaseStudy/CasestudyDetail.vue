<template>
  <div>
    <main>
      <!-- Portfolio area start -->
      <section class="portfolio__detail">
        <div class="portfolio__detail-top">
          <div class="container g-0 line pt-110 pb-130">
            <span class="line-3"></span>

            <div class="row">
              <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div class="sec-title-wrapper">
                  <h2 class="sec-title animation__char_come">
                    {{ casestudy.casestudy_title }}
                  </h2>
                </div>
              </div>

              <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div class="portfolio__detail-info">
                  <ul>
                    <li>Category <a href="">Development</a></li>
                    <li>Client <span>Webflow</span></li>
                    <li>Start Date <span>23 January 2021</span></li>
                    <li>Handover <span>05 March 2021</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio__detail-thumb case-parallax">
          <img
            ref="parallaxImage"
            src="@/assets/imgs/portfolio/detail/1.jpg"
            alt="Portfolio Thumbnail"
            data-speed="auto"
            style="position: absolute"
          />
        </div>

        <div class="portfolio__detail-content">
          <div class="container g-0 line pt-140">
            <span class="line-3"></span>

            <div class="block-content">
              <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 class="portfolio__detail-title title-anim">
                    Build, streamline and evolve together with solution
                  </h2>
                </div>

                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div class="portfolio__detail-text">
                    <p>
                      Always ready to push the boundaries, especially when it
                      comes to our own platform, Our analytical eye to create a
                      site that was visually engaging and also optimised for
                      maximum performance. It also perfectly reflects the
                      journey to help it tell a story to increase its
                      understanding and drive action. To create a site that was
                      visually engaging for maximum performance.
                    </p>

                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="block-thumb">
              <img
                src="@/assets/imgs/portfolio/detail/2.jpg"
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div class="block-content pt-140">
              <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 class="portfolio__detail-title title-anim">
                    Visual and typograpy hierarchy
                  </h2>
                </div>

                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div class="portfolio__detail-text">
                    <p>
                      Visual hierarchy is the principle of arranging elements to
                      show their order of importance. Designers structure visual
                      characteristics—e.g., menu icons—so users can understand
                      information easily. By laying out elements logically and
                      strategically, designers influence users’ perceptions and
                      guide them to desired actions. Users notice larger
                      elements more easily can convert.
                    </p>

                    <div class="fonts">
                      <img
                        src="@/assets/imgs/portfolio/detail/shape.png"
                        alt="Font Style"
                      />
                      <ul>
                        <li class="regular">
                          <span>regular</span> This is text message
                        </li>
                        <li class="medium">
                          <span>Medium</span> Medium typography
                        </li>
                        <li class="semibold">
                          <span>SemiBold</span> Just Amazing
                        </li>
                        <li class="blod"><span>Blod</span> Awesome</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="block-gallery">
              <img
                src="@/assets/imgs/portfolio/detail/3.jpg"
                alt="Portfolio Image"
              />
              <img
                src="@/assets/imgs/portfolio/detail/4.jpg"
                alt="Portfolio Image"
              />
            </div>

            <div class="block-thumb">
              <img
                src="@/assets/imgs/portfolio/detail/5.jpg"
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div class="block-img-text">
              <img
                src="@/assets/imgs/portfolio/detail/6.jpg"
                alt="Portfolio Image"
              />
              <img
                src="@/assets/imgs/portfolio/detail/7.jpg"
                alt="Portfolio Image"
              />
              <p>
                For those of us who are blessed with good sight. So we seldom
                consider it. That’s why going off to investigate the whys and
                hows involved is a little like trying to get behind the wind
              </p>
            </div>

            <div class="row">
              <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div class="portfolio__detail-btns pt-150 pb-150">
                  <a
                    href="portfolio-details.html"
                    class="wc-btn-primary btn-hover"
                    ><span></span> Prev Work</a
                  >
                  <a
                    href="portfolio-details.html"
                    class="wc-btn-primary btn-hover"
                    ><span></span> Next Work</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingWhatsapp></FloatingWhatsapp>
      <!-- Portfolio area end -->
    </main>
    <div class="offcanvas__close">
      <router-link :to="{ path: '/casestudy' }">
        <button type="button" id="close_offcanvas">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import FloatingWhatsapp from "@/components/Home/FloatingWhatsapp.vue";
import { useHead } from "@unhead/vue";
export default {
  components: {
    FloatingWhatsapp,
  },
  data() {
    return {
      casestudy: {},
      casestudyData: [
        {
          id: 1,
          casestudy_title: "Case Study 1",
        },
        {
          id: 2,
          casestudy_title: "Case Study 2",
        },
        {
          id: 3,
          casestudy_title: "Case Study 3",
        },
        {
          id: 4,
          casestudy_title: "Case Study 4",
        },
        {
          id: 5,
          casestudy_title: "Case Study 5",
        },
        {
          id: 6,
          casestudy_title: "Case Study 6",
        },
        {
          id: 7,
          casestudy_title: "Case Study 7",
        },
        {
          id: 8,
          casestudy_title: "Case Study 8",
        },
        {
          id: 9,
          casestudy_title: "Case Study 9",
        },
        {
          id: 10,
          casestudy_title: "Case Study 10",
        },
        {
          id: 11,
          casestudy_title: "Case Study 11",
        },
        {
          id: 12,
          casestudy_title: "Case Study 12",
        },
      ],
    };
  },
  mounted() {
    // dynamic component
    let id = this.$route.params.id;
    let current = this.casestudyData.find((item) => item.id == id);
    this.casestudy = current;

    console.log(current);
    // parallex
    window.addEventListener("scroll", this.handleScroll);
    useHead({
      title: `${current.casestudy_title} +  | Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft"`,
      meta: [
        {
          name: `${current.casestudy_title} + | Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.`,
          content: "",
        },
      ],
    });
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

    // parallex

    handleScroll() {
      const image = this.$refs.parallaxImage;
      const speed = 0.3;
      const yPos = window.pageYOffset * speed;
      image.style.transform = `translate3d(0, ${yPos}px, 0)`;
    },
    toggleAccordion(index) {
      this.accordionItems.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // parallex ends
};
</script>
<style>
@media only screen and (max-width: 1198px) {
  .portfolio__detail-thumb {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: auto;
    position: unset;
  }
}
@media only screen and (max-width: 1198px) {
  .portfolio__detail-thumb img {
    position: unset;
  }
}
@media only screen and (max-width: 1198px) {
  .case-parallax {
    display: none;
  }
}

.offcanvas__close button {
  font-size: 30px;
  width: 55px;
  position: fixed;
  top: 20px;
  right: 20px;
}
@media screen and (max-width: 1198px) {
  #close_offcanvas {
    display: none;
  }
}
</style>
