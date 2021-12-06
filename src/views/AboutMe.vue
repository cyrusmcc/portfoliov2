<template>
  <div class="aboutMe">
    <router-link to="/" class="homeButton">Home</router-link>
    <portrait></portrait>
    <div class="skills">
      <span class="skillLabel">Skills</span>
      <div class="skillIcons">
        <div class="beIcons">
          <img src="@/assets/imgs/skills/mysql.svg" alt="mysql icon" />
          <img src="@/assets/imgs/skills/java.svg" alt="java icon" />
          <img src="@/assets/imgs/skills/spring.svg" alt="spring icon" />
        </div>
        <div class="feIcons">
          <img src="@/assets/imgs/skills/sass.svg" alt="sass icon" />
          <img src="@/assets/imgs/skills/js.svg" alt="js icon" />
          <img src="@/assets/imgs/skills/vue.svg" alt="vue icon" />
        </div>
      </div>
    </div>
    <div class="desc">
      <span class="scrollContainer">
        Hello! My name is Cyrus and I am studying Computer Science and Economics
        at the University of New Mexico. I am a creative at heart and software
        development is my creative outlet of choice. Having the ability to turn
        concepts and ideas into well-polished software products is something I
        take pride in and is driven by my passion for building. I am focused on
        web development and my skills range across a full stack. I use
        relational databases alongside the Java and Spring ecosystems to build
        my backends as well as the JS and Vue.js ecosystems for my clients. When
        I am not occupied with school or side projects I like to spend my time
        outdoors hiking and watching sci-fi shows. Iced tea and capybara gifs
        are simple pleasures that make me happy.&lrm;
      </span>
    </div>
  </div>
</template>

<script>
import Portrait from "@/components/Portrait.vue";

export default {
  name: "AboutMe",
  components: { Portrait },
};
</script>

<style scoped lang="scss">
.aboutMe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  align-items: center;
  height: 100%;
  width: 100%;
}
.skills {
  @include flexCenter();
  width: 80%;
  border-bottom: 2px solid $primaryLight;
  padding-bottom: 15px;
  margin-top: 15px;
}
.skillLabel {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.skillIcons {
  display: flex;
  flex-direction: column;
  width: 80%;
  row-gap: 20px;
}
.skillIcons > div {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.skillIcons > .beIcons > img,
.skillIcons > .feIcons > img {
  height: auto;
  width: 2rem;
  align-self: center;
}
.desc {
  max-height: 14rem;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  overflow: hidden;
  direction: rtl;
  box-shadow: $shadowLight;
}
.desc > span {
  padding: 10px;
  overflow-y: scroll;
  height: inherit;
}

@include screen-md() {
  .desc {
    max-height: 18rem;
  }
}
</style>
