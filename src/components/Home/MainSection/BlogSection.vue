<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="blog__area-3 pb-140 blog__animation">
        <div class="container">
          <div class="row ">
            <div class="col-xxl-12">
              <div class="sec-title-wrapper text-anim pt-130">
                <h2 class="sec-sub-title">Recent Blog</h2>
                <h3 class="sec-title title-anim">Read Updated <br>Journal</h3>
                <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                  everything
                  accessible and aesthetic for everyone. </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6" v-for="(blog, index) in blogData.slice(0, commentsToShow)" v-bind:key="index">
            <article class="blog__item-3">
                <div class="blog__img-wrapper-3">
                <a href="">
                    <div class="img-box">
                    <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="Blog Thumbnail">
                    <img class="image-box__item" src="@/assets/imgs/blog/2.jpg" alt="BLog Thumbnail">
                    </div>
                </a>
                </div>
                <div class="blog__info-3">
                <h4 class="blog__meta"><a href="">UI Design</a>{{blog.date}}</h4>
                <h5><a href="" class="blog__title-3">{{blog.title}}
                    Axtra</a></h5>
                  <router-link :to="'/blogdetail/' +blog.id" class="blog__btn">Read More<span><i class="fa-solid fa-arrow-right"></i></span></router-link>
                </div>
            </article>
            </div>
            </div>

          <!-- <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <article class="blog__item-3">
                <div class="blog__img-wrapper-3">
                  <a href="blog-details.html">
                    <div class="img-box">
                      <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail">
                      <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail">
                    </div>
                  </a>
                </div>
                <div class="blog__info-3">
                  <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                  <h5><a href="blog-details.html" class="blog__title-3">How to bring fold to your startup
                      company with
                      Axtra</a></h5>
                  <a href="blog-details.html" class="blog__btn">Read More <span><i
                        class="fa-solid fa-arrow-right"></i></span></a>
                </div>
              </article>
            </div>

            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <article class="blog__item-3">
                <div class="blog__img-wrapper-3">
                  <a href="blog-details.html">
                    <div class="img-box">
                      <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail">
                      <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail">
                    </div>
                  </a>
                </div>
                <div class="blog__info-3">
                  <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                  <h5><a href="blog-details.html" class="blog__title-3">How to manage a talented and
                      successful design
                      team</a></h5>
                  <a href="blog-details.html" class="blog__btn">Read More <span><i
                        class="fa-solid fa-arrow-right"></i></span></a>
                </div>
              </article>
            </div>
          </div> -->
        </div>
      </section>
      </main>
      </div>
      </div>
    </div>
</template>

<script> 
  export default{
    data(){
  return{

    blogData :
            [
              {
                id:1,
              date:". 02 May 2019",
              title:"How to bring fold to your startup company with Axtra",
            },
            {
              id:2,
              date:". 02 May 2019",
              title:"How to manage a talented and successful de sign team",
            },
          ]
          }
        }
      
  }
</script>