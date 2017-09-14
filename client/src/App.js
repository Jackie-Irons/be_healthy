import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import User from "./components/User";
import GlobalNav from "./components/GlobalNav";



class App extends Component {
    
  render() {
    return (
      
         <Router>
        <div>
          <GlobalNav />
          <Route path="/" component={HomePage}/>
          <Route path="/user/:id" component={User}/>
        </div>
      </Router>
    );
  }
}


export default App;
