import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <form>

          <div>
            <Button style={{transform:'translateY(45px)'}} class="btn btn-btn btn-success" variant="btn btn-success"
            onClick={() => history.push('/Models')}>models</Button>
          </div>

                    <br></br><br></br>

          <div style={{margin:'9px'}}>
            <Button class="btn btn-btn " variant="btn btn-success"
            onClick={() => history.push('/Labs2')}>labs</Button>
          </div>

          </form>
        </div>
      </div>
    );
  }
}
