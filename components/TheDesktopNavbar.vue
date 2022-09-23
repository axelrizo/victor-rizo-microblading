<template>
  <nav class="navbar">
    <BaseContainer>
      <div class="navbar__header">
        <div />
        <BaseLogo />
        <div class="navbar__social-media">
          <SocialMediaLink />
          <SocialMediaLink social-media="instagram" />
        </div>
      </div>
      <div class="navbar__links">
        <BaseButton
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          tag="nuxt-link"
        >
          <BaseText class="background-black-text-white italiana size-24">
            {{ link.text }}
          </BaseText>
        </BaseButton>
      </div>
    </BaseContainer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { text: 'Inicio', to: '/' },
        { text: 'Galería', to: '/gallery' },
        { text: 'Contacto', to: '/contact' },
        { text: 'Equipo', to: '/team' },
        { text: 'Servicios', to: '/services' },
        { text: 'Cursos', to: '/courses' },
        { text: 'Ubicación', to: '/location' },
        { text: 'Blog', to: '/blog' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  background-color: var(--background-black);
  padding: 25px 0;

  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }

  &__social-media{
    display: flex;
    gap: 20px;
  }

  &__links{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

}
</style>
