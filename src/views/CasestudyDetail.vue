<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- <header-section></header-section> -->
          <MainHeader></MainHeader>
          <!-- Contact area start -->
        </main>
        <casestudy-detail></casestudy-detail>
        <!-- Footer area start -->
        <footer-page></footer-page>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderSection from '../components/About/HeaderSection.vue'
import MainHeader from "@/components/Home/MainHeader.vue";
import CasestudyDetail from "../components/CaseStudy/CasestudyDetail.vue";
import FooterPage from "../components/Home/FooterPage.vue";

export default {
  components: { MainHeader, CasestudyDetail, FooterPage },
  name: "BlogPage",
};
</script>
