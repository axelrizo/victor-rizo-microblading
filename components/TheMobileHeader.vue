<template>
  <header
    class="fixed flex items-center justify-center w-full py-2 bg-gradient-to-b from-black to-transparent"
    :class="{ 'bg-black': activeHeader, 'bg-gradient-to-br': !activeHeader }"
  >
    <button class="flex justify-center flex-1" @click="isMenuOpen = true">
      <IconMenu class="text-xl text-gray-100" />
    </button>
    <div class="flex justify-center flex-1">
      <img class="h-7" src="~/assets/images/logo.jpg" alt="">
    </div>
    <div class="flex items-center justify-center flex-1 gap-3">
      <IconInstagram class="text-xl text-gray-100" />
      <IconWhatsapp class="text-xl text-gray-100" />
    </div>
    <TheMobileNav v-if="isMenuOpen" @close="isMenuOpen = false" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

const HEADER_BACKGROUND_APPEAR = 5

export default Vue.extend({
  data () {
    const activeHeader = false
    const isMenuOpen = false
    return {
      activeHeader,
      isMenuOpen
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > HEADER_BACKGROUND_APPEAR ||
        document.documentElement.scrollTop > HEADER_BACKGROUND_APPEAR
      ) {
        this.activeHeader = true
      } else {
        this.activeHeader = false
      }
    })
  }
})
</script>
