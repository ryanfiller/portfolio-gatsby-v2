import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Image from '../markdown/image'
import { H1, H2, H3, H4, H5, H6 } from '../markdown/headings'

const components = {
  img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
}

const Markdown = (props) => {
  return (
    <MDXProvider components={components}>
      <article className={props.className}>
        <MDXRenderer>
          {props.post}
        </MDXRenderer>
      </article>
    </MDXProvider>
  )
}

Markdown.propTypes = {
  className: PropTypes.string,
  post: PropTypes.string.isRequired
}

export default Markdown
