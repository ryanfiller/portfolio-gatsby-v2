import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Markdown from '../components/layout/markdown'
import Meta from '../components/content/meta'


export const query = graphql`
  query BlogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        meta {
          date(formatString: "MMMM DD, YYYY")
          excerpt
          categories
          tags
        }
      }
      excerpt
      body
    }
  }
`

const BlogPost = (props) => {
  const {
    frontmatter,
    body
  } = props.data.mdx

  return (
    <main className='blog-post'>
      <header style={{textAlign: 'center', margin: '3rem 1rem'}}>
        <h1>{frontmatter.title}</h1>
        <Meta date={frontmatter.meta.date} />
      </header>
      <br />
      <Markdown post={body} />
    </main>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        meta: PropTypes.shape({
          date: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default BlogPost