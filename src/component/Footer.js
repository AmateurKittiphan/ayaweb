import React, { Component } from "react";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talaphone: "090-3194142",
    };
  }

  render() {
    return (
      <div
        className=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          padding: "1rem",
          textAlign: "center",
          color: "white",
          fontSize: 24,
          backgroundColor: "#fff2",
        }}
      >
        <h5>Contact Tol: {this.state.talaphone}</h5>
      </div>
    );
  }
}

export default Footer;
