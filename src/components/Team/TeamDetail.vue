<template>
    <div>
        <main>
        <div class="team__detail-page">
          <!-- <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span> -->


          <!-- Team area start -->
          <section class="team__detail">
            <div class="container line pb-140">
              <div class="line-3"></div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2" >
                  <div class="team__member-img">
                    <img :src="teamdetail.img" alt="Team Member Picture" data-speed="0.5">
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div class="sec-title-wrapper pt-120">
                    <h2 class="team__member-name-7 animation__char_come">{{teamdetail.name}}</h2>
                    <h3 class="team__member-role-7 animation__char_come">{{teamdetail.role}}
                      <span></span>
                    </h3>
                    <p>{{ teamdetail.para1 }}</p>
                    <p>{{teamdetail.para2}}</p>
                  </div>
                  <div class="team__member-work">
                    <h4 class="work-title">Portfolio :</h4>
                    <ul>
                      <li><a href="">Behance</a></li>
                      <li><a href="">Dribble</a></li>
                      <li><a href="">Meduim</a></li>
                    </ul>
                  </div>
                  <div class="team__member-social">
                    <h4 class="work-title">Follow :</h4>
                    <ul>
                      <li><a href=""><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                      <li><a href=""><span><i class="fa-brands fa-twitter"></i></span></a></li>
                      <li><a href=""><span><i class="fa-brands fa-instagram"></i></span></a></li>
                      <li><a href=""><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Team area end -->


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


        </div>
      </main>
      <FloatingWhatsapp></FloatingWhatsapp>
      <div class="offcanvas__close">
        <router-link :to="{ path: '/team' }">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </router-link>
        </div>
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
            teamdetail:{},
            teamdetailData :
            [
                {
                    id:1,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:2,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:3,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:4,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/6.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:5,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/2.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:6,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/1.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:7,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/3.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
                {
                    id:8,
                    img:"https://wealcoder.com/dev/html/axtra/assets/imgs/team/6.jpg",
                    name:"Jassica Oliver",
                    role:"UX Researcher and Instructor",
                    para1:"assica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
                    para2:"When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging."
                },
            ]
        }
    },
    methods:{
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
  
  // dynamic component
  let id =this.$route.params.id;
  let current = this.teamdetailData.find(item=>item.id == id);
  this.teamdetail = current;
  console.log(current,"teamitem")
},

    
}
</script>
<style>
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