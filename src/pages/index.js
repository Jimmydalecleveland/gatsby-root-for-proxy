import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby Root Site</h1>
    <p>This is to test proxies with path prefixes in Gatsby sites</p>

    <h2>
      <Link to="/page-2/">Go to page 2 (belongs to this site)</Link> <br />
    </h2>

    <h2>
      <Link to="/blog/">Go to /blog root</Link>
    </h2>
    <h2>
      <Link to="/blog/page-2">Go to /blog page 2</Link>
    </h2>
    <h2>
      <Link to="/blog/page-2?kbid=7777">
        Go to /blog page 2 with query params
      </Link>
    </h2>
  </Layout>
)

export default IndexPage
