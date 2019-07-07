import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layout as AntLayout } from 'antd'

import Header from './header'

import 'antd/dist/antd.less'
import '../styles/libs/wp.scss'
import '../styles/styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              id
              wordpress_id
              name
              slug
              count
              items {
                wordpress_id
                order
                wordpress_parent
                title
                url
                attr
                target
                classes
                xfn
                description
                object_id
                object
                object_slug
                type
                type_label
              }
            }
          }
        }
      }
    `}
    render={data => {
      const mainMenu =
        data.allWordpressWpApiMenusMenusItems.edges.length > 0
          ? data.allWordpressWpApiMenusMenusItems.edges.filter(m => {
              return m.node.slug == 'main'
            })[0].node
          : null
      return (
        <AntLayout className="layout">
          <Header siteTitle={data.site.siteMetadata.title} menu={mainMenu} />
          <div className="page-wrapper">{children}</div>
        </AntLayout>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
