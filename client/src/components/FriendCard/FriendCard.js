import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" data-id={props.id}  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <p>{props.name}</p>
    <p>Dex: {props.dex}</p>
   
  </div>
);

export default FriendCard;
