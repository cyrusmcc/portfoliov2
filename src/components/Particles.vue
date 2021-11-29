<template>
  <Particles id="tsparticles" :options="ParticlesConfig" />
</template>

<script>
import ParticlesConfig from "@/assets/particles.json";

export default {
  name: "ParticleBackground",
  data() {
    return {
      ParticlesConfig,
    };
  },
};
</script>

<style scoped lang="scss">

#tsparticles {
  height: 100%;
  width: 100%;
  position: absolute;
    background: black url("../assets/imgs/noisytexture.png") repeat;

  top: 0;
}

.tsparticles-canvas-el {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>