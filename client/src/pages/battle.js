import React from "react";

import Wrapper from "../components/Wrapper";
import Button from "../components/Button"
import CharCard from "../components/FriendCard"
import API from "../utils/API"


class BattlePage extends React.Component {

  state = {
    PCarray: [],
    turnCounter: 0,
    roundCounter: 0,
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
    // sets the 0th index to be active after sorting
    this.state.alivePlayers[0].active = true 

  }

  updateTurn() {

    let newAlivePlayers = this.state.alivePlayers

    newAlivePlayers[this.state.turnCounter].active = false 
    
    let increasedCounter;

    //resets turn to the beginning of the order 
    if(this.state.turnCounter >=  this.state.alivePlayers.length - 1) {
      let increasedTurn = this.state.turnCounter + 1
      this.setState({turnCounter : increasedTurn})
      increasedCounter = 0
      this.setState({ turnCounter : increasedCounter })
    }
    //moves to the next player
    else {
      increasedCounter = this.state.turnCounter += 1
      this.setState({ counter: increasedCounter })
    }
    
   

    

    //hopefully changes who is active
    newAlivePlayers[increasedCounter].active = true
    this.setState({ alivePlayers: newAlivePlayers })
    
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

    var monsterInit = prompt("Enter Init", "0");

    monsterInit = parseInt(monsterInit)
    let newMonster = {
      name: "Dragon",
      dex: 0,
      currentInitRoll: monsterInit,
      active: false,
      image: "https://www.aidedd.org/dnd/images/dragonBlack.jpg",
      player: "NPC",
      status: true,
    }

    let newArray = this.state.alivePlayers
    newArray.push(newMonster)
    this.setState({ alivePlayers: newArray })

    console.log(this.state.PCarray)
  }


  render() {
    return (
      <div>
        <p>Round: {this.state.roundCounter + 1} </p>
        <p>Turn: {this.state.turnCounter +  1}</p>
        {/* <Button
         function = {this.updateTurn} 
        name = "Sort"></Button> */}
        {/* custombtn class is in the button component */}
        <button type="button" onClick={() => this.initSort(this.state.alivePlayers)} class="btn btn-primary custom-btn">Sort!</button>
        <button type="button" onClick={() => this.updateTurn()} class="btn btn-primary custom-btn">Next Turn</button>
        <button type="button" onClick={() => this.addMonsterToArray()} class="btn btn-primary custom-btn">Add a Monster</button>

        <div>
          <Wrapper>
            
            {(this.state.alivePlayers).map(item => <CharCard
              initUpdate={this.initUpdate} 
              currentInitRoll={item.currentInitRoll}
              key={item._id}
              active={item.active}
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
