<template>
  <div>
    <h1>ページ内スクロール</h1>
    <!-- v-scroll-toの値はデータ参照のため、直接指定する場合は「'」でくくって文字列にする必要がある -->
    <nuxt-link v-scroll-to="'#section1'" to="">01</nuxt-link>
    <nuxt-link v-scroll-to="'#section2'" to="">02</nuxt-link>
    <nuxt-link v-scroll-to="'#section3'" to="">03</nuxt-link>
    <nuxt-link v-scroll-to="'#section4'" to="">04</nuxt-link>
    <nuxt-link v-scroll-to="'#section5'" to="">05</nuxt-link>
    <div style="height: 1000px"></div>
    <div id="section1" style="height: 1000px">01</div>
    <div id="section2" style="height: 1000px">02</div>
    <div id="section3" style="height: 1000px">03</div>
    <div id="section4" style="height: 1000px">04</div>
    <div id="section5" style="height: 1000px">05</div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
