import React, { Component } from "react";
import axios from "axios";

export default class DogsPage extends Component {
  state = {
    dogs: []
  };

  componentDidMount = () => {
    let dogName = this.props.match.params.dogName;
    let dogsName = dogName
      .split(" ")
      .reverse()
      .join(" ")
      .replace(" ", "/");

    console.log(
      dogName
        .split(" ")
        .reverse()
        .join(" ")
        .replace(" ", "/")
    );

    axios
      .get(`https://dog.ceo/api/breed/${dogsName}/images/random`)
      .then(response => {
        console.log(response);

        this.setState({ dogs: response.data.message });
        console.log(this.state.dogs);
      });
  };

  render() {
    return (
      <div>
        <img src={this.state.dogs} />
      </div>
    );
  }
}
