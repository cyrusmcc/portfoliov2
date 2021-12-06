import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const AboutMe = () => import("../views/AboutMe.vue");
const Projects = () => import("../views/Projects.vue");
const SuccyPlant = () => import("../views/SuccyPlant.vue");
const NMTrails = () => import("../views/NMTrails.vue");
const Journal = () => import("../views/ProductivityApp.vue");
const PortfolioProject = () => import("../views/PortfolioProject.vue");


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
  {
    path: "/p/succyPlant",
    name: "SuccyPlant",

    component: SuccyPlant,
  },
  {
    path: "/p/nmtrails",
    name: "NMTrails",

    component: NMTrails,
  },
  {
    path: "/p/journal",
    name: "ProductivityApp",

    component: Journal,
  },
  {
    path: "/p/portfolio",
    name: "PortfolioProject",

    component: PortfolioProject,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
