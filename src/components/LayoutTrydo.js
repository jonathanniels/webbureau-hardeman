import React from 'react'
import { Helmet } from 'react-helmet'

import NavbarTrydo from '../components/NavbarTrydo'
import FooterTrydo from '../components/FooterTrydo'

//import './all.sass'
import '../../static/assets/css/style.min.css'
import '../../static/assets/css/plugins/plugins.min.css'
import '../../static/assets/css/vendor/bootstrap.min.css'
import '../../static/assets/css/vendor/fontawesome.css'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>

        <html class="no-js" lang="en" />
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />

        <body class="position-relative spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="150" />
      </Helmet>
        <div class="main-page">
            <NavbarTrydo />
            <main class="page-wrapper">{children}</main>
            <FooterTrydo />
        </div>

        <script src="/assets/js/vendor/modernizr.min.js"></script>
        <script src="/assets/js/vendor/jquery.js"></script>
        <script src="/assets/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/js/vendor/stellar.js"></script>
        <script src="/assets/js/vendor/particles.js"></script>
        <script src="/assets/js/vendor/masonry.js"></script>
        <script src="/assets/js/vendor/stickysidebar.js"></script>
        <script src="/assets/js/vendor/contactform.js"></script>
        <script src="/assets/js/plugins/plugins.min.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/ga.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67989015-2"></script>
    </div>
  )
}

export default TemplateWrapper