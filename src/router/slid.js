import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class slid extends Component {
    componentDidMount() {


  let links = ["http://www.def.com"];
        let images = ["https://res.cloudinary.com/forestrun/image/upload/v1554636363/Foto_Forest02.jpg"];
        let i = 0;
        let renew = setInterval(function(){
            if(links.length == i){
                i = 0;
            }
            else {
            document.getElementById("bannerImage").style.backgroundImage = "url("+images[i]+")"; 
            document.getElementById("bannerImage"); 
            i++;

        }
        },1000);

    }
    render() {
    		const cssString = `
#boxed{
    margin: 0 auto;
}
.App{
	text-align: center;
}
 #mags{
    max-width: 50%;
 }
    @media (max-width: 992px) {
   #mags{
    max-width: 70%;
 }

    }
   @media (max-width: 800px) {
  #mags {
        max-width: 80%;
}

}

 `

        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                  <div className="site-blocks-cover" id="bannerImage"  data-aos="fade">
            <div className="container">
                <div id="boxed" className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkp">
                                      <img id="mags" className="thumb-image loaded" src="https://res.cloudinary.com/forestrun/image/upload/v1554635818/A_run_in_nature.png" />


                    </div>
                </div>
            </div>
        </div>
      </div>

        );
    }
}
export default slid;