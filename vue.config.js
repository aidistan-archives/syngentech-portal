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

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // HOW to update the routes here?
        // 1. run the app in a browser with Vue.js devtools installed
        // 2. select the root vue component and run following in the console:
        //   console.log(JSON.stringify($vm.$router.options.routes.map(r => r.path)))
        // 3. copy the output here and remove unneeded ones like '/' and '/blank'
        routes: [
          '/overview', '/our-team', '/our-investors', '/our-awards', '/contact-us',
          '/news', '/synbio', '/science', '/pipeline', '/clinical'
        ]
      }))
    }
  },

  devServer: {
    // Open the default browser after server had been started
    open: true
  }
}
