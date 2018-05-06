import React from 'react'
import PropTypes from 'prop-types'
import { CMSBlogPostTemplate } from '../../templates/cmsblog-post'


const CMSBlogPostPreview = ({ entry, widgetFor }) => (
  
 <CMSBlogPostTemplate
    
    title={entry.getIn(['data','title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data','thumbnail' ])}
    slug={entry.getIn(['data','slug'])}
    description={entry.getIn(['data','description'])}
    
   
  />
)

CMSBlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CMSBlogPostPreview