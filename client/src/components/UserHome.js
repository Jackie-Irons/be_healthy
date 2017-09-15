import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class UserHome extends Component{
  render(){
    return (
      <div>
        <h1>Logs</h1>
     <a href="/bloodsugar"><h2>Blood Sugar</h2></a>

        
        <a href="/carbtotal"><h2>Carbohydrate Log</h2></a>
      </div>
    )
  }
}
 















export default UserHome;
