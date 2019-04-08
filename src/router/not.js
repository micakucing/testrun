import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class not extends Component {
  componentDidMount() {


  let c = window.location.hash.substr(2)
   let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if(format.test(c)){
window.location.href="/testrun/#/"
//window.location.href="/"
return
}else{


}
    }
    render() {
       let c = window.location.hash.substr(2)
   let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if(format.test(c)){
window.location.href="/testrun/#/"
//window.location.href="/"
return
}else{


}
    		const cssString = `
.App{
	text-align: center;
}
@media (max-width: 992px) {
 
}`
        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

               <h1 className="App">Sorry page not found</h1>
      </div>

        );
    }
}
export default not;