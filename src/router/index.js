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
    path: "/team",
    name: "TeamPage",
    component: () => import("../views/TeamPage.vue"),
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: () => import("../views/BlogPage.vue"),
  },
  {
    path: "/post0",
    name: "BlogDetail",
    component: () => import("../views/BlogDetail"),
  },
  {
    path: "/service",
    name: "ServicePage",
    component: () => import("../views/ServicePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
