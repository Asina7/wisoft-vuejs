<template>
    <div>
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main>
        <header-section></header-section>
        <!-- Contact area start -->
        <case-study></case-study>
      </main>
      <!-- Footer area start -->
      <footer-page></footer-page>
      </div>
      </div>
    </div>
</template>


<script>
import HeaderSection from '../components/About/HeaderSection.vue'
import CaseStudy from '../components/CaseStudy/CaseStudy.vue'
import FooterPage from '../components/Home/FooterPage.vue'

export default {
  components: { HeaderSection, CaseStudy,FooterPage },
    name : 'BlogPage'
}
</script>