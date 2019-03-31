import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./router/home";
import About from "./router/about";


function App() {
  return (
    <Router>
      <div>

        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />

      </div>
    </Router>
  );
}

export default App;

 
