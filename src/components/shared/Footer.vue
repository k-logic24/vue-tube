<template>
  <footer class="footer">
    <small class="footer__copyright"
      >&copy;{{ new Date().getFullYear() }} VideoTube</small
    >
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 0.5em 0;
  background: var(--dark-color);

  &__copyright {
    color: white;
  }
}
</style>
