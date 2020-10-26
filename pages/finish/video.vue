<template>
  <div>
    <h1>ビデオ</h1>
    <button @click="play">再生</button>
    <button @click="pause">停止</button>
    <video
      ref="player"
      :preload="options.preload"
      :muted="options.muted"
      :controls="options.controls"
      @loadeddata="init"
    >
      <source :src="src" type="video/mp4">
      <p>video要素がサポートされていないブラウザでご覧になっています。</p>
    </video>
    <p v-if="!isReady">動画読込中</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player: null,
      isReady: false,
      src: '/video/video.mp4',
      options: {
        // preload: 'none',
        preload: 'auto',
        muted: true,
        controls: true,
        poster: '',
      }
    }
  },
  methods: {
    init() {
      this.player = this.$refs.player;
      this.isReady = true;
    },
    play() {
      console.log('play');
      this.player.play();
    },
    pause() {
      console.log('pause');
      this.player.pause();
    },
  },
  mounted() {
    this.init();
  }
}
</script>

<style>
</style>
