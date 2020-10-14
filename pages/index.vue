<template>
  <div>
    <h1>SVGアニメーション</h1>
    <button @click="change">透明度変更</button>
    <svg ref="svg" viewBox="0 0 300 270" preserveAspectRatio="xMidYMid slice">
      <path class="service-img__path" id="service-img__path-01" d="M79.289,79.289c39.027,-39.026 102.395,-39.026 141.422,0c39.026,39.027 39.026,102.395 0,141.422c-39.027,39.026 -102.395,39.026 -141.422,0c-39.026,-39.027 -39.026,-102.395 0,-141.422Z" />
      <g class="service-img__icon">
        <rect height="72.5" width="19.1" x="121.7" y="122.1" />
        <path d="M 178.8 133.5 c -1 1.4 -1.6 3 -1.6 4.7 c 0 2.1 0.8 4.1 2.3 5.6 c 1.5 1.5 3.5 2.3 5.6 2.3 c 2.1 0 4.1 -0.8 5.6 -2.3 c 2.8 -2.8 3.1 -7.2 0.7 -10.3 l -12.6 0 Z" />
        <path d="M 175.1 163.3 l 0 31.3 l 19.1 0 l 0 -31 c -2.9 1 -6 1.6 -9.1 1.6 c -3.5 0 -6.9 -0.7 -10 -1.9 Z" />
        <path d="M 158.2 138.3 c 0 -7.2 2.8 -14 7.9 -19 c 0.5 -0.5 0.9 -0.9 1.4 -1.3 l 0 -22.5 l -19.1 0 l 0 99.3 l 19.1 0 l 0 -36 c -0.5 -0.4 -1 -0.8 -1.4 -1.3 c -5.1 -5.1 -7.9 -11.9 -7.9 -19.1 Z" />
        <rect height="38.2" width="19.1" x="95" y="156.4" />
        <path d="M 213.3 159.8 l -10.3 -10 c 2.2 -3.4 3.4 -7.4 3.4 -11.5 c 0 -5.7 -2.2 -11 -6.2 -15 c -4 -4 -9.3 -6.2 -15 -6.2 c -5.7 0 -11 2.2 -15 6.2 c -4 4 -6.2 9.3 -6.2 15 c 0 5.7 2.2 11 6.2 15 c 4 4 9.3 6.2 15 6.2 c 4.1 0 8.1 -1.2 11.5 -3.4 l 10 10.3 c 1.9 2.3 4.6 2.4 6.8 0.3 c 2.1 -2.1 2.1 -5 -0.2 -6.8 Z m -28.1 -10.1 c -3 0 -5.9 -1.2 -8.1 -3.3 c -2.1 -2.1 -3.3 -5 -3.3 -8 c 0 -3 1.2 -5.9 3.3 -8 c 2.2 -2.1 5 -3.3 8.1 -3.3 c 3 0 5.9 1.2 8 3.3 c 4.4 4.4 4.4 11.7 0 16.1 c -2.1 2.1 -5 3.3 -8 3.3 Z" />
      </g>
      <text>
        <textPath class="service-img__heading" href="#service-img__path-01">HEADING 01</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svg: ''
    }
  },
  methods: {
    change() {
      this.svg.animate({
        fillOpacity: 0,
      }, 1000, mina.easeout);
    }
  },
  mounted() {
    if (process.client) {
      this.svg = Snap(this.$refs.svg);
    }
  }
}
</script>

<style>
</style>
