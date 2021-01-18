<template>
  <header class="header">
    <div class="header__wrap">
      <router-link class="header__link" to="/">
        vue-tube
      </router-link>
    </div>
    <div class="header__wrap">
      <Search />
    </div>
  </header>
</template>

<script lang="js">
import Search from "@/components/shared/Search";

export default {
  components: {
    Search
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  height: 56px;
  width: 100%;
  background-color: var(--dark-color);
  z-index: 10;

  &__link {
    color: #fff;
    font-size: 1.2rem;
    line-height: 56px;
    padding-left: 1rem;
    text-decoration: none;
  }

  &__wrap {
    &:first-child {
      flex-grow: 1;
    }

    &:last-child {
      flex-grow: 2;
    }
  }
}
</style>
