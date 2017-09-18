import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
const HomePageContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/1/FNK_rainbow-spectrum_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386172541852.jpeg");
background-size: cover;
background-position: center;
`
const HomePageStyles = styled.div`
  width: 30%;
  padding: 10px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  h3{
    padding: 5px 0;
  }
`;


class HomePage extends Component {
    render() {
        return (
            <div>
            <HomePageContainer>
          
            <a href="/userhome">Click To Go To User Home</a>
            
           </HomePageContainer>
           </div>

           

        );
    }
}

export default HomePage;