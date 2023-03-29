module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      productName: 'Submit your scheme valuation data design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      contentLicence: {
        html: 'An unofficial community project. <a class="govuk-footer__link" href="https://github.com/x-govuk/x-govuk.github.io">GitHub source</a>.'
      },
      copyright: {
        text: '© The Pension Regulator'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ 'app/images': '.' })


  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
