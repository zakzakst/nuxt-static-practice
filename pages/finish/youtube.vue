<template>
  <div>
    <youtube
      v-if="show"
      :video-id="videoId"
      :player-vars="playerVars"
      :width="width"
      :height="height"
      @playing="playing"
      @ended="ended"
    />
    <!-- <iframe ref="test" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1`" frameborder="0" allowfullscreen></iframe>
    <button @click="test">test</button> -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      // 参考：https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5#Parameters
      playerVars: {
        // autoplay: 1,
        // controls: 0,
        // loop: 1,
        // start: 10,
        // end: 15,
        enablejsapi: 1,
        origin: 'http://localhost:3000',
      },
      width: 400,
      height: 200,
      show: false,
    }
  },
  methods: {
    // 参考：https://www.npmjs.com/package/vue-youtube#events
    playing() {
      console.log('開始');
    },
    ended() {
      console.log('終了');
    },
    test() {
      // 参考：https://qiita.com/konweb/items/ab414d75ecddfb0cf4e9
      // console.log('test');
      this.$refs.test.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  },
  created() {
    // console.log('ページ')
    setTimeout(() => {
      this.show = true;
    }, 5000);
  }
}
</script>

<style>
</style>
