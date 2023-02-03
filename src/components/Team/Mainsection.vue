<template>
    <div>
   <div id="smooth-wrapper">
     <div id="smooth-content">
       <main>
 
 
         <!-- Team area start -->
         <section class="team__area-6">
           <div class="container line pt-120">
             <span class="line-3"></span>
 
             <div class="row">
               <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
                 <div class="sec-title-wrapper">
                   <h2 class="sec-title animation__char_come">Talented team </h2>
                   <p>We’re a diverse team that works as fancies attention to details,
                     enjoys beers on Friday nights and
                     aspires to design the dent in the universe.</p>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper swiper-container gallery team__slider drag-sec">
    <div class="swiper-wrapper">
      <div class="swiper-slide team__slide bg-col" v-for="(image, index) in images" :key="index">
        <router-link :to="'/teamdetail/'+image.id">
          <img :src="image.src" alt="Gallery Image">
        <!-- <p class="image-title">{{ image.title }}</p> -->
        <div class="team__info image-title">
            <h4 class="team__member-name team-title1">{{ image.title }}</h4>
            <h5 class="team__member-role team-title1">Founder & CEO</h5>
        </div>
      </router-link>
      </div>
    </div>
  </div>
          
           <div class="container line pt-150">
             <div class="line-3"></div>
           </div>
 
           <div class="team__join-btn">
             <div id="btn_wrapper">
               <a href="contact.html" class="wc-btn-primary btn-item btn-hover"><span></span> Join our <br>talented team
                 <i class="fa-solid fa-arrow-right"></i></a>
             </div>
           </div>
         </section>
         <!-- Team area end -->
 
 
         <section class="team__btm">
           <div class="container g-0 line">
             <span class="line-3"></span>
             <div class="row">
               <div class="col-xxl-12">
                 <div class="sec-title-wrapper pt-130 pb-140 text-anim">
                   <h2 class="sec-title title-anim">Your digital products & services ensured by our talented team</h2>
                   <p>A hybrid team with hybrid culture. More than 20 people, including designers, engineers, creatives,
                     thinkers, creative table and media experts always looking from a new perspective.</p>
                 </div>
               </div>
             </div>
           </div>
         </section>
 
 
         <!-- Counter area start -->
         <section class="counter__area">
           <div class="container g-0 line pt-110">
             <span class="line-3"></span>
 
             <div class="row">
               <div class="col-xxl-12">
                 <div class="counter__wrapper-2">
                   <div class="counter__item-2">
                     <h2 class="counter__number">25k</h2>
                     <p>Project <br>completed</p>
                     <span class="counter__border"></span>
                   </div>
                   <div class="counter__item-2">
                     <h2 class="counter__number">8k</h2>
                     <p>Happy <br>customers</p>
                     <span class="counter__border"></span>
                   </div>
                   <div class="counter__item-2">
                     <h2 class="counter__number">15</h2>
                     <p>Years <br>experiences</p>
                     <span class="counter__border"></span>
                   </div>
                   <div class="counter__item-2">
                     <h2 class="counter__number">98</h2>
                     <p>Awards <br>achievement</p>
                     <span class="counter__border"></span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <!-- Counter area end -->
 
 
         <!-- CTA area start -->
         <section class="cta__area">
           <div class="container line pt-130 pb-110">
             <div class="line-3"></div>
             <div class="row">
               <div class="col-xxl-12">
                 <div class="cta__content">
                   <p class="cta__sub-title">Work with us</p>
                   <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                   <div id="btn_wrapper">
                     <a href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                         class="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <!-- CTA area end -->
 
       </main>
       <FloatingWhatsapp></FloatingWhatsapp>
       <div class="offcanvas__close">
        <router-link :to="{ path: '/' }">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </router-link>
        </div> 
 
 
     </div>
   </div>
 
    </div>
 </template>
 <script>
 import Swiper from 'swiper';
 import FloatingWhatsapp from '@/components/Home/FloatingWhatsapp.vue';
 export default {
  components :{
      FloatingWhatsapp,
    },
   data() {
     return {
       images: [
         { id:1,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg', title: 'Image 1' },
         { id:2,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg', title: 'Image 2' },
         { id:3,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg', title: 'Image 3' },
         {id:4, src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/4.jpg', title: 'Image 4' },
         { id:5,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg', title: 'Image 1' },
         { id:6,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg', title: 'Image 2' },
         { id:7,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg', title: 'Image 3' },
         { id:8,src: 'https://wealcoder.com/dev/html/axtra/assets/imgs/team/4.jpg', title: 'Image 4' },
       ]
     }
   },
   method:{
    offcanvascontact(){
  $("#open_offcanvas").click(function () {
  $('.offcanvas__area').css('opacity', '1');
  $('.offcanvas__area').css('visibility', 'visible');
});
$("#close_offcanvas").click(function () {
  $('.offcanvas__area').css('opacity', '0');
  $('.offcanvas__area').css('visibility', 'hidden');
});
},
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
 
 <style scoped>
 .team__member-name{
    padding: 0 !important;
 }
 .team-title1{
    color: black !important;
 }
   .swiper-container {
     width: 100%;
     height: 500px;
   }
   .swiper-slide {
     text-align: center;
     font-size: 18px;
     background: #fff;
     display: flex;
     align-items: center;
     flex-direction: column;
     width:100%;
   }
  
   .bg-col{
   /* background-color: var(--black-2); */
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
   cursor: url(@/assets/imgs/icon/cursor2.png) 120 120, auto !important;
   
   
 }
 .drag-sec img:hover {
   cursor: url(@/assets/imgs/icon/cursor2.png) 120 120, auto !important;
   
 }
 .drag-sec{

}
 @media only screen and (max-width: 767px){
 
 .team__slide {
     padding: 0 0;
 }
 .bg-col{
   width: 340.75px!important;
 }
 }
 .offcanvas__close button {
    font-size: 30px;
    width: 55px;
    position:fixed;
    top:20px;
    right:20px;
}
@media screen and (max-width:768px){
  #close_offcanvas{
    display:none;
  }
}
 </style>
 
 
 