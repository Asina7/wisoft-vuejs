<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- <header-section></header-section> -->
          <!-- Contact area start -->
          <MainHeader></MainHeader>
        </main>

        <case-study></case-study>
        <!-- Footer area start -->
        <footer-page></footer-page>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/Home/MainHeader.vue";
// import HeaderSection from "../components/About/HeaderSection.vue";
import CaseStudy from "../components/CaseStudy/CaseStudy.vue";
import FooterPage from "../components/Home/FooterPage.vue";
import { useHead } from "@unhead/vue";

export default {
  setup() {
    useHead({
      title:
        "Case-Study | Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft",
      meta: [
        {
          name: "Case-Study | Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.",
          content: "",
        },
      ],
    });
  },
  components: { MainHeader, CaseStudy, FooterPage },
  name: "BlogPage",
};
</script>
