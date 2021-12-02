<template>
  <div class="projects">
    <button class="homeButton">Home</button>
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
              <li v-for="(tag, index) in project.tags" :key="index">
                <div class="projectTag">{{ tag.value }}</div>
              </li>
            </ol>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          img: "https://via.placeholder.com/150",
          tags: [
            {
              id: 1,
              value: "Full Stack",
            },
            {
              id: 2,
              value: "Spring",
            },
            {
              id: 3,
              value: "Vue",
            },
          ],
        },
        {
          id: 2,
          title: "Project 2",
          img: "https://via.placeholder.com/150",
          tags: [
            {
              id: 1,
              value: "Full Stack",
            },
            {
              id: 2,
              value: "Spring",
            },
            {
              id: 3,
              value: "Vue",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
ol, li {
  list-style: none;
  padding: 0;
}


.projects {
  @include flexCenter();
  height: 100%;
  width: 100%;
}
.projectList {
  @include flexCenter();
  width: 90%;
}
.projectList > li {
  @include flexCenter();
  width: 100%;
  box-shadow: $shadowLight;
}

.projectContainer {
  @include flexCenter();
  width: 100%;
  height: fit-content;
}

.projectImage{
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.projectInfoContainer {
  width: 95%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 5px 0 5px 0;
}

.projectTitle {
  font-size: 1.5rem;
  font-style: italic;
  color: $primaryLight;
  border-bottom: 2px solid $primaryColor;
}

.projectTagList {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}
</style>