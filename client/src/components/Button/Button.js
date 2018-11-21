import React from "react";
import "./Button.css";

const Button = props => <button type="button" onClick={() => props.function()} class="btn btn-primary">{props.name}</button>;

export default Button;
