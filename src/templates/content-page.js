import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import LayoutTrydo from '../components/LayoutTrydo'
import Breadcrumb from '../components/Breadcrumb'
import ContactTrydo from '../components/ContactTrydo'

export const ContentPageTemplate = ({
    title, breadcrumb, contact
}) => (
    <div>
        <Breadcrumb breadcrumb={breadcrumb} />
        <ContactTrydo contact={contact} />
    </div>
)

ContentPageTemplate.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.object,
  contact: PropTypes.object
}

const ContentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LayoutTrydo>
      <ContentPageTemplate
        title={frontmatter.title}
        breadcrumb={frontmatter.breadcrumb}
        contact={frontmatter.contact}
      />
    </LayoutTrydo>
  )
}

ContentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}

export default ContentPage

export const pageQuery = graphql`
  query ContentPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "content-page" } }) {
      frontmatter {
        title
        breadcrumb {
            heading
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
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
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
      }
    }
  }
`
