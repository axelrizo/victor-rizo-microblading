<template>
  <BaseButton
    tag="a"
    :href="computedData.link"
    target="_blank"
    class="background-transparent"
  >
    <BaseIcon class="background-black-text-white size-35">
      <component :is="computedData.component" />
    </BaseIcon>
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
      const returnedObject = {}

      if (this.socialMedia === 'instagram') {
        returnedObject.component = 'IconInstagram'
        returnedObject.link = 'https://www.instagram.com/'
      }

      if (this.socialMedia === 'whatsApp') {
        returnedObject.component = 'IconWhatsApp'
        returnedObject.link = 'https://www.whatsapp.com/'
      }
      return returnedObject
    }
  }
}
</script>
