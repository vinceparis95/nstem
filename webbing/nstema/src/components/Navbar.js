import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button, Accordion } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar style={{backgroundColor:'rgba(145, 255, 0,0.79)', opacity:'49%',
                        fontFamily:'Titillium Web', fontSize:'19px', width:'360px',
                        margin:'14px', borderRadius:'7px', fontWeight:'bold',
                      color:'white'}}>
            <Navbar.Brand style={{fontSize:'25px', color:'rgb(143, 0, 145)'}} href="/">nStem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color:'rgb(145, 63, 0)'}} href="/Models">models</Nav.Link>
                    <Nav.Link style={{color:'rgb(145, 63, 0)'}} href="/Labs"> labs </Nav.Link>
                    <Nav.Link style={{color:'rgb(145, 63, 0)'}} href="/Wiki">wiki</Nav.Link>
                    <Nav.Link style={{color:'rgb(145, 63, 0)'}} href="/Services">services</Nav.Link>
                    <Accordion style={{margin:'0', transform:'translateX(9px)'}}></Accordion>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);
