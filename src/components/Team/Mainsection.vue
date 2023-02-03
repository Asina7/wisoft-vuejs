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
 
           <!-- <div class="swiper team__slider">
             <div class="swiper-wrapper">
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/1.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Saymon D. Halk</h4>
                     <h5 class="team__member-role-6">Founder & CEO</h5>
                   </div>
                 </a>
               </div>
 
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/2.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Jassica Oliver</h4>
                     <h5 class="team__member-role-6">Researcher</h5>
                   </div>
                 </a>
               </div>
 
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/3.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Daniyel Adamson</h4>
                     <h5 class="team__member-role-6">Digital Marketer</h5>
                   </div>
                 </a>
               </div>
 
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/4.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Hardiya Kethrine</h4>
                     <h5 class="team__member-role-6">Lead Designer</h5>
                   </div>
                 </a>
               </div>
 
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/5.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Saymon D. Halk</h4>
                     <h5 class="team__member-role-6">Researcher</h5>
                   </div>
                 </a>
               </div>
 
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/6.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Jassica Oliver</h4>
                     <h5 class="team__member-role-6">Lead Designer</h5>
                   </div>
                 </a>
               </div>
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/7.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Jassica Oliver</h4>
                     <h5 class="team__member-role-6">Lead Designer</h5>
                   </div>
                 </a>
               </div>
               <div class="swiper-slide team__slide">
                 <a href="team-details.html">
                   <img src="@/assets/imgs/team/8.jpg" alt="Team Member">
                   <div class="team__info">
                     <h4 class="team__member-name-6">Jassica Oliver</h4>
                     <h5 class="team__member-role-6">Lead Designer</h5>
                   </div>
                 </a>
               </div>
             </div>
           </div> -->
 
           <div class="swiper swiper-container gallery team__slider drag-sec">
    <div class="swiper-wrapper">
      <div class="swiper-slide team__slide bg-col" v-for="(image, index) in images" :key="index">
        <a href="team-details.html">
          <img :src="image.src" alt="Gallery Image">
        <!-- <p class="image-title">{{ image.title }}</p> -->
        <div class="team__info image-title">
            <h4 class="team__member-name team-title1">{{ image.title }}</h4>
            <h5 class="team__member-role team-title1">Founder & CEO</h5>
        </div>
        </a>
      
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
                     <a href="contact.html" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                         class="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <!-- CTA area end -->
 
       </main>
 
 
       <!-- Footer area start -->
       <footer class="footer__area">
         <div class="footer__top">
           <div class="container footer-line"></div>
           <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5">
         </div>
 
         <div class="footer__btm">
           <div class="container">
             <div class="row footer__row">
               <div class="col-xxl-12">
                 <div class="footer__inner">
                   <div class="footer__widget">
                     <img class="footer__logo" src="assets/imgs/logo/footer-logo-white.png" alt="Footer Logo">
                     <p>When do they work well, and when do they on us and finally, when do we actually need how can we
                       avoid
                       them.</p>
                     <ul class="footer__social">
                       <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                       <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                       <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                       <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                     </ul>
                   </div>
 
                   <div class="footer__widget-2">
                     <h2 class="footer__widget-title">Information</h2>
                     <ul class="footer__link">
                       <li><a href="about.html">About Company</a></li>
                       <li><a href="portfolio.html">Case Study</a></li>
                       <li><a href="career.html">Career</a></li>
                       <li><a href="blog.html">blog</a></li>
                       <li><a href="contact.html">contact</a></li>
                     </ul>
                   </div>
 
                   <div class="footer__widget-3">
                     <h2 class="footer__widget-title">Contact Us</h2>
                     <ul class="footer__contact">
                       <li>Valentin, Street Road 24, New York, USA - 67452</li>
                       <li><a href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </a></li>
                       <li><a href="mailto:info@buildyexample.com">info@buildyexample.com</a></li>
                     </ul>
                   </div>
 
                   <div class="footer__widget-4">
                     <h2 class="project-title">Have a project in your mind?</h2>
                     <div id="btn_wrapper">
                       <a href="contact.html" class="wc-btn-primary btn-hover btn-item"><span></span> contact us <i
                           class="fa-solid fa-arrow-right"></i></a>
                     </div>
                     <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                     <h4 class="contact-day">Saturday - Thursday</h4>
                   </div>
 
                   <div class="footer__copyright">
                     <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/"
                         target="_blank">Wealcoder</a>
                     </p>
                   </div>
 
                   <div class="footer__subscribe">
                     <form action="#">
                       <input type="email" name="email" placeholder="Enter your email">
                       <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </footer>
       <!-- Footer area end -->
 
 
 
     </div>
   </div>
 
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
 </style>
 
 
 