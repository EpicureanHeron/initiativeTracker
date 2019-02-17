import React, { Component } from "react";
import API from "../utils/API"

class Home extends Component {

  state = {
    PCarray: [],
    campaignList: []
  };

  componentDidMount() {
    console.log("mounted!")
    let currentCampaignList = this.state.campaignList
    API.getAllCharacter()
    .then(res => this.setState({ PCarray: res.data }))
  }
  render() {
    return (
      <div>
        {(this.state.PCarray).map(item => 
        <p>{item.campaign}</p>)}
      </div>
    );
  }

  // This closes out the Component bracket up top
}

export default Home