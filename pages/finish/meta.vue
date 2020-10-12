<template>
  <div>
    <h1>メタデータ変更</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'ページ用タイトル'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ページ用ディスクリプション'
        }
      ]
    }
  }
}
</script>

<style>
</style>
