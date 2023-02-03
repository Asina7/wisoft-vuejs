<template>
    <div>
        <main>

 <!-- Blog detail start -->
 <section class="blog__detail">
          <div class="container g-0 line pt-140">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                <div class="blog__detail-top">
                  <h2 class="blog__detail-date animation__word_come">{{blog.category}} <span>{{ blog.date }}</span></h2>
                  <h3 class="blog__detail-title animation__word_come">{{blog.title}}
                    better
                  </h3>
                  <div class="blog__detail-metalist">
                    <div class="blog__detail-meta">
                      <img :src="blog.writer_pic" alt="Author Picture" class="bn">
                      <p>Writen by <span>{{blog.author}}</span></p>
                    </div>
                    <div class="blog__detail-meta">
                      <p>Viewed <span>{{ blog.viewed }}</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-12">
                <div class="blog__detail-thumb" style="overflow: hidden;">
                  <img ref="parallaxImage" :src="blog.image" alt="Blog Thumbnail" style="position: absolute;">
                </div>
                <!-- <div class="blog__detail-thumb">
                  <img src="@/assets/imgs/blog/detail/1.jpg" alt="Blog Thumbnail" data-speed="0.5">
                </div> -->
              </div>
              <div class="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                <div class="blog__detail-content">
                <p>{{ blog.desc }}</p>
                <p>But in order that you may see whence all this born error of those who accuse pleasure and praise
                    pain, I will open the whole matter, and explain the very things which were said by that discoverer
                    of truth and, as it were, the architect of a happy life.</p>
                  <img src="@/assets/imgs/blog/detail/2.jpg" alt="Blog Image">
                  <h2>JavaScript</h2>
                  <p>We love to bring designs to life as a developer, and I aim to do this using whatever front end
                    tools are necessary. My preferred tools are more modern javascript libraries like React.js but I
                    like to use whatever is best for the websites needs. There are several reasons why a business would
                    consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                  <h2>Fremework</h2>
                  <p>Always ready to push the boundaries, especially when it comes to our own platform, Our analytical
                    eye to create a site that was visually engaging and also optimised for maximum performance. It also
                    perfectly reflects the journey to help it tell a story to increase its understanding and drive
                    action. To create a site that was visually engaging for maximum performance.</p>
                    <ul>
                    <li>Brand Development</li>
                    <li>UX/UI Design</li>
                    <li>Front-end Development</li>
                    <li>Copywriting</li>
                    <li>Shopify Development</li>
                  </ul>
                  <p>Just like other pseudo-elements and pseudo-class selectors, :not() can be chained with other
                    pseudo-classes and pseudo-elements. For example, the following will add a “New!” word to list items
                    that do not have a .old class name, using the ::after pseudo-element:</p>
                  <img src="@/assets/imgs/blog/detail/3.jpg" alt="Code">
                </div>
                <div class="blog__detail-tags">
                  <p class="sub-title-anim">tags: <a href="">design</a>, <a href="">figma</a>,
                    <a href="">update</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Blog detail end -->


        <!-- Related blog start -->
        <section class="blog__related blog__animation">
          <div class="container g-0 line pt-130 pb-140">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-12">
                <div class="sec-title-wrapper">
                  <h2 class="sec-title title-anim">Related Aricles</h2>
                </div>
              </div>
            </div>

            <div class="row reset-grid">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4" v-for="(blog, index) in blogData.slice(0, commentsToShow)" v-bind:key="index">
                <article class="blog__item">
                  <div class="blog__img-wrapper">
                    <a href="">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/1.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/1.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h4 class="blog__meta sub-title-anim"><a href="">UI Design</a>{{blog.date}}</h4>
                  <h5><a href="" class="blog__title sub-title-anim">{{blog.title}}
                    </a></h5>

                    <!-- <router-link :to="'/post' + index" class="blog__btn">Read More<span><i class="fa-solid fa-arrow-right"></i></span></router-link> -->
                  <!-- <a href="blog-details.html" class="blog__btn">Read More <span><i
                        class="fa-solid fa-arrow-right"></i></span></a> -->
                </article>
              </div>
            </div>
          </div>
        </section>
        <!-- Related blog end -->


        <!-- CTA area start -->
        <section class="cta__area">
          <div class="container line pb-110">
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
        <router-link :to="{ path: '/blog' }">
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
   blog:{},
    blogData :
            [
              {
                id:1,
              date:". 02 May 2019",
              category:"UI Design",
              image:"https://img.freepik.com/free-photo/top-view-female-hands-work-computer-blue-background_169016-18179.jpg?w=740&t=st=1674827533~exp=1674828133~hmac=ca706048b984ea111c8091bf704c8748d9a5e1aaa2c1d26262d3c2de41a79b29",
              author:"Writer Name",
              writer_pic:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              viewed:"3 Min Read",
              title:"How to bring fold to your startup company with Axtra 1",
              desc:"We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful."
            },
              {
                id:2,
              date:". 02 May 2020",
              category:"Web developement",
              image:"https://www.specbee.com/sites/default/files/inline-images/ui-ux-difference.jpg",
              author:"Writer Name 2",
              writer_pic:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              viewed:"3 Min Read",
              title:"How to bring fold to your startup company with Axtra 2",
              desc:"We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful."
            },
              {
                id:3,
              date:". 02 May 2021",
              category:"Marketing",
              image:"https://www.specbee.com/sites/default/files/inline-images/ui-ux-difference.jpg",
              author:"Writer Name 2",
              writer_pic:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              viewed:"3 Min Read",
              title:"How to bring fold to your startup company with Axtra 3",
              desc:"We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful."
            },
                 
          ],
          commentsToShow: 3
  }
},


  mounted() {
    // dynamic component
    let id =this.$route.params.id;
    let current = this.blogData.find(item=>item.id == id);
    this.blog = current;

    console.log(current)
    // parallex
    window.addEventListener('scroll', this.handleScroll);
  },
  
  methods: {
    // close button
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
    // parallex
    handleScroll() {
      const image = this.$refs.parallaxImage;
      const speed = 0.3;
      const yPos = window.pageYOffset * speed;
      image.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // parallex ends
};
</script>

<style scoped>
.blog__detail-thumb img {
  height: 150% !important;;
}

/* word animation */
.animation__word_come {
  animation: slide-in-middle 1s ease-out both;
}

@keyframes slide-in-middle {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.bn{
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
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


