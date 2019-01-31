import React, { Component } from "react";
import "./CharForm.css";
import API from "./../../utils/API"


class CharForm extends Component {


  state = {
    name: "",
    dex: "",
    playerImage: "",
    player: "",
    campaign: ""
  };

  handleClick = event => {
    console.log(this.state.name)
   // console.log(this.state.dex)
   // console.log(this.state.playerImage)
   // console.log(this.state.player)

    event.preventDefault()
    let charInfo = {

      name: this.state.name,
      dex: this.state.dex,
      image: this.state.playerImage,
      player: this.state.player,
      campaign: this.state.campaign
    }
    console.log(charInfo)
    API.saveCharacter(charInfo)
    .then(
      res => console.log(res)
     // this.loadArticles()
    )
  }
 


  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  render = props => {
    return (

  <form>
    <div className="form-group">
      
      <input name ="name" value={this.state.name} onChange={this.handleInputChange} type="name" className="form-control custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Character Name" />
      <input name ="dex" value={this.state.dex} onChange={this.handleInputChange} type="dex" className="form-control custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Initiative Bonus" />
      <input name ="playerImage" value={this.state.playerImage} onChange={this.handleInputChange} type="playerImage" className=" custom-form form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="image URL" />
      <input name = "player"  value={this.state.player}  onChange={this.handleInputChange} type="player" className=" custom-form form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Player's name" />
      <input name = "campaign"  value={this.state.campaign}  onChange={this.handleInputChange} type="campaign" className=" custom-form form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Campaign" />
    </div>
   
    <button type="submit"   onClick={this.handleClick}
 className="btn btn-primary">Submit</button>
  </form>
    )
  }
}
  ;

export default CharForm;
