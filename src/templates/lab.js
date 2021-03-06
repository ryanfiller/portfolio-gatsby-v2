import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Markdown from '../components/layout/markdown'

export const query = graphql`
  query LabPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        contentType
      }
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

const LabPost = (props) => {
  const {
    frontmatter,
    body
  } = props.data.mdx

  return (
    <main className='lab-post'>
      <Markdown post={body} />
    </main>
  )
}

LabPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default LabPost
