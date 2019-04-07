import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class slid extends Component {
    componentDidMount() {
         
    }
    render() {
    		const cssString = `
.App{
	text-align: center;
}
@media (max-width: 992px) {
 
}`

  var links = ["http://www.abc.com","http://www.def.com"];
        var images = ["https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://www.forestryengland.uk/sites/default/files/styles/forest_slide_wide_desk/public/media/woodland3.jpg?h=78566fdd&itok=HXeDhGX0"];
        var i = 0;
        var renew = setInterval(function(){
            if(links.length == i){
                i = 0;
            }
            else {
            document.getElementById("bannerImage").style.backgroundImage = "url("+images[i]+")"; 
            document.getElementById("bannerImage"); 
            i++;

        }
        },1000);
        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                  <div className="site-blocks-cover" id="bannerImage"  data-aos="fade">
            <div className="container">
                <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkp">
                        <h1 className="mb-2">A run in nature,</h1>
                                               <h1 className="mb-2">run the soul back home.</h1>

                    </div>
                </div>
            </div>
        </div>
      </div>

        );
    }
}
export default slid;