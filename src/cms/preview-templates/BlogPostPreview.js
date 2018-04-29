import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'


const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    slug={entry.getIn(['data', 'slug' ])}
    helmet={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data',"date"])}
    
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ]),
        date: entry.getIn(['data', 'date']),


      }
      

      }}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview