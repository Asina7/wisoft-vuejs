<template>
  <div>
    <div id="app">
      <a href="https://api.whatsapp.com/" class="float" target="_blank">
        <!-- cmnt <a href="https://api.whatsapp.com/send?phone=7982325518&text=Hello, guruji customer care" class="float" target="_blank"></a> -->
        <i class="fab fa-whatsapp my-float"></i>
      </a>
    </div>
    <!-- cmnt  --------------------------Chat Widget-------------------------------------- -->
    <div>
      <a href="tel:987654321" class="float1" target="_blank">
        <!-- cmnt <a href="https://api.whatsapp.com/send?phone=7982325518&text=Hello, guruji customer care" class="float" target="_blank"></a> -->
        <i class="fas fa-comment my-float"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingWhatsapp",
  components: {},
};
</script>

<style>
#app {
  height: 0;
}
.float {
  display: none;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 50px;
  right: 40px;
  background-color: #004295;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}

.float1 {
  display: none;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 50px;
  left: 40px;
  background-color: #004295;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}
@media only screen and (max-width: 768px) {
  .float1,
  .float {
    bottom: 55px;
  }
}
</style>
