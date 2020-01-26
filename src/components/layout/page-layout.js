import React from 'react'
import PropTypes from 'prop-types'

import SEO from '../seo'
import Header from './header'
import '../layout.css'

import '../../styles/globals.module.scss'

const PageLayout = (props) => {
  const {
    frontmatter: {
      title,
      options: {
        hideSiteHeader = false
      } = {}
    }
  } = props.data.mdx

  return (
    <>
      <SEO {...title} />
      <div id='site'>
        {!hideSiteHeader && <Header title='ryanfiller.com' />}
        <main
          id='content'
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px var(--padding) 1.45rem',
          }}
        >
          {props.children}
        </main>
      </div>
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        options: PropTypes.shape({
          hideSiteHeader: PropTypes.bool
        })
      }).isRequired
    }).isRequired
  }).isRequired
}

export default PageLayout
