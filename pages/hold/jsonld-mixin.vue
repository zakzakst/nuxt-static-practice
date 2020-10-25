<template>
  <div>
    <h1>json ld Mixins</h1>
  </div>
</template>

<script>
import jsonldMixin from '@/mixins/jsonld'
export default {
  data () {
    return {
      breadcrumbs: [
        {
          url: process.env.SITE_DOMAIN + process.env.SITE_PATH + '/',
          name: process.env.SITE_NAME,
        },
        {
          url: 'https://example.com/finish/',
          name: '完了ページ',
        },
        {
          url: 'https://example.com/finish/jsonld-page/',
          name: 'json ld ページ',
        },
      ],
    }
  },
  mixins: [
    jsonldMixin,
  ],
  head() {
    return {
      title: 'ページタイトル',
      meta: [
        { hid: 'description', name: 'description', content: 'ページディスクリプション' },
        { hid: 'keywords', name: 'keywords', content: 'ページキーワード' }
      ]
    }
  }
}
</script>

<style>
</style>
