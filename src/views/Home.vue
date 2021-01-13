<template>
  <div class="container">
    <List :payloads="popularDatas" />
  </div>
</template>

<script>
import List from "@/components/shared/List";
import { SET_POPULAR } from "@/store/mutation-types";
import { fetchPopularData } from "@/api";

export default {
  name: "Home",
  components: {
    List
  },
  computed: {
    popularDatas() {
      return this.$store.state.popularData;
    }
  },
  created() {
    fetchPopularData().then(({ data }) => {
      this.$store.commit(SET_POPULAR, data.items);
    });
  }
};
</script>
