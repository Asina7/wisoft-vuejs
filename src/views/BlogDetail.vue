<template>
    <div>
      <div class="has-smooth" id="has_smooth"></div>


  <!-- Go Top Button -->
  <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>
  <main-header></main-header>

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>

        <!-- Hero area start -->
        <BlogDetails></BlogDetails>
      </main>
      <floating-whatsapp></floating-whatsapp>
      <!-- Footer area start -->
      <footer-page></footer-page>
    

    </div>
  </div>

    </div>

</template>
<script>
 import BlogDetails from '@/components/Blog/BlogDetails.vue';
  import MainHeader from '../components/About/HeaderSection.vue'
  import FooterPage from '../components/Home/FooterPage.vue'

  import FloatingWhatsapp from '@/components/Home/FloatingWhatsapp.vue'

export default {
  components: { MainHeader,BlogDetails, FooterPage,FloatingWhatsapp},
    name : 'AboutPage'
}
</script>

