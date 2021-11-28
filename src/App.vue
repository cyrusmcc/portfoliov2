<template>
  <div class="container">
    <custom-particles></custom-particles>
    <personal-info></personal-info>
  </div>
</template>

<script>
import CustomParticles from "@/components/Particles.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";

export default {
  name: "App",
  components: {
    CustomParticles,
    PersonalInfo
  },
};
</script>

<style lang="scss">
#app { 
  height: 100%;
  overflow-y: scroll;
}
</style>
