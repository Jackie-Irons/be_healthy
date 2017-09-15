import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class CarbTotal extends Component{
  constructor(){
   super();
   this.state = {
   	intake: {
   	carbohydrates:'',
   	insulin: '',
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

        const res = await axios.post('/api/carbtotal', payload)
        this.setState({redirect: true});
    }
 
    render() {
        return (
       <div>     
         <form>
         <div>
           <label htmlFor="carbs">Carb total: </label>
           <input onChange={this._handleChange} type="text" name="carbohydrates" value={this.state.carbohydrates} />
         </div>


         <div>
           <label htmlFor="insulin">Insulin with meal: </label>
           <input onChange={this._handleChange} type="text" name="insulin" value={this.state.insulin} />
         </div>

         <button>Enter Numbers</button>
         
       </form>
</div>
        );
    }
}
   

export default CarbTotal;
