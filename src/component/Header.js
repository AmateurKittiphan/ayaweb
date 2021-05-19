import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="">
        <div
          className="header"
          style={{
            paddingTop: 80,
            paddingBottom: 20,
            textAlign: "center",
            backgroundImage: `url(
              "https://familydoctor.org/wp-content/uploads/2016/11/exercise.jpg"
            )`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontSize: 30,
            color: "white",
          }}
        >
          <img
            style={{ borderRadius: "100%", backgroundColor: "black" }}
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Mini-Robot.png"
            alt="..."
            width="100"
          />

          <h1>Header</h1>
        </div>
      </div>
    );
  }
}

export default Header;
