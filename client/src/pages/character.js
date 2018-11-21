import React from "react";
import Wrapper from "../components/Wrapper";
import CharForm from "../components/CharForm";
import CharCard from "../components/FriendCard"
import API from "../utils/API"


class CharPage extends React.Component {
  state = {
    PCarray: []
  };

  componentDidMount() {
    console.log("mounted!")
    API.getAllCharacter()
      .then(res => this.setState({ PCarray: res.data }))
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



  render() {
    return (
      <div>
        <CharForm />
        <Wrapper> 
          {/* should use a .filter function to map ONLY player characters */}
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
      </div>
    )
  }

}

export default CharPage;
