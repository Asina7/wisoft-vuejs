<template>
    <div>
        <section class="testimonial__area-2">
          <div class="container g-0 line pb-140">
            <span class="line-3"></span>

            <div class="row g-0">
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="testimonial__video">
                  <video autoplay muted loop>
                    <source src="@/assets/video/testimonial.mp4" type="video/mp4">
                  </video>
                </div>
              </div>

              <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
  <div class="testimonial__slider-wrapper-2">
    <div class="swiper testimonial__slider">
      <div class="swiper-wrapper">

        <div class="swiper-slide testimonial__slide">
          <div class="testimonial__inner-2">
            <h2 class="testimonial__title-2">Amazing digital service</h2>
            <p class="testimonial__text-2">We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.</p>
            <h3 class="testimonial__author">Adam Syndera</h3>
            <h4 class="testimonial__role">CEO, Agency</h4>
          </div>
        </div>

        <div class="swiper-slide testimonial__slide">
          <div class="testimonial__inner-2">
            <h2 class="testimonial__title-2">Amazing digital service</h2>
            <p class="testimonial__text-2">We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.</p>
            <h3 class="testimonial__author">Adam Syndera</h3>
            <h4 class="testimonial__role">CEO, Agency</h4>
          </div>
        </div>

        <div class="swiper-slide testimonial__slide">
          <div class="testimonial__inner-2">
            <h2 class="testimonial__title-2"> digital service</h2>
            <p class="testimonial__text-2">We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.</p>
            <h3 class="testimonial__author">Adam Syndera</h3>
            <h4 class="testimonial__role">CEO, Agency</h4>
          </div>
        </div>

      </div>
    </div>


  </div>
</div>

            </div>
          </div>
        </section>
    </div>
</template>
<script>
import Swiper from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Testimonial',
  data () {
    return {};
  },

  mounted() {
    const testimonialSlider = new Swiper('.testimonial__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
    // --

    gsap.set(".testimonial__inner-2", {
      opacity: 0,
      x: -100
    });

    gsap.to(".testimonial__inner-2", {
      scrollTrigger: {
        trigger: ".testimonial__slider-wrapper-2",
        start: "top center+=100",
        end: "bottom bottom",
      },
      opacity: 1,
      x: 0,
      duration: 1
    })

    
  }
};

</script>
<style scoped>
  .testimonial__inner-2{
    text-align: left!important;
  }
</style>