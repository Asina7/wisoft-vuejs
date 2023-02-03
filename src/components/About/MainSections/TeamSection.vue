<template>
  <div>
    <!-- Team area start -->
    <section class="team__area pt-140 pb-140">
          <div class="sec-title-wrapper">
            <h2 class="sec-sub-title title-anim">Our Team</h2>
            <h3 class="sec-title title-anim">How we work</h3>
          </div>
    <div class="swiper swiper-container gallery team__slider drag-sec">
    <div class="swiper-wrapper">
      <div class="swiper-slide team__slide bg-col" v-for="(image, index) in images" :key="index">
        <a href="team-details.html">
          <img :src="image.src" alt="Gallery Image">
        <!-- <p class="image-title">{{ image.title }}</p> -->
        <div class="team__info image-title">
            <h4 class="team__member-name">{{ image.title }}</h4>
            <h5 class="team__member-role">Founder & CEO</h5>
        </div>
        </a>
      
      </div>
    </div>
  </div>
    </section>
  </div>
  
</template>

<script>
import Swiper from 'swiper';

export default {
  data() {
    return {
      images: [
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg', title: 'Image 1' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg', title: 'Image 2' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg', title: 'Image 3' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/4.jpg', title: 'Image 4' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg', title: 'Image 1' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg', title: 'Image 2' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg', title: 'Image 3' },
        { src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/4.jpg', title: 'Image 4' },
      ]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      // Set slides per view to 4
      slidesPerView: 4,

      // Disable autoplay
      autoplay: false,

      // Disable touch events
      touchEventsTarget: 'container',

      // Other options here
    });
  }
};
</script>

<style>
  .swiper-container {
    width: 100%;
    height: 500px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #fff; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
  }
 
  .bg-col{
  background-color: var(--black-2);
  overflow: hidden;
  }
  .team__slide img {
    width: 100%;
    margin:20px;
}
.swiper-container {
    width: 100%;
    height: 640px!important;
}
.drag-sec {
  cursor: grab!important;
  cursor: url(@/assets/imgs/icon/cursor2.png) 32 32, auto !important;

  
}
.drag-sec img:hover {
  cursor: url(@/assets/imgs/icon/cursor2.png) 32 32, auto !important;
  
}
@media only screen and (max-width: 767px){

.team__slide {
    padding: 0 0;
}
.bg-col{
  width: 340.75px!important;
}
}
</style>


