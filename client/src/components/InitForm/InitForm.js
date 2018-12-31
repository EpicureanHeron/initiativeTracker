import React, { Component } from "react";
import "./InitForm.css";
import API from "./../../utils/API"

const InitForm  = props => (




      <div>
        {console.log(props)}
        {console.log("THIS IS THE INIT PAGE WAKKA WAKKA")}
          <div>

            <p>{props.name}</p>

            {/* <input name ="name" value={this.state.name} onChange={this.handleInputChange} type="name" className="form-control custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.name}  /> */}
            <input id={props._id}></input>

          </div>

    
      </div>
    )
  


export default InitForm;
