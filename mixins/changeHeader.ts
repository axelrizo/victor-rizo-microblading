import Vue from 'vue'

const HEADER_BACKGROUND_APPEAR = 5

export default Vue.extend({
  data () {
    const changeHeaderActiveHeader = false
    return {
      changeHeaderActiveHeader
    }
  },

  mounted () {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > HEADER_BACKGROUND_APPEAR ||
        document.documentElement.scrollTop > HEADER_BACKGROUND_APPEAR
      ) {
        this.changeHeaderActiveHeader = true
      } else {
        this.changeHeaderActiveHeader = false
      }
    })
  }
})
