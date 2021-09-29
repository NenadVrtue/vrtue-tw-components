import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="max-w-6xl mx-auto">
      <h1>Hello</h1>
      <nav className="flex flex-col my-8 text-3xl  ">
        <Link to="/headers">Headers</Link>
      </nav>
    </section>
  </Layout>
)

export default IndexPage
