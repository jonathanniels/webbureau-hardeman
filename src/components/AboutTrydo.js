import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const AboutTrydo = ({ about }) => (
    <div class="about-area rn-section-gap bg_color--5" id="about">
        <div class="about-wrapper">
            <div class="container">
                <div class="row row--35 align-items-center">
                    <div class="col-lg-5 col-md-12">
                        <div class="thumbnail">
                            <PreviewCompatibleImage
                                imageInfo={{
                                  image: about.image,
                                  alt: `alt test`,
                                  cssClasses: "w-100"
                                }}
                            />
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="about-inner inner">
                            <div class="section-title">
                                <h2 class="title">{about.heading}</h2>
                                <p class="description">{about.intro}</p>
                            </div>
                            <div class="row mt--30 mt_sm--10">
                                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="about-us-list">
                                        <h3 class="title">{about.headingLeft}</h3>
                                        <p>{about.descriptionLeft}</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="about-us-list">
                                        <h3 class="title">{about.headingRight}</h3>
                                        <p>{about.headingRight}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

AboutTrydo.propTypes = {
  about: PropTypes.shape({
      heading: PropTypes.string,
      intro: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      headingLeft: PropTypes.string,
      descriptionLeft: PropTypes.string,
      headingRight: PropTypes.string,
      descriptionRight: PropTypes.string
  })
}

export default AboutTrydo