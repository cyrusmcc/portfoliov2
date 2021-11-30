<template>
  <Particles id="tsparticles" :options="ParticlesConfig" />
</template>

<script>
var img = new Image();
img.src = '@/assets/imgs/circle.png';

export default {
  name: "ParticleBackground",
  data() {
    return {
      ParticlesConfig: {
        background: {
          color: "#000000",
          opacity: 0,
        },
        detectRetina: true,
        fpsLimit: 30,
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: { enable: true, mode: "repulse" },
            onhover: {
              enable: false,
              mode: "bubble",
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3,
            },
            grab: { distance: 400, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 85,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.4,
            straight: false,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.25,
              speed: 2,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.25,
            },
            value: 1,
          },
          shape: {
            type: "images",
            options: {
              images: [
                {
                  src: require("@/assets/imgs/stars/blueStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/greenStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/orangeStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/pinkStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/purpleStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/redStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/greenSubStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/pinkSubStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/redSubStar.svg"),
                  width: 32,
                  height: 32,
                },
                {
                  src: require("@/assets/imgs/stars/whiteCircle.svg"),
                  width: 16,
                  height: 16,
                },
                {
                  src: require("@/assets/imgs/stars/whiteDonut.svg"),
                  width: 8,
                  height: 8,
                },
              ],
            },
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1.5,
            },
            value: 10,
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
canvas {
  display: block;
  vertical-align: bottom;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black url("../assets/imgs/noisytexture.png") repeat;
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