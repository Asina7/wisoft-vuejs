<template>
  <FABExpand></FABExpand>
  <pre-loader></pre-loader>
  <cursor_Anim></cursor_Anim>
  <router-view></router-view>
</template>

<script>
import PreloaderAnim from "./components/PreloaderAnim.vue";
import Cursor_Anim from "./components/Cursor_Anim.vue";
import FABExpand from "./components/Home/MainSection/FABExpand.vue";
import { reactive, computed } from "vue";
import { useHead } from "@unhead/vue";

export default {
  setup() {
    const siteData = reactive({
      title:
        "Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft",
      description:
        "Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.",
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: "description",
          content: computed(() => siteData.description),
        },
      ],
    });
  },
  name: "App",
  components: {
    Cursor_Anim,
    PreloaderAnim,
    FABExpand,
  },
  methods: {},
};
</script>
<style>
body {
  font-family: "Raleway", sans-serif;
}
</style>
