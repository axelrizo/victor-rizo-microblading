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
  &.italiana{
    font-family: 'Italiana', serif;
  }

  &.background-black-color-white{
    color: var(--background-black_text-white)
  }
}
</style>
