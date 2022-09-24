<template>
  <button :is="tag" v-bind="$attrs" class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'button' }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 5px;
  border: none;
  background-color: var(--transparent);

  &.background-black {
    background-color: var(--background-black);
  }
}
</style>
