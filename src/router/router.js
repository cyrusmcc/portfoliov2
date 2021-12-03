import { createRouter, createWebHashHistory  } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: import("@/views/AboutMe.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: import("@/views/Projects.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
