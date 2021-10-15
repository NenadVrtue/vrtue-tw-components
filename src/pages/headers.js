import React from "react"
import Header1 from "../components/header1"
import Header2 from "../components/header2"
import Header3 from "../components/header3"
import Layout from "../components/layout"

const Headers = () => {
  return (
    <Layout>
      <h2 className="text-black text-2xl text-center mb-6">Header1</h2>
      <Header1></Header1>
      <h2 className="text-black text-2xl text-center mt-20 mb-6">Header2</h2>
      <Header2></Header2>
      <h2 className="text-black text-2xl text-center mt-20 mb-6">Header3</h2>
      <Header3></Header3>
    </Layout>
  )
}

export default Headers
