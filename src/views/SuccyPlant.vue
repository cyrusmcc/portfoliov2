<template>
  <project-details v-bind="project"></project-details>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails.vue";

export default {
  name: "SuccyPlant",
  components: {
    ProjectDetails,
  },
  data() {
    return {
      project: {
        title: "Succy Plant",
        description: "SuccyPlant is an implementation of a full stack content management system involving JWT based user authorization and authentication, generic content creation which supports blog and wiki style posts, pagination, and user discussion. SuccyPlant will house an online database containing pictures and information related to the care of succulents, cactuses, and houseplants. Users will be able to comment on & discuss plants, search and filter by a variety of topical tags, manage their accounts, and build custom plant lists. This project is being developed utilizing Java and Spring Framework on the backend, data is stored in MySQL, and Javascript with Vue.js is being used to develop a single page application for the frontend.",
        repoUrl: "https://github.com/cyrusmcc/content-management-app",
        images: ["plant.png", "plantpage.png", "sphome.png"],
        technologies: ["java.svg", "spring.svg", "mysql.svg", "js.svg", "vue.svg"],
        date: "Aug 2021 - Current",
      },
    };
  },
};
</script>

<style>
</style>