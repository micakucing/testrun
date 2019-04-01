import React, { Component } from 'react';

import { Switch,HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./router/home";
import Notfound from "./router/not";


function App() {
  return (
    <HashRouter>
      <div>
 <Switch>
        <Route path="/" exact component={Index} />
        <Route component={Notfound} />
 </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

 
