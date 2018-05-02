import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'




const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
const data = entry.get('data').toJS();
const { content, description, tags, title, thumbnail, slug, helmet, date, postNode } = data;


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
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data, title']),
        thumbnail: entry.getIn(['data', 'thumbnail']),
        date: entry.getIn(['data', 'date'])
      }
    }}
    OtherPosts={
      edges: [
        {node: {
      children: [],
      excerpt: entry.getIn(['data, excerpt']),
      fields: {
        slug: entry.getIn(['data, slug'])
      }, 
      frontmatter: {
        title: entry.getIn(['data, title']),
        thumbnail: entry.getIn(['data, thumbnail']),
        description: entry.getIn(['data, description']),
        templateKey: "blog-post",
        date: entry.getIn(['data, date'])
      }
    } 
    
    }]
    }
    
    />;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview