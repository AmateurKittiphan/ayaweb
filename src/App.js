import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listmenu from "../src/component/Listmenu";
import Header from "../src/component/Header";
import Footer from "./component/Footer";

export class App extends Component {
  render() {
    return (
      <Router>
        <div
          className=""
          style={{
            margin: 0,
            flex: "colum",
            position: "relative",
            paddingBottom: 0,
            minHeight: "100vh",
            overflowX: "hidden",
            width: "100%",
            height: "100%",
            backgroundColor: "#90d0e6",
          }}
        >
          <Header />
          <Listmenu />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
