<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="hero__area-3">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div class="hero__content-6 text-anim">
                  <h2 class="sec-sub-title">UAE#1</h2>
                  <img class="hero__arrow-icon" src="@/assets/imgs/hero/4/arrow-icon.png" alt="Arrow Icon">
                  <h1 class="hero__title-6 animation__char_come text-size" data-speed="1">Magical Axtra Startup Solution
                  </h1>
                  <p>Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                    <router-link to="/contact">
                      <button class="btn-hover hero-btn">Let's Talk</button>
                    </router-link>
                </div>
              </div>
          </div>
        </div>
        <div class="wrapper">
          <div>
            <div class="video-info">
            <div class="video-intro">
              <input id="video_check" type="checkbox">
              <div class="intro-title">
                <h4 class="video-title">Watch <span>video intro</span></h4>
                <h4 class="video-title close-video-title">Close <span>video intro</span></h4>
              </div>
              <div class="video">
                <video src="@/assets/video/RewindWisoft.mp4" loop muted autoplay playsinline></video>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <div class="hero3-img-ani">
          <img src="@/assets/imgs/hero/3/1.jpg" alt="Hero Image" class="hero3-img">
        </div>
      </section>
      </main>
      </div>
      </div>
    </div>
</template>
<script>
   // jquery
   import $ from "jquery";
    import { gsap } from 'gsap';
   import { SplitText } from 'gsap'
  //  gsap.registerPlugin(SplitText);
   export default {
    name: 'HeroSection',
    data () {
      return {
        
      }
    },
    methods: {
      HeroSectionAnimation: function(){
        

    }
  }
}
</script>

<style>


.sec-title-wrapper .main-titlee{
  font-size: 54px !important;
  color: rgb(0, 0, 0);
}


/* css */
.wrapper{
  position: relative;
}





.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title h3 {
  font-size: 40px;
  text-align: center;
  opacity: 0;
  transform: translateX(100%);
  animation: title-animation 2s ease-in-out;
  animation-fill-mode: forwards;  
}

.title h3:nth-child(2) {
  animation-delay: 2s; 
}

@keyframes title-animation {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.para-text{
  /* font-size:20px;  */
  /* text-align:center;  */
  opacity:0; 
  transform: translateX(100%);
  animation: title-animation 2s ease-in-out; 
  animation-fill-mode: forwards;
  animation-delay: 3s; 
}
.hero3-img-ani{
  padding-top: 135px;
}
.hero-btn {
  border: 1px solid black;
  border-radius:20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 19px;
}
.hero-btn:hover {
  background-color: black;
  color: antiquewhite;
}
.text-size{

}

</style>