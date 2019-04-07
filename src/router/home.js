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
  #pg{
    font-size: 20px;
    padding: 15px;
  }
  #plomini{
display: none;
  }

#plo{
margin: 0 auto;
    height: 150px;
    background-image: url(images/logo.png);
    width: 60%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
    #regme{
      margin-top: 20px;
    }
    .ppt{
        margin-top: 50px !important;
    }
    #grn{
      background-color: #B8FF45;
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
        border-bottom: 5px solid;
    margin: 0 18%;
  }
  .pbb{
        margin-bottom: 30px;
    font-family: mor;
    color: #2B315E;
    font-weight: bold !important;
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
    color: #2B315E;
    }
    .sosb {
      width: 100%;
      padding: 0;
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
.text-uppercase-p-i{
    background: url(images/p.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100px;

}


.text-uppercase-p-d{
    background: url(images/w.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100px;

}
.pi{
 background: url(images/p.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 100px;
    display: block;

}
.pw{
 background: url(images/w.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 100px;
    display: block;

}
.pwv{
 background: url(images/wv.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 100px;
    display: block;

}
.text-uppercase-p-g{
    background: url(images/wv.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100px;

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
    @media (max-width: 992px) {
      .site-blocks-cover, .site-blocks-cover .row{
        min-height: 350px;
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
      #lkp{
  padding-bottom: 30px;
    margin-top: 50px;
}
      .h1, h1 {
    font-size: 1.5rem;
}
   #plomini{
display: block;
 position: absolute;
    height: 80px;
    background-image: url(images/logo.png);
    width: 45%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
    #plo{
display: none;
  }
}`
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