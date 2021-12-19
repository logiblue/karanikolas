import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      <div className="container">
        <section className="hero">
          <div className="hero__heading--bold">Hello<span className="hero__heading--bold-dot">.</span></div>
          <h1 className="hero__heading">My name is Konstantinos.</h1>
          <h2 className="hero__heading-secondary">I'm a frontend developer in Greece.   I love crafting websites and help businesses stand on a digital presence.
            This is my public notebook  — a glimpse of my thoughts on a random order.</h2>
        </section>
      </div>
      <div className="container home__blog">
        <ol className="home__blog--list" style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li className="home__blog--single" key={post.fields.slug}>
                <Link className="home__blog--link" to={post.fields.slug} itemProp="url">
                  <article
                    className="home__blog--listitem"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <small className="home__blog--date">{post.frontmatter.date}</small>

                      <h2 className="home__blog--title">
                        <span itemProp="headline">{title}</span>

                      </h2>
                    </header>
                    <section className="home__blog-exc">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
