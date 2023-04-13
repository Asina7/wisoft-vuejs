<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- <header-section></header-section> -->
          <!-- Contact area start -->
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
// import HeaderSection from '../components/About/HeaderSection.vue'
import MainPage from "../components/Team/Mainsection.vue";
import FooterPage from "../components/Home/FooterPage.vue";
import MainHeader from "@/components/Home/MainHeader.vue";
import { useHead } from "@unhead/vue";

export default {
  setup() {
    useHead({
      title:
        "Team | Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft",
      meta: [
        {
          name: "Team | Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.",
          content: "",
        },
      ],
    });
  },
  components: { MainHeader, MainPage, FooterPage },
  name: "TeamPage",
};
</script>
