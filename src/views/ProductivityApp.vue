<template>
  <project-details v-bind="project"></project-details>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails.vue";

export default {
  name: "ProductivityApp",
  components: {
    ProjectDetails,
  },
  data() {
    return {
      project: {
        title: "Journal",
        description: "Task based calendar & journal application for productivity tracking. I needed a way to keep track of my daily tasks but I was unsatisfied with the various productivity tools online. The new year was approaching and instead of buying a new planner or switching to a new program, I decided to build an application that allowed me to keep track of my daily productivity levels and thoughts without micromanaging my day.",
        repoUrl: "https://github.com/cyrusmcc/journal-app",
        imageUrl: "productivity.webp",
        technologies: ["java.svg", "spring.svg", "mysql.svg", "js.svg", "sass.svg"],
        date: "Dec 2020 - Feb 2021",
      },
    };
  },
};
</script>

<style>
</style>