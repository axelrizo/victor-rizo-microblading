<template>
  <nav class="menu">
    <div class="menu__close">
      <BaseButton @click="$emit('close')">
        <BaseIcon><IconClose /></BaseIcon>
      </BaseButton>
    </div>
    <BaseButton href="#">
      Inicio
    </BaseButton>
    <BaseButton href="#">
      Galería
    </BaseButton>
    <BaseButton href="#">
      Contacto
    </BaseButton>
    <BaseButton href="#">
      Equipo
    </BaseButton>
    <BaseButton href="#">
      Servicios
    </BaseButton>
    <BaseButton href="#">
      Cursos
    </BaseButton>
    <BaseButton href="#">
      Ubicación
    </BaseButton>
    <BaseButton href="#">
      Blog
    </BaseButton>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px;

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
