import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import BloodSugar from "./components/BloodSugar";
import CarbTotal from "./components/CarbTotal";
import GlobalNav from "./components/GlobalNav";
import EditBsLog from "./components/EditBsLog";
import styled from "styled-components";
import {setAxiosDefaults} from "./util";

class App extends Component {
   componentWillMount(){
    setAxiosDefaults()
   } 
  render() {
    return (
      
         <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/userhome" component={UserHome}/>
          <Route path="/bloodsugar" component={BloodSugar} />
          <Route path="/carbtotal" component={CarbTotal} />
          <Route path="/editbslog" component={CarbTotal} />
        </div>
      </Router>
    );
  }
}


export default App;
