import React, { Component } from "react";

class Home extends Component {


    componentDidMount() {
        console.log("contact")
      }

      render() {
        return (
          <div>
            <h1 className="text-center">Home page</h1>
          </div>
        );
      }

// This closes out the Component bracket up top
}

export default Home