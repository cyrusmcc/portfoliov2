<template>
  <project-details v-bind="project"></project-details>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails.vue";

export default {
  name: "PortfolioProject",
  components: {
    ProjectDetails,
  },
  data() {
    return {
      project: {
        title: "Portfolio Site",
        description: "Front end project built to document up-to-date contact information, technical skills, and software projects. My portfolio was built utilizing scss, Vue.js, and the tsParticles library.",
        repoUrl: "https://github.com/cyrusmcc/cyrusmcc.github.io",
        imageUrl: "portfolio.webp",
        technologies: ["js.svg", "vue.svg", "sass.svg"],
        date: "Nov 2021 - Dec 2021",
      },
    };
  },
};
</script>

<style>
</style>