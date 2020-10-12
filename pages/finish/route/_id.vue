<template>
  <div>
    <h1>動的ルート書き出し</h1>
    <!-- HTML表示 -->
    <p>ID：{{ $route.params.id }}</p>
    <!-- リンク利用 -->
    <nuxt-link
      v-for="param in params"
      :key="param"
      :to="`/finish/route/${param}`"
      class="pr-4"
    >{{ param }}</nuxt-link>
    <!-- スクリプト利用 -->
    <button @click="showId">ID表示</button>
  </div>
</template>

<script>
import routeParams from '~/static/data/route-params.json';

export default {
  data() {
    return {
      params: routeParams
    }
  },
  methods: {
    showId() {
      alert(`${this.$route.params.id}`);
    }
  }
}
</script>

<style>
</style>
