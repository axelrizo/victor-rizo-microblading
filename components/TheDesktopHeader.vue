<template>
  <nav
    class="fixed z-40 flex items-center justify-center w-full py-2 bg-gradient-to-b from-black to-transparent hover:bg-black"
    :class="{ 'bg-black': mixinChangeHeaderActiveHeader, 'bg-gradient-to-br': !mixinChangeHeaderActiveHeader }"
  >
    <nav class="flex py-2" :class="{ 'hidden': mixinChangeHeaderActiveHeader}">
      <div class="flex-1" />
      <div class="flex justify-center flex-1">
        <img class="h-7" src="~/assets/images/logo.jpg" alt="">
      </div>
      <div class="flex items-center justify-center flex-1 gap-3">
        <IconInstagram class="text-xl text-gray-100" />
        <IconWhatsapp class="text-xl text-gray-100" />
      </div>
    </nav>
    <nav class="flex justify-center">
      <NuxtLink
        v-for="({ text, to }, index) in mixinLinksLinks"
        :key="index"
        :to="to"
        class="p-2 text-lg tracking-tight text-gray-100"
      >
        {{ text.toUpperCase() }}
      </NuxtLink>
      <div class="flex items-center justify-center gap-3 px-2" :class="{ 'hidden': !mixinChangeHeaderActiveHeader}">
        <IconInstagram class="text-xl text-gray-100" />
        <IconWhatsapp class="text-xl text-gray-100" />
      </div>
    </nav>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinLinks from '@/mixins/mixinLinks'
import mixinChangeHeader from '@/mixins/mixinChangeHeader'

export default Vue.extend({
  mixins: [mixinLinks, mixinChangeHeader]
})
</script>
