<template>
  <button :is="tag" v-bind="$attrs" class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    }
  }
}
</script>
