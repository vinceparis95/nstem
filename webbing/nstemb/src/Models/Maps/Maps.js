import React, { Component } from "react";
import "./Maps.css";
import df3 from "./data/df3.json"
import sample from "./data/sample.json"


class Maps extends Component {
  constructor() {
    super();
    const data = df3;
    this.state = data
  }

  render()
  {
    console.log(this.state)
    var df4 = df3["Devotions"]
    var d1 = '';
    const list = df4.map(e =><div class={e.class}>{e.value}</div>)
    for (var key in df4)
    {
       var host = df4[key];
       d1 += '<div class="'+key+'" value="'+host[0]+'"/>';
    }

    console.log(d1)

    return (

      <div id="Maps">
      <ul >{list}</ul>
     </div>

    )
  }
}

export default Maps
