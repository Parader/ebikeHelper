import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header: HeadLayout, Content, Footer } = Layout

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeMenu: [],
    }
  }
  shouldComponentUpdate(props, newProps, state, newState) {
    return true
  }

  handleMenuClick = val => {
    this.setState({ activeMenu: val.keyPath })
  }

  handleLogoClick = () => {
    this.setState({ activeMenu: null })
  }

  renderSubMenu = () => {}

  getPathFromUrl(url) {
    return url.replace(/^.*\/\/[^\/]+/, '')
  }

  render() {
    const { siteTitle, menu } = this.props
    console.log(menu)
    return (
      <HeadLayout className="header">
        <Link to="/" onClick={this.handleLogoClick}>
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.09 337.17">
              <title>logo</title>
              <path
                d="M178,327.75H93.26V406.3h114v23.6H65.14V212H202.36v23.6H93.26v68.86H178Z"
                transform="translate(-65.14 -93.03)"
              />
              <path
                d="M244.12,93V234.1H407.21V93h44V430.2h-44V272.12H244.12V430.2H200.6V93Z"
                transform="translate(-65.14 -93.03)"
              />
            </svg>
          </div>
          <h1>{siteTitle}</h1>
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          selectable
          onClick={this.handleMenuClick}
          selectedKeys={this.state.activeMenu}
        >
          {menu.items.map((item, i) => {
            const path = this.getPathFromUrl(item.url)
            return (
              <Menu.Item key={`main-menu-item-${i}`}>
                <Link
                  to={path}
                  onClick={() => {
                    console.log('link click')
                  }}
                >
                  {item.title}
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </HeadLayout>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menu: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: '',
  menu: { items: [] },
}

export default Header
