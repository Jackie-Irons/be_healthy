import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


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
