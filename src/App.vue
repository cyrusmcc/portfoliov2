<template>
  <div class="container">
    <custom-particles></custom-particles>
  </div>
</template>

<script>
import CustomParticles from "@/components/Particles.vue";

export default {
  name: "App",
  components: {
    CustomParticles,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
