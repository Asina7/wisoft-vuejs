<template>
    <div class="offcanvas__area">
      <div class="mob">
          <ul role="menu" class="men">
            <li class="men-li" role="none">
              <a href="/" role="menuitem"
                >Home</a
              >
            </li>
            <li class="men-li" role="none">
              <a href="/about" role="menuitem"
                >About</a
              >
            </li>
           
            <li class="men-li" role="none">
              <!-- <a href="/blog" role="menuitem">Blog</a> -->
              <a><router-link to="/blog">Blog</router-link></a>
            </li>
            <li class="men-li" role="none">
              <!-- <a href="/contact" role="menuitem">Contact</a> -->
              <a><router-link to="/contact">Contact</router-link></a>
            </li>
          </ul>

          <div class="toggler-menu">
            <ul>
              <li>
                <div class="to-wrapper">
                  <a href="">Digital Marketing</a>
                  <button class="to-bu" @click="handleClick(1)">{{activesub==1?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 1">
                  <li><a>Lead Generation</a></li>
                      <li><a>Content Marketing</a></li>
                      <li><a>Marketing Automation</a></li>
                      <li><a>Pay per click Advertising</a></li>
                     <li><a>Programmatic Advertising</a></li>
                </ul>
                </li>
              <li>
                <div class="to-wrapper">
                  <a href=""> Technologies</a>
                  <button class="to-bu" @click="handleClick(2)">{{activesub==2?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 2">
                  <li><a>UI/UX Design Services</a></li>
                      <li><a>Website Development</a></li>
                      <li><a>Mobile App Development</a></li>
                      <li><a>Web Annual Maintainance</a></li>
                      <li><a>E-commerce Development</a></li>
                      <li><a>CRM, Payment Gateway & Third Party System Integrations</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">Creative Services</a>
                  <button class="to-bu" @click="handleClick(3)">{{activesub==3?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 3">
                  <li><a>Logo Design & Brand Identity</a></li>
                      <li><a>Graphic Design</a></li>
                      <li><a>UI/UX Design</a></li>
                      <li><a>Compaing Design</a></li>
                      <li><a>Concept Design</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">Search Engine Optimization</a>
                  <button class="to-bu" @click="handleClick(4)">{{activesub==4?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 4">
                  <li><a>Local & Regional SEO</a></li>
                      <li><a>Content Optimization</a></li>
                      <li><a>Web Page Optimization</a></li>
                      <li><a>Authority Link Developement</a></li>
                      <li><a>SEO Analytics and Reporting</a></li>
                      <li><a>Mobile Optimization</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href=""> Social Media Marketing</a>
                  <button class="to-bu" @click="handleClick(5)">{{activesub==5?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 5">
                  <li><a>Social Media Stategy</a></li>
                      <li><a>Community Management</a></li>
                      <li><a>Conent Creation</a></li>
                      <li><a>Monitoring & Reporting</a></li>
                      <li><a>Digital Agency dark</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">SMS Marketing</a>
                  <button class="to-bu" @click="handleClick(6)">{{activesub==6?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 6">
                  <li><a>Global SMS Platform</a></li>
                      <li><a>SMS Marketing</a></li>
                      <li><a>2 Way SMS System</a></li>
                </ul>
                </li>
            </ul>
          </div>
        </div>
      <div class="offcanvas__body body-canvas">
       

        <div class="offcanvas__left v">
          <div class="offcanvas__logo">
            <a href="/"
              ><img
                src="@/assets/imgs/logo/wisoft-logo1.png"
                alt="Offcanvas Logo"
                style="width: 60%; height: 50px"
            /></a>
          </div>

          <div class="offcanvas__links side-links">
            <ul>
              <li>
                <a><router-link to="/About">About</router-link></a>
              </li>
              <li>
                <a><router-link to="/blog">Blog</router-link></a>
              </li>
              <!-- <li><a href="career.html">Career</a></li> -->
              <li><a><router-link to="/career">Career</router-link></a></li>
                <li><a><router-link to="/casestudy">Case Study</router-link></a></li>
               <li><a><router-link to="/services">service</router-link></a></li> 
               <li><a><router-link to="/team">Team</router-link></a></li> 
              <li><a><router-link to="/Contact">Contact</router-link></a></li>
              
            </ul>
          </div>
        </div>
        <div class="offcanvas__mid v">
          <div class="offcanvas__menu-wrapper">
            <nav class="offcanvas__menu">
              <ul class="menu-anim list-class">
                <div>
                  <li class="head-list">
                    Digital Marketing
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Lead Generation</a></li>
                      <li><a>Content Marketing</a></li>
                      <li><a>Marketing Automation</a></li>
                      <li><a>Pay per click Advertising</a></li>
                      <li><a>Programmatic Advertising</a></li>
                    </ul>
                  </li>

                
                  <li class="head-list">
                    Technologies
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>UI/UX Design Services</a></li>
                      <li><a>Website Development</a></li>
                      <li><a>Mobile App Development</a></li>
                      <li><a>Web Annual Maintainance</a></li>
                      <li><a>E-commerce Development</a></li>
                      <li><a>CRM, Payment Gateway & Third Party System Integrations</a></li>
                    </ul>
                  </li>
                </div>
                <div>
                  <li class="head-list">
                   Creative Services
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Logo Design & Brand Identity</a></li>
                      <li><a>Graphic Design</a></li>
                      <li><a>UI/UX Design</a></li>
                      <li><a>Compaing Design</a></li>
                      <li><a>Concept Design</a></li>
                    </ul>
                  </li>
                  <li class="head-list">
                   Search Engine Optimization
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Local & Regional SEO</a></li>
                      <li><a>Content Optimization</a></li>
                      <li><a>Web Page Optimization</a></li>
                      <li><a>Authority Link Developement</a></li>
                      <li><a>SEO Analytics and Reporting</a></li>
                      <li><a>Mobile Optimization</a></li>
                    </ul>
                  </li>

                  
                  
                </div>
                <div>
                  <li class="head-list">
                    Social Media Marketing
                    <ul>
                     
                      <li><a>Social Media Stategy</a></li>
                      <li><a>Community Management</a></li>
                      <li><a>Conent Creation</a></li>
                      <li><a>Monitoring & Reporting</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    SMS Marketing
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Global SMS Platform</a></li>
                      <li><a>SMS Marketing</a></li>
                      <li><a>2 Way SMS System</a></li>
                    
                    </ul>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div class="offcanvas__close">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <floating-whatsapp></floating-whatsapp>
    </div>
</template>
<script>
export default {
     data() {
    return {
      activesub:""
    };
  },
  mounted() {
    this.offcanvas();
  },
  methods: {
    offcanvas: function () {
      $("#open_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "1");
        $(".offcanvas__area").css("visibility", "visible");
      });
      $("#close_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "0");
        $(".offcanvas__area").css("visibility", "hidden");
      });
      // search icon js
      let header_search = document.querySelector(".header__search");
      let search_icon = document.querySelector("#search_icon");
      let search_close = document.querySelector("#search_close");
      if (header_search) {
        search_icon.addEventListener("click", function () {
          header_search.classList.add("open-search");
          search_icon.style.display = "none";
          search_close.style.display = "block";
        });
        search_close.addEventListener("click", function () {
          header_search.classList.remove("open-search");
          search_icon.style.display = "block";
          search_close.style.display = "none";
        });
      }
    },

    handleClick:function(ac){
      if(this.activesub == ac){
        this.activesub="";
      }else{
        this.activesub = ac;
      }
      
    }
  },
}
</script>
<style>
    
</style>