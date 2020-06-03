import React, { Component } from 'react';
import "./Models.css";
import map2 from "./vectors/map2.svg"
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';


export default class Models extends Component {
  render() {
    return (

      <div class="modelbox">

      <div class="Thread" style={{  borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
      padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>
          <Accordion style={{margin:'0', transform:'',textDecoration:'none'}}>
            <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
              <Card.Header style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                padding:'0px',textDecoration:'none'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0"
                 style={{fontSize: '27px', margin:'0px',textDecoration:'none',
                 color:'rgb(143, 0, 145)'}}>
                 mL</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </div>

      <div class="Thread" style={{  borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>
          <Accordion style={{margin:'0', transform:'',textDecoration:'none'}}>
            <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
              <Card.Header style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                padding:'0px',textDecoration:'none'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0"
                 style={{fontSize: '27px', margin:'0px',textDecoration:'none',
                 color:'rgb(143, 0, 145)'}}>
                 art
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>
                  <Card style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                  border:'none', textDecoration:'none'}}>
                    <Card.Header style={{float:'left', backgroundColor:'rgba(145, 255, 0,0.79)', height:'60px', width:'90px',
                    padding:'5px',margin:'9px',fontSize:'19px',textDecoration:'none', borderRadius:"19px"}}>
                    <p class="area" style={{position:'absolute'}}>
                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/Maps">
                      animap1 </Nav.Link></p>
                    </Card.Header>
                    <br/><br/>
                    <Card.Header style={{float:'left', backgroundColor:'rgba(145, 255, 0,0.79)', height:'60px', width:'90px',
                    padding:'5px',margin:'9px',fontSize:'19px',textDecoration:'none', borderRadius:"19px"}}>
                    <p class="area" style={{position:'absolute'}}>
                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/Map2">
                      animap2 </Nav.Link></p>
                    </Card.Header>
                    <br/><br/>
                  </Card>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </div>

      <div class="Thread" style={{  borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
      padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>
          <Accordion style={{margin:'0', transform:'',textDecoration:'none'}}>
            <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
              <Card.Header style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                padding:'0px',textDecoration:'none'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0"
                 style={{fontSize: '27px', margin:'0px',textDecoration:'none',
                 color:'rgb(143, 0, 145)'}}>
                 quantum
                 </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>
                  <Card style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                  border:'none', textDecoration:'none'}}>
                    <Card.Header style={{float:'left', backgroundColor:'rgba(145, 255, 0,0.79)', height:'60px',
                    width:'140px',padding:'5px',margin:'9px',fontSize:'19px',textDecoration:'none', borderRadius:"19px"}}>
                    <p class="area" style={{position:'absolute'}}>
                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/Beat2">
                      melody1 </Nav.Link></p>
                    </Card.Header>
                  </Card>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>
                  <Card style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                  border:'none', textDecoration:'none'}}>
                    <Card.Header style={{float:'left', backgroundColor:'rgba(145, 255, 0,0.79)', height:'60px',
                    width:'140px',padding:'5px',margin:'9px',fontSize:'19px',textDecoration:'none', borderRadius:"19px"}}>
                    <p class="area" style={{position:'absolute'}}>
                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/Beat3">
                      beat1</Nav.Link></p>
                    </Card.Header>
                  </Card>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </div>

      </div>


    );
  }
}
