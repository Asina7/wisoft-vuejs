<template>
    <div>
        <main>

<!-- Development area start -->
<section class="development__area">
  <div class="container g-0 line pt-130 pb-150">
    <div class="line-3"></div>
    <div class="row">
      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div class="sec-title-wrapper">
          <h1 class="sec-title animation__char_come">{{services.service_title}}</h1>
        </div>
      </div>
      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
        <div class="development__wrapper">
          <div class="development__content">
            <p>Every decision we make needs to answer the million-dollar question: how will this benefit our
              partner’s goal best? We work to develop solutions</p>
            <p>We like to be different, in the same way that every mission is different. Every project is an
              opportunity to create result that will help you</p>
          </div>
          <ul>
            <li>+ API Development</li>
            <li>+ WordPress</li>
            <li>+ Cloud Migration</li>
            <li>+ Front End Development</li>
            <li>+ JavaScript</li>
            <li>+ Fluter Framework</li>
          </ul>
        </div>
      </div>
      <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
        <div class="development__img paralx-mobil" style="overflow: hidden;">
          <img class="para-img" ref="parallaxImage" src="@/assets/imgs/thumb/dev-1.jpg" alt="Development Image" data-speed="auto" style="position: absolute;">
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
        <div class="development__img">
          <img src="@/assets/imgs/thumb/dev-2.jpg" alt="Development Image">
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Development area end -->

<!-- Workflow area start -->
<section class="workflow__area-6">
  <div class="container g-0 line pb-130">
    <div class="line-3"></div>
    <div class="workflow__wrapper-6">
      <div class="row">
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
          <div class="workflow__slide-6">
            <h6 class="workflow__title-6">Planning and <br>sketching</h6>
            <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
            </p>
          </div>
        </div>

        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
          <div class="workflow__slide-6">
            <h6 class="workflow__title-6">Team <br>working</h6>
            <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
            </p>
          </div>
        </div>

        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
          <div class="workflow__slide-6">
            <h6 class="workflow__title-6">Flowchart and <br>wireframe</h6>
            <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
            </p>
          </div>
        </div>

        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
          <div class="workflow__slide-6">
            <h6 class="workflow__title-6">User experience <br>Testing</h6>
            <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Workflow area end -->

<!-- Service detail area start -->
<section class="service__detail">
  <div class="container g-0 line pb-140">
    <div class="line-3"></div>
    <div class="row">
      <div class="col-xxl-12">
        <div class="sec-title-wrapper">
          <h2 class="sec-title title-anim">We replace unreliable wirefreme and expensive agencies for one of the
            best
            organized layer.</h2>
        </div>
      </div>
      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
        <div class="service__detail-circle">
          <span></span>
        </div>
      </div>
      <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
        <div class="service__detail-img">
          <img src="@/assets/imgs/thumb/service-detail.png" alt="Service detail image">
          <img src="@/assets/imgs/icon/shape-6.png" alt="Service shape image" class="sd-shape">
        </div>
        <div class="service__detail-content">
          <p>Receive your design within a few business days, and be updated on the process. Everything you
            need
            for a digitally driven brand. Defined proposition. Conceptual realisation. Logo, type, look, feel,
            tone, movement, content - we've got it covered.</p>
          <p>Getting your brand message out there. We create dynamic campaign creative that engages audiences,
            wherever they are most talented. Bring your brand to life, communicate your value proposition with
            agile setup across creativity.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Service detail area end -->

<!-- FAQ area start -->
<section class="faq__area">
  <div class="container g-0 line pb-140">
    <div class="line-3"></div>
    <div class="row">
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div class="faq__img">
          <img src="@/assets/imgs/thumb/faq.jpg" alt="FAQ Image" data-speed="auto">
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div class="faq__content">
          <h2 class="faq__title title-anim">Product making for friendly users</h2>

          <div class="faq__list">
            <div class="accordion" id="accordionExample">
           <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
        
        <h2 class="accordion-header" :id="'heading' + (index + 1)">
        <button class="accordion-button" type="button" @click="toggleAccordion(index)">
            <!-- <i v-if="!item.isOpen" class="fas fa-plus"></i>
            <i v-if="item.isOpen" class="fas fa-minus"></i> -->
            {{ item.title }}
        </button>
      </h2>
      <div :id="'collapse' + (index + 1)" class="accordion-collapse" :class="{ 'show': item.isOpen }" :aria-labelledby="'heading' + (index + 1)" v-show="item.isOpen">
        <div class="accordion-body">
          {{ item.body }}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ area end -->

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
            <a href="contact.html" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i
                class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- CTA area end -->

</main>
    </div>
</template>
<script>
export default {
    data(){
  return{
    services:{},
    serviceData :
            [
            {
                id:"digital-marketing",
              service_title:"Digital Marketing",
             
            },
            {
                id:"social-media-marketing",
              service_title:"Social Media Marketing",
             
            },
            {
                id:"technnologies",
              service_title:"Technnologies",
             
            },
            {
                id:"search-engine-optimization",
              service_title:"Search Engine Optimization",
             
            },
            {
                id:"creative-services",
              service_title:"Creative Services",
             
            },
            {
                id:"sms-marketing",
              service_title:"SMS Marketing",
             
            },
             
                 
          ],
          accordionItems: [
        { title: 'Design should enrich our day', body: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people', isOpen: true },
        { title: 'Bring their individual experience and creative', body: 'This is the second item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.', isOpen: false },
        { title: 'Human centred design to challenges', body: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people', isOpen: false },
        { title: 'Design should enrich our day', body: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people', isOpen: false },
        { title: 'Developing core web applications', body: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people', isOpen: false },
      ],
  }
},
mounted() {
    // dynamic component
    let id =this.$route.params.id;
    let current = this.serviceData.find(item=>item.id == id);
    this.services = current;

    console.log(current)
     // parallex
     window.addEventListener('scroll', this.handleScroll);
     
},
methods: {
    // parallex
    
    handleScroll() {
      const image = this.$refs.parallaxImage;
      const speed = 0.3;
      const yPos = window.pageYOffset * speed;
      image.style.transform = `translate3d(0, ${yPos}px, 0)`;

    },
    toggleAccordion(index) {
      this.accordionItems.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen
        } else {
          item.isOpen = false
        }
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // parallex ends
}
</script>
<style>

@media screen and (max-width:768px){
    
}

</style>