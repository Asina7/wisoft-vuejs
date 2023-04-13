<template>
  <div>
    <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
      <div class="counter__img-3">
        <img src="@/assets/imgs/review/google-reviews.png" alt="google Image" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.counter__img-3 img {
  width: 18%;
  margin-top: 80px;
  /* margin: 20px; */
}
@media screen and (max-width: 768px) {
  .counter__img-3 img {
    width: 50%;
    margin: 0;
  }
  .counter__img-3 {
    margin: 0px;
    text-align: center;
    padding: 20px;
  }
}
@media screen and (max-width: 990px) {
  .counter__img-3 img {
    width: 30%;
    margin: 0;
  }
  .counter__img-3 {
    margin: 0px;
    text-align: left;
    padding: 20px;
  }
}
@media screen and (max-width: 480px) {
  .counter__img-3 img {
    width: 30%;
    margin: 0;
  }
  .counter__img-3 {
    margin: 0px;
    text-align: center;
    padding: 20px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .counter__img-3 {
    margin-top: 0;
    text-align: left;
  }
}
</style>
