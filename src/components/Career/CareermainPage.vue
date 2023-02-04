<template>
    <div>
        <main>


<!-- Career hero area start -->
<section class="career__top">
  <div class="career__top-title pb-0 color-bg">
    <div class="container pt-120">
      <div class="row">
        <div class="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
          <div class="sec-title-wrapper">
            <h2 class="sec-title-2 animation__char_come" style="color:black">Join our team & let’s work together</h2>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
          <div id="btn_wrapper">
            <a href="#job_list" class="wc-btn-secondary btn-hover btn-item"><span></span> Explore job
              <br>vacancies <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Career hero area end -->


<!-- Career gallery start -->
<section class="career__gallery">
  <div class="container g-0 line pt-140 pb-140">
    <span class="line-3"></span>
    <div class="row">
      <div class="col-xxl-12">
        <ul>
          <li>Future</li>
          <li>Community</li>
          <li>Honor</li>
        </ul>
        <p>What sets us apart is what brings us together – a shared passion for solving business challenges
          through strategy, design, and engineering. We are the sum total of our team, their unique
          perspectives,
          capabilities, and our ability to collaborate from ideation to deployment.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
        <div class="career__gallery-img">
          <img src="@/assets/imgs/career/2.jpg" alt="Image">
        </div>
      </div>
      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div class="career__gallery-img img-anim">
          <img src="@/assets/imgs/career/3.jpg" alt="Image" data-speed="auto">
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
        <div class="career__gallery-img">
          <img src="@/assets/imgs/career/4.jpg" alt="Image">
          <img src="@/assets/imgs/career/5.jpg" alt="Image">
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Career gallery end -->


<!-- Career area start -->
<section class="job__area pt-130 pb-150" id="job_list">
  <div class="container">
    <div class="row">
      <div class="col-xxl-12">
        <div class="sec-title-wrapper">
          <h2 class="sec-title title-anim">We’re Currently <br>hiring</h2>
        </div>
      </div>
      <div class="col-xxl-12">
        <div  v-for="(jobs, index) in joblist" v-bind:key="index">
            <router-link :to="'/jobdetail/'+jobs.id">
            <div class="job__item">
              <p class="job__no">{{ jobs.no }}</p>
              <h3 class="job__title">{{jobs.job}}</h3>
              <h4 class="job__open">{{ jobs.openings }}</h4>
              <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
            </div>
            </router-link>
         
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Career area end -->

<!-- <router-link :to="'/jobdetail/'+ jobs.id"> -->
<!-- Career benifit area start -->
<section class="career__benefits">
  <div class="container line g-0 pt-140 pb-150">
    <span class="line-3"></span>

    <div class="row">
      <div class="col-xxl-7 col-xl-7 col-lg-7">
        <ul class="career__benefits-list">
          <li>Vacation & Paid <br>Time Off</li>
          <li>Work-life <br> Integration</li>
          <li>Maternity/Paternity <br>Benefits</li>
          <li>Personal <br> Career Growth</li>
          <li>Learning & <br>Development</li>
          <li>Healthy <br> Food & Snacks</li>
        </ul>
      </div>
      <div class="col-xxl-5 col-xl-5 col-lg-5">
        <div class="sec-title-wrapper">
          <h2 class="sec-title title-anim">Global Perks & Benefits</h2>
          <p>We want you to love working here as much as we do. To inspire our team to be creative, productive,
            and most importantly – feel valued as employees, we offer endless perks and de-stressors. How fun it
            is to unwind while at work!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Career benifit area end -->
<FloatingWhatsapp></FloatingWhatsapp>
       <div class="offcanvas__close">
        <router-link :to="{ path: '/' }">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </router-link>
        </div> 

</main>
    </div>
</template>
<script>
import FloatingWhatsapp from '@/components/Home/FloatingWhatsapp.vue';
export default {
    components :{
      FloatingWhatsapp,
    },
    data(){
        return{
            joblist : [
                {
                    id:1,
                    no:"01",
                    job:"UI/UX Designer",
                    openings:"(02 open Roles)"
                },
                {
                    id:2,
                    no:"02",
                    job:"Frontend Developer",
                    openings:"(03 open Roles)"
                },
                {
                    id:3,
                    no:"03",
                    job:"Backend Developer",
                    openings:"(05 open Roles)"
                },
                {
                    id:4,
                    no:"04",
                    job:"Mobile Developer",
                    openings:"(08 open Roles)"
                },
                {
                    id:5,
                    no:"05",
                    job:"UI/UX Designer",
                    openings:"(01 open Roles)"
                },
                {
                    id:6,
                    no:"06",
                    job:"UI/UX Designer",
                    openings:"(02 open Roles)"
                },
            ]
        }
    },
 
 

}
</script>
<style>
    .color-bg{
        background: white !important;
        color: black;
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