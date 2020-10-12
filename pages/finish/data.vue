<template>
  <div>
    <h1>外部データ読み込み</h1>
    <p v-for="item in items" :key="item.name">{{ item.name }}</p>
  </div>
</template>

<script>
import data from '~/static/data/data.json';

export default {
  data() {
    return {
      items: data
    }
  }
  // ■ 外部APIを利用する場合
  // async asyncData({$axios}) {
  //   const res = await $axios.get('https://data.com//path/to/data.json');
  //   return {
  //     items: res.data
  //   };
  // },
}
</script>

<style>
</style>
