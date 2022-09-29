import Vue from 'vue'

export default Vue.extend({
  data () {
    const mixinLinksLinks = [
      { text: 'Inicio', to: '/' },
      { text: 'Galería', to: '/gallery' },
      { text: 'Contacto', to: '/contact' },
      { text: 'Equipo', to: '/team' },
      { text: 'Servicios', to: '/services' },
      { text: 'Cursos', to: '/courses' },
      { text: 'Ubicación', to: '/location' },
      { text: 'Blog', to: '/blog' }
    ]
    return {
      mixinLinksLinks
    }
  }
})
