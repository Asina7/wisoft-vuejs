<template>
  <div id="container-floating">
    <!-- add nds -->
    <a
      href="https://www.youtube.com/channel/UCHc4sypQWl2HQx5jHm9GjHg"
      target="_blank"
    >
      <div class="nd7 nds">
        <i class="fa-brands fa-youtube letter"></i>
      </div>
    </a>
    <a href="https://twitter.com/Wisoftsolutions" target="_blank">
      <div class="nd6 nds">
        <i class="fa-brands fa-twitter letter"></i>
      </div>
    </a>
    <a href="https://www.facebook.com/wisoftsolutions/" target="_blank">
      <div class="nd5 nds">
        <i class="fa-brands fa-facebook-f letter"></i>
      </div>
    </a>
    <a href="https://www.instagram.com/wisoftsolutions/" target="_blank">
      <div class="nd4 nds">
        <i class="fa-brands fa-instagram letter"></i>
      </div>
    </a>
    <a href="#" target="_blank">
      <div class="nd3 nds">
        <i class="fas fa-comment my-float letter"></i>
      </div>
    </a>

    <a
      href="https://api.whatsapp.com/send?phone=7982325518&text=Hello, guruji customer care"
      target="_blank"
    >
      <div class="nd1 nds">
        <i class="fa-brands fa-whatsapp letter"></i>
      </div>
    </a>

    <div id="floating-button">
      <i class="fa-solid fa-link plus"></i>
      <i class="fa-solid fa-minus edit plus"></i>
      <!-- <img
        class="edit"
        src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
      /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "FABExpand",
  components: {},
};
</script>
<style scoped>
#floating-button {
  position: fixed;
  bottom: 50px;
  right: 40px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #004295;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.plus {
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 25px;
  /* font-family: "Roboto"; */
  /* font-weight: 300; */
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating {
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 999999999999 !important;
}

#container-floating:hover {
  height: 400px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus {
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
}

.edit {
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  display: block;
  right: 0;
  padding: 0;
  opacity: 0;
  margin: auto;
  line-height: 65px;
  transform: rotateZ(-70deg);
  transition: all 0.3s;
  animation: edit-out 0.3s;
}

#container-floating:hover .edit {
  animation: edit-in 0.2s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

.fab-icon {
  color: #fff;
  font-size: 25px;
  height: 24px;
  width: 24px;
  margin: 7px auto auto 9.5px;
}

@keyframes edit-in {
  from {
    opacity: 0;
    transform: rotateZ(-70deg);
  }
  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}

@keyframes edit-out {
  from {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  to {
    opacity: 0;
    transform: rotateZ(-70deg);
  }
}

@keyframes plus-in {
  from {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  to {
    opacity: 0;
    transform: rotateZ(180deg);
  }
}

@keyframes plus-out {
  from {
    opacity: 0;
    transform: rotateZ(180deg);
  }
  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}

.nds {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  z-index: 300;
  transform: scale(0);
  cursor: pointer;
}

.nd1 {
  background: #a4bf23;
  right: 48px;
  bottom: 120px;
  animation-delay: 0.2s;
  animation: bounce-out-nds 0.3s linear;
  animation-fill-mode: forwards;
  display: flex;

  justify-content: center;
  align-content: center;
}

.nd3 {
  background: #3c80f6;
  right: 48px;
  bottom: 180px;
  animation-delay: 0.15s;
  animation: bounce-out-nds 0.15s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nd4 {
  background: #e20060;
  right: 48px;
  bottom: 240px;
  animation-delay: 0.1s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nd5 {
  background: #3c80f6;
  right: 48px;
  bottom: 300px;
  animation-delay: 0.1s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nd7 {
  background: red;
  right: 48px;
  bottom: 420px;
  animation-delay: 0.1s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nd6 {
  background: #3c80f6;
  right: 48px;
  bottom: 360px;
  animation-delay: 0.1s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-content: center;
}

@keyframes bounce-nds {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce-out-nds {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
}

#container-floating:hover .nds {
  animation: bounce-nds 0.1s linear;
  animation-fill-mode: forwards;
}

#container-floating:hover .nd3 {
  animation-delay: 0.08s;
}
#container-floating:hover .nd4 {
  animation-delay: 0.15s;
}
#container-floating:hover .nd5 {
  animation-delay: 0.2s;
}

.letter {
  font-size: 23px;

  color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  line-height: 40px;
}

.reminder {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  line-height: 40px;
}
@media only screen and (max-width: 480px) {
  #floating-button {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #004295;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
  .nd1 {
    background: #a4bf23;
    right: 20px;
    bottom: 90px;
    animation-delay: 0.2s;
    animation: bounce-out-nds 0.3s linear;
    animation-fill-mode: forwards;
    display: flex;

    justify-content: center;
    align-content: center;
  }

  .nd3 {
    background: #3c80f6;
    right: 20px;
    bottom: 150px;
    animation-delay: 0.15s;
    animation: bounce-out-nds 0.15s linear;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .nd4 {
    background: #e20060;
    right: 20px;
    bottom: 210px;
    animation-delay: 0.1s;
    animation: bounce-out-nds 0.1s linear;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .nd5 {
    background: #3c80f6;
    right: 20px;
    bottom: 270px;
    animation-delay: 0.1s;
    animation: bounce-out-nds 0.1s linear;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .nd6 {
    background: #3c80f6;
    right: 20px;
    bottom: 330px;
    animation-delay: 0.1s;
    animation: bounce-out-nds 0.1s linear;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .nd7 {
    background: red;
    right: 20px;
    bottom: 390px;
    animation-delay: 0.1s;
    animation: bounce-out-nds 0.1s linear;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
@media screen and (max-height: 550px) and (orientation: landscape) {
  i {
    transform: rotate(90deg);
  }
  #container-floating {
    bottom: 37px;
    right: -27px;
    transform: rotate(270deg);
    transform-style: preserve-3d;
  }

  #container-floating:hover {
    bottom: -138px;
    right: 125px;
  }
}
</style>
