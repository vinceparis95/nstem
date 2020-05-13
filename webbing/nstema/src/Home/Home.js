import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>nStem</h1>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Models')}>models</Button>
          </form>
        </div>
      </div>
    );
  }
}
