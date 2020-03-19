import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default class dashboard extends Component {
  state = {
    data: [],
    Value: ""
  };

  componentDidMount() {
    this.getDogsapi();
  }

  getDogsapi = () => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
        // console.log(JSON.stringify(res.data.message));

        //transform

        const a = Object.entries(res.data.message)
          .map(k => (k[1].length ? k[1].map(i => i + " " + k[0]) : k[0]))
          .flat();
        console.log(a);

        this.setState({ data: a });
        // console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeApi = e => {
    e.preventDefault();
    let value = e.target.value;
    console.log(value);
    this.setState({ Value: value });
  };

  render() {
    if (this.state.Value) {
      return <Redirect to={`/dogsPage/${this.state.Value}`} />;
    }
    return (
      <form>
        <ul>
          {this.state.data.map(i => {
            return (
              <li>
                <hr />
                <button onClick={this.onChangeApi} value={i} id={i}>
                  {i}
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}
