<template>
  <div>
    <h1>ギャラリー</h1>
    <a
      v-for="(media, index) in medialist"
      :key="index"
      href="#"
      @click.prevent="showImage(index)"
    >
      <img :src="media.thumb" :alt="index">
    </a>
    <client-only>
      <LightBox
        ref="lightBox"
        :media="medialist"
        v-bind="lightBoxOptions"
      ></LightBox>
    </client-only>
  </div>
</template>

<script>
// require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
  data() {
    return {
      lightBoxOptions: {
        // オプション設定：https://github.com/pexea12/vue-image-lightbox?ref=kabanoki.net#options
        showLightBox: false,
        // showCaption: true,
        // showFooterCount: false,
      },
      medialist: [
        {
          thumb: 'https://picsum.photos/id/237/200/200',
          src: 'https://picsum.photos/id/237/600/200',
          caption: '<b>237</b>',
        },
        {
          thumb: 'https://picsum.photos/id/238/200/200',
          src: 'https://picsum.photos/id/238/600/200',
          caption: '<b>238</b>',
        },
        {
          thumb: 'https://picsum.photos/id/239/200/200',
          src: 'https://picsum.photos/id/239/600/200',
          caption: '<b>239</b>',
        },
      ]
    }
  },
  methods: {
    showImage(index) {
      this.$refs.lightBox.showImage(index);
    }
  }
}
</script>

<style>
</style>
