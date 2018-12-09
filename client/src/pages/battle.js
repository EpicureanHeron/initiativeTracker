import React from "react";

import Wrapper from "../components/Wrapper";
import Button from "../components/Button"
import CharCard from "../components/FriendCard"
import API from "../utils/API"


class BattlePage extends React.Component {
  state = {
    PCarray: [],
    counter: 0,
    alivePlayers: [],
  };

  componentDidMount() {
  //  console.log("mounted!")
    this.getCharacters()
    
  }

  getCharacters() {
   // console.log("Get Chars triggered")
    API.getAllCharacter()
      .then(res => this.setState({ alivePlayers: res.data.filter(player => player.status === true) }))
     
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
//incorparted the below in getcharacters function, 
  lifeFilter() {
   
    const filteredArray = this.state.PCarray.filter(player => player.status === true)
    this.setState({ alivePlayers: filteredArray })

  }


  initSort(numArray) {

    //  return a.currentInitRoll.localeCompare(b.currentInitRoll);
    let sortedArr = numArray.sort((a, b) => (b.currentInitRoll + b.dex) - (a.currentInitRoll + a.dex));
    this.setState({ PCarray: sortedArr })

  }

  updateTurn() {
    let increasedCounter = this.state.counter += 1
    this.setState({ counter: increasedCounter })
    console.log(this.state.counter)
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

 

  addMonsterToArray() {
    //basic JSON passed and put into the array is rendered. 

    //Would like to use an outside API to get the image

    //currentInitRoll is the only one that will be fillable by end user, buit dex must be there just so the friendcard and sort works properly


    let newMonster = {
      name: "Dragon",
      dex: 0,
      currentInitRoll: 0,
      image: "https://www.aidedd.org/dnd/images/dragonBlack.jpg",
      player: "NPC",
      status: true,
    }
    let newArray = this.state.PCarray
    newArray.push(newMonster)
    this.setState({ PCarray: newArray })

    console.log(this.state.PCarray)
  }


  render() {
    return (
      <div>
        <p>Round Number: {this.state.counter}</p>
        {/* <Button
         function = {this.updateTurn} 
        name = "Sort"></Button> */}
        {/* custombtn class is in the button component */}
        <button type="button" onClick={() => this.initSort(this.state.alivePlayers)} class="btn btn-primary custom-btn">Sort!</button>
        <button type="button" onClick={() => this.updateTurn()} class="btn btn-primary custom-btn">Next Turn</button>
        <button type="button" onClick={() => this.addMonsterToArray()} class="btn btn-primary custom-btn">Add a Monster</button>
        <button type="button" onClick={() => this.lifeFilter()} class="btn btn-primary custom-btn">Log Players ALive</button>
        <div>
          <Wrapper>
            <p>This is the battle page</p>
            {(this.state.alivePlayers).map(item => <CharCard
              initUpdate={this.initUpdate}
              
              currentInitRoll={item.currentInitRoll}
              key={item._id}
              dex={item.dex}
              id={item._id}
              name={item.name}
              player={item.player}
              status={item.status}
              image={item.image} />)}
          </Wrapper>
        </div>

        <div>


        </div>
      </div>
    )
  }

}

export default BattlePage;
