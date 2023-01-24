<template>
    <div>
      
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="about__area-3">
        <div class="container pt-140 pb-110">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="about__img-3">
                <img src="@/assets/imgs/about/1/1.jpg" alt="About Thumbnail" data-speed="auto">
              </div>
            </div>

            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="sec-title-wrapper">
                <h2 class="sec-sub-title title-anim">Who We Are</h2>
                <h3 class="sec-title title-anim">We are leading digital marketing agency.</h3>
              </div>
              <div class="sec-text-wrapper">
                <div class="sec-text text-anim">
                  <p>We’re a team of strategic mdigital marketing working globally with largest brands, We believe
                    that
                    progress only happens when you refused to play things safe. We combine ideas and behaviors, and
                    insights with design, technological data to produce brand experiences that customers love our
                    services.</p>
                  <div id="btn_wrapper">
                    <a class="wc-btn-light btn-hover btn-item" href="/about"><span></span> About Us <i
                        class="fa-solid fa-arrow-right"></i></a>
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
 import $ from "jquery";
    import { gsap } from 'gsap';
     import { scrollTrigger } from 'gsap';
     import { SplitText } from 'gsap'
   export default {
    name: 'AboutSection',
    data () {
      return {
        
      }
    },
    methods: {
      AboutSectionAnimation: function(){
        let splitTitleLines = gsap.utils.toArray(".title-anim");

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

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 26. Title Animation Top

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 27. Text Animation
    let splitTextLines = gsap.utils.toArray(".text-anim p");

    splitTextLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          duration: 2,
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////



    }
  }
}
</script>

   
