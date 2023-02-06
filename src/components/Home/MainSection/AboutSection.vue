<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <section class="about__area-3">
            <div class="container pt-140 pb-110">
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="about__img-3" ref="parallaxImage">
                    <img src="@/assets/imgs/about/1/1.jpg" alt="About Thumbnail" data-speed="auto">
                  </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="sec-title-wrapper">
                    <h2 class="sec-sub-title title-anim">Who We Are</h2>
                    <h3 class="sec-title title-anim" data-scroll="out" data-splitting="">We are leading digital marketing agency.</h3>
                  </div>
                  <div class="sec-text-wrapper">
                    <div class="sec-text text-anim">
                      <p>We’re a team of strategic digital marketing working globally with largest brands, We believe
                        that
                        progress only happens when you refused to play things safe. We combine ideas and behaviors, and
                        insights with design, technological data to produce brand experiences that customers love our
                        services.</p>
                      <div id="btn_wrapper">
                        <a class="wc-btn-light btn-hover btn-item" href="/about">
                          <span></span> About Us 
                          <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutSection',
  data () {
    return {};
  },
  mounted() {
    this.AboutSectionAnimation();
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    AboutSectionAnimation: function() {
      const splitTitleLines = gsap.utils.toArray(".title-anim");

      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        tl.from(splitTextLine, {
          duration: 0.8,
          y: 20,
          autoAlpha: 0,
          ease: "power3.out",
        });
      });
    },
    handleScroll() {
      const windowY = window.pageYOffset
      const el = this.$refs.parallaxImage
      const elRect = el.getBoundingClientRect()
      const elY = elRect.top + windowY

      const speed = 0.3 // adjust speed as desired
      const yPosition = -(windowY - elY) * speed
      

      el.style.transform = `translate3d(0, ${yPosition}px, 0)`
    }
  }
};
</script>


  

   
