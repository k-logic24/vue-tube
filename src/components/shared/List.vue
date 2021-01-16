<template>
  <ul class="card-list">
    <li v-for="data in datas" :key="data.etag">
      <router-link
        class="card-list__link"
        :to="{ name: 'Watch', query: { v: data.id } }"
      >
        <figure class="card-list__imgwrap">
          <img
            class="card__img"
            :src="data.snippet.thumbnails.medium.url"
            alt=""
          />
        </figure>
      </router-link>
      <router-link
        class="card-list__link"
        :to="{ name: 'Watch', query: { v: data.id } }"
      >
        <h2 class="card-list__title">{{ data.snippet.title }}</h2>
      </router-link>
      <span class="text-secondary card-list__channel">
        {{ data.snippet.channelTitle }}
        <br />
        {{
          data.statistics &&
            `${Number(data.statistics.viewCount.toLocaleString())}回再生`
        }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    payloads: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    datas() {
      return this.payloads;
    }
  }
};
</script>
