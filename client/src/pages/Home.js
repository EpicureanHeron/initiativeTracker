import React, { Component } from "react";
import API from "../utils/API"

class Home extends Component {

  state = {
    PCarray: [],
    campaignList: []
  };

  componentDidMount() {
    console.log("mounted!")

    API.getAllCharacter()
      .then(res => this.setState({ PCarray: res.data }))
  }
  render() {
    return (
      <div>
        {(this.state.PCarray).map(item => {
          console.log("triggered")
          
          if (!this.state.campaignList.includes(item.campaign)) {
            {console.log(item.campaign)}
            let newList = this.state.campaignList
            newList.push(item.campaign)
            this.setState({ campaignList: newList })
          }
        }
        )
        }
      </div>
    );
  }

  // This closes out the Component bracket up top
}

export default Home