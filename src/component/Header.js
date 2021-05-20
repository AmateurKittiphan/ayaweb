import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProfile:
        "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/128912808_2785553355106647_4528299021663621621_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEhZ0MsLBC39EYz7SFtcjXKBIkaEEkpBRAEiRoQSSkFEDxpN3k54KgU-9rfPE2cSbQqjE0Zc76YteO8EcTkIBeg&_nc_ohc=b8xtZogoSj8AX85SN-G&_nc_oc=AQnx14cXyN79BxjK6_XYDUU1TuK63_YB9RQG2YyzyqqKKpXKTmXK1OsTvBqX-1tkVek&_nc_ht=scontent.fbkk2-7.fna&oh=43dc3f6eb48a00a5cf802363a73f0d68&oe=60C9C523",
      name: "Aya Uliwan",
    };
  }

  render() {
    return (
      <div className="">
        <div
          className="header"
          style={{
            paddingTop: 80,
            paddingBottom: 20,
            textAlign: "center",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontSize: 30,
            color: "white",
          }}
        >
          <img
            style={{
              borderRadius: "100%",
              backgroundColor: "black",
              marginBottom: 25,
            }}
            src={this.state.imageProfile}
            alt="..."
            width="150"
          />

          <h1>{this.state.name}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
