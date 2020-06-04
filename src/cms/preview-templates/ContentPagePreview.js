import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryBreadcrumb = entry.getIn(['data', 'breadcrumb'])
  const breadcrumb = entryBreadcrumb ? entryBreadcrumb.toJS() : {}
 
  const entryServiceDetails = entry.getIn(['data', 'serviceDetails'])
  const serviceDetails = entryServiceDetails ? entryServiceDetails.toJS() : {}

  const entryContact = entry.getIn(['data', 'contact'])
  const contact = entryContact ? entryContact.toJS() : {}

  if (data) {
    return (
      <ContentPageTemplate
        title={data.title}
        breadcrumb={breadcrumb}
        serviceDetails={serviceDetails}
        contact={contact}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview