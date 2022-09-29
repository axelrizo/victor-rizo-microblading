<template>
  <nav
    class="fixed top-0 left-0 flex flex-col items-center w-full h-screen py-12 bg-black justify-evenly "
  >
    <button class="absolute p-2 top-4 right-4" @click="$emit('close')">
      <IconClose class="text-xl text-gray-100" />
    </button>
    <img class="h-16 pb-4" src="~/assets/images/logo.jpg" alt="">
    <NuxtLink
      v-for="({ text, to }, index) in mixinLinksLinks"
      :key="index"
      :to="to"
      class="py-2 text-xl tracking-wider text-gray-100"
    >
      {{ text.toUpperCase() }}
    </NuxtLink>
    <div class="flex items-center justify-center gap-3 pt-4">
      <IconInstagram class="text-4xl text-gray-100" />
      <IconWhatsapp class="text-4xl text-gray-100" />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinLinks from '~/mixins/mixinLinks'

export default Vue.extend({
  mixins: [mixinLinks]
})
</script>
