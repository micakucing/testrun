import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class foot extends Component {
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

                 <footer className="site-footer border-top">
        <div className="container">
           
            <div id="lok" className="row pt-5 mt-5 text-center">
        <ul className="sosb">
                
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
                <li><span id="pg" className="icon-instagram"></span></li>
              </ul>
                <div className="col-md-12">
  <ul className="sosbs">
                
                <li><span id="pgx" className="pi"></span></li>
                <li><span id="pgx" className="pw"></span></li>
                <li><span id="pgx" className="pwv"></span></li>
              </ul>
          
                   <div className="row" id="krows">

          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"   data-aos-delay="">
            
            <div className="text">
              <div className="text-uppercase-p-i"></div>
              <p></p>
              <div></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"  data-aos-delay="100">
          
            <div className="text"  >
              <div className="text-uppercase-p-d"></div>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"   data-aos-delay="200">
          
            <div className="text"  >
              <div className="text-uppercase-p-g"></div>
              <p></p>
            </div>
          </div>
        </div>
                   <div className="obb"></div>
                </div>
            </div>
        </div>
    </footer>
      </div>

        );
    }
}
export default foot;