import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string';

class botb extends Component {
    componentDidMount() {}
    render() {
    	
      const cssString = ``
        return (

            <div>
              <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
                   <div className="site-section block-8">
        <div className="container">
           
            <div className="col-lg-12 text-center pl-md-5">
               <h2 id="pbb" className="text-black h1 site-section-heading text-center">About</h2>
                 
                <p className="ops">
Cikole Forest Run adalah rangkaian sport tourism dan wisata alam yang diselenggarakan oleh Wievent yang bekerjasama dengan perum Perhutani Divre Jabar Banten. Kegiatan yang terdiri dari camping ground, olahraga lari marathon, dan edukasi akan hutan Cikole, serta manfaat ekologi masyarakat dalam pemanfaatan dan pelestarian alam hutan di Cikole, Lembang.
                </p>

            </div>
        </div>
    </div>
      </div>

        );
    }
}
export default botb;