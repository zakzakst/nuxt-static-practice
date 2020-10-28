<template lang="pug">
div
  p pタグです
  p pタグです#[span.span spanタグです]pタグの続きです

  ul
    li: a aタグ1
    li: a aタグ2
    li: a aタグ3

  #id IDを設定
  .class CLASSを設定

  // これはHTMLに表示されるコメントです
  //- これはHTMLに表示されないコメントです

  ul
    li(
    v-for="i in items",
    :key="i") {{i}}

  button(@click="click") Click Me!
</template>

<script>
export default {
  data() {
    return {
      items: [
        1,
        2,
        3
      ]
    }
  },
  methods: {
    click() {
      console.log('click');
    }
  }
}
</script>

<style>
</style>
