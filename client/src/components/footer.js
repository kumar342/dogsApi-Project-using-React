import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark bg-secondary sticky-bottom"
          style={{ margin: "10px ", color: "#fff", justifyContent: "center" }}
        >
          <p>
            {" "}
            Developed by {""}
            <a className="navbar-brand"> Hemanth Kumar</a>
            {/* <br /> */}
          </p>
        </nav>
      </div>
    );
  }
}
