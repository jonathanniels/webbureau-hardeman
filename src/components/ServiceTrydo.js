import React from 'react'
import * as Icon from 'react-feather'
import PropTypes from 'prop-types'

const ServiceTrydo = ({ services }) => {

    return (
    <div class="rn-service-area rn-section-gap bg_color--1" id="service">
        <div class="container">
            <div class="row mt_dec--30">
                {services.map((service) => { 
                    const ServiceIcon = Icon[service.icon] || Icon["Info"];
                    return (
                    <div key={service.icon} class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                        <div class="single-service service__style--2 bg-color-gray">
                            <a href={service.link}>
                                <div class="service">
                                    <div class="icon">
                                        <ServiceIcon />
                                    </div>
                                    <div class="content">
                                        <h3 class="title">{service.heading}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    </div>
)}

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