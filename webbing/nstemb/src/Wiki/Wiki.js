import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Wiki.css";

export default class Wiki extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>wiki</h1>
          <form>
            <Button  onClick={() => history.push('Thread')}>threads</Button>
          </form>
        </div>
      </div>
    );
  }
}
