import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import User from "./components/User";
import BloodSugar from "./components/BloodSugar";
import CarbTotal from "./components/CarbTotal";
import GlobalNav from "./components/GlobalNav";
import styled from "styled-components";


class App extends Component {
    
  render() {
    return (
      
         <Router>
        <div>
          <GlobalNav />
          <Route path="/" component={HomePage}/>
          <Route path="/" component={SignUp} />
          <Route path="/user/" component={User}/>
          <Route path="/" component={BloodSugar} />
          <Route path="/" component={CarbTotal} />
        </div>
      </Router>
    );
  }
}


export default App;
