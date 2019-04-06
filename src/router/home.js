import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'


class home extends Component {
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
              <h1 className="App">Still Worrking</h1>
      </div>

        );
    }
}
export default home;