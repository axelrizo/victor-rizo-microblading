<template>
  <BaseButton
    tag="a"
    :href="computedData.link"
    target="_blank"
    class="background-transparent"
  >
    <slot name="icon">
      <BaseIcon class="background-black-text-white size-35">
        <component :is="computedData.component" />
      </BaseIcon>
    </slot>
  </BaseButton>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: String,
      default: 'whatsApp',
      validator: value => ['whatsApp', 'instagram'].includes(value)
    }
  },

  computed: {
    computedData () {
      const returnedObject = {
        component: 'IconWhatsApp',
        link: 'https://www.whatsapp.com/'
      }

      if (this.socialMedia === 'instagram') {
        returnedObject.component = 'IconInstagram'
        returnedObject.link = 'https://www.instagram.com/'
      }

      return returnedObject
    }
  }
}
</script>
