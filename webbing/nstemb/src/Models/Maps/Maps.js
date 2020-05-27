import React, { Component } from "react";
import "./Maps.css";
import df3 from "./data/df3.json"
import sample from "./data/sample.json"


class Maps extends Component {
  constructor() {
    super();
    const data = df3;
    this.state = data;
  }
  renderDiv = () => {
    var df4 = df3["Devotions"];
    console.log(df4);
    return df4.map(v => {
      return Object.keys(v).map(host => {
        return (
          <div>
            <div
              className={host}
              style={{
                fontFamily: "Djakarta",
                color: "rgba(143, 0, 145,0.6)",
                margin: "0px",
                fontSize: "9px"
              }}
            >
            {host}
              {Object.keys(v[host]).map((x, i) => (
                <div
                  key={i}
                  className={`d${i + 1}`}
                  style={{
                    borderRadius: "50%",
                    transition: 'transform 0.5s',
                    transform: `scale(${v[host][x]},${v[host][x]}) `
                  }}
                >
                </div>
              ))}
            </div>
          </div>
        );
      });
    });
  };

  render() {
    return <div id="animap">{this.renderDiv()}</div>;
  }
}


export default Maps
