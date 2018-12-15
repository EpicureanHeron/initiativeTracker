import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div>
    {console.log(props.active)}
    {(props.active === true)
    
      ? 

      <div className="activePlayer card" data-id={props.id} onClick={() => props.initUpdate(props.id)} >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <p>{props.name}</p>
        <p>Current Init Roll {props.currentInitRoll}</p>
        <p>Dex: {props.dex}</p>
        <p>Calculate init roll: {props.currentInitRoll + props.dex}</p>
        <p>Status: {props.status.toString()}</p>
        <p>active boy</p>
      </div>

      : 
      
      <div className="card" data-id={props.id} onClick={() => props.initUpdate(props.id)} >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <p>{props.name}</p>
        <p>Current Init Roll {props.currentInitRoll}</p>
        <p>Dex: {props.dex}</p>
        <p>Calculate init roll: {props.currentInitRoll + props.dex}</p>
        <p>Status: {props.status.toString()}</p>
      </div>
    }


  </div>
);

export default FriendCard;
