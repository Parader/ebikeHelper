import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          diy: file(relativePath: { eq: "diy-bike.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.diy.childImageSharp.fluid} />}
    />
  )
}
export default Image
