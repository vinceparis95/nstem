import React, { Component } from 'react';
import "./Models.css";
import map2 from "./vectors/map2.svg"
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';

class Models extends Component {
    render() {
        return (
            <div style={{justifyContent: 'left', padding: 30 }}>
                <div><h1 class="area">repos</h1></div>

                <h1 class="area" style={{width:'180px',justifyContent: 'left'}}>
                  <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                  cluster </Nav.Link></h1>

                <div>
                  <h2 class="area">
                    <Nav.Link style={{color:'rgb(145, 63, 0)',justifyContent: 'right'}} href="/Maps">
                    animap</Nav.Link>
                  </h2>

                </div>

              </div>
        );
    }
}

export default Models;
