<template>
  <div class="parent">
    <portrait></portrait>
    <div class="id">
      <span class="name">Cyrus McCormick</span>
      <span class="role">Fullstack Developer</span>
    </div>
    <div class="socialLinkContainer">
      <router-link to="/aboutme" class="link-box link">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/aboutme.svg" alt="aboutme-icon" />
        </div>
        <p class="linkLabel">about me</p>
      </router-link>
      <router-link to="projects" class="link-box link">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/projects.svg" alt="projects-icon" />
        </div>
        <p class="linkLabel">projects</p>
      </router-link>
      <a class="link-box link" rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1-l4pgVrcBHjNPl0KcpfQs4SZdYzBWc1C/view" target="_blank">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/resume.svg" alt="resume-icon" />
        </div>
        <p class="linkLabel">resume</p>
      </a>
      <a class="link-box link" rel="noopener noreferrer" href="https://github.com/cyrusmcc" target="_blank">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/github.svg" alt="github-icon" />
        </div>
        <p class="linkLabel">/cyrusmcc</p>
      </a>
      <a class="link-box link" rel="noopener noreferrer" href="https://www.linkedin.com/in/cyrusmcc/" target="_blank">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/linkedin.svg" alt="linkedin-icon" />
        </div>
        <p class="linkLabel">/in/cyrusmcc</p>
      </a>
      <a class="link-box link" href="mailto:dev@cyrusmcc.com">
        <div class="link-box-img-cont">
          <img class="link-box-img" src="@/assets/imgs/email.svg" alt="email-icon" />
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
    Portrait,
  },
};
</script>

<style scoped lang="scss">
.parent {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  row-gap: 20px;
}

.id {
  display: flex;
  flex-direction: column;
  font-family: $spacegrotesk;
  font-size: 1.5rem;
  row-gap: 5px;
  text-align: center;
  text-shadow: -4px 3px 11px black;
}

.role {
  border-bottom: thin solid $primaryLight;
  padding-bottom: 5px;
}

.socialLinkContainer {
  border-radius: 20px;
  border: thin solid $primaryLight;
  box-shadow: $shadowLight;
}

.link-box {
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  height: 2.2em;
  padding: 0.1rem 0.8em 0.1rem 0.2em;
  pointer-events: all;
  width: 13rem;
}

.link-box:not(:last-child) {
  border-bottom: thin solid $primaryLight;
}

.link-box-img-cont {
  @include flexCenter();
  background-color: transparent;
  border-radius: 4px;
  height: 1.6em;
  margin: 0.2em 0.4em 0.2em 0;
  width: 1.6em;
}

.link-box-img {
  height: 1em;
  justify-content: left;
  width: 1em;
}

.linkLabel {
  color: $primaryLight;
  font-size: 1em;
  margin: 0 0.2em 0 0.2em;
}
</style>
