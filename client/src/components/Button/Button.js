import React from "react";
import "./Button.css";

const Button = props => <button type="button" onClick={() => props.function()} className="btn btn-primary custom-btn">{props.name}</button>;

export default Button;
