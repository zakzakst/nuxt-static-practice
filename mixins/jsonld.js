export default {
  head() {
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.name,
      },
    }));

    const jsonld = {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };

    return {
      script: [
        {
          hid: 'jsonld',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonld, null, 2),
        },
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
}
