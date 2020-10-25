<template>
  <div>
    <h1>json ld トップ</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      jsonld: {
        "@context": "http://schema.org",
        '@type': 'WebSite',
        'name': process.env.SITE_NAME,
        'url': process.env.SITE_DOMAIN + process.env.SITE_PATH + '/',
        'author': {
          '@type': 'Organization',
          'url': process.env.SITE_DOMAIN + process.env.SITE_PATH + '/',
          'logo': '/common/logo.png'
        },
        'sameAs': [
          process.env.TWITTER_URL,
          process.env.FACEBOOK_URL,
          process.env.GOOGLE_PLUS_URL,
        ]
      }
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
