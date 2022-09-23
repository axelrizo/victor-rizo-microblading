<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  @media (min-width: $responsive-sm) {
    max-width: 516px;
  }
  @media (min-width: $responsive-md) {
    max-width: 668px;
  }
  @media (min-width: $responsive-lg) {
    max-width: 880px;
  }
  @media (min-width: $responsive-xl) {
    max-width: 1150px;
  }
  @media (min-width: $responsive-xxl) {
    max-width: 1350px;
  }
}
</style>
