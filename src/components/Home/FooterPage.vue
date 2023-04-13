<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <footer class="footer__area" data-scroll-section>
          <div class="footer__top">
            <div class="container footer-line"></div>
            <img
              src="@/assets/imgs/thumb/footer.jpg"
              alt="Footer Image"
              data-speed="0.5"
            />
          </div>

          <div class="footer__btm">
            <div class="container">
              <div class="row footer__row">
                <div class="col-xxl-12">
                  <div class="footer__inner">
                    <div class="footer__widget">
                      <h2 class="footer__widget-title">Looking For</h2>
                      <div class="footer-linkss">
                        <ul class="col-m-6 footer__link">
                          <li>
                            <a
                              ><router-link to=""
                                >Lead Generation</router-link
                              ></a
                            >
                          </li>
                          <!-- <li><a>Lead Generation</a></li> -->
                        </ul>
                        <ul class="col-m-6 footer__link">
                          <!-- <li><a>Search Engine Optimiation</a></li> -->
                          <li>
                            <a
                              ><router-link to=""
                                >Search Engine Optimiation</router-link
                              ></a
                            >
                          </li>
                        </ul>
                      </div>

                      <h2 class="footer__widget-title">Industries</h2>
                      <div class="footer-linkss">
                        <ul class="col-m-6 footer__link">
                          <li>
                            <a><router-link to="">E-COMMERCE</router-link></a>
                          </li>
                          <li>
                            <a><router-link to="">EDUCATION</router-link></a>
                          </li>
                          <li>
                            <a><router-link to="">FINANCE</router-link></a>
                          </li>
                          <li>
                            <a
                              ><router-link to=""
                                >TRAVEL & HOSPITALITY</router-link
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              ><router-link to="">MANUFACTURING</router-link></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="col-m-6 footer__link"
                          style="margin-right: 40px"
                        >
                          <li>
                            <a><router-link to="">LOGISTICS</router-link></a>
                          </li>
                          <li>
                            <a><router-link to="">REAL ESTATE</router-link></a>
                          </li>
                          <li>
                            <a><router-link to="">HEALTHCARE</router-link></a>
                          </li>
                          <li>
                            <a><router-link to="">RETAIL</router-link></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="footer__widget-3">
                      <h2 class="footer__widget-title contact-title">
                        Contact Us
                      </h2>

                      <contact-information></contact-information>
                    </div>

                    <div class="footer__widget-4">
                      <h2 class="project-title">
                        Have a project in your mind?
                      </h2>

                      <!-- <div id="btn_wrapper">
                        <a class="wc-btn-primary btn-hover btn-item"
                          ><span></span
                          ><router-link to="/contact"
                            >Contact us <i class="fa-solid fa-arrow-right"></i
                          ></router-link>
                        </a>
                      </div> -->
                      <div class="btn-dark-container">
                        <a class="btn-dark" href="/about"
                          >Contact Us
                          <i class="fa-solid fa-circle-arrow-right"></i
                        ></a>
                      </div>
                      <ul class="footer__social">
                        <li>
                          <a href="https://www.facebook.com/wisoftsolutions/"
                            ><span><i class="fa-brands fa-facebook-f"></i></span
                          ></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Wisoftsolutions"
                            ><span><i class="fa-brands fa-twitter"></i></span
                          ></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/wisoftsolutions/"
                            ><span><i class="fa-brands fa-instagram"></i></span
                          ></a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/wisoftsolutions/"
                            ><span><i class="fa-brands fa-linkedin"></i></span
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCHc4sypQWl2HQx5jHm9GjHg"
                            ><span><i class="fa-brands fa-youtube"></i></span
                          ></a>
                        </li>
                      </ul>
                    </div>

                    <div class="footer__copyright">
                      <p>
                        © 2023 | Alrights reserved by
                        <a href="" target="_blank">wisoftsolutions</a>
                      </p>
                    </div>

                    <div class="footer__subscribe">
                      <form @submit.prevent="handleSubmit">
                        <input
                          type="email"
                          v-model="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <button type="submit" class="subs-btn">
                          <i class="fa-solid fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-dark-container {
  margin: 30px auto;
}
.btn-dark {
  cursor: pointer;
  border-radius: 50px;
  width: 20px;
  background-color: #c9f31d;
  color: #000;
  /* padding: 6px 35px; */
  padding: 14px 30px;
}
.btn-dark i {
  margin: auto auto auto 10px;
  /* font-size: 70%; */
}
.btn-dark:hover {
  cursor: pointer;
  border-radius: 50px;
  border-color: #000;
  width: 20px;
  background-color: #fff;
  color: #000;
  padding: 14px 30px;
}
.footer__inner {
  margin-top: 0;
}
.footer__widget-3 {
  grid-column: span 4;
  /* padding: 140px 0 130px; */
}
.footer-linkss {
  display: flex;
  flex: wrap;
  justify-content: space-between;
  margin-right: 30px;
}
@media screen and (max-width: 768px) {
  .btn-dark-container {
    margin: 2px 0px 28px 0px !important;
  }
}
</style>
<script>
import ContactInformation from "./MainSection/ContactInformation.vue";
// import nodemailer from 'nodemailer';
export default {
  name: "FooterPage",
  components: {
    ContactInformation,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Create a transporter object using your email provider's SMTP details
        const transporter = nodemailer.createTransport({
          host: "smtp.example.com",
          port: 587,
          secure: false,
          auth: {
            user: "youremail@example.com",
            pass: "yourpassword",
          },
        });

        // Define the email details
        const mailOptions = {
          from: "youremail@example.com",
          to: this.email,
          subject: "Email from your Vue.js website",
          text: "sample text",
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        alert(`Email sent: ${info.messageId}`);
      } catch (error) {
        console.error(error);
        alert(`error sending email: ${error.message}`);
      }
    },
  },
};
</script>
