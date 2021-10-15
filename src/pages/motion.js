import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const MotionPage = () => (
  <Layout>
    <SEO title="Motion" />
    <section className="max-w-6xl mx-auto">
      <h1>Motion</h1>
      <nav className="flex flex-col my-8 text-3xl  ">
        <Link to="/">Home</Link>
        <Link to="/headers">Headers</Link>
      </nav>

      <motion.div
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "50%", "50%", "20%"],
        }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="w-20 px-4 py-2  bg-gray-500  items-center justify-items-center"
      >
        motion
      </motion.div>
    </section>
  </Layout>
)

export default MotionPage
