<template>
  <div class="container">
    <card>
      <social-media-links @view="updateView" v-if="view == 'default'"></social-media-links>
      <about-me @view="updateView" v-if="view == 'aboutme'"></about-me>
    </card>
  </div>
</template>

<script>
import SocialMediaLinks from "@/components/SocialMediaLinks.vue";
import Card from "@/components/Card.vue";
import AboutMe from '@/components/AboutMe.vue';

export default {
  name: "PersonalInfo",
  components: {
    SocialMediaLinks,
    Card,
    AboutMe,
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