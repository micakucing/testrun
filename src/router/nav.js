import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import $ from "jquery";
import { Fade, Stagger } from 'react-animation-components'

class nav extends Component {
    componentDidMount() {


        $('#ccl > div').hide(); // hide all slides
        $('#ccl > div:first-child').show(); // show first slide
        let time = 5000;
        this.interval = setInterval(function() {
                let slidea = $('#ccl  > div:first-child');
                let slideb = slidea.next();
                let width = $('#ccl > div:first-child').width();
                $('#ccl > div:first-child').addClass("ignoresize").fadeOut(time).next().fadeIn(300).end().appendTo("#ccl");
            },
            time + 5000);


        $('#ggb > div').hide(); // hide all slides
        $('#ggb > div:first-child').show(); // show first slide
        let times = 5000;
        this.intervals = setInterval(function() {
                let slideas = $('#ggb  > div:first-child');
                let slidebs = slideas.next();
                let widths = $('#ggb > div:first-child').width();
                $('#ggb > div:first-child').addClass("ignoresize").fadeOut(times).next().fadeIn(300).end().appendTo("#ggb");
            },
            time + 5000);



    }


    componentWillUnmount() {
        clearInterval(this.interval)
        clearInterval(this.intervals)
    }


    render() {
        const cssString = `
         #plomini{
display: none;
  }
  #ploxmini{
display: none;
  }
   #regme{
      margin-top: 20px;

    }
#plo{
margin: 0 auto;
    height: 150px;
    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);
    width: 60%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
#plox{
margin: 0 auto;
    height: 150px;
    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}
        #gh{
          margin-bottom: 30px;
        }
.App{
  text-align: center;
}
.thumb-image{
  max-width: 100%;
    max-height: 100%;
}
#ggb{
      width: 90%;
    overflow: hidden;
    height: 80px;
    position: absolute;
}
  #lkps{
    padding-bottom: 39px;
        margin-top: 20px;
}
a.clik{
  color: #c2ff19 !important; 
}
.site-mobile-menu-body ul {
  padding-left: 0;
  list-style: none;
}
.site-mobile-menu-body ul li {
 padding-bottom: 15px;
}

.site-mobile-menu-body ul li a{
  font-size: 20px;
  color: #fff;
  font-family: mor;

}
@media (max-width: 992px) {
 .btn.btn-primary {
  
    width: 25%;
}

      #lkps{
    padding-bottom: 30px;
    margin-top: 10%;
    margin-bottom: 1%;
}

}

@media (max-width: 860px) {

 
}

    @media (max-width: 800px) {

#plo{
     height: 150px;
   
    width: 100%;
    }
#plox{
     height: 150px;
     width: 100%;
    
}





 #plomini{
display: block;
    height: 80px;
     background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);
    width: 35%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #mags {
    max-width: 60%;
}
     #ploxmini{
display: block;
    height: 80px;
       background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);

     width: 65%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #ccl{
    display: none;
  }
    #plo{
  }
display: none;
  }

}

}

`








        let c, homes, abouts, works, shops, kontak, ati;
        c = window.location.hash.substr(2)
        var t = window.location.href
        var o = t.split("/")[4]
 
        if (c == "") {
            homes =  <li><a className="clik">HOME</a></li>
        } else {
            homes = <li><a  href="#/">HOME</a></li>
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


                      
                        {homes}


                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">REGISTRATION</a></li>
                        <li><a href="#">CONTACT</a></li></ul>

    </div>   
</div>
</div>
                <header className="site-navbar" role="banner">
            <div className="site-navbar-top">
                <div  className="container">
                    <div className="order-3 order-md-3 text-right">
                        <div className="site-top-icons">
                             <ul className="sosb">
                
                <li><span id="pg" className="icon-instagram"></span></li>
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
              </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                        </div>
                        <div id="ccl" className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div id="plo" className="site-logo">
                               
                            </div>
                               <div id="plox" className="site-logo">
                               
                            </div>
                        </div>
                        <div className="col-12 col-md-4 order-3 order-md-3 text-right">
                            <div id="rel" className="site-top-icons">
                            <div id="ggb">
                                 <div id="plomini" className="site-logo">
                               
                            </div>
                              <div id="ploxmini" className="site-logo">
                               
                            </div>
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
                <div id="gh" className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                       
 {homes}
                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">REGISTRATION</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkps">
  <img class="thumb-image loaded"  src="https://res.cloudinary.com/forestrun/image/upload/f_auto/v1554636128/t.png" />

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