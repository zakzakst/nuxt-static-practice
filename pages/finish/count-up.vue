<template>
  <div>
    <h1>カウントアップ</h1>
    <button @click="countUp">実行</button>
    <!-- <p>{{ countUpNumber }}</p> -->
    <p v-html="countUpNumber"></p>
    <div :style="{width: number + '%', background: '#000', height: '100px'}"></div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      number: 0,
      targetNumber: 100
    }
  },
  methods: {
    countUp() {
      gsap.to(this.$data, {
        duration: 2.5,
        number: this.targetNumber,
        ease: 'power2.in',
      });
    }
  },
  computed: {
    countUpNumber: function() {
      return `<span>${this.number.toFixed(1)}</span>`;
    }
  },
}
</script>

<style>
</style>
