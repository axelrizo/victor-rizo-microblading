<template>
  <div class="icon">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  // color
  &.background-black-text-white {
    color: var(--background-black_text-white);
  }

  // size
  &.size-35 {
    font-size: 35px;
  }

  &.size-24 {
    font-size: 24px;
  }
}
</style>
