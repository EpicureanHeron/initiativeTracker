import React, { Component } from "react";
import "./InitForm.css";
import API from "./../../utils/API"



class InitForm extends Component {


  state = {
   initRoll: '',
   name: ''
  };

  


  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  render = props => {
    return (
      
      <div>
        <p>{props.name}</p>
      <input name ="name" value={this.state.name} onChange={this.handleInputChange} type="name" className="form-control custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.name}  />

      </div>
     
      
     

 
    )
  }
}
  ;


export default InitForm;
