import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['ebike', 'learn', 'ressource', 'list', 'electric bike']}
    />
    <div className="page home">
      <div className="page-content">
        <div className="content">
          <h1>Ressources for ebike</h1>
        </div>
        <div className="lists">
          <div className="list learning">
            <h2>Learning</h2>
            <h3>Basics</h3>
            <ul>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Electric_bicycle"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card"
                >
                  <div className="label">What is an ebike?</div>
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Electric_bicycle"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card"
                >
                  <div className="label">In action</div>
                </a>
              </li>
            </ul>
            <h3>Batteries</h3>
            <ul>
              <li>
                <Link to="/do-it-yourself" className="card">
                  {/*<div className="background diy" />*/}
                  <div className="label">Do it yourself</div>
                </Link>
              </li>
              <li>
                <Link to="/already-built" className="card">
                  {/*<div className="background shop" />*/}
                  <div className="label">Already built</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="list make">
            <h2>Do it yourself</h2>
            <h3>Batteries</h3>
            <ul>
              <li>
                <Link to="/do-it-yourself" className="card">
                  {/*<div className="background diy" />*/}
                  <div className="label">Do it yourself</div>
                </Link>
              </li>
              <li>
                <Link to="/already-built" className="card">
                  {/*<div className="background shop" />*/}
                  <div className="label">Already built</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="list buy">
            <h2>Off the shelf</h2>
            <h3>Mountain</h3>
            <ul>
              <li>
                <Link to="/do-it-yourself" className="card">
                  {/*<div className="background diy" />*/}
                  <div className="label">Do it yourself</div>
                </Link>
              </li>
              <li>
                <Link to="/already-built" className="card">
                  {/*<div className="background shop" />*/}
                  <div className="label">Already built</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h2>About EbikeHelper</h2>
          <p />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
