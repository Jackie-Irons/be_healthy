import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
const BloodSugarContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/1/FNK_rainbow-spectrum_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386172541852.jpeg");
background-size: cover;
background-position: center;
`


class BloodSugar extends Component{
  constructor(){
   super();
   this.state = {
   	intake: {
   	bloodsugar:'',
   	twohourslater: '',
   	redirect: false
   	}
   }
}

   _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState({
   		intake: newState
   });
}

 _addbloodsugar = async (e) => {
 	 e.preventDefault();
        const payload = this.state.intake

        const res = await axios.post('/api/bloodsugars', payload)
        this.setState({redirect: true});
    }
 
    render() {
        return (
       <div>  

       <BloodSugarContainer>

       </BloodSugarContainer>

         <form>
         <div>
           <label htmlFor="bloodsugar">Blood_Sugar: </label>
           <input onChange={this._handleChange} type="text" name="bloodSugar" value={this.state.bloodSugar} />
         </div>


         <div>
           <label htmlFor="twohourslater">2nd Blood_Sugar: </label>
           <input onChange={this._handleChange} type="text" name="twohourslater" value={this.state.twohourslater} />
         </div>

         <button>Enter Glucose</button>

         
       </form>
</div>
        );
    }
}
   

export default BloodSugar;
