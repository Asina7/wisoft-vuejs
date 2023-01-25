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
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4" v-for="(blog, index) in blogData.slice(0, commentsToShow)" v-bind:key="index">
                <article class="blog__item" >
                  <div class="blog__img-wrapper" >
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h4 class="blog__meta"><a href="category.html">UI Design</a>{{blog.date}}</h4>
                  <h5><a href="" class="blog__title">{{blog.title}}</a></h5>
                  <router-link :to="'/post' + index" class="blog__btn">Read More<span><i class="fa-solid fa-arrow-right"></i></span></router-link>
                </article>
              </div>

            </div>
            <div class="hero-item-btn m-auto">
              <button class="hero-btn1" v-if="showMoreButton" @click="commentsToShow += 3">Show More</button>
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
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to manage a talented and successful de sign team",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
           
          ],
          commentsToShow: 3
  }
},
computed: {
    showMoreButton() {
      return this.commentsToShow < this.blogData.length;
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
.hero-item-btn .hero-btn1{
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer;
  
}
.hero-item-btn .hero-btn1:hover{
  color: white;
  background: black;
}
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