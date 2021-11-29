<template>
  <div class="container">
    <div class="portraitContainer">
      <img
        class="portrait"
        src="@/assets/imgs/portrait.jpg"
        alt="Portrait of me"
      />
    </div>
    <div class="socialLinkContainer">
      <a class="link-box link" href="">
        <div class="link-box-img-cont">
          <img
            class="link-box-img"
            src="@/assets/imgs/aboutme.svg"
            alt="aboutme-icon"
          />
        </div>
        <p class="linkLabel">about me</p>
      </a>
      <a class="link-box link" href="">
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
export default {};
</script>

<style scoped lang="scss">
.portraitContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  border-radius: 50%;
  height: 7.5rem;
  width: 7.5rem;
  overflow: hidden;
  box-shadow: -1px 1px 18px -2px rgba(15, 15, 15, 0.08);
}
.portrait {
  width: 74px;
  height: 74px;
  object-fit: cover;
  float: left;
}

.link-box {
  display: flex;
  align-items: center;
  background-color: transparent;
  align-items: center;
  padding: 0 0.8em 0 0.2em;
  margin: 0 0.2em 0 0.2em;
  border-radius: 4px;
  height: 2.2em;
}

.link-box-img-cont {
  background-color: transparent;
  height: 1.6em;
  width: 1.6em;
  border-radius: 4px;
  margin: 0.2em 0.4em 0.2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-box-img {
  justify-content: left;
  height: 1em;
  width: auto;
}

.linkLabel {
  font-size: 0.8em;
  margin: 0 0.2em 0 0.2em;
  color: $primaryLight;
}
</style>