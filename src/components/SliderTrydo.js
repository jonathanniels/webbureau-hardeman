import React from 'react'
import PropTypes from 'prop-types'

const SliderTrydo = ({ title, payoff, headerImage }) => (
    <div class="rn-slider-area" id="home">
        <div class="slider-activation">
            <div class="bg_image" style={{backgroundImage: "url(" + (typeof headerImage == 'string'?headerImage:headerImage.childImageSharp.fluid.src) + ")"}} data-black-overlay="6">
                <div class="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner text-center">
                                    <h1 class="title theme-gradient">{title}</h1>
                                    <p class="description">{payoff}</p>
                                    <div class="slide-btn"><a class="rn-button-style--2 btn-primary-color" href="contact.html">Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

SliderTrydo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      payoff: PropTypes.string,
      headerImage: PropTypes.string
    })
  ),
}

export default SliderTrydo