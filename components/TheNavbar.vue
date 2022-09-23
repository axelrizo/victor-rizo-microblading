<template>
  <header class="header">
    <TheMobileNavbar class="header__mobile-nav" />
    <TheDesktopNavbar class="header__desktop-nav" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__mobile-nav {
    @media (min-width: $responsive-lg) {
      display: none;
    }
  }

  &__desktop-nav {
    display: none;

    @media (min-width: $responsive-lg) {
      display: block;
    }
  }
}
</style>
