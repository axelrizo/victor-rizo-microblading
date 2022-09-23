<template>
  <span :is="tag" class="text" v-bind="$attrs" v-on="$listeners">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'span' }
  }
}
</script>

<style lang="scss" scoped>
.text{
  font-family: 'Roboto', sans-serif;

  // color
  &.background-black-text-white{
    color: var(--background-black_text-white)
  }

  // fonts
  &.italiana{
    font-family: 'Italiana', serif;
  }

  // sizes
  &.size-24 {
    font-size: 24px
  }
}
</style>
