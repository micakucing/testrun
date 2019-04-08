import React, { Component } from 'react';
import { Switch, HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./router/home";
import Notfound from "./router/not";
import Info from "./router/about";


function App() {
    return (
        <HashRouter>
    
      <div>
 <Switch>
        <Route path="/" exact component={Index} />
                <Route path="/information" component={Info} />
           <Route path="/information:id" component={Info} />
         <Route component={Notfound} />

 </Switch>
      </div>
    </HashRouter>
    );
}

export default App;