<template>
  <div class="btn-dark-container">
    <a  class="btn-dark"
      >Let's Try <i class="fa-solid fa-circle-arrow-right"></i
    ></a>
  </div>
</template>
<script>
export default {
  name: "BtnBlack",
  components: {},
  //   props: [text],
};
</script>

<style scoped>
.btn-dark-container {
  margin-bottom: 20px;
}
.btn-dark {
  cursor: pointer;
  border-radius: 20px;
  width: 15;
  background-color: #004295;
  color: #fff;
  padding: 8px 20px;
}
.btn-dark i {
  margin: auto auto auto 10px;
  /* font-size: 70%; */
}
.btn-dark:hover {
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #004295;
  width: 15px;
  background-color: #fff;
  color: #004295;
  padding: 8px 20px;
}
</style>
