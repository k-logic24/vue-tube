<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="js">
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
