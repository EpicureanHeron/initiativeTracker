import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';

import character from "./pages/character";


import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import battle from "./pages/battle"

//import Wrapper from "./components/Wrapper";


import "./App.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const App = () => (
  <Router>
    <div>
      <Navbar />
     
     
        <Route exact path="/character" component={character} />
        {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
       */}
        <Route exact path="/battle" component={battle} />
        <Route exact path="/" component={Home} />
    
   
    </div>
  </Router>
);

export default App;
