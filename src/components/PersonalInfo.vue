<template>
  <div class="container">
    <no-bg-anim-border-gradient-card>
      <social-media-links></social-media-links>
    </no-bg-anim-border-gradient-card>
  </div>
</template>

<script>
import SocialMediaLinks from "@/components/SocialMediaLinks.vue";
import NoBgAnimBorderGradientCard from "@/components/NoBgAnimBorderGradientCard.vue";

export default {
  name: "PersonalInfo",
  components: {
    SocialMediaLinks,
    NoBgAnimBorderGradientCard,
  },
};
</script>

<style scoped lang="scss">
.container {
  @include flexCenter();
}
</style>