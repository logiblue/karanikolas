import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const Tags = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout title="All Tags">
      <h1>All Tags</h1>

      <ul
        css={
          `
          padding:0;
          `
        }>
        {tags.map((tag) => (
          <li key={tag.fieldValue} className='all-tags-single'

            css={`
            list-style:none;
            padding-left:0;
            `}

          >
            <Link
              css={`
              display:block;
              color:#000;
              font-family:Poppins;
              font-size:20px;
              font-weight:500;
              margin-bottom:30px;
            `}

              to={`/tags/${toKebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
