<template>
  <nav class="navbar">
    <BaseButton @click="toggleIsOpen">
      <BaseIcon class="background-black-text-white">
        <IconMenu />
      </BaseIcon>
    </BaseButton>
    <BaseLogo />
    <SocialMediaLink>
      <template #icon>
        <BaseIcon class="background-black-text-white size-24">
          <IconWhatsApp />
        </BaseIcon>
      </template>
    </SocialMediaLink>
    <transition name="navbar-menu">
      <TheMobileNavbarMenu v-show="isOpen" @close="toggleIsOpen" />
    </transition>
  </nav>
</template>

<script>
import IconWhatsApp from './IconWhatsApp.vue'
export default {
  components: { IconWhatsApp },
  data () {
    return {
      isOpen: false
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
  justify-content: space-around;
  padding: 10px 0;
  background-color: var(--background-black);
}

.navbar-menu-enter-active, .navbar-menu-leave-active { transition: opacity .5s; }
.navbar-menu-enter, .navbar-menu-leave-active { opacity: 0; }
</style>
