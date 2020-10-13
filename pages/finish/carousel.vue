<template>
  <div>
    <h1>カルーセル</h1>
    <VueSlickCarousel
      v-bind="slickOptions"
      @init="init"
      @beforeChange="beforeChange"
      @afterChange="afterChange"
    >
      <img
        v-for="picture in pictures"
        :key="picture.id"
        :src="`https://picsum.photos/id/${picture.id}/600/200`"
        :alt="picture.id"
        :style="'{width: 100%}'"
      >
    </VueSlickCarousel>
  </div>
</template>

<script>
// require('vue-slick-carousel/dist/vue-slick-carousel.css')
// require('vue-slick-carousel/dist/vue-slick-carousel-theme.css')

export default {
  data() {
    return {
      slickOptions: {
        // オプション設定：https://github.com/gs-shop/vue-slick-carousel/blob/master/docs/API.md#all-props
        slidesToShow: 3,
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '48px',
        dots: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
      pictures: [
        {id: '237'},
        {id: '238'},
        {id: '239'},
        {id: '240'},
        {id: '241'},
        {id: '242'},
        {id: '243'},
        {id: '244'},
        {id: '247'},
        {id: '248'},
      ]
    }
  },
  // イベント設定：https://github.com/gs-shop/vue-slick-carousel/blob/master/docs/API.md#events
  methods: {
    init() {
      console.log('init');
    },
    beforeChange() {
      console.log('beforeChange');
    },
    afterChange() {
      console.log('afterChange');
    },
  }
}
</script>

<style>
.slick-prev,
.slick-next {
  z-index: 1;
}
.slick-prev {
  left: 24px;
}
.slick-next {
  right: 24px;
}
</style>
