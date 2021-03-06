import React from 'react'
import PropTypes from 'prop-types'
import { LandingCreativePageTemplate } from '../../templates/landing-creative'

const LandingCreativePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryServices = entry.getIn(['data', 'services'])
  const services = entryServices ? entryServices.toJS() : []

  const entryAbout = entry.getIn(['data', 'about'])
  const about = entryAbout ? entryAbout.toJS() : {}

  const entryContact = entry.getIn(['data', 'contact'])
  const contact = entryContact ? entryContact.toJS() : {}

  if (data) {
    return (
      <LandingCreativePageTemplate
        title={data.title}
        payoff={data.payoff}
        headerImage={data.headerImage}
        services={services}
        about={about}
        contact={contact}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

LandingCreativePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LandingCreativePagePreview