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
                <h2 className="pbb">ABOUT</h2>
                 
                <p className="ops">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
    </div>
      </div>

        );
    }
}
export default botb;