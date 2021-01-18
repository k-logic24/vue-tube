<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <input type="text" placeholder="検索" name="keyword" v-model="search" />
    <button type="submit">
      <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
    </button>
  </form>
</template>

<script>
import { fetchSearchedData } from "@/api";
import { SET_SEARCHED } from "@/store/mutation-types";

export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    handleSubmit() {
      if (this.search === this.$route.query || this.search === "") return;
      fetchSearchedData(this.search).then(({ data }) => {
        this.$store.commit(SET_SEARCHED, data.items);
        this.$router.push(`/search?query=${this.search}`);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  width: 50%;
  height: 32px;
  display: flex;
  margin: 12px 0;

  @media screen and (max-width: 960px) {
    width: 420px;
    margin: 1rem 2.5%;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
    margin: 1rem auto;
  }

  input {
    width: 80%;
    text-indent: 0.5rem;
    border: #121212;
    background-color: #fff;
    color: #121212;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    width: 20%;
    background-color: #303030;
    color: #fff;
    border-color: #303030;
  }
}
</style>
