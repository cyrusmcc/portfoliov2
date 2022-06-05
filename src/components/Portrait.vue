<template>
  <div class="portraitWrapper">
    <img class="blob" src="@/assets/imgs/blob.svg" alt="blob accent" />
    <img class="portrait" src="@/assets/imgs/portrait.jpg" alt="Portrait of me" />
  </div>
</template>

<script>
export default {
  name: "Portrait",
};
</script>

<style scoped lang="scss">
.portraitWrapper {
  position: relative;
  @include flexCenter();
}

.blob {
  position: absolute;
  z-index: 2;
  width: 144%;
  height: auto;
  opacity: 0.9;
  transform: rotate(321deg);
  filter: brightness(1.2);
}

.portrait {
  position: relative;
  z-index: 2;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
  box-shadow: $shadow;
}
</style>
