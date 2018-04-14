import React from 'react'
import PropTypes from 'prop-types'
import { ProjektPostTemplate } from '../../templates/projekt-post'

const ProjektPostPreview = ({ entry, widgetFor }) => (
  <ProjektPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProjektPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjektPostPreview