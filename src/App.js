import React, { Component } from 'react';

import { Switch,HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./router/home";
import About from "./router/about";


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
 <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
 </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

 
