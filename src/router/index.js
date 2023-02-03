import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Main_Page.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("../views/AboutPage.vue"),
  },
// changed this file
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import("../views/CareerPage.vue"),
  },
  {
    path: "/casestudy",
    name: "CaseStudy",
    component: () => import("../views/CaseStudy.vue"),
  },
  {
    path: "/casestudydetail/:id",
    name: "CasetudyDetail",
    component: () => import("../views/CasestudyDetail.vue"),
  },
  {
    path: "/team",
    name: "TeamPage",
    component: () => import("../views/TeamPage.vue"),
  },
  {
    path: "/teamdetail/:id",
    name: "TeamDetails",
    component: () => import("../views/TeamDetails.vue"),
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: () => import("../views/BlogPage.vue"),
  },
  {
    path: "/blogdetail/:id",
    name: "BlogDetail",
    component: () => import("../views/BlogDetail"),
  },
 
  
  {
    path: "/services",
    name: "ServicePage",
    component: () => import("../views/ServicePage.vue"),
  },
  {
    path: "/servicedetail/:id",
    name: "ServiceDetails",
    component: () => import("../views/ServiceDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
