import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class  mid extends Component {
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

                <div className="site-section block-8" id="grn">
            <div className="container">
              
                <div className="col-lg-12 text-center pl-md-5">
                                           <h1 className="mb-2" id="gls">PREPARE YOURSELF!</h1>
   <div className="row" id="krow">
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            
            <div className="text">
              <h2 className="text-uppercase-p">6.5k</h2>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
          
            <div className="text" id="ttx">
              <h2 className="text-uppercase">FINISHER MEDAL</h2>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
          
            <div className="text" id="ttx">
              <h2 className="text-uppercase">JERSEY</h2>
              <p></p>
            </div>
          </div>
        </div>
                    
                    <p className="ppt"><span className="tight">7 - 8 SEPTEMBER, 2019</span></p>
                </div>
            </div>
        </div>
 
      </div>

        );
    }
}
export default mid;