import React, { Component } from "react";
import "./Map2.css";
import cobbs1 from "./data/cobbs1.json"

class Map2 extends Component  {
  constructor() {
    super();
    const data = cobbs1;
    this.state = data;
  }

  render() {
    return(
    <div >
    <div class="dalalFamily"></div>
    <div class="ziaiFamily"></div>
    <div class="trulearFamily"></div>
    <div class="trulearDawn"></div>
    <div class="jalehnajmiDawn"></div>
    <div class="ethan"></div>
    </div>
  )
  }
}


export default Map2
