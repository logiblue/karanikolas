import * as React from "react"
import { Link, graphql } from "gatsby"
import TagDecorator from "../components/tagDeco"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ToC from "../components/toc";


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.markdownRemark
  tags.toString();
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post container"
        itemScope
        itemType="http://schema.org/Article"
      >

        <header>
          <p>{post.frontmatter.date}</p>
          <h1 className="blog-post__title" itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        {tags.length &&
          <div style={{ fontWeight: 'bold' }}>
            <p>Tags: {tags.map((tag, i, arr) => (<>
              <TagDecorator tag={tag} />
              <span>
                {arr.length === i + 1 ? `` : `, `}
              </span>
            </>))} </p>
          </div>
        }
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="blog-post__articleBody"
        />


        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav container">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        tags
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        tags
      }
    }
  }
`
