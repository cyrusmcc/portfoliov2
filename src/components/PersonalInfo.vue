<template>
  <div class="container">
    <card>
      <social-media-links @view="updateView" v-if="view == 'default'"></social-media-links>
      <about-me @view="updateView" v-if="view == 'aboutme'"></about-me>
      <projects @view="updateView" v-if="view == 'projects'"></projects>
    </card>
  </div>
</template>

<script>
import SocialMediaLinks from "@/components/SocialMediaLinks.vue";
import Card from "@/components/Card.vue";
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: "PersonalInfo",
  components: {
    SocialMediaLinks,
    Card,
    AboutMe,
    Projects,
  },
  data() {
    return {
      view: "default",
    }
  },
  methods: {
    updateView(view) {
      this.view = view;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  @include flexCenter();
}
</style>