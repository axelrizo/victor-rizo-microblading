<template>
  <nav class="menu">
    <div class="menu__close">
      <BaseButton @click="$emit('close')">
        <BaseIcon class="background-black-text-white size-35">
          <IconClose />
        </BaseIcon>
      </BaseButton>
    </div>
    <div class="menu__logo">
      <BaseLogo />
    </div>
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
    <div class="menu__social-media">
      <SocialMediaLink />
      <SocialMediaLink social-media="instagram" />
    </div>
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
.menu {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: var(--background-black);

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__logo {
    margin: 0 auto;
  }

  &__social-media{
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>
