import React, { Component } from 'react';
import { Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import './Labs.css'
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';




class Labs extends Component {
    render() {
        return (
          // accordion of booklets
            <div style={{ width: '108px', borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
            padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>


                <Accordion style={{margin:'0', transform:''}}>
                  <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>


                    <Card.Header style={{width:'90px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0"
                      style={{fontSize: '27px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                      Labs
                      </Accordion.Toggle>
                    </Card.Header>


                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Accordion style={{margin:'0', transform:''}}>
                        <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
                          <Card.Header style={{width:'140px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0"
                            style={{fontSize: '19px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                                Data Science
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Button onClick={() => history.push('/DS')}
                            style={{fontSize:'12px', width:'90px' ,margin:'0px', whiteSpace: 'initial',transform:'translateX(-19px)',
                          backgroundColor:'rgba(145, 255, 0,0.79)',color:'rgb(143, 0, 145)'}}
                            >Python</Button>
                            </Card.Body>
                          </Accordion.Collapse>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Button onClick={() => history.push('/DS')}
                            style={{fontSize:'12px', width:'90px' ,margin:'0px', whiteSpace: 'initial',transform:'translateX(-19px)',
                          backgroundColor:'rgba(145, 255, 0,0.79)',color:'rgb(143, 0, 145)'}}
                            >Pandas
                            </Button>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>

                      </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Accordion style={{margin:'0', transform:''}}>
                        <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
                          <Card.Header style={{width:'210px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0"
                            style={{fontSize: '19px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                          Quantum Computing
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Button onClick={() => history.push('/DS')}
                            style={{fontSize:'12px', width:'190px' ,margin:'0px', whiteSpace: 'initial',transform:'translateX(-19px)',
                          backgroundColor:'rgba(145, 255, 0,0.79)',color:'rgb(143, 0, 145)'}}
                            >Qubits
                            </Button>

                            </Card.Body>
                          </Accordion.Collapse>

                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Button onClick={() => history.push('/DS')}
                            style={{fontSize:'12px', width:'190px' ,margin:'0px', whiteSpace: 'initial',transform:'translateX(-19px)',
                          backgroundColor:'rgba(145, 255, 0,0.79)',color:'rgb(143, 0, 145)'}}
                            >Primitives
                            <img class="v2" src={v2}/></Button>
                            </Card.Body>
                          </Accordion.Collapse>

                        </Card>
                      </Accordion>

                      </Card.Body>
                    </Accordion.Collapse>

                  </Card>
                </Accordion>

            </div>
        );
    }
}

export default Labs;
