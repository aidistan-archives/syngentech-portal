const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n').loader('@kazupon/vue-i18n-loader').end()
      .use('yaml').loader('yaml-loader').end()
  },

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/', '/biopharma', '/research-service',
          '/about-us', '/management-team', '/our-investors', '/contact-us'
        ]
      })
    ]
  }
}
