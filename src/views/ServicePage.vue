<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- <header-section></header-section> -->
          <MainHeader></MainHeader>
        </main>
        <main-page></main-page>
        <!-- Footer area start -->
        <footer-page></footer-page>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderSection from "../components/About/HeaderSection.vue";
import MainPage from "../components/Service/MainSection.vue";
import FooterPage from "../components/Home/FooterPage.vue";
import MainHeader from "@/components/Home/MainHeader.vue";
import { useHead } from "@unhead/vue";

export default {
  setup() {
    useHead({
      title:
        "Service | Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft",
      meta: [
        {
          name: "Service | Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.",
          content: "",
        },
      ],
    });
  },
  components: { MainHeader, MainPage, FooterPage },
  name: "ServicePage",
};
</script>
