<template>
  <div>
    <div id="smooth-wrapper">
    <div id="smooth-content">
      <footer class="footer__area" data-scroll-section>
      <div class="footer__top ">
        <div class="container footer-line"></div>
        <img  src="@/assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5">
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
                    <li><a><router-link to="">Lead Generation</router-link></a></li>
                    <!-- <li><a>Lead Generation</a></li> -->
                  </ul>
                  <ul class="col-m-6 footer__link" >
                    <!-- <li><a>Search Engine Optimiation</a></li> -->
                    <li><a><router-link to="">Search Engine Optimiation</router-link></a></li>
        
                  </ul>
                  
                  </div>
                </div>
           
                
                <div class="footer__widget-3">
                  <h2 class="footer__widget-title contact-title">Contact Us</h2>
                 
                  <contact-information></contact-information>
                  
                </div>

                <div class="footer__widget-4">
                  <h2 class="project-title">Have a project in your mind?</h2>
                  <div id="btn_wrapper">
                    <a class="wc-btn-primary btn-hover btn-item"><span></span><router-link to="/contact">Contact us
                     <i class="fa-solid fa-arrow-right"></i></router-link>
                    </a>
                  </div>
                  <ul class="footer__social">
                    <li><a href="https://www.facebook.com/wisoftsolutions/"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                      <li><a href="https://twitter.com/Wisoftsolutions"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                      <li><a href="https://www.instagram.com/wisoftsolutions/"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                      <li><a href="https://www.facebook.com/wisoftsolutions/"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                      <li><a href="https://www.youtube.com/channel/UCHc4sypQWl2HQx5jHm9GjHg"><span><i class="fa-brands fa-youtube"></i></span></a></li>
                  </ul>
                </div>

              
                <div class="footer__copyright">
                    <p>© 2023 | Alrights reserved by <a href=""
                        target="_blank">wisoftsolutions</a>
                    </p>
                  </div>
                  
                <div class="footer__subscribe">
                  <form @submit.prevent="handleSubmit">
                    <input type="email" v-model="email" name="email" placeholder="Enter your email">
                    <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
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
    .footer__inner{
      margin-top: 0;
    }     
    .footer__widget-3 {
  grid-column: span 4;
  /* padding: 140px 0 130px; */
}
.footer-linkss{
  display:flex; 
  flex:wrap; 
  justify-content: space-between;
  margin-right: 30px;
}
</style>
<script> 
import ContactInformation from './MainSection/ContactInformation.vue';
// import nodemailer from 'nodemailer';
  export default{
    name : 'FooterPage',
    components:{
      ContactInformation
    },
    data() {
    return {
      email: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // Create a transporter object using your email provider's SMTP details
        const transporter = nodemailer.createTransport({
          host: 'smtp.example.com',
          port: 587,
          secure: false,
          auth: {
            user: 'youremail@example.com',
            pass: 'yourpassword'
          }
        })

        // Define the email details
        const mailOptions = {
          from: 'youremail@example.com',
          to: this.email,
          subject: 'Email from your Vue.js website',
          text: 'This is an example email sent from a Vue.js website'
        }

        // Send the email
        const info = await transporter.sendMail(mailOptions)
        alert(`Email sent: ${info.messageId}`)
      } catch (error) {
        console.error(error)
        alert(`error sending email: ${error.message}`)
      }
    }
  }
  }
</script>