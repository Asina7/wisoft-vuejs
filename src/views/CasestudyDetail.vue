<template>
    <div>
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main>
        <header-section></header-section>
        <!-- Contact area start -->
        <casestudy-detail></casestudy-detail>
      </main>
      <!-- Footer area start -->
      <footer-page></footer-page>
      </div>
      </div>
    </div>
</template>


<script>
import HeaderSection from '../components/About/HeaderSection.vue'
import CasestudyDetail from '../components/CaseStudy/CasestudyDetail.vue'
import FooterPage from '../components/Home/FooterPage.vue'

export default {
  components: { HeaderSection, CasestudyDetail,FooterPage },
    name : 'BlogPage'
}
</script>