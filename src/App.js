import React, { Component } from "react";
import Listmenu from "../src/component/Listmenu";
import Header from "../src/component/Header";
import Footer from "./component/Footer";

export class App extends Component {
  render() {
    return (
      <div
        className=""
        style={{
          position: "relative",
          paddingBottom: 0,
          minHeight: "100vh",
          overflowX: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="col-12 "
          style={{
            position: "relative",
            paddingBottom: 0,
            minHeight: "100vh",
            overflowX: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="row-10">
            <Header />
            <Listmenu />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
