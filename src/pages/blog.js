import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"


import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <Seo title="All posts" />
                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the
                    directory you specified for the "gatsby-source-filesystem" plugin in
                    gatsby-config.js).
                </p>
            </Layout>
        )
    }

    return (
        <Layout className="blog-page" location={location} title={siteTitle}>
            <Seo title="All posts" />
            <div className="blog-page">
                <div className="container">
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug

                        return (
                            <div key={post.fields.slug}>
                                <div
                                    className="post-list-item"
                                    itemScope
                                    itemType="http://schema.org/div"
                                >


                                    <Link className="post-list-item-container" to={post.fields.slug} itemProp="url">
                                        <span className="post-list-item-title" itemProp="headline">{title}</span>
                                        <small className="post-list-item-date">{post.frontmatter.date}</small>

                                        <div className="post-list-item-excerpt">
                                            <p className="post-list-item-excerpt-p"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.frontmatter.description || post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>{/* Content-Part */}

        </Layout>
    )
}

export default BlogPage

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
