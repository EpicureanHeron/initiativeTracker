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
        <p><strong>{props.name}</strong></p>
        <p>Last Init Roll: {props.currentInitRoll}</p>
        <p>Dex: {props.dex}</p>
        <p>Calculated Init Roll: {props.currentInitRoll + props.dex}</p>
     
     
      </div>

      : 
      
      <div className="card" data-id={props.id} onClick={() => props.initUpdate(props.id)} >
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
        <p><strong>{props.name}</strong></p>
        <p>Last Init Roll: {props.currentInitRoll}</p>
        <p>Dex: {props.dex}</p>
        <p>Calculated Init Roll: {props.currentInitRoll + props.dex}</p>
        
      </div>
    }


  </div>
);

export default FriendCard;
