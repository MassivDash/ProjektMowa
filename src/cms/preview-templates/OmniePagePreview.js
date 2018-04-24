import React from 'react'
import PropTypes from 'prop-types'
import { OmniePageTemplate } from '../../templates/omnie-page'
import '../../layouts/all.sass'

const OmniePagePreview = ({ entry, widgetFor }) => (
  <OmniePageTemplate
  title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    slug={entry.getIn(['fields', 'slug'])}
    description={entry.getIn(['data', 'description'])}
    helmet={entry.getIn(['data', 'title'])}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        tags: entry.getIn(['data', 'tags']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ])  
      }
      

      }}
  />
)


OmniePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OmniePagePreview
