<template>
    <div>
         <!-- Blog area start -->
         <section class="blog__area-6 blog__animation">
          <div class="container g-0 line pt-110 pb-110">
            <span class="line-3"></span>
            <div class="row pb-130">
              <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                <div class="sec-title-wrapper">
                  <h2 class="sec-title-2 animation__char_come">BLOG</h2>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                <div class="blog__text">
                  <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                    original collabs. </p>
                </div>
              </div>
            </div>

            <div class="row reset-grid">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4" v-for="commentIndex in commentsToShow" v-bind:key="commentIndex.id">
                <article class="blog__item" >
                  <div class="blog__img-wrapper" >
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h4 class="blog__meta"><a href="category.html">UI Design</a>{{blogData[commentIndex].date}}</h4>
                  <h5><a href="" class="blog__title">{{blogData[commentIndex].title}}</a></h5>
                  <a href="/blogdetail" class="blog__btn">Read More<span><i
                        class="fa-solid fa-arrow-right"></i></span></a>
                        <!-- <a>
                          <router-link v-bind:to="{name: blogData.component}" class="blog__btn">Read More<span><i class="fa-solid fa-arrow-right"></i></span></router-link>
                        </a>
                   -->

                 

                </article>
              </div>

            </div>
            <div class="m-auto">
              <button class="btn btn-primary" @click="commentsToShow += 3">Show More</button>
            </div>
            
            
          </div>
          
        </section>
        <!-- Blog area end -->
        <div class="offcanvas__close">
        <router-link :to="{ path: '/' }">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </router-link>
        </div>

        
        <div class="float-icon">
          
        </div>
        <FloatingWhatsapp></FloatingWhatsapp>
    </div>
</template>

<script> 
import FloatingWhatsapp from '../Home/FloatingWhatsapp.vue';
  export default{
    name : 'MainSection',
    components :{
      FloatingWhatsapp,
      
    },
    data(){
  return{
    blogData :
            [
              {
              id:"1",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
              component:'ServiceSection'
            },
            {
              id:"2",
              date:". 02 May 2019",
              title:"How to manage a talented and successful de sign team",
              component:'ServiceSection'
            },
            {
              id:"3",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
              component:ServiceSection
            },
            {
              id:"4",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
              component:ServiceSection
            },
            {
              id:"5",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
              component:ServiceSection
            },
            {
              id:"6",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              id:"7",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              id:"8",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              id:"9",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              id:"10",
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
           
          ],
          commentsToShow: 3
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
}

  }
</script>
<style scoped>

.line{
  /* display: none!important; */
}
.offcanvas__close button {
    font-size: 30px;
    width: 55px;
}
@media screen and (max-width:768px){
  #close_offcanvas{
    display:none;
  }
}
</style>