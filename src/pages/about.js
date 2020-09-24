import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
