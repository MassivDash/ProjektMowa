import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'


const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
const data = entry.get('data').toJS();
const { content, description, tags, title, thumbnail, slug, helmet, date, postNode, OtherPosts } = data;
  
  return <BlogPostTemplate
    content={content}
    description={description}
    tags={tags}
    title={title}
    thumbnail={thumbnail}
    slug={slug}
    helmet={helmet}
    date={date}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'descriptio']),
        title: entry.getIn(['data, title']),
        thumbnail: entry.getIn(['data', 'thumbnail']),
        date: entry.getIn(['data', 'date'])
      }
    }}
    
    
    />;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview