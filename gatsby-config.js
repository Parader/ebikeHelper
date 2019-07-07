let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(`Using environment config: '${activeEnv}'`)

module.exports = {
  siteMetadata: {
    title: 'Ebike Helper',
    description:
      'EbikeHelper is a ressource hub to learn, find and share about ebikes. Electric Bycicles guides, useful links and comments.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'EbikeHelper',
        short_name: 'EH',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        modifyVars: {
          'primary-color': process.env.PRIMARY_COLOR || '#1890ff',
          'link-color': process.env.LINK_COLOR || '#1890ff',
          'success-color': process.env.SUCCESS_COLOR || '#52c41a',
          'warning-color': process.env.WARNING_COLOR || '#faad14',
          'error-color': process.env.ERROR_COLOR || '#f5222d',
          'font-size-base': process.env.FONT_SIZE_BASE || '14px',
          'heading-color': process.env.HEADING_COLOR || 'rgba(0, 0, 0, .85)',
          'text-color': process.env.TEXT_COLOR || 'rgba(0, 0, 0, .65)',
          'text-color-secondary':
            process.env.TEXT_COLOR_SECONDARY || 'rgba(0, 0, 0, .45)',
          'disabled-color': process.env.DISABLED_COLOR || 'rgba(0, 0, 0, .25)',
          'border-radius-base': process.env.BORDER_RADIUS_BASE || '4px',
          'border-color-base': process.env.BORDER_COLOR_BASE || '#d9d9d9',
          'box-shadow-base':
            process.env.BOX_SHADOW_BASE || '0 2px 8px rgba(0, 0, 0, .15)',
        },
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_API_URL || 'exemple.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/gatsby-wp/v1/menus',
          '/wp-api-menus/v2/menus',
          '/wp-api-menus/v2/menus/*',
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
