import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ContactTrydo = ({ contact }) => (
    <div class="rn-contact-area rn-section-gap bg_color--5" id="contact">
        <div class="contact-form--1">
            <div class="container">
                <div class="row row--35 align-items-start">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
                            <h2 class="title">{contact.heading}</h2>
                            <p class="description">{contact.intro}</p>
                        </div>
                        <div class="form-wrapper">
                            <form name="contact2" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                              <input type="hidden" name="form-name" value="contact2" />
                              <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                              </p>
                                <label>
                                    <input type="text" name="name" id="item01" placeholder="Uw naam *" />
                                </label>

                                <label>
                                    <input type="text" name="email" id="item02" placeholder="Uw E-mailadres *" />
                                </label>

                                <label>
                                    <input type="text" name="subject" id="item03" placeholder="Onderwerp" />
                                </label>
                                <label>
                                    <textarea id="item04" name="message" placeholder="Uw vraag"></textarea>
                                </label>
                                <button class="rn-button-style--2 btn_solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Verstuur</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <div class="thumbnail mb_md--40 mb_sm--40">
                            <PreviewCompatibleImage
                                imageInfo={{
                                  image: contact.image,
                                  alt: `Contact`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

ContactTrydo.propTypes = {
  contact: PropTypes.shape({
      heading: PropTypes.string,
      intro: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
}

export default ContactTrydo