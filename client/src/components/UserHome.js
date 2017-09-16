import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
const UserHomeContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/1/FNK_rainbow-spectrum_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386172541852.jpeg");
background-size: cover;
background-position: center;
`


class UserHome extends Component{
  render(){
    return (

    	 <div>
    	<UserHomeContainer>

    	</UserHomeContainer>
      
     
        <h1>Logs</h1>
     <a href="/bloodsugar"><h2>Blood Sugar</h2></a>

        
        <a href="/carbtotal"><h2>Carbohydrate Log</h2></a>
      </div>
    )
  }
}
 















export default UserHome;
