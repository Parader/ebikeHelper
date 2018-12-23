import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom'

import Layout from '../components/layout'

class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.content = React.createRef()
  }

  componentDidMount() {
    this.replaceLinks()
  }

  replaceLinks() {
    const links = this.content.current.getElementsByTagName('a')

    if (links.length > 0) {
      for (let i = 0; i < links.length; i++) {
        const elm = document.createElement('span')
        let link = links[i]
        link.parentElement.insertBefore(elm, link)
        link.remove()
        console.log()
        if (!link.attributes.target) {
          this.renderLink(elm, link.attributes.href.value, link.text)
        }
      }
    }
  }

  renderLink(elm, href, text) {
    ReactDOM.render(<Link to={href}>{text}</Link>, elm)
  }

  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPost

    return (
      <Layout>
        <div className={`page ${currentPage.slug}`}>
          <div className="page-content post">
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div
              ref={this.content}
              dangerouslySetInnerHTML={{ __html: currentPage.content }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      slug
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
