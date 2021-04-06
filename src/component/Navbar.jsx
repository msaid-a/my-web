import React, { Component } from 'react'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export class Navbar extends Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu" id="mainNav">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <a className="navbar-brand logo_h" href="index.html">
                                <h3>M S Arrafi</h3></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav  ml-auto">
                                    <li className="nav-item">
                                    <a href="">
                                <Link 
                                activeClass="active" 
                                className="nav-link" 
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                onSetActive={this.handleSetActive}>
                                    Home 
                                    </Link>
                                    </a>
                                    </li>
                                    <li className="nav-item"> 
                                    <a href="">
                                    <Link 
                                activeClass="active" 
                                className="nav-link" 
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                onSetActive={this.handleSetActive}>
                                    About 
                                    </Link>
                                    </a>
                                    </li>
                                    <li className="nav-item"> 
                                    <a href="">
                                    <Link 
                                activeClass="active" 
                                className="nav-link" 
                                to="achievment" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                onSetActive={this.handleSetActive}>
                                    Achievment 
                                    </Link>
                                    </a>
                                    </li>
                                    <li className="nav-item"> 
                                    <a href="">
                                    <Link 
                                activeClass="active" 
                                className="nav-link" 
                                to="portofolio" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                onSetActive={this.handleSetActive}>
                                    Portofolio 
                                    </Link>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="">
                                    <Link 
                                activeClass="active" 
                                className="nav-link" 
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                onSetActive={this.handleSetActive}>
                                    Contact 
                                    </Link>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}

export default Navbar
