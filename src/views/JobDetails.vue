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
        <job-detail></job-detail>
      </main>
      <floating-whatsapp></floating-whatsapp>
      <!-- Footer area start -->
      <footer-page></footer-page>
    

    </div>
  </div>

    </div>

</template>
<script>
 import JobDetails from '@/components/Blog/BlogDetails.vue';
  import MainHeader from '../components/About/HeaderSection.vue'
  import FooterPage from '../components/Home/FooterPage.vue'

  import FloatingWhatsapp from '@/components/Home/FloatingWhatsapp.vue'
import JobDetail from '@/components/Career/JobDetail.vue';

export default {
  components: { MainHeader,JobDetails, FooterPage,FloatingWhatsapp, JobDetail},
    name : 'AboutPage'
}
</script>

