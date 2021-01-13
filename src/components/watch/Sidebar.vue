<template>
  <ul class="sidebar">
    <li v-for="data in relatedDatas" :key="data.id.videoId">
      <router-link
        class="sidebar__imgwrap"
        :to="{ name: 'Watch', query: { v: data.id.videoId } }"
      >
        <figure>
          <img :src="data.snippet.thumbnails.medium.url" alt="" />
        </figure>
      </router-link>
      <div class="sidebar-info">
        <router-link
          class="sidebar__link"
          :to="{ name: 'Watch', query: { v: data.id.videoId } }"
        >
          <h3 class="sidebar-info__title">
            {{ data.snippet.title }}
          </h3>
        </router-link>
        <span class="text-secondary sidebar-info__channel">
          {{ data.snippet.channelTitle }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang="js">
export default {
  props: {
    payloads: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    relatedDatas() {
      return this.payloads.filter(data => data.snippet)
    }
  },
};
</script>
