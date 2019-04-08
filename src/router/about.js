import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "./nav";
import Infor from "./info";
import Fot from "./foot";

class about extends Component {
    componentDidMount() {}
    render() {
        return (

            <div>

              <Nav />
               <Infor />
                   <Fot />
      </div>

        );
    }
}
export default about;