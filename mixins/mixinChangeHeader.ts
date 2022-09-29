import Vue from 'vue'

const HEADER_BACKGROUND_APPEAR = 5

export default Vue.extend({
  data () {
    const mixinChangeHeaderActiveHeader = false
    return {
      mixinChangeHeaderActiveHeader
    }
  },

  mounted () {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > HEADER_BACKGROUND_APPEAR ||
        document.documentElement.scrollTop > HEADER_BACKGROUND_APPEAR
      ) {
        this.mixinChangeHeaderActiveHeader = true
      } else {
        this.mixinChangeHeaderActiveHeader = false
      }
    })
  }
})
