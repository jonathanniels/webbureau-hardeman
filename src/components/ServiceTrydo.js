import React from 'react'
import PropTypes from 'prop-types'

const ServiceTrydo = ({ services }) => (
    <div class="rn-service-area rn-section-gap bg_color--1" id="service">
        <div class="container">
            <div class="row mt_dec--30">
                {services.map((service) => (
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                        <div class="single-service service__style--2 bg-color-gray">
                            <a href={service.link}>
                                <div class="service">
                                    <div class="icon">
                                        <i data-feather={service.icon}></i>
                                    </div>
                                    <div class="content">
                                        <h3 class="title">{service.heading}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

ServiceTrydo.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      link: PropTypes.string
    })
  ),
}

export default ServiceTrydo