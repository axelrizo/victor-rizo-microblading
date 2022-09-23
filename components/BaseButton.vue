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
.button{
  padding: 5px;
  border: none;

  &.background-transparent{
    background-color: var(--background-transparent);
  }
}
</style>
