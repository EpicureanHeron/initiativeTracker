import React from "react";

import Wrapper from "../components/Wrapper";

import CharCard from "../components/FriendCard"
import API from "../utils/API"


class CharPage extends React.Component {
  state = {
   PCarray: []
  };

  componentDidMount() {
    console.log("mounted!")
    API.getAllCharacter()
    .then(res => this.setState({ PCarray: res.data}))
  }

  initUpdate(id) {
    let init = prompt("Enter init")
    init = parseInt(init)
    let update = {
      currentInitRoll: init
    }
    API.updateInit(id, update)
      .then(res => console.log(res.data))
  }



  initSort(numArray) {

  //  return a.currentInitRoll.localeCompare(b.currentInitRoll);
   let newArray = numArray.sort((a, b) => a.currentInitRoll- b.currentInitRoll);
   console.log(newArray)
  }


  render() {
    return (
    <div>

      <Wrapper>
        <p>This is the battle page</p>
           {(this.state.PCarray).map(item => <CharCard
            initUpdate={this.initUpdate}
            currentInitRoll = {item.currentInitRoll}
            key={item._id}
            dex={item.dex}
            id={item._id}
            name={item.name}
            player={item.player}
            image={item.image} />)}
      </Wrapper>
      <button type="button" onClick={() => this.initSort(this.state.PCarray)} class="btn btn-primary">Primary</button>
    </div>
    )
  }

}

export default CharPage;
