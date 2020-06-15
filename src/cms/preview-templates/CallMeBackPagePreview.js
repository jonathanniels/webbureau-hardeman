import React from 'react'
import PropTypes from 'prop-types'
import { CallMeBackPageTemplate } from '../../templates/callmeback'

const CallMeBackPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryBreadcrumb = entry.getIn(['data', 'breadcrumb'])
  const breadcrumb = entryBreadcrumb ? entryBreadcrumb.toJS() : {}
 
  const entryContact = entry.getIn(['data', 'contact'])
  const contact = entryContact ? entryContact.toJS() : {}

  if (data) {
    return (
      <CallMeBackPageTemplate
        title={data.title}
        breadcrumb={breadcrumb}
        contact={contact}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CallMeBackPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CallMeBackPagePreview