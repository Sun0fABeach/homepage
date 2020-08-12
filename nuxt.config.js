module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'minireset.css',
    '@/assets/css/fonts.scss',
    '@/assets/css/icons.scss',
    '@/assets/css/base.scss',
    '@/assets/css/layout.scss',
    '@/assets/css/animations.scss',
    '@/assets/css/transitions.scss',
  ],
  /*
   ** Style recources module configuration
   ** See https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    scss: ['@/assets/css/variables.scss', '@/assets/css/mixins.scss'],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/amplitude', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:8].[ext]',
        },
      })
    },
    transpile: [({ isServer }) => isServer && 'lodash-es'],
  },
}
