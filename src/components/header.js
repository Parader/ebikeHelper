import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <div className="header z-depth-1">
    <Link to="/">
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
