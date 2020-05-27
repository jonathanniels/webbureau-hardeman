import React from 'react'
import { Link } from 'gatsby'

const NavbarTrydo = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    render() {
        return (
            <header class="header-area formobile-menu header--transparent black-logo-version header--sticky">
                <div class="header-wrapper" id="header-wrapper">
                    <div class="header-left">
                        <div class="logo">
                            <a href="/">
                                <img src="/assets/images/logo/logo.png" alt="Webbureau Hardeman" />
                            </a>
                        </div>
                    </div>
                    <div class="header-right">
                        <nav class="mainmenunav d-lg-block navbar-example2">
                            <ul class="mainmenu nav nav-pills">
                                <li class="nav-item"><a class="nav-link smoth-animation active" href="/#home">Home</a></li>
                                <li class="nav-item"><a class="nav-link smoth-animation" href="/#service">Service</a></li>
                                <li class="nav-item"><a class="nav-link smoth-animation" href="/#about">About</a></li>
                                <li class="nav-item"><a class="nav-link smoth-animation" href="/#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <div class="humberger-menu d-block d-lg-none pl--20">
                            <span class="menutrigger text-white">
                                <i data-feather="menu"></i>
                            </span>
                        </div>

                        <div class="close-menu d-block d-lg-none">
                            <span class="closeTrigger">
                                <i data-feather="x"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavbarTrydo