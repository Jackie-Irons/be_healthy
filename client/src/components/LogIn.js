import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {saveAuthTokens} from '../util'
import styled from "styled-components";



const BackgroundContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/1/FNK_rainbow-spectrum_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386172541852.jpeg");
background-size: cover;
background-position: center;
`
class Background extends Component {
    render() {
        return (
            <BackgroundContainer>

           </BackgroundContainer>

        );
    }
}

class LogIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false
   }
 }
 _signIn = async (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    }
    const response = await axios.post('/auth/sign_in', payload)
    saveAuthTokens(response.headers)
    this.setState({redirect: true})
 }
 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }
 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <form onSubmit={this._signIn}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         
         <button>Log In</button>
       
       </form>
     </div>
   );
 }
}
export default LogIn;




