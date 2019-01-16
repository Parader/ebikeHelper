import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const times = x => f => {
  if (x > 0) {
    f()
    times(x - 1)(f)
  }
}

class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.content = React.createRef()
  }

  componentDidMount() {
    this.replaceLinks()
    this.replaceImages()
  }

  replaceLinks() {
    const links = this.content.current.getElementsByTagName('a')
    if (links.length > 0) {
      let elm, link, parent
      times(links.length)(() => {
        link = links[0]
        parent = link.parentElement
        elm = document.createElement('span')
        link.parentElement.insertBefore(elm, link)
        parent.removeChild(link)
        if (!link.attributes.target) {
          this.renderLink(elm, link.attributes.href.value, link.text)
        }
      })
    }
  }

  replaceImages() {
    const { images } = this.props.data.wordpressPage.acf
    const imgs = this.content.current.getElementsByTagName('figure')

    if (imgs.length > 0) {
      times(imgs.length)(() => {
        const img = imgs[0]
        const imgUrl = img.attributes[0].value
        const imgName = imgUrl.substring(
          imgUrl.lastIndexOf('/') + 1,
          imgUrl.lastIndexOf('-')
        )
        const file = images.filter(i => i.localFile.name == imgName)[0]
        const fluidImage = file.localFile.childImageSharp.fluid

        const elm = document.createElement('span')

        img.parentElement.insertBefore(elm, img)
        img.remove()

        this.renderImage(elm, fluidImage)
      })
    }
  }

  renderLink(elm, href, text) {
    ReactDOM.render(<Link to={href}>{text}</Link>, elm)
  }

  renderImage(elm, image, alt = '') {
    ReactDOM.render(<Img fluid={image} alt={alt} />, elm)
  }

  swapFigures() {
    const currentPage = this.props.data.wordpressPage

    const regex = /<figure[^>]*><img[^>]*src="([^"]*)".*?<\/figure>/g
    const figures = currentPage.content.replace(
      regex,
      '<figure data-src="$1"></figure>'
    ) //regex.exec(currentPage.content)
    // console.log(figures)
    return figures
  }

  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage

    const hasCover = this.props.data.wordpressPage.acf.banner
    const hasCoverContent = this.props.data.wordpressPage.acf.bannerContent
    //console.log(this.props)

    const content = this.swapFigures()

    return (
      <Layout>
        <div className={`page ${currentPage.slug}`}>
          {hasCover && (
            <div className="page-cover">
              <Img
                fluid={
                  this.props.data.wordpressPage.acf.cover.localFile
                    .childImageSharp.fluid
                }
              />
              <div className="content">
                {hasCoverContent && (
                  <div
                    className="content"
                    dangerouslySetInnerHTML={
                      this.props.data.wordpressPage.acf.bannerContent
                    }
                  />
                )}
              </div>
            </div>
          )}
          <div className="page-content">
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div
              ref={this.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      slug
      acf {
        images {
          localFile {
            name
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
