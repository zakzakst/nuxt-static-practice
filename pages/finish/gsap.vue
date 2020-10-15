<template>
  <div>
    <h1>スクロール連動</h1>
    <div style="height: 1000px"></div>
      <p class="test">test</p>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  methods: {
    test() {
      gsap.to('.test', {
        scrollTrigger: {
          trigger: '.test',
          start: 'center center',
          markers: true
        },
        x: 500,
      });
    }
  },
  mounted() {
    this.test();
  }
}
</script>

<style>
</style>
