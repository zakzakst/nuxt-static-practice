<template>
  <div>
    <p @click="changeText('mapActions練習')">{{ text }}</p>
    <p @click="changeCount(10)">{{ count }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    // ...mapGetters({
    //   text: 'mapgetters/text',
    //   count: 'mapgetters/count',
    // }),
    ...mapGetters('mapstore', ['text', 'count']),
  },
  methods: {
    ...mapActions('mapstore', ['changeText', 'changeCount']),
  }
}
</script>

<style>
</style>
