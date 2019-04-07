import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class nav extends Component {
    componentDidMount() {}
    render() {
        const cssString = `
.App{
  text-align: center;
}
@media (max-width: 992px) {
 
}`
        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                <header className="site-navbar" role="banner">
            <div className="site-navbar-top">
                <div className="container">
                    <div className="order-3 order-md-3 text-right">
                        <div className="site-top-icons">
                             <ul className="sosb">
                
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
                <li><span id="pg" className="icon-instagram"></span></li>
              </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                        </div>
                        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div id="plo" className="site-logo">
                               
                            </div>
                        </div>
                        <div className="col-12 col-md-4 order-3 order-md-3 text-right">
                            <div id="rel" className="site-top-icons">
                                 <div id="plomini" className="site-logo">
                               
                            </div>
                                <ul>
                                    <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle">



                                      <span className="icon-menu"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="site-navigation text-right text-md-center" role="navigation">
                <div className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                        <li><a href="shop.html">HOME</a></li>
                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">REGISTRATION</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkp">
                        <h1 className="mb-2">CIKOLE FOREST RUN - FUN TRIAL</h1>
                        <div className="intro-text text-center text-md-center">
                                                 <h1 className="mb-2">8 SEPTEMBER, 2019</h1>
                               <p>
                                <a id="regme" href="#" className="btn btn-sm btn-primary">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>

        );
    }
}
export default nav;