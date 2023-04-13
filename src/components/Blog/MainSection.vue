<template>
  <div>
    <!-- Blog area start -->
    <section class="blog__area-3 blog-v3 blog__animation">
      <div class="container line">
        <div class="line-3"></div>
        <div class="row">
          <div class="col-xxl-12">
            <div class="sec-title-wrapper text-anim pt-130">
              <h2 class="sec-sub-title text-bb">Recent Blog</h2>
              <h3 class="sec-title title-anim text-cc">
                Read Updated <br />Journal
              </h3>
              <p>
                Read our blog and try to see everything from every perspective.
                Our passion lies in making everything accessible and aesthetic
                for everyone.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-xxl-6 col-xl-6 col-lg-6"
            v-for="(blog, index) in blogData.slice(0, commentsToShow)"
            v-bind:key="index"
          >
            <article class="blog__item-3">
              <div class="blog__img-wrapper-3">
                <a href="">
                  <div class="img-box">
                    <img
                      class="image-box__item"
                      src="@/assets/imgs/blog/2.jpg"
                      alt="Blog Thumbnail"
                    />
                    <img
                      class="image-box__item"
                      src="@/assets/imgs/blog/2.jpg"
                      alt="BLog Thumbnail"
                    />
                  </div>
                </a>
              </div>
              <div class="blog__info-3">
                <h4 class="blog__meta">
                  <a href="">UI Design</a>{{ blog.date }}
                </h4>
                <h5>
                  <a href="" class="blog__title-3">{{ blog.title }} Axtra</a>
                </h5>
                <router-link :to="'/blogdetail/' + blog.id" class="blog__btn"
                  >Read More<span><i class="fa-solid fa-arrow-right"></i></span
                ></router-link>
              </div>
            </article>
          </div>
        </div>
        <div class="hero-item-btn m-auto">
          <button
            class="hero-btn1"
            v-if="showMoreButton"
            @click="commentsToShow += 2"
          >
            Show More
          </button>
        </div>
      </div>
      <!-- </div> -->
    </section>

    <section class="cta__area">
      <div class="container line pb-110">
        <div class="line-3"></div>
        <div class="row">
          <div class="col-xxl-12">
            <div class="cta__content">
              <p class="cta__sub-title">Work with us</p>
              <h2 class="cta__title title-anim">
                We would love to hear more about your project
              </h2>
              <div id="btn_wrapper">
                <a href="/contact" class="wc-btn-primary btn-item btn-hover"
                  ><span></span>Let’s talk us
                  <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog area end -->
    <div class="offcanvas__close">
      <router-link :to="{ path: '/' }">
        <button type="button" id="close_offcanvas">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </router-link>
    </div>

    <!-- <div class="float-icon">
          
        </div> -->
    <FloatingWhatsapp></FloatingWhatsapp>
  </div>
</template>

<script>
import FloatingWhatsapp from "../Home/FloatingWhatsapp.vue";
export default {
  name: "MainSection",
  components: {
    FloatingWhatsapp,
  },
  data() {
    return {
      blogData: [
        {
          id: 1,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 2,
          date: ". 02 May 2019",
          title: "How to manage a talented and successful de sign team",
        },
        {
          id: 3,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 4,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 5,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 6,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 7,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 8,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 9,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
        {
          id: 10,
          date: ". 02 May 2019",
          title: "How to bring fold to your startup company with Axtra",
        },
      ],
      commentsToShow: 2,
    };
  },
  computed: {
    showMoreButton() {
      return this.commentsToShow < this.blogData.length;
    },
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
.hero-item-btn .hero-btn1 {
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer;
}
.hero-item-btn .hero-btn1:hover {
  color: white;
  background: black;
}
.line {
  /* display: none!important; */
}
.text-cc {
  font-size: 50px;
}
.text-bb {
  font-size: 30px;
}
.offcanvas__close button {
  font-size: 30px;
  width: 55px;
}
@media screen and (max-width: 768px) {
  #close_offcanvas {
    display: none;
  }
}
</style>
