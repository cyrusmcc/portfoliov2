<template>
  <div class="container">
    <custom-particles></custom-particles>
    <card> <router-view /> </card>
  </div>
</template>

<script>
import CustomParticles from "@/components/Particles.vue";
import Card from "@/components/Card.vue";

export default {
  name: "App",
  components: {
    CustomParticles,
    Card,
  },
};
</script>

<style lang="scss">
.container {
  @include flexCenter();
}

#app {
  height: 100%;
  overflow-y: scroll;
}
</style>
