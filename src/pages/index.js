import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="max-w-6xl mx-auto">
      <h1>Hello</h1>
      <nav className="flex flex-col my-8 text-3xl  ">
        <Link to="/headers">Headers</Link>
      </nav>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="logo"
      ></StaticImage>
    </section>
  </Layout>
)

export default IndexPage
