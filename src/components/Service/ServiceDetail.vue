<template>
  <div>
    <main>
      <!-- Development area start -->
      <section class="development__area">
        <div class="container g-0 line pt-130 pb-150">
          <div class="line-3"></div>
          <div class="row">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div class="sec-title-wrapper">
                <h1 class="sec-title animation__char_come">
                  {{ services.service_title }}
                </h1>
              </div>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div class="development__wrapper">
                <div class="development__content">
                  <p>
                    {{ services.fold1_p1 }}
                  </p>
                  <p>
                    {{ services.fold1_p2 }}
                  </p>
                </div>
                <ul>
                  <li
                    v-for="(item, index) in services.fold_1_list"
                    :key="index"
                  >
                    + {{ item }}
                  </li>
                  <!-- <li>+ API Development</li>
                  <li>+ WordPress</li>
                  <li>+ Cloud Migration</li>
                  <li>+ Front End Development</li>
                  <li>+ JavaScript</li>
                  <li>+ Fluter Framework</li> -->
                </ul>
              </div>
            </div>
            <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div class="development__img">
                <img
                  class="para-img"
                  ref="parallaxImage"
                  src="@/assets/imgs/thumb/dev-1.jpg"
                  alt="Development Image"
                />
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div class="development__img">
                <img
                  src="@/assets/imgs/thumb/dev-2.jpg"
                  alt="Development Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Development area end -->

      <!-- Workflow area start -->
      <section class="workflow__area-6">
        <div class="container g-0 line pb-130">
          <div class="line-3"></div>
          <div class="workflow__wrapper-6">
            <div class="row">
              <div
                class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 f2-bullets"
                v-for="(item, index) in services.fold_2"
                :key="index"
              >
                <div class="workflow__slide-6">
                  <h6 class="workflow__title-6">
                    {{ item.title }}
                  </h6>
                  <p>
                    {{ item.desc }}
                  </p>
                </div>
              </div>

              <!-- <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="workflow__slide-6">
                  <h6 class="workflow__title-6">Team <br />working</h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="workflow__slide-6">
                  <h6 class="workflow__title-6">
                    Flowchart and <br />wireframe
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="workflow__slide-6">
                  <h6 class="workflow__title-6">
                    User experience <br />Testing
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <!-- Workflow area end -->

      <!-- Service detail area start -->
      <section class="service__detail">
        <div class="container g-0 line pb-140">
          <div class="line-3"></div>
          <div class="row">
            <div class="col-xxl-12">
              <div class="sec-title-wrapper">
                <h2 class="sec-title title-anim">
                  {{ services.fold3_quote }}
                </h2>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div class="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div class="service__detail-img">
                <img
                  src="@/assets/imgs/thumb/service-detail.png"
                  alt="Service detail image"
                />
                <img
                  src="@/assets/imgs/icon/shape-6.png"
                  alt="Service shape image"
                  class="sd-shape"
                />
              </div>
              <div class="service__detail-content">
                <p>
                  {{ services.fold4_p1 }}
                </p>
                <ul>
                  <li
                    style="
                      font-weight: 500;
                      font-size: 20px;
                      margin-bottom: 6px;
                    "
                  >
                    The Wisoft Solutions Advantage
                  </li>
                  <li
                    v-for="(item, index) in services.fold4_advantages"
                    :key="index"
                    style="margin-bottom: 8px"
                  >
                    + {{ item }}
                  </li>
                  <!-- <li>+ API Development</li>
                  <li>+ WordPress</li>
                  <li>+ Cloud Migration</li>
                  <li>+ Front End Development</li>
                  <li>+ JavaScript</li>
                  <li>+ Fluter Framework</li> -->
                </ul>
                <!-- Getting your brand message out there. We create dynamic
                  campaign creative that engages audiences, wherever they are
                  most talented. Bring your brand to life, communicate your
                  value proposition with agile setup across creativity. -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Service detail area end -->

      <!-- FAQ area start -->
      <section class="faq__area">
        <div class="container g-0 line pb-140">
          <div class="line-3"></div>
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="faq__img">
                <img
                  src="@/assets/imgs/thumb/faq.jpg"
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="faq__content">
                <h2 class="faq__title title-anim">
                  Frequently Asked Questions
                </h2>

                <div class="faq__list">
                  <div class="accordion" id="accordionExample">
                    <div
                      class="accordion-item"
                      v-for="(item, index) in services.accordionItems"
                      :key="index"
                    >
                      <h2
                        class="accordion-header"
                        :id="'heading' + (index + 1)"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          @click="toggleAccordion(index)"
                        >
                          <!-- <i v-if="!item.isOpen" class="fas fa-plus"></i>
            <i v-if="item.isOpen" class="fas fa-minus"></i> -->
                          {{ item.title }}
                        </button>
                      </h2>
                      <div
                        :id="'collapse' + (index + 1)"
                        class="accordion-collapse"
                        :class="{ show: item.isOpen }"
                        :aria-labelledby="'heading' + (index + 1)"
                        v-show="item.isOpen"
                      >
                        <div class="accordion-body">
                          {{ item.body }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- FAQ area end -->

      <!-- CTA area start -->
      <section class="cta__area">
        <div class="container line pb-110">
          <div class="line-3"></div>
          <div class="row">
            <div class="col-xxl-12">
              <div class="cta__content">
                <p class="cta__sub-title">Work with us</p>
                <h2 class="cta__title title-anim">
                  We would love to hear more about your project
                </h2>
                <div id="btn_wrapper">
                  <a href="/contact" class="wc-btn-primary btn-hover btn-item"
                    ><span></span>Let’s talk us
                    <i class="fa-solid fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CTA area end -->
    </main>
    <FloatingWhatsapp></FloatingWhatsapp>
    <div class="offcanvas__close">
      <router-link :to="{ path: '/services' }">
        <button type="button" id="close_offcanvas">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import FloatingWhatsapp from "@/components/Home/FloatingWhatsapp.vue";
import { useHead } from "@unhead/vue";
export default {
  components: {
    FloatingWhatsapp,
  },
  data() {
    return {
      services: {},
      serviceData: [
        {
          id: "digital-marketing",
          service_title: "Digital Marketing",
          fold1_p1:
            "Digital marketing has become an essential component for businesses looking to succeed in today's competitive market. Digital marketing agencies help businesses to reach their target audience, generate leads, and increase sales through effective online marketing techniques.",
          fold1_p2:
            "Working with the best digital marketing company in Dubai can provide businesses with the expertise they need to develop a comprehensive digital marketing strategy that aligns with their goals and objectives. Be it SEO, PPC, social media marketing, or content creation, Wisoft Solutions can help businesses to stay ahead of the game and grow their online presence.",
          fold_1_list: [
            "Lead Generation",
            "Content Marketing",
            "Hubspot CRM & Marketing Automation",
            "PPC Marketing",
            "Programmatic Ads",
          ],
          fold_2: [
            {
              title: "Research and Analysis",
              desc: "Conduct research and analyze the market, target audience, competition, and industry trends to gather insights and identify opportunities.",
            },
            {
              title: "Define Goals and Objectives",
              desc: "Based on the insights gathered, set specific and measurable goals and objectives for your digital marketing strategy.",
            },
            {
              title: "Develop Tactics and Implementation",
              desc: "Create a plan of action to achieve the goals and objectives defined by selecting the appropriate digital channels, creating content, and implementing campaigns.",
            },
            {
              title: "Measure and Refine",
              desc: "Measure campaign performance using relevant metrics and analytics tools to refine and optimize your strategy for better results.",
            },
          ],
          fold3_quote:
            "Experience the power of reliable, cost-effective and performance-driven digital marketing solutions.",
          fold4_p1:
            "Our digital marketing services provide several advantages that set us apart from other digital marketing companies in Dubai. As the best digital marketing company in Dubai, we focus on growth-driven strategies that help businesses achieve their goals faster and more efficiently. As a digital marketing agency in Dubai, we have a team of experienced professionals who specialize in various areas of digital marketing, including SEO, social media marketing, email marketing, and more.",

          fold4_advantages: [
            "Customized strategies tailored to meet your specific business needs and goals.",
            "Data-driven approach that allows us to measure the success of our campaigns and optimize them as needed for maximum results.",
            "Transparent reporting and communication, so you always know what's happening with your campaigns.",
            "Expertise in the latest digital marketing trends and technologies, so you stay ahead of the competition.",
            "Cost-effective solutions that deliver the right results and provide positive ROIs.",
          ],
          accordionItems: [
            {
              title: "What does a digital marketing agency do?",
              body: "A digital marketing agency helps businesses reach their target audience through various online channels. This includes creating and implementing strategies for search engine optimization (SEO), social media marketing, email marketing, content marketing, paid advertising, and more. The agency also uses analytics and metrics to measure the effectiveness of their campaigns and adjust them as needed for maximum results.",
              isOpen: true,
            },
            {
              title: "Which agency is best for digital marketing in Dubai?",
              body: "There are many digital marketing agencies in Dubai, but Wisoft Solutions stands out as the best choice for businesses looking for expert digital marketing services. We have a team of experienced professionals who specialize in various areas of digital marketing, including SEO, social media marketing, email marketing, and more. Our data-driven approach, transparent reporting, and customized strategies tailored to meet your specific business needs make us the top choice for digital marketing in Dubai.",
              isOpen: false,
            },
            {
              title:
                "Which services are offered in Dubai by digital marketing agencies?",
              body: "Digital marketing agencies in Dubai offer a wide range of services to help businesses reach their target audience and achieve their goals. This includes Search Engine Optimization (SEO), social media marketing, email marketing, content marketing, paid advertising, website design and development, and more. The specific services offered may vary depending on the agency's expertise and focus.",
              isOpen: false,
            },
            {
              title:
                "Why choose Wisoft Solutions for your digital marketing needs?",
              body: "Wisoft Solutions is the leading digital marketing agency in Dubai, with a team of experienced professionals who specialize in various areas of digital marketing. We provide customized strategies tailored to meet your specific business needs and goals, using a data-driven approach that allows us to measure the effectiveness of our campaigns and adjust them as needed for maximum results. We also provide transparent reporting and communication, so you always know what's happening with your campaigns. Choose Wisoft Solutions for expert digital marketing services that deliver real results.",
              isOpen: false,
            },
          ],
        },
        {
          id: "social-media-marketing",
          service_title: "Social Media Marketing",
          fold1_p1:
            "Social media has revolutionized the way businesses market themselves. With billions of active users on social media platforms, businesses have an opportunity to reach their target audience and build brand awareness. Social media marketing is all about creating engaging content, building a community of followers, and driving conversions.",
          fold1_p2:
            "As a leading social media agency in Dubai, we understand the importance of social media marketing in today's digital landscape. We offer customized social media marketing solutions that help businesses to achieve their marketing goals and stay ahead of the competition.",
          fold_1_list: [
            "Facebook Marketing",
            "Instagram Management",
            "Twitter Management",
            "Linkedin Management",
            "Snapchat Marketing",
            "Social Media Campaigns",
            "Facebook Management",
            "Pinterest Marketing",
            "Influencer Marketing",
          ],
          fold_2: [
            {
              title: "Research and Analysis",
              desc: "We start by conducting in-depth research and analysis of your business, target audience, competition, and industry trends. This helps us to identify the best social media platforms to focus on and create a strategy that aligns with your business goals.",
            },
            {
              title: "Content Creation and Management",
              desc: "Our team of experienced content creators will develop engaging content that resonates with your target audience. We use a variety of content formats, including videos, images, and infographics, to keep your social media profiles fresh and engaging.",
            },
            {
              title: "Community Building and Management",
              desc: "We help businesses to build and grow their social media communities by engaging with followers, responding to comments, and providing value through informative content.",
            },
            {
              title: "Campaign Execution and Management",
              desc: "We develop and implement social media campaigns that drive engagement and conversions. Our team closely monitors campaign performance and makes adjustments as needed to ensure maximum results.",
            },
            {
              title: "Analytics and Reporting",
              desc: "We provide regular reports on campaign performance, including metrics such as reach, engagement, and conversions. This helps businesses to understand the effectiveness of their social media marketing campaigns and make informed decisions for future campaigns.",
            },
          ],
          fold3_quote:
            "Experience the power of engaging and impactful social media marketing.",
          fold4_p1:
            "At Wisoft Solutions, we provide comprehensive social media marketing services that can help businesses establish a strong social media presence and engage with their target audience. As the top social media marketing agency in Dubai, we have a team of experienced professionals who specialize in various areas of social media marketing, including social media strategy, content creation, and community management.",

          fold4_advantages: [
            "Customized social media marketing strategies that are tailored to meet your business needs and goals.",
            "Expertise in a variety of social media platforms, including Facebook, Instagram, Twitter, LinkedIn, and more.",
            "Experienced content creators who develop engaging and informative content that resonates with your target audience.",
            "Community building and management services that help businesses to grow their social media following and build brand awareness.",
            "Transparent reporting and communication, so you always know what's happening with your social media marketing campaigns.",
            "Cost-effective solutions that deliver the right results and provide positive ROIs.",
          ],
          accordionItems: [
            {
              title: "Q1. What is social media marketing?",
              body: "Social media marketing is the process of using social media platforms to promote a brand, product, or service. It involves creating and sharing content on social media platforms, engaging with followers, and analyzing the results to improve future marketing efforts.",
              isOpen: true,
            },
            {
              title: "Q2. What are the four types of social media marketing?",
              body: "The four types of social media marketing are:Content marketing: Creating and sharing valuable and relevant content to attract and engage with your target audience. Paid advertising: Promoting your brand or product through paid ads on social media platforms to reach a wider audience. Influencer marketing: Collaborating with influential individuals on social media to promote your brand or product to their followers. Social media management: Managing and monitoring your brand's social media presence to ensure consistent messaging and engagement with followers.",
              isOpen: false,
            },
            {
              title: "Q3. What makes Wisoft's social media service unique?",
              body: "While we cannot guarantee specific results, we do guarantee that we will work tirelessly to achieve our clients' social media goals. We believe in transparency and open communication with our clients, and we provide detailed analytics and reports to track progress and adjust strategies as needed.",
              isOpen: false,
            },
            {
              title: "Q4. Does Wisoft guarantee social media results?",
              body: "Wisoft Solutions is the leading digital marketing agency in Dubai, with a team of experienced professionals who specialize in various areas of digital marketing. We provide customized strategies tailored to meet your specific business needs and goals, using a data-driven approach that allows us to measure the effectiveness of our campaigns and adjust them as needed for maximum results. We also provide transparent reporting and communication, so you always know what's happening with your campaigns. Choose Wisoft Solutions for expert digital marketing services that deliver real results.",
              isOpen: false,
            },
            {
              title: "Q5. Which social media platforms should a business use?",
              body: "",
              isOpen: false,
            },
            {
              title: "Q6. How much does social media marketing cost?",
              body: "",
              isOpen: false,
            },
          ],
        },
        {
          id: "technnologies",
          service_title: "Technnologies",
        },
        {
          id: "search-engine-optimization",
          service_title: "Search Engine Optimization",
        },
        {
          id: "creative-services",
          service_title: "Creative Services",
          fold1_p1:
            "In today's highly competitive market, businesses need to stand out from the crowd and create a lasting impression on their audience. That's where creative agencies come in - providing businesses with the expertise and creativity they need to develop unique and engaging branding, design, and marketing materials.",
          fold1_p2:
            "As the best creative agency in Dubai, we provide businesses with comprehensive creative solutions that can help them achieve their goals and establish a strong brand identity. From branding and logo design to website development and marketing collateral, our team of creative professionals can help businesses make a lasting impact on their audience.",
          fold_1_list: [
            "Logo Design",
            "Brand Identity",
            "Graphic Design",
            "UI/UX",
            "Campaign Designing",
            "Industrial Designing",
            "Art Direction",
            "Video Production",
            "Concept Designing",
          ],
          fold_2: [
            {
              title: "Discovery and Research",
              desc: "We work closely with our clients to understand their business goals and target audience, conducting research and analysis to gather insights and identify opportunities.",
            },
            {
              title: "Concept Development",
              desc: "Based on the insights gathered, we develop creative concepts and ideas that align with the client's goals and objectives.",
            },
            {
              title: "Design and Execution",
              desc: "We bring the creative concepts to life through expert design and execution, creating engaging and impactful branding, design, and marketing materials.",
            },
            {
              title: "Measure and Refine",
              desc: "We measure campaign performance using relevant metrics and analytics tools to refine and optimize your creative strategy for better results.",
            },
          ],
          fold3_quote:
            "Experience the power of innovative and compelling creative solutions.",
          fold4_p1:
            "At Wisoft Solutions, we provide comprehensive creative solutions that can help businesses establish a strong brand identity and stand out in their market. As the best creative agency in Dubai, we have a team of experienced professionals who specialize in various areas of creative content development, including graphic design, video production, copywriting and more.",

          fold4_advantages: [
            "Customized social media marketing strategies that are tailored to meet your business needs and goals.Customized creative strategies tailored to meet your specific business needs and goals, whether you're a startup or an established business.",
            "Collaborative approach that involves you in every step of the creative development process, from ideation to final delivery.",
            "Data-driven strategy that allows us to measure the success of our campaigns and optimize them as needed for maximum impact, ensuring your investment generates the best results.",
            "Transparent reporting and communication, so you always know what's happening with your creative campaigns and can make informed decisions.",
            "Expertise in the latest creative trends and technologies, so you stay ahead of the competition and stand out from the crowd.",
            "Cost-effective solutions that deliver the right results and provide positive ROIs, regardless of your budget size.",
          ],
          accordionItems: [
            {
              title: "Q1. What does a creative agency do?",
              body: "A creative agency offers creative and strategic services to help clients effectively communicate their brand identity and messaging to their target audience. Services may include branding, graphic design, video production, content creation, advertising, and more.",
              isOpen: true,
            },
            {
              title: "Q2. Which is the best creative agency in Dubai?",
              body: "There are many creative agencies in Dubai that offer a wide range of services and vary in terms of size and expertise. It ultimately depends on the specific needs and goals of the client. However, Wisoft Solutions is a well-established and highly respected creative agency in Dubai with a proven track record of success. Our team of experienced professionals has a deep understanding of the local market and can develop customized strategies to help clients effectively communicate their brand or message.",
              isOpen: false,
            },
          ],
        },
        {
          id: "sms-marketing",
          service_title: "SMS Marketing",
        },
        {
          id: "web-design-development",
          service_title: "Web Design & Development",
          fold1_p1:
            "In today's digital age, having a well-designed and optimized website is crucial for businesses to establish their online presence and reach their target audience. At Wisoft Solutions, we specialize in creating custom websites that are not only visually appealing but also optimized to deliver maximum performance and user experience.",
          fold1_p2:
            "As a leading web design and development company in Dubai, we have a team of skilled developers and designers who specialize in creating websites that help businesses achieve their goals and stand out in a competitive market. Our websites are designed to be responsive, intuitive, and engaging, ensuring that visitors have an enjoyable browsing experience and convert into loyal customers.",
          fold_1_list: [
            "Corporate Website",
            "Dynamic Websites",
            "Custom App Development",
            "Wordpress Development",
            "Magento Website Development",
            "eCommerce Website Design",
            "Woocommerce Website",
            "Dot Net Development",
            "CRM Integration",
          ],
          fold_2: [
            {
              title: "Discovery and Planning",
              desc: "We take the time to understand your business goals, target audience, and industry trends to create a custom web design strategy that aligns with your business objectives.",
            },
            {
              title: "Design and Development",
              desc: "Our team of designers and developers work closely to create a visually stunning and functional website that is optimized for user experience and performance.",
            },
            {
              title: "Testing and Launch",
              desc: "We thoroughly test and optimize your website for performance, speed, and usability before launching it to ensure it meets industry standards and exceeds your expectations.",
            },
            {
              title: "Support and Maintenance",
              desc: "We provide ongoing support and maintenance to ensure your website remains up-to-date and performs at its best.",
            },
          ],
          fold3_quote:
            "Experience the power of a visually stunning, user-friendly, and SEO-optimized website.",
          fold4_p1:
            "At Wisoft Solutions, we provide comprehensive web design and development services that can help businesses build a strong online presence and drive conversions. As a top web design and development company in Dubai, we have a team of experienced professionals who specialize in various areas of web design and development, including website design, custom web development, e-commerce solutions, and more..",

          fold4_advantages: [
            "Customized web design and development solutions tailored to meet your specific business needs and goals.",
            "Expertise in the latest web design and development technologies, so your website stays ahead of the competition.",
            "Transparent communication and reporting, so you always know what's happening with your website design and development project.",
            "Scalable solutions that can grow with your business, providing long-term value and positive ROIs.",
            "Scalable solutions that can grow with your business, providing long-term value and positive ROIs.",
          ],
          accordionItems: [
            {
              title: "Q1. What is web designing and development?",
              body: "Web designing and development is the process of creating websites that are visually appealing, user-friendly, and functional. It involves several steps, including planning, designing, coding, and testing to ensure that the website meets the client's requirements and goals.",
              isOpen: true,
            },
            {
              title:
                "Q2. What is the difference between a web developer and web designer?",
              body: "A web developer is responsible for building the website's functionality using coding languages such as HTML, CSS, and JavaScript. They focus on the technical aspects of website creation, including creating interactive features, managing databases, and ensuring that the website is responsive and compatible with different devices. On the other hand, a web designer focuses on the website's visual elements, such as layout, typography, color scheme, and branding. They work on the website's aesthetics to create an engaging and visually appealing experience for the user.",
              isOpen: false,
            },
            {
              title:
                "Q3. Which is the best design and development agency in Dubai?",
              body: "A web developer is responsible for building the website's functionality using coding languages such as HTML, CSS, and JavaScript. They focus on the technical aspects of website creation, including creating interactive features, managing databases, and ensuring that the website is responsive and compatible with different devices. On the other hand, a web designer focuses on the website's visual elements, such as layout, typography, color scheme, and branding. They work on the website's aesthetics to create an engaging and visually appealing experience for the user.",
              isOpen: false,
            },
            {
              title:
                "Q4. Which is the best design and development agency in Dubai?",
              body: "Q3. Which is the best design and development agency in Dubai?",
              isOpen: false,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // dynamic component
    let id = this.$route.params.id;
    let current = this.serviceData.find((item) => item.id == id);
    this.services = current;

    console.log(current);
    // parallex
    window.addEventListener("scroll", this.handleScroll);
    useHead({
      title: `${current.service_title} | Digital Marketing Companies in Dubai | Best Digital Marketing Services UAE | Wisoft"`,
      meta: [
        {
          name: `${current.service_title} | Wisoft Solutions is a full-stack digital marketing company in Dubai, UAE, recognized with multiple digital marketing awards as best digital agency in Dubai.`,
          content: "",
        },
      ],
    });
  },
  methods: {
    offcanvascontact() {
      $("#open_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "1");
        $(".offcanvas__area").css("visibility", "visible");
      });
      $("#close_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "0");
        $(".offcanvas__area").css("visibility", "hidden");
      });
    },
    // parallex

    handleScroll() {
      const image = this.$refs.parallaxImage;
      const speed = 0.3;
      const yPos = window.pageYOffset * speed;
      image.style.transform = `translate3d(0, ${yPos}px, 0)`;
    },
    toggleAccordion(index) {
      this.services.accordionItems.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // parallex ends
};
</script>
<style>
.f2-bullets {
  margin-bottom: 100px;
}
@media screen and (max-width: 768px) {
}
.offcanvas__close button {
  font-size: 30px;
  width: 55px;
  position: fixed;
  top: 20px;
  right: 20px;
}

@media screen and (max-width: 768px) {
  #close_offcanvas {
    display: none;
  }
  .faq__list .accordion-body,
  .faq__list-6 .accordion-body,
  .faq__list-3 .accordion-body {
    color: gray;
  }
  .f2-bullets {
    margin-bottom: 0px;
  }
}
</style>
