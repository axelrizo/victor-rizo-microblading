<template>
  <nav
    class="fixed z-40 flex items-center justify-center w-full h-10 bg-gradient-to-b from-black to-transparent"
    :class="{ 'bg-black': mixinChangeHeaderActiveHeader, 'bg-gradient-to-br': !mixinChangeHeaderActiveHeader }"
  >
    <button class="flex items-center justify-center flex-1 w-full h-full" @click="isMenuOpen = true">
      <IconMenu class="text-xl text-gray-100" />
    </button>
    <NuxtLink to="/" class="flex items-center justify-center flex-1 h-full">
      <img class="h-7" src="~/assets/images/logo.jpg" alt="">
    </NuxtLink>
    <div class="flex items-center justify-center flex-1 h-full">
      <a href="#" target="_blank" class="px-3"><IconInstagram class="text-xl text-gray-100" /></a>
      <a href="#" target="_blank" class="px-3"><IconWhatsapp class="text-xl text-gray-100" /></a>
    </div>
    <TheMobileNav v-if="isMenuOpen" @close="isMenuOpen = false" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinChangeHeader from '~/mixins/mixinChangeHeader'

export default Vue.extend({
  mixins: [mixinChangeHeader],

  data () {
    const isMenuOpen = false
    return {
      isMenuOpen
    }
  }
})
</script>
