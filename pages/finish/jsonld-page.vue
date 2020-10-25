<template>
  <div>
    <h1>json ld ページ</h1>
  </div>
</template>

<script>

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
  computed: {
    jsonld() {
      const items = this.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.name,
        },
      }));
      return  {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      };
    }
  },
  head() {
    return {
      script: [
        {
          hid: 'jsonld',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld, null, 2),
        },
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
}
</script>

<style>
</style>
