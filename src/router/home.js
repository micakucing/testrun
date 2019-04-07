import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import Slid from "./slid";
import Nav from "./nav";
import Mid from "./mid";
import Bot from "./aboutb";
import Fot from "./foot";

class home extends Component {
    componentDidMount() {}
    render() {
        const cssString = `
        #ccl{
              height: 150px;
              overflow: hidden;
        }
  #pg{
       font-size: 18px;
    padding: 8px;
        color: #fff;
  }
 
   
    .ppt{
        margin-top: 50px !important;
    }
    #grn{
      padding: 0;
      /*background-color: #B8FF45;*/
    }
    .text{
      width: 100%;
    }
    .text-uppercase-p{
        font-size: 60px;
    font-family: mor;
    font-style: italic;
    font-weight: bold;
    color: #2B315E;
    }
    #lok{
      padding-top: 0 !important;
      margin-top:  0 !important;
    }
  #ttx h2{
    font-size: 30px;
    font-family: mor;

     font-weight: bold !important;
    color: #2B315E;
  }
  .obb{
        margin: 0 5%;
    font-family: mor;
    color: #fff;
    letter-spacing: .3px;
  }
  #pbb{
       
        font-size: 30px;
    color: #25262a;
    position: relative;
    font-weight: bold;
    font-family: mor;
    text-transform: uppercase;
  }
 
.tight {
   font-size: 25px;
    line-height: 0.5em;
    color: #fff;
    padding: 15px;
    letter-spacing: 1.5px;
    font-family: mor;
    font-weight: bold !important;
    background-color: #2B315E;
}
    #ttx{margin: 0 50px;

    }
    .ops{
          font-family: mol;
       color: #25262a;
    margin: 80px 8%;
    font-weight: 600;
    }
    .sosb {
      width: 100%;
      padding: 0;
          margin-bottom: 25px;
    }
    .sosb li {
      display: inline-block;
    }
      .sosbs {
      width: 100%;
      padding: 0;
    }
    .sosbs li {
      display: inline-block;
    }
#krow{
      margin: 0 50px;
}
#krows{
         margin: 30px 25%;
    margin-right: 29%;
}
#lkp{
  padding-bottom: 30px;
    margin-top: 20px;
}

 
#rel{
  position: relative;
}
    #gls{
          color: #2B315E;
    font-family: mor;
    font-weight: 900;
    letter-spacing: 2px;
    margin-bottom: 50px !important;
    }
    .sosbs{
      display: none;
    }

 #mags{
    max-width: 50%;
 }
    @media (max-width: 992px) {


.site-section-heading.text-center:before {
    
    width: 10%;
  
}

#pbb{
  font-size: 25px;
}


.ops {
   
    margin-top: 100px;
}

        .obb{
       font-size: 10px;
  }
      .tight {
   font-size: 18px;
     
}
      .site-blocks-cover, .site-blocks-cover .row{
        min-height: 200px;
      }
        .sosbs{
        display: block;
    padding-left: 30px;
    padding-right: 10%;
    margin-bottom: 0;
    }
      .sosbs li span {
           width: 80px;
    margin: 20px;
    display: block;
      }
      #krow{
      margin: 0;
}
.obb {
     margin: 0;
}
#krows{
         margin: 0;
    margin-right: 0;
    display: none;
}
  #ttx{margin: 0;

    }
    .site-section {
    padding: 3.5em 0;
}
      #lkp{
    padding-bottom: 30px;
    margin-top: 10%;
    margin-bottom: 10%;
}
      .h1, h1 {
    font-size: 1.5rem;
}
   #mags{
    max-width: 70%;
 }
 
}
@media (max-width: 860px) {

 
}

    @media (max-width: 800px) {


}


`
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
               
  <Nav />
  <Slid />
 <Mid />
  <Bot />
  <Fot />
      </div>

        );
    }
}
export default home;