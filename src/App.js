import React, { Component } from 'react';
import { browserHistory } from 'react-router'; // importing from 'react-router'

import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./router/home";
import About from "./router/about";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
      <div>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />

      </div>
    </Router>
  );
}

export default App;

 
