<template>
  <div>
    <h1>Google Analytics</h1>
    <button @click="gaEvent">GAイベント</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    gaEvent() {
      // https://google-analytics.nuxtjs.org/usage/event-tracking
      this.$ga.event('category', 'action', 'label', 123);
    }
  }
}
</script>

<style>
</style>
