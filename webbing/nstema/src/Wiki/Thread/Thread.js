import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';
import "./Thread.css";

export default class Thread extends Component {
  constructor() {
 super()
 this.state = {
  itemArray: []
 }
}
createProject() {
  const item = this.state.itemArray;
  const title = '';
  const text = '';
  item.push({ title, text })
  this.setState({itemArray: item})
}
render() {
return (
  <div className="thread">

    <button onClick={this.createProject.bind(this)}>New Project</button>
    <div />
    <div>
      {this.state.itemArray.map((item, index) => {
        return (
          <div className="box" key={index}>
              <div>
               <h2>{item.title}</h2>
               <p>{item.text}</p>
             </div>
          </div>
        )
      })}
    </div>
  </div>
    );
  }
}
