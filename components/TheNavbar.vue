<template>
  <header>
    <TheMobileNavbar class="navbar__mobile" />
    <TheDesktopNavbar class="navbar__desktop" />
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  &__mobile {
    @media (min-width: $responsive-lg) {
      display: none;
    }
  }

  &__desktop {
    display: none;
    @media (min-width: $responsive-lg) {
      display: block;
    }
  }
}
</style>
