<template>
  <div>
    <h1>ビデオ</h1>
    <button @click="play">再生</button>
    <button @click="pause">停止</button>
    <video ref="player"></video>
    <p v-if="!isReady">動画読込中</p>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

export default {
  data () {
    return {
      player: null,
      isReady: false,
      src: '/video/video.mp4',
      options: {
        width: 640, // 幅
        height: 360, // 高さ
        autoplay: false, // 自動再生
        loop: false, // ループ再生
        controls: true, // コントロール制御表示
        preload: 'auto', // 読み込み制御
        // poster: '../video/thumb.png', // サムネイル表示
      }
    }
  },
  methods: {
    init() {
      this.player = videojs(this.$refs.player, this.options);
      this.player.src({
          type: 'video/mp4',
          src: this.src,
      });
      this.player.ready(() => {
        console.log('準備完了');
        this.isReady = true;
      });
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
