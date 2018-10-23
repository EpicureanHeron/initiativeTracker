import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";


import "./App.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const App = () => (
  <Router>
    <div>
      <Navbar />
     
      <Wrapper>
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
       */}
        <Route exact path="/" component={Home} />
      </Wrapper>
   
    </div>
  </Router>
);

export default App;
