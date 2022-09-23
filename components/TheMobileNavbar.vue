<template>
  <nav class="navbar">
    <BaseButton @click="toggleIsOpen">
      <BaseIcon><IconMenu /></BaseIcon>
    </BaseButton>
    <BaseLogo />
    <BaseButton>
      <BaseIcon><IconWhatsApp /></BaseIcon>
    </BaseButton>
    <TheNavbarMenu v-show="isOpen" @close="toggleIsOpen" />
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },

  methods: {
    toggleIsOpen () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
