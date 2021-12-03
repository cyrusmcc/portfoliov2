<template>
  <div class="projects">
    <router-link to="/" class="homeButton">Home</router-link>
    <span>**WIP**</span>
    <ol class="projectList">
      <li v-for="(project, index) in projects" :key="index">
        <div class="projectContainer">
          <img
            class="projectImage"
            :src="project.img"
            alt="project image"
            onload="this.style.display='block'"
          />
          <div class="projectInfoContainer">
            <div>
              <a class="projectTitle">{{ project.title }}</a>
            </div>
            <ol class="projectTagList">
              <li
                v-for="(tag, index) in project.tags"
                :key="index"
                :style="{ background: tag.color }"
              >
                <div class="projectTag">
                  {{ tag.value }}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
var colorOne = "#28B0BD";
var colorTwo = "#EF7891";
var colorThree = "#83B341";
var colorFour = "#E7B614";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "SuccyPlant",
          img: "https://via.placeholder.com/150",
          tags: [
            {
              id: 1,
              color: colorOne,
              value: "Full Stack",
            },
            {
              id: 2,
              color: colorTwo,
              value: "Spring",
            },
            {
              id: 3,
              color: colorThree,
              value: "Vue.js",
            },
            {
              id: 4,
              color: colorFour,
              value: "MySQL",
            },
          ],
        },
        {
          id: 2,
          title: "nmtrails",
          img: "https://via.placeholder.com/150",
          tags: [
            {
              id: 1,
              color: colorOne,
              value: "Full Stack",
            },
            {
              id: 2,
              color: colorTwo,
              value: "Spring",
            },
            {
              id: 3,
              color: colorThree,
              value: "Vue.js",
            },
            {
              id: 4,
              color: colorFour,
              value: "PostgreSQL",
            },
          ],
        },
        {
          id: 3,
          title: "Portfolio",
          img: "https://via.placeholder.com/150",
          tags: [
            {
              id: 1,
              color: colorOne,
              value: "Front End",
            },
            {
              id: 1,
              color: colorThree,
              value: "Vue.js",
            },
            {
              id: 2,
              color: colorFour,
              value: "tsParticles",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
ol,
li {
  list-style: none;
  padding: 0;
}
.projects {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  pointer-events: all;
}
.projectList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 95%;
  height: 90%;
  margin: 0;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.projectList::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.projectList > li {
  @include flexCenter();
  width: 100%;
  box-shadow: $shadowLight;
}
.projectContainer {
  @include flexCenter();
  width: 100%;
  margin-bottom: 5px;
  height: fit-content;
}
.projectImage {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.projectInfoContainer {
  width: 95%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 5px 0 10px 0;
}
.projectTitle {
  font-size: 1.5rem;
  font-style: italic;
  color: $primaryLight;
  border-bottom: 2px solid $primaryColor;
}
.projectTagList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 10px;
}
.projectTagList > li {
  font-weight: bold;
  font-size: 0.9rem;
  color: #09090a;
  padding: 3px;
  border-radius: 4px;
}
</style>
