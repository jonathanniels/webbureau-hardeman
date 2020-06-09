import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
        <footer class="footer-area footer-default">
                    <div class="footer-wrapper">
                        <div class="row align-items-end row--0">
                            <div class="col-lg-6">
                                <div class="footer-left">
                                    <div class="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                            <a class="rn-button-style--2" href="#contact">
                                                <span>Contact opnemen</span>
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="footer-right" data-black-overlay="6">
                                    <div class="row">

                                        <div class="col-lg-6 col-sm-6 col-12">
                                            <div class="footer-widget">
                                                <h4>Quick Link</h4>
                                                <ul class="ft-link">
                                                    <li><a href="#portfolio">Work</a></li>
                                                    <li><a href="#about">About</a></li>
                                                    <li><a href="#contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div class="footer-widget">
                                                <h4>Say Hello</h4>
                                                <ul class="ft-link">
                                                    <li><a href="mailto:contact@webbureau-hardeman.nl">contact@webbureau-hardeman.nl</a></li>
                                                </ul>

                                                <div class="social-share-inner">
                                                    <ul class="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {/*<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>*/}
                                                        <li><a href="https://www.linkedin.com/company/webbureau-hardeman/"><i class="fab fa-linkedin-in"></i></a></li>
                                                        {/*<li><a href="#"><i class="fab fa-twitter"></i></a></li>*/}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="copyright-text">
                                                <p>Copyright © 2020 Webbureau Hardeman. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    )
  }
}

export default Footer