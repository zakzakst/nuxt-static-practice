<template>
  <div>
    <!-- <p v-for="item in res" :key="item.name">{{ item.name }}</p> -->
    <nuxt-link to="/finish/route/01">01</nuxt-link>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p class="px-12 py-12">One of three columns</p>
        </div>
        <div class="col-sm">
          <p>One of three columns</p>
          <p class="test">あいうえお</p>
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import json from '~/static/data/test.json';

export default {
  // data() {
  //   return {
  //     res: json
  //   }
  // }

  // async asyncData({$axios}) {
  //   const res = await $axios.get('/data/test.json');
  //   return {
  //     res: res.data
  //   };
  // },
  data() {
    return {
      title: 'タイトル上書き'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
</style>
