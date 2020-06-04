import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Breadcrumb = ({ breadcrumb }) => (        
    <div class="rn-page-title-area pt--120 pb--190 bg_image" style={{backgroundImage: "url(" + (typeof breadcrumb.image == 'string'?breadcrumb.image:breadcrumb.image.childImageSharp.fluid.src) + ")"}} data-black-overlay="5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="rn-page-title text-center pt--100">
                        <h2 class="title theme-gradient">{breadcrumb.heading}</h2>
                        <p>{breadcrumb.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
}

export default Breadcrumb