<template>
  <ul class="sidebar">
    <li v-for="data in this.payloads" :key="data.id.videoId">
      <router-link
        class="sidebar__imgwrap"
        :to="{ name: 'Watch', query: { v: data.id.videoId } }"
      >
        <figure>
          <img
            :src="
              data.snippet
                ? data.snippet.thumbnails.medium.url
                : 'http://placehold.jp/640x480.png?text=noImage'
            "
            alt=""
          />
        </figure>
      </router-link>
      <div class="sidebar-info">
        <router-link
          class="sidebar__link"
          :to="{ name: 'Watch', query: { v: data.id.videoId } }"
        >
          <h3 class="sidebar-info__title">
            {{ data.snippet && data.snippet.title }}
          </h3>
        </router-link>
        <span class="text-secondary sidebar-info__channel">
          {{ data.snippet && data.snippet.channelTitle }}
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
  methods: {
    handleClickLink(id) {
      this.$router.push(`/watch?v=${id}`)
    }
  }
};
</script>
