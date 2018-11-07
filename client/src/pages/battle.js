import React from "react";

import Wrapper from "../components/Wrapper";

import CharCard from "../components/FriendCard"
import API from "../utils/API"


class CharPage extends React.Component {
  state = {
    PCarray: [],
    counter: 0
  };

  componentDidMount() {
    console.log("mounted!")
    this.getCharacters()
  }

  getCharacters() {
    console.log("Get Chars triggered")
    API.getAllCharacter()
      .then(res => this.setState({ PCarray: res.data }))
  }

  initUpdate(id) {
    let init = prompt("Enter init")
    init = parseInt(init)
    let update = {
      currentInitRoll: init
    }
    //this needs to work better
    API.updateInit(id, update)
      .then(res => console.log(res.data))
    this.getCharacters()
  }



  initSort(numArray) {

    //  return a.currentInitRoll.localeCompare(b.currentInitRoll);
    let sortedArr = numArray.sort((a, b) => (b.currentInitRoll + b.dex) - (a.currentInitRoll + a.dex));
    this.setState({ PCarray: sortedArr })

  }

  updateTurn() {
    let increasedCounter = this.state.counter += 1
    this.setState({counter: increasedCounter})
    console.log(this.state.counter)
  }


  render() {
    return (
      <div>
      <p>{this.state.counter}</p>
        <Wrapper>
          <p>This is the battle page</p>
          {(this.state.PCarray).map(item => <CharCard
            initUpdate={this.initUpdate}
            
            currentInitRoll={item.currentInitRoll}
            key={item._id}
            dex={item.dex}
            id={item._id}
            name={item.name}
            player={item.player}
            image={item.image} />)}
        </Wrapper>
        <div>
          <button type="button" onClick={() => this.initSort(this.state.PCarray)} class="btn btn-primary">Sort!</button>
          <button type="button" onClick={() =>this.updateTurn()} class="btn btn-primary">Next Turn</button>
        </div>
      </div>
    )
  }

}

export default CharPage;
