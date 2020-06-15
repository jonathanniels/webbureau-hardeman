import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import LayoutTrydo from '../components/LayoutTrydo'
import Breadcrumb from '../components/Breadcrumb'
import CallMeBack from '../components/CallMeBack'

export const CallMeBackPageTemplate = ({
    title, breadcrumb, contact
}) => (
    <div>
        <Breadcrumb breadcrumb={breadcrumb} />
        <CallMeBack contact={contact} />
    </div>
)

CallMeBackPageTemplate.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.object,
  contact: PropTypes.object
}

const CallMeBackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LayoutTrydo>
      <CallMeBackPageTemplate
        title={frontmatter.title}
        breadcrumb={frontmatter.breadcrumb}
        contact={frontmatter.contact}
      />
    </LayoutTrydo>
  )
}

CallMeBackPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}

export default CallMeBackPage

export const pageQuery = graphql`
  query CallMeBackPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        breadcrumb {
            heading
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 86) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
        contact {
            heading
            intro
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 86) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
      }
    }
  }
`
