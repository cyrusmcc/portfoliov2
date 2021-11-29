<template>
  <div class="parent">
    <portrait></portrait>
    <div class="id">
      <span class="name">Cyrus McCormick</span>
      <span class="role">Fullstack Developer</span>
    </div>
    <div class="socialLinkContainer">
      <a class="link-box link" href="javascript:void(0)" @click="onClickAboutMe">
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/aboutme.svg"
            alt="aboutme-icon"
          />
        </div>
        <p class="linkLabel">about me</p>
      </a>
      <a class="link-box link" href="javascript:void(0)" @click="onClickAboutMe">
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/projects.svg"
            alt="projects-icon"
          />
        </div>
        <p class="linkLabel">projects</p>
      </a>
      <a
        class="link-box link"
        href="https://drive.google.com/file/d/1-l4pgVrcBHjNPl0KcpfQs4SZdYzBWc1C/view"
        target="_blank"
      >
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/resume.svg"
            alt="resume-icon"
          />
        </div>
        <p class="linkLabel">resume</p>
      </a>
      <a
        class="link-box link"
        href="https://github.com/cyrusmcc"
        target="_blank"
      >
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/github.svg"
            alt="github-icon"
          />
        </div>
        <p class="linkLabel">/cyrusmcc</p>
      </a>
      <a
        class="link-box link"
        href="https://www.linkedin.com/in/cyrusmcc/"
        target="_blank"
      >
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/linkedin.svg"
            alt="linkedin-icon"
          />
        </div>
        <p class="linkLabel">/in/cyrusmcc</p>
      </a>
      <a class="link-box link" href="mailto:dev@cyrusmcc.com">
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/email.svg"
            alt="email-icon"
          />
        </div>
        <p class="linkLabel">dev@cyrusmcc.com</p>
      </a>
    </div>
  </div>
</template>

<script>
import Portrait from "@/components/Portrait.vue";

export default {
  name: "SocialMediaLinks",
  components: {
    Portrait
  },
  methods: {
    onClickAboutMe() {
      this.$emit("view", "aboutme");
    },
    onClickProjects() {
      this.$emit("view", "projects");
    },
  }
};
</script>

<style scoped lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: center;
  height: 100%;
}

.id {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 5px;
  font-family: $spacegrotesk;
  font-size: 1.5rem;
  text-shadow: -4px 3px 11px black;
}

.role {
  border-bottom: thin solid $primaryLight;
  padding-bottom: 5px;
}

.socialLinkContainer {
  border: thin solid $primaryLight;
  border-radius: 20px;
  box-shadow: $shadowLight;
}

.link-box {
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0.1rem 0.8em 0.1rem 0.2em;
  height: 2.2em;
  pointer-events: all;
  cursor: pointer;
}

.link-box:not(:last-child) {
  border-bottom: thin solid $primaryLight;
}

.link-box-img-cont {
  @include flexCenter();
  background-color: transparent;
  height: 1.6em;
  width: 1.6em;
  border-radius: 4px;
  margin: 0.2em 0.4em 0.2em 0;
}

.link-box-img {
  justify-content: left;
  height: 1em;
  width: auto;
}

.linkLabel {
  font-size: 1em;
  margin: 0 0.2em 0 0.2em;
  color: $primaryLight;
}
</style>