import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import LayoutTrydo from '../components/LayoutTrydo'
import SliderTrydo from '../components/SliderTrydo'
import ServiceTrydo from '../components/ServiceTrydo'
import AboutTrydo from '../components/AboutTrydo'
import ContactTrydo from '../components/ContactTrydo'

export const LandingCreativePageTemplate = ({
    title, payoff, headerImage, services, about, contact
}) => (
    <div>
        <SliderTrydo
            title={title}
            payoff={payoff}
            headerImage={headerImage}
        />
        <ServiceTrydo services={services} />
        <AboutTrydo about={about} />
        <ContactTrydo contact={contact} />
    </div>
)

LandingCreativePageTemplate.propTypes = {
  title: PropTypes.string,
  payoff: PropTypes.string,
  headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  services: PropTypes.array,
  about: PropTypes.object,
  contact: PropTypes.object
}

const LandingCreativePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LayoutTrydo>
      <LandingCreativePageTemplate
        title={frontmatter.title}
        payoff={frontmatter.payoff}
        headerImage={frontmatter.headerImage}
        services={frontmatter.services}
        about={frontmatter.about}
        contact={frontmatter.contact}
      />
    </LayoutTrydo>
  )
}

LandingCreativePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LandingCreativePage

export const pageQuery = graphql`
  query LandingCreativePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-creative" } }) {
      frontmatter {
        title
        payoff
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services {
            heading
            description
            icon
            link
        }
        about {
            heading
            intro
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            headingLeft
            descriptionLeft
            headingRight
            descriptionRight
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
