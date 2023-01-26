<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="hero__area-3">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="hero__inner-3">
                <!-- Main Title -->
                  <div class="sec-title-wrapper ">
                    <h2 class="sec-sub-title ">UAE #1</h2>
                    <div class=" title">
                      <h3 class="sec-title main-titlee">Digital Marketing Agency</h3>
                      <h3 class="sec-title main-titlee">Create Business Everyday</h3>
                    </div>
                    
                  </div>
                 
                  
                <!-- ends Title -->
                  <div class="hero__text-3">
                    <p class="animation__word_come para-text">Static and dynamic secure code review can prevent a day before your
                      product is even released. We can integrate with your dev environment</p>
                      <div class="hero-item-btn">
            <button class="hero-btn">Let's Try</button>
          </div>
                  </div>
                  <div class="scroll-down">
                    <button><img src="@/assets/imgs/icon/arrow-down-sm.png" alt="arrow icon"></button>
                  </div>
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
 .hero-item-btn .hero-btn {
  border: 1px solid black;
  border-radius:20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer!important;
  /* position: absolute; */
  /* left: 100px; */
  /* bottom: 230px; */
 
}
/* .hero-item-btn .hero-btn:hover{
  color: white;
} */
.hero-item-btn .hero-btn:hover{
  background-color:rgb(0, 0, 0)!important;
  color: antiquewhite;
}
/* text anim */



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


</style>