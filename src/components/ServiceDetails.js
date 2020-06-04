import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ServiceDetails = ({ serviceDetails }) => (
    <div class="rn-service-details rn-section-gap bg_color--1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-details-inner">
                        <div class="inner">
                            <div class="row sercice-details-content pb--80 align-items-center">
                                <div class="col-lg-6 col-12">
                                    <div class="thumb">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                            image: serviceDetails.image1,
                                            cssClasses: "w-100"
                                            }}
                                        />                                    
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <div class="details mt_md--30 mt_sm--30">
                                        {serviceDetails.text1}
                                    </div>
                                </div>
                            </div>

                            <div class="row sercice-details-content align-items-center">
                                <div class="col-lg-6 col-12 order-2 order-lg-1">
                                    <div class="details mt_md--30 mt_sm--30">
                                        {serviceDetails.text2}
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12 order-1 order-lg-2">
                                    <div class="thumb position-relative">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                            image: serviceDetails.image2,
                                            cssClasses: "w-100"
                                            }}
                                        />  
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

ServiceDetails.propTypes = {
    serviceDetails: PropTypes.shape({
      text1: PropTypes.string,
      image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text2: PropTypes.string,
      image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
}

export default ServiceDetails