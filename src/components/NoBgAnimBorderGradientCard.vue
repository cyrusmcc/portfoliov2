<template>
  <div class="cardWrapper">
    <div class="card">
      <slot class="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoBgAnimBorderGradientCard",
};
</script>

<style scoped lang="scss">
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.cardWrapper {
  position: relative;
  height: 90%;
  width: 90%;
  border-radius: 4px;
  overflow: hidden;
}

.card {
  background: rgba(18, 17, 19, 0.9);
  color: #f4f4f3;
  position: relative;
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 RGB(0 0 0/20%), 0 6px 20px 0 RGB(0 0 0/19%);
  border: 5px solid;
  box-sizing: border-box;
  border-image: conic-gradient(
      from var(--angle),
      #e7b614,
      #ea7519,
      #d10e32,
      #88289f,
      #28b0bd,
      #ef7891,
      #83b341,
      #e7b614
    )
    1 / 5px;
  animation: 10s rotate linear infinite;
}
</style>