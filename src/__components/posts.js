import React from 'react'
import PropTypes from 'prop-types'

import PostPreview from './content/post-preview'

const Posts = (props) => {
  return (
    <section style={{ clear: 'both', lineHeight: '1.5' }}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 2rem 0' }}>
        {props.posts.map((post, index) => (
          <li key={index} style={{ marginBottom: '2rem' }}>
            <PostPreview {...post} />
          </li>
        ))}
      </ul>
    </section>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
