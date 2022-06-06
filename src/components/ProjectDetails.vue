<template>
  <div class="container">
    <div class="project">
      <router-link to="/projects" class="homeButton">Back</router-link>
      <header>
        <div class="headerInfo">
          <span class="title">{{ title }}</span>
          <span class="dot"></span>

          <span class="date">{{ date }}</span>
        </div>
        <a class="repoButton" target="_blank" rel="noopener noreferrer" v-if="repoUrl" :href="repoUrl">Github repo</a>
      </header>
      <div class="projectDetails">
        <div class="projectImageContainer">
          <carousel :images="images" :autoplay="true" :arrows="true" v-if="images && !imageUrl" />

          <img class="projectImage" :src="require('@/assets/imgs/' + imageUrl + '')" alt="project image"
            v-if="imageUrl && !images" />
        </div>
        <div class="projectTechnologies">
          <span>Technologies used</span>
          <ol>
            <li v-for="(tech, index) in technologies" :key="index">
              <img :src="require('@/assets/imgs/skills/' + tech + '')" alt="tech image"
                onload="this.style.display='block'" />
            </li>
          </ol>
        </div>
        <div class="projectDescription">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "ProjectDetails",
  components: {
    Carousel,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    repoUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-bottom: 20px;
}

.headerInfo {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
}

.repoButton {
  border: thin solid $primaryColor;
  color: $primaryLight;
  padding: 2px 5px;
  border-radius: 5px;
}

.repoButton:hover {
  border: thin solid $primaryHighlight;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: $primaryLight;
  width: 100%;
  height: 100%;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  height: 91%;
}

.title {
  font-style: italic;
  font-size: 1.2rem;
}

.dot {
  height: 5px;
  width: 5px;
  background-color: $primaryHighlight;
  border-radius: 50%;
  display: inline-block;
}

.projectImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
}

.projectImage {
  height: 400px;
  object-fit: contain;
  width: 100%;
}

.projectTechnologies {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  border-bottom: 2px solid $primaryLight;
}

.projectTechnologies>ol {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 20px;
  list-style: none;
  padding: 0;
  width: 100%;
}

.projectTechnologies>ol>li>img {
  height: auto;
  width: 2rem;
  align-self: center;
}

.projectDetails {
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

.projectDetails::-webkit-scrollbar {
  height: 0;
  width: 0;
}
</style>