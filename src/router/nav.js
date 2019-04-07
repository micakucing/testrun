import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import $ from "jquery";
class nav extends Component {
    componentDidMount() {}
    render() {
        const cssString = `
.App{
  text-align: center;
}
.thumb-image{
  max-width: 100%;
    max-height: 100%;
}
@media (max-width: 992px) {
 .btn.btn-primary {
  
    width: 25%;
}
}

`



 let c, homes, abouts, works, shops, kontak, ati;
        c = window.location.hash.substr(2)
        var t = window.location.href
        var o = t.split("/")[4]
     
         
        if (c == "") {
            homes = <a className="activex"><li>&nbsp;&nbsp;Home &nbsp;&nbsp;</li> </a>
        } else {
            homes = <a href="/" id="ppl"><li>&nbsp;&nbsp;Home &nbsp;&nbsp;</li></a>
        }
        if (c == "about") {
            abouts = <a className="activex"><li>&nbsp;&nbsp;About &nbsp;&nbsp;</li> </a>
        } else {
            abouts = <a href="#/about" id="ppl"><li>&nbsp;&nbsp;About &nbsp;&nbsp;</li> </a>
        }
        if (c == "work" || o == "workproduct") {
            works = <a id="aloy" className="activex"><li>&nbsp;&nbsp;Works &nbsp;&nbsp;</li> </a>
        } else {
            works = <a href="#/work" id="ppl"><li>&nbsp;&nbsp;Works &nbsp;&nbsp;</li> </a>
        }

        if (c == "articles" || o == "articles-data") {
            ati = <a className="activex"><li>&nbsp;&nbsp;Articles &nbsp;&nbsp;</li></a>
        } else {
            ati = <a href="#/articles" id="ppl" ><li>&nbsp;&nbsp;Articles &nbsp;&nbsp;</li></a>
        }
        if (c == "contact") {
            kontak = <a className="activex"><li>&nbsp;&nbsp;Contact &nbsp;&nbsp;</li> </a>

        } else {
            kontak = <a href="#/contact" id="ppl"><li>&nbsp;&nbsp;Contact &nbsp;&nbsp;</li></a>


        }






        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
                          <div className="site-wrap">
<div className="site-mobile-menu"> 
    <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">


        </div>
    </div>
    <div className="site-mobile-menu-body">

<ul id="lb">
 <li><a href="#">HOME</a></li>
                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">REGISTRATION</a></li>
                        <li><a href="#">CONTACT</a></li></ul>

    </div>   
</div>
</div>
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
                                    <li className="d-inline-block d-md-none ml-md-0">

                                    <a href="#" className="site-menu-toggle js-menu-toggle">


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
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">REGISTRATION</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkp">
                                                                      <img class="thumb-image loaded"  src="https://static1.squarespace.com/static/5b0ec95b4cde7a026389266e/t/5c6648b008522977bb9f621f/1550207159794/TCSNYM19+1500x277+2019ApplyNow+Bnr%5B2%5D.png?format=1500w" />

                        <div className="intro-text text-center text-md-center">
                               <p>
                                <a id="regme" href="#" className="btn btn-sm btn-primary">DAFTAR</a>
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