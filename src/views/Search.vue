<template>
  <div class="container">
    <List :payloads="searchedDatas" />
  </div>
</template>

<script lang="js">
import List from "@/components/shared/List";
import { fetchSearchedData } from "@/api";
import { SET_SEARCHED } from "@/store/mutation-types";

export default {
  components: { List },
  computed: {
    searchedDatas() {
      return this.$store.state.searchedData;
    }
  },
  created() {
    const query = this.$route.query["query"];

    if (query) {
      fetchSearchedData(query).then(({ data }) => {
        this.$store.commit(SET_SEARCHED, data.items);
      });
    }
  }
};
</script>
