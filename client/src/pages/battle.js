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
    .then(res => this.setState({ PCarray: res.data }))
  }

  render() {
    return (
    <div>

      <Wrapper>
        <p>This is the battle page</p>
        {(this.state.PCarray).map(item => <CharCard
            key={item._id}
            dex = {item.dex}
            id={item._id}
            name={item.name}
            player = {item.player}
            image={item.image} />)}
      </Wrapper>
    </div>
    )
  }

}

export default CharPage;
