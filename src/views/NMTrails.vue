<template>
  <project-details v-bind="project"></project-details>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails.vue";

export default {
  name: "NMTrails",
  components: {
    ProjectDetails,
  },
  data() {
    return {
      project: {
        title: "nmtrails",
        description: "Full stack team based project utilizing NPS & NFS open geoJSON datasets which allows users to search, filter, and rate hiking trails in New Mexico. NMTrails is being developed for an Adobe sponsored university app contest which encourages students to build mobile applications which benefit their communities. Spring Boot is utilized on the backend alongside PostgreSQL to develop REST APIs which are consumed by a SPA client being implemented using Vue.js & scss.",
        repoUrl: "https://github.com/cyrusmcc/nmtrails-backend",
        imageUrl: "nmtrails.webp",
        technologies: ["java.svg", "spring.svg", "postgresql.svg", "js.svg", "vue.svg"],
        date: "Nov 2021 - Current",
      },
    };
  },
};
</script>

<style>
</style>