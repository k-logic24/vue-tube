<template>
  <div style="display: contents;">
    <div class="movie">
      <div class="movie__wrap">
        <youtube class="movie__video" :video-id="selectedDatas.id" />
      </div>
      <h2 class="movie__title">
        {{ selectedDatas.snippet && selectedDatas.snippet.title }}
      </h2>
      <span class="text-secondary fsz-12">
        {{
          selectedDatas.statistics &&
            Number(selectedDatas.statistics.viewCount).toLocaleString()
        }}回再生 ・
        {{
          selectedDatas.snippet &&
            formatDate(new Date(selectedDatas.snippet.publishedAt))
        }}
      </span>
      <hr />
      <span class="text-secondary fsz-12">
        {{ selectedDatas.snippet && selectedDatas.snippet.channelTitle }}
      </span>
      <hr />
      <pre
        v-html="selectedDatas.snippet && selectedDatas.snippet.description"
        v-linkified
      ></pre>
    </div>
    <Sidebar :payloads="relatedDatas" />
  </div>
</template>

<script lang="js">
import format from "date-fns/format";

import Sidebar from "@/components/watch/Sidebar";
import { fetchSelectedData, fetchRelatedData } from "@/api";
import { SET_SELECTED, SET_RELATED } from "@/store/mutation-types";

export default {
  components: {
    Sidebar
  },
  created() {
    this.setSearchResult()
  },
  computed: {
    selectedDatas() {
      return this.$store.state.selectedData;
    },
    relatedDatas() {
      return this.$store.state.relatedData;
    }
  },
  watch: {
    "$route"(to) {
      this.setSearchResult(to.query["v"]);
    }
  },
  methods: {
    formatDate(date) {
      return format(date, "yyyy/MM/dd");
    },
    async setSearchResult() {
      const id = this.$route.query["v"];

      if (id) {
        const [selected, related] = await Promise.all([
          fetchSelectedData(id),
          fetchRelatedData(id)
        ]);
        this.$store.commit(SET_SELECTED, selected.data.items.shift());
        this.$store.commit(SET_RELATED, related.data.items);
      }
    }
  }
};
</script>

<style lang="scss">
.movie {
  flex: 2;
  padding: 1rem 0;

  &__title {
    color: #fff;
    margin: 1em 0 0.1em;
    padding-bottom: 0.2em;
  }

  hr {
    margin: 1em 0;
    border-color: var(--secondary-color);
  }

  pre {
    color: #fff;
    line-height: 1.8rem;
    overflow: auto;
    white-space: pre-wrap;
  }

  a {
    color: #3ea6ff;
  }

  &__wrap {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
  }

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
