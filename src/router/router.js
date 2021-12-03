import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const AboutMe = () => import("../views/AboutMe.vue");
const Projects = () => import("../views/Projects.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
